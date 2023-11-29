import { SymbolButton } from "../SymbolButton"

export function ChooseSymbol () {
    return (
        <div id={'choose-symbol-contiainer'} style={chooseSymbolContainerStyle}>
            <h1>Primeiro Jogador:</h1>
            <div style={chooseSymbolBoxStyle}>
                <SymbolButton symbol={'X'}/>
                <SymbolButton symbol={'O'}/>
            </div>
        </div>
    )
}

const chooseSymbolContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const chooseSymbolBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: 30
}