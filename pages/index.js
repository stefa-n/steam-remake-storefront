import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from "react";

import BigShowcase from "../components/BigShowcase";
import Navbar from "../components/Navbar";
import Navbar_store from "../components/Navbar_store"
import Spotlight from "../components/Spotlight";
import BrowseIncentive from "../components/BrowseIncentive";

export default function Home() {
    const [getCart, setCart] = useState(null)
    useEffect(() => {
        var id = localStorage.getItem("cart_id");
        if (id) {
            setCart(id);
        }
        if (!id) {
            fetch(`http://localhost:9000/store/carts`, {
                method: "POST",
                credentials: "include",
            })
                .then((response) => response.json())
                .then(({cart}) => {
                    localStorage.setItem("cart_id", cart['id']);
                    setCart(cart['id']);
                })
        }
        id = getCart;
    })
    return (
        <div>
            <Head>
                <title>Steam Remake</title>
                <meta name="description" content="Made using Next & Medusa!"/>
            </Head>
            <Navbar/>
            <Navbar_store/>
            <BigShowcase/>
            <Spotlight/>
            <BrowseIncentive/>
        </div>
    )
}
