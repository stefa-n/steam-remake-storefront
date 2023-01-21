import Head from 'next/head'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import Navbar from "../components/Navbar";
import Navbar_store from "../components/Navbar_store"
import Title from "../components/Product/Title"
import Thumbnail from "../components/Product/Thumbnail"
import AddToCart from "../components/Product/AddToCart";

export default function Product() {
    const router = useRouter()
    const [getProdTitle, setProdTitle] = useState('Placeholder')
    const [getProdDescription, setProdDescription] = useState('Placeholder')
    const [getProdVariant, setProdVariant] = useState('Placeholder')
    const [getProdPrice, setProdPrice] = useState('Placeholder')
    const [getProdPriceCurrency, setProdPriceCurrency] = useState('Placeholder')
    const [getProdThumbnail, setProdThumbnail] = useState('')
    const [getCartId, setCartId] = useState(null)
    const [getCart, setCart] = useState(null)

    useEffect(() => {
        if (!router.query.id) {
            router.push('/404')
        }
        if (router.query.id) {
            fetch(`http://localhost:9000/store/products/${router.query.id}`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then((obj) => {
                    if (!obj.product) return router.push('/404')

                    setProdTitle(obj.product.title);
                    setProdDescription(obj.product.description);
                    setProdVariant(obj.product.variants[0].id);
                    setProdPrice(obj.product.variants[0].prices[0].amount);
                    setProdPriceCurrency(obj.product.variants[0].prices[0].currency_code);
                    setProdThumbnail(obj.product.thumbnail);
                })

            var id = localStorage.getItem("cart_id");

            if (id) {
                fetch(`http://localhost:9000/store/carts/${id}`, {
                    credentials: "include",
                })
                    .then((response) => response.json())
                    .then(({cart}) => {
                        setCart(cart['items']['length'])
                        setCartId(cart.id)
                    })
            }
            if (!id) {
                fetch(`http://localhost:9000/store/carts`, {
                    method: "POST",
                    credentials: "include",
                })
                    .then((response) => response.json())
                    .then(({cart}) => {
                        localStorage.setItem("cart_id", cart['id']);
                        setCart(cart['items']['length']);
                        setCartId(cart.id)
                    })
            }
        }
    }, [router.query.id])

    return (
        <div>
            <Head>
                <title>Steam Remake - {getProdTitle}</title>
                <meta name="description" content="Made using Next & Medusa!"/>
            </Head>
            <Navbar/>
            <Navbar_store items={getCart}/>
            <Title title={getProdTitle} description={getProdDescription}/>
            <Thumbnail url={getProdThumbnail}/>
            <AddToCart cart={getCartId} id={getProdVariant} name={getProdTitle} price={getProdPrice} currency={getProdPriceCurrency}/>
            <div style={{marginBottom: '2%'}}/>
        </div>
    )
}

