import AddQuote from "./components/AddQuote";
import ShowQuotes from "./components/ShowQuotes";

function App() {
	return (
		<>
			<div className="m-4 ">
				<ShowQuotes />
        <h1>Add a new Quote</h1>
        <AddQuote />
				<hr className="my-4" />

				<ShowQuotes />
			</div>
		</>
	);
}

export default App;
