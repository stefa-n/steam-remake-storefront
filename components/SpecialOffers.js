import Link from 'next/link'

export default function SpecialOffers() {
    return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <div style={{width: '940px', height: '382px'}}>
                    <h2 style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        fontFamily: '"Motiva Sans", Sans-serif',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase'
                    }}>SPECIAL OFFERS</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px'}}>
                        <div style={{
                            height: '350px',
                            background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        }}></div>
                        <div style={{
                            height: '350px',
                            background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        }}></div>
                        <div style={{
                            height: '350px',
                            background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        }}></div>
                    </div>
                </div>
            </div>
            )
}
