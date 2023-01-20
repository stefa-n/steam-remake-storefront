import Link from 'next/link'

export default function Navbar() {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100px',
            marginBottom: '1.3%',
            background: '#171A21',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{marginRight: '5%'}}>ACME</h1>
            <Link style={{textAlign: 'center', marginRight: '1%'}} href="/">STORE</Link>
            <Link style={{textAlign: 'center', marginRight: '1%'}} href="/community">COMMUNITY</Link>
            <Link style={{textAlign: 'center', marginRight: '1%'}} href="/about">ABOUT</Link>
            <Link style={{textAlign: 'center', marginRight: '1%'}} href="/support">SUPPORT</Link>
        </div>
    )
}
