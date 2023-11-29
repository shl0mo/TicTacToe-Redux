export function Wrapper ({ children }) {
    return (
        <div style={wrapperStyle}>
            {children}
        </div>
    )
}

const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
}