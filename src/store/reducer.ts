import { createSlice } from "@reduxjs/toolkit";
import { getTimeMeasureUtils } from "@reduxjs/toolkit/dist/utils";

const Slice = createSlice({
    name: 'gameVector',
    initialState: {
        gameVector: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        currentPlayer: 'X',
        gameStatus: 'Em andamento',
        freePositions: 9
    },
    reducers: {
        defineInitialPlayer (state, { payload }): void {
            state.currentPlayer = payload.initialPlayer;
        },
        play (state): void {
            if (state.gameStatus === 'Vitória de X' || state.gameStatus === 'Vitória de O') return;
            console.log('Play');
            const gameVector: string[] = state.gameVector;
            const clickedCell: HTMLElement = (<HTMLElement>event?.target);
            let currentCell: HTMLElement = (<HTMLElement>clickedCell);
            console.log(currentCell.nextElementSibling);
            let nextElementSimbling = (<HTMLElement>currentCell.nextElementSibling);
            let simblingsAfterClickedCell: number = 0;
            if (nextElementSimbling !== null) simblingsAfterClickedCell++;
            do {
                console.log(nextElementSimbling);
                nextElementSimbling = (<HTMLElement>nextElementSimbling?.nextElementSibling);
                simblingsAfterClickedCell++;
            } while (nextElementSimbling !== null);
            const position = (9 - simblingsAfterClickedCell);
            console.log(position);
            if (gameVector[position] === ' ') {
                gameVector[position] = state.currentPlayer; 
                state.freePositions--;
                console.log(state.freePositions);
            } else {
                return;
            }
            let victoryCondition1: boolean = false;
            let victoryCondition2: boolean = false;
            let victoryCondition3: boolean = false;
            let victoryCondition4: boolean = false;
            for (let i = 0; i < 9; i++) {
                victoryCondition1 = (gameVector[i] !== ' ') && (gameVector[i] === gameVector[i + 1]) && (gameVector[i + 1] === gameVector[i + 2]);
                victoryCondition2 = (gameVector[0] !== ' ') && (gameVector[i] === gameVector[i + 3]) && (gameVector[i + 3] === gameVector[i + 6]);
                if (victoryCondition1 || victoryCondition2) break;
                i += 3;
            }
            victoryCondition3 = (gameVector[0] !== ' ') && (gameVector[0] === gameVector[4]) && (gameVector[4] === gameVector[8])
            if (gameVector[2] !== ' ') {
                victoryCondition4 = (gameVector[2] === gameVector[4]) && (gameVector[4] === gameVector[6]);
            }
            if (victoryCondition1 || victoryCondition2 || victoryCondition3 || victoryCondition4) {
                console.log('Caso 1:' + victoryCondition1);
                console.log('Caso 2:' + victoryCondition2);
                console.log('Caso 3:' + victoryCondition3);
                console.log('Caso 4:' + victoryCondition4);
                alert(`Fim de jogo ${state.currentPlayer} venceu`);
                console.log(state.gameVector[1]);
                state.gameStatus = `Vitória de ${state.currentPlayer}`;
                return;
            }
            if (state.freePositions === 0) {
                alert('Jogo empatado');
                return;
            }
            if (state.currentPlayer === 'X') state.currentPlayer = 'O';
            else if (state.currentPlayer === 'O') state.currentPlayer = 'X';
        }
    }
})

export const { defineInitialPlayer, play } = Slice.actions;
export default Slice.reducer;