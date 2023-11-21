import { Provider } from "react-redux";

import { GameGrid } from "./components";
import store from "./store";

function App () {
	return (
		<Provider store={store}>
			<GameGrid/>
		</Provider>
	)
}

export default App;
