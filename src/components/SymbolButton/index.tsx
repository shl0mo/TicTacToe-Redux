import { useDispatch } from 'react-redux';

import { defineInitialPlayer } from '../../store/reducer';

interface SymbolButtonProps {
    symbol: string;
}

export function SymbolButton (props: SymbolButtonProps) {
    const dispatch = useDispatch();

    return (
        <div style={symbolButtonStyle} onClick={() => dispatch(defineInitialPlayer())}>
            <h1>{props.symbol}</h1>
        </div>
    )
}

const symbolButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    borderRadius: '100px',
    border: '1px solid rgba(0,0,0,0.5)',
    width: '100px',
    height: '100px',
    cursor: 'pointer'
}