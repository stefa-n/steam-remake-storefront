import Head from 'next/head'
import Image from 'next/image'

import BigShowcase from "../components/BigShowcase";
import Navbar from "../components/Navbar";
import Navbar_store from "../components/Navbar_store"
import SpecialOffers from "../components/SpecialOffers";
import BrowseIncentive from "../components/BrowseIncentive";

import Medusa from "@medusajs/medusa-js"
const medusa = new Medusa({
    maxRetries: 3,
    baseUrl: "http://localhost:9000"
})

export default function Home() {
    return (
        <div>
            <Head>
                <title>Steam Remake</title>
                <meta name="description" content="Made using Next & Medusa!"/>
            </Head>
            <Navbar/>
            <Navbar_store/>
            <BigShowcase/>
            <SpecialOffers/>
            <BrowseIncentive/>
        </div>
    )
}
