export function FinalStatus () {
    return (
        <div id={'final-status'} style={finalStatusStyle}>
        </div>
    )
}

const finalStatusStyle = {
    position: 'absolute',
    top: '300px',
    backgroundColor: '#FFF',
    border: '1px solid #000',
    borderRadius: '50px',
    padding: '80px',
    display: 'none',
    alignItems: 'center',
    fontSize: '40px'    
}