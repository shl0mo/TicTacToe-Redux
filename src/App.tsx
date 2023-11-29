import { Provider } from "react-redux";

import { GameGrid } from "./components";
import { Wrapper } from "./components/Wrapper";
import { ChooseSymbol } from "./components/ChooseSymbol";
import { FinalStatus } from "./components/FinalStatus";
import store from "./store";

function App () {
	return (
		<Provider store={store}>
			<ChooseSymbol/>
			<Wrapper>
				<GameGrid/>
				<FinalStatus/>
			</Wrapper>
		</Provider>
	)
}

export default App;
