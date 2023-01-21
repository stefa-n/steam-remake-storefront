import Image from 'next/image';
import Link from "next/link";
import {useEffect, useState} from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/store/products")
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
                }}>Product List</h2>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "8px"
                }}>
                    {products.map((product) => (
                        <Link key={product.id} href={`/product?id=${product.id}`}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '940px',
                                height: '69px',
                                position: 'relative',
                                background: 'rgba(0, 0, 0, 0.2)'
                            }}>
                                <Image src={product.thumbnail} width={1080} height={1080}
                                       style={{width: 'auto', height: '69px', paddingRight: '12px'}}/>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    width: '860px'
                                }}>
                                    <div>
                                        <p style={{
                                            color: '#C7D5E0',
                                            marginTop: '10px',
                                            marginBottom: '0px',
                                            fontSize: '1.25em',
                                            zIndex: '1',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            display: 'block',
                                            overflow: 'hidden',
                                            transition: 'color 0.25s',
                                        }}>{product.title}</p>
                                        <p style={{marginTop: '0px', fontSize: '12px', color: 'gray'}}>{product.description}</p>
                                    </div>
                                    <div style={{position: 'absolute', right: '0'}}>
                                        <p style={{color: '#BEEE11'}}>{product.variants[0].prices[0].amount / 100}{product.variants[0].prices[0].currency_code.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
