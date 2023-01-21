export default function AddToCart({cart, id, name, price, currency}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
            <div style={{
                display: 'flex',
                width: '940px',
                height: '73px',
                position: 'relative',
                background: 'linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)',
                alignItems: 'center'
            }}>
                <p style={{
                    fontFamily: '"Motiva Sans", Sans-serif',
                    fontSize: '21px',
                    marginTop: '0',
                    marginBottom: '10px',
                    marginLeft: '1rem'
                }}>Buy {name}</p>
                <div style={{position: 'absolute', right: '16px', bottom: '-17px', left: '16px', textAlign: 'right'}}>
                    <div style={{
                        height: '32px',
                        verticalAlign: 'bottom',
                        display: 'inline-flex',
                        background: 'black',
                        padding: '2px 2px 2px 0',
                        borderRadius: '2px'
                    }}>
                        <div style={{
                            background: 'black',
                            fontSize: '13px',
                            paddingTop: '8px',
                            paddingLeft: '12px',
                            paddingRight: '12px',
                            textTransform: 'uppercase',
                            height: '24px'
                        }}>{price / 100} {currency}</div>
                        <div style={{
                            position: 'relative',
                            fontSize: '12px',
                            display: 'inline-block',
                            marginLeft: '2px',
                            verticalAlign: 'middle'
                        }}>
                            <div onClick={() => {
                                fetch(`http://localhost:9000/store/carts/${cart}/line-items`, {
                                    method: "POST",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        variant_id: id,
                                        quantity: 1,
                                    }),
                                })
                                    .then((response) => console.log(response.json()))
                            }} style={{
                                width: '110px',
                                height: '30px',
                                borderRadius: '2px',
                                border: 'none',
                                padding: '1px',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                color: '#D2EFA9',
                                background: 'linear-gradient( to right, #8ed629 5%, #6aa621 95%)',
                                textShadow: '1px 1px 0px rgba( 0, 0, 0, 0.3 )',
                                fontFamily: '"Motiva Sans", Sans-serif',
                                fontSize: '16px'
                            }}>
                                Add to Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
