import Link from 'next/link'

export default function BrowseIncentive() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <div style={{width: '940px', height: '95px'}}>
                <h2 style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: '"Motiva Sans", Sans-serif',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                }}>Browse ACME</h2>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px'}}>
                    <Link href='/' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '58px',
                        fontFamily: '"Motiva Sans", Sans-serif',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        borderRadius: '3px',
                        boxShadow: '0 0 4px #000'
                    }}>New Releases</Link>
                    <Link href='/' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '58px',
                        fontFamily: '"Motiva Sans", Sans-serif',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        borderRadius: '3px',
                        boxShadow: '0 0 4px #000'
                    }}>Specials</Link>
                    <Link href='/' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '58px',
                        fontFamily: '"Motiva Sans", Sans-serif',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        borderRadius: '3px',
                        boxShadow: '0 0 4px #000'
                    }}>Free Games</Link>
                    <Link href='/' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '58px',
                        fontFamily: '"Motiva Sans", Sans-serif',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)',
                        borderRadius: '3px',
                        boxShadow: '0 0 4px #000'
                    }}>By User Tags</Link>
                </div>
            </div>
        </div>
    )
}
