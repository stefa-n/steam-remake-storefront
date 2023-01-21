import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from "react";

import BigShowcase from "../components/Landing/BigShowcase";
import Navbar from "../components/Navbar";
import Navbar_store from "../components/Navbar_store"
import Spotlight from "../components/Landing/Spotlight";
import BrowseIncentive from "../components/Landing/BrowseIncentive";

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
            <div style={{marginBottom: '1%'}}/>
        </div>
    )
}
