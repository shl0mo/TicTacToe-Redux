import { Provider } from "react-redux";

import { GameGrid } from "./components";
import { Wrapper } from "./components/Wrapper";
import { ChooseSymbol } from "./components/ChooseSymbol";
import store from "./store";

function App () {
	return (
		<Provider store={store}>
			<ChooseSymbol/>
			<Wrapper>
				<GameGrid/>
			</Wrapper>
		</Provider>
	)
}

export default App;
