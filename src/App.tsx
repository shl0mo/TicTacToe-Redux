import { Provider } from "react-redux";

import { GameGrid } from "./components";
import { Wrapper } from "./components/Wrapper";
import store from "./store";

function App () {
	return (
		<Provider store={store}>
			<Wrapper>
				<GameGrid/>
			</Wrapper>
		</Provider>
	)
}

export default App;
