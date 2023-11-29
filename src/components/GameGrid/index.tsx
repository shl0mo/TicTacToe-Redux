import { useState } from 'react';

import { Cell } from '../Cell';
import store from '../../store';

export function GameGrid() {
    let gameVectorStore: string[] = store.getState().gameVector;
    const [gameVector, setGameVector] = useState<string[]>(gameVectorStore);


    return (
        <div id={'game-grid'} style={gameGridStyle} onClick={() => {
            gameVectorStore = store.getState().gameVector;
            setGameVector(gameVectorStore)
            console.log('Game Vector: ' + gameVectorStore);
        }}>
            {gameVector.map((symbol, index) => {
                console.log(symbol);
                return (
                    <Cell key={`cell-${index}`}>
                        {symbol}
                    </Cell>
                )
            })}
        </div>
    )
}

const gameGridStyle = {
    display: 'none',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '5px',
    width: '500px',
    height: '500px',
}