import Head from 'next/head'
import {useEffect, useState} from "react";

import Navbar from "../components/Navbar";
import Navbar_store from "../components/Navbar_store"
import BigShowcase from "../components/Landing/BigShowcase";
import BrowseIncentive from "../components/Landing/BrowseIncentive";
import Spotlight from "../components/Landing/Spotlight";
import ProductList from "../components/Landing/ProductList";

export default function Home() {
    const [getCart, setCart] = useState(null)
    useEffect(() => {
        var id = localStorage.getItem("cart_id");

        if (id) {
            fetch(`http://localhost:9000/store/carts/${id}`, {
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => setCart(cart.items.length))
        }
        if (!id) {
            fetch(`http://localhost:9000/store/carts`, {
                method: "POST",
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => {
                    localStorage.setItem("cart_id", cart.id);
                    setCart(cart.items.length);
                })
        }
    })
    return (
        <div>
            <Head>
                <title>Steam Remake</title>
                <meta name="description" content="Made using Next & Medusa!"/>
            </Head>
            <Navbar/>
            <Navbar_store items={getCart}/>
            <BigShowcase/>
            <BrowseIncentive/>
            <Spotlight/>
            <div style={{background: 'linear-gradient( to bottom, rgba(42,71,94,1.0) 5%, rgba(42,71,94,0.0) 70%)', borderTopLeftRadius: '6px', borderTopRightRadius: '6px'}}>
                <ProductList/>
            </div>
            <div style={{marginBottom: '1%'}}/>
        </div>
    )
}