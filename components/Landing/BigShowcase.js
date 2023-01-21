import Image from 'next/image'
import Link from 'next/link'

export default function BigShowcase() {

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5vh'}}>
            <div style={{width: '940px', height: '392px'}}>
                <h2 style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: '"Motiva Sans", Sans-serif',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                }}>Featured & Recommended</h2>

                <Link href="/product/">
                    <div style={{
                        width: '940px',
                        height: '353px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        boxShadow: '0 0 7px 0px #000'
                    }}>
                        <Image style={{float: 'left', boxShadow: '0px 0px 30px 1px #171A21', zIndex: '1'}}
                               src="/previewSs/previewBanner.jpg"
                               alt="Big Showcase Image" width={628} height={353}/>
                        <div
                            style={{width: '312px', height: '353px', backgroundImage: 'url(/previewSs/previewBg.jpg)'}}>
                            <div style={{margin: '0 0 0 2%'}}>
                                <p style={{fontSize: '24px', marginTop: '5%'}}>medusa-stonkers</p>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '3px'}}>
                                    <Image alt='Preview Image' src="/PreviewSs/1.png" width={150} height={84}/>
                                    <Image alt='Preview Image' src="/PreviewSs/2.png" width={150} height={84}/>
                                    <Image alt='Preview Image' src="/PreviewSs/3.png" width={150} height={84}/>
                                    <Image alt='Preview Image' src="/PreviewSs/4.png" width={150} height={84}/>
                                    <p style={{marginTop: '10%', fontSize: '18px'}}>Now available</p>
                                </div>
                                <p style={{marginTop: '10px', fontSize: '11px'}}>$0.00</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
