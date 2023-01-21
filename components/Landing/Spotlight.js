import Link from "next/link";
import {useEffect, useState} from "react";

export default function Spotlight() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/store/products?limit=3")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);

    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <div style={{width: "940px"}}>
                <h2 style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: '"Motiva Sans", Sans-serif',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                }}>New 🌟</h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", justifyContent: 'center', gap: "8px"}}>
                    {products.map((product) => (
                        <Link key={product.id} href={`/product?id=${product.id}`}>
                            <div key={product.id} style={{
                            height: "350px",
                            backgroundImage: `url(${product.thumbnail}`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center center'
                        }}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
