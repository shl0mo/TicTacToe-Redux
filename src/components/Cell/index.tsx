import { useDispatch } from "react-redux"

import { play } from "../../store/reducer";

export function Cell ({ children }) {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(play())} style={cellStyle}>
            {children}
        </div>
    )
}

const cellStyle = {
    fontSize: '100px',
    backgroundColor: '#FFF',
    color: '#000',
    textAlign: 'center'
}