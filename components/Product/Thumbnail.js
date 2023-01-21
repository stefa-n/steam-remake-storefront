import Image from "next/image";

export default function Thumbnail({url}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Image src={url} width={940} height={0} style={{height: 'auto'}}/>
        </div>
    )
}
