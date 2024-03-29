import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: 'gameVector',
    initialState: {
        gameVector: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        currentPlayer: 'X',
        gameStatus: 'Em andamento',
        freePositions: 9
    },
    reducers: {
        defineInitialPlayer (state): void {
            const chooseSymbolContainer: HTMLElement = (<HTMLElement>document.querySelector('#choose-symbol-contiainer'));
            const gameGrid: HTMLElement = (<HTMLElement>document.querySelector('#game-grid'));
            console.log(gameGrid);
            const symbolButton: HTMLElement = (<HTMLElement>event?.target);
            const initialSymbol = symbolButton.innerText;
            console.log(initialSymbol);
            state.currentPlayer = initialSymbol;
            chooseSymbolContainer.remove();
            gameGrid.style.setProperty('display', 'grid');
        },
        play (state): void {
            if (state.gameStatus === 'Vitória de X' || state.gameStatus === 'Vitória de O') return;
            const gameVector: string[] = state.gameVector;
            const clickedCell: HTMLElement = (<HTMLElement>event?.target);
            let currentCell: HTMLElement = (<HTMLElement>clickedCell);
            const finalStatusContainer: HTMLElement = (<HTMLElement>document.querySelector('#final-status'));
            let nextElementSimbling = (<HTMLElement>currentCell.nextElementSibling);
            let simblingsAfterClickedCell: number = 0;
            if (nextElementSimbling !== null) simblingsAfterClickedCell++;
            do {
                console.log(nextElementSimbling);
                nextElementSimbling = (<HTMLElement>nextElementSimbling?.nextElementSibling);
                simblingsAfterClickedCell++;
            } while (nextElementSimbling);
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
                if (victoryCondition1) break;
                i = i + 2;
            }
            for (let i = 0; i < 3; i++) {
                victoryCondition2 = (gameVector[i] !== ' ') && (gameVector[i] === gameVector[i + 3]) && (gameVector[i + 3] === gameVector[i + 6]);
                if (victoryCondition2) break;
            }
            victoryCondition3 = (gameVector[0] !== ' ') && (gameVector[0] === gameVector[4]) && (gameVector[4] === gameVector[8])
            if (gameVector[2] !== ' ') {
                victoryCondition4 = (gameVector[2] === gameVector[4]) && (gameVector[4] === gameVector[6]);
            }
            if (victoryCondition1 || victoryCondition2 || victoryCondition3 || victoryCondition4) {
                state.gameStatus = `Vitória de ${state.currentPlayer}`;
                finalStatusContainer.innerText = state.gameStatus;
                finalStatusContainer.style.setProperty('display', 'flex');
                return;
            }
            if (state.freePositions === 0) {
                state.gameStatus = `Empatado`;
                finalStatusContainer.innerText = state.gameStatus;
                finalStatusContainer.style.setProperty('display', 'flex');
                return;
            }
            if (state.currentPlayer === 'X') state.currentPlayer = 'O';
            else if (state.currentPlayer === 'O') state.currentPlayer = 'X';
        }
    }
});

export const { defineInitialPlayer, play } = Slice.actions;
export default Slice.reducer;