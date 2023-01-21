export default function Title({title, description}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '940px'}}>
                <p style={{
                    marginBottom: '0',
                    fontFamily: '"Motiva Sans", Sans-serif',
                    fontSize: '12px',
                    color: '#8f98A0'
                }}>{description}</p>
                <p style={{marginTop: '0', fontFamily: '"Motiva Sans", Sans-serif', fontSize: '26px'}}>{title}</p>
            </div>
        </div>
    )
}
