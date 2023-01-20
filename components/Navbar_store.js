import Link from 'next/link'

export default function Navbar_store() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '940px',
                gap: '2vw',
                height: '35px',
                background: 'linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)',
                boxShadow: '0 0 3px rgba( 0, 0, 0, 0.4)',
                fontSize: '13px'
            }}>
                <Link href="/" style={{marginLeft: '2%'}}>Your Store</Link>
                <Link href="/" style={{marginLeft: '2%'}}>New & Noteworthy</Link>
                <Link href="/" style={{marginLeft: '2%'}}>Points Shop</Link>
                <Link href="/" style={{marginLeft: '2%'}}>News</Link>
                <Link href="/" style={{marginLeft: '2%'}}>Labs</Link>
            </div>
        </div>
    )
}
