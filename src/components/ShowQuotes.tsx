import { useEffect, useState } from "react";
type Quote = {
    id: number;
    quote: string;
    author: string;
};

const ShowQuotes = () => {
	const [quotes, setQuotes] = useState<Quote[]>([]);
	console.log("component render");
	const fetchData = () => {
		fetch("https://dummyjson.com/quotes")
			.then((res) => res.json())
			.then((data) => {
				setQuotes(data.quotes);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{/* create a beautiful ui to show quotes  */}

			<div className="my-4 p-4 border-2 h-48 overflow-y-scroll">
				{quotes.length === 0 ? (
					<div>No quotes fetched</div>
				) : (
					quotes.map((quote) => (
						<div key={quote.id} className="mb-2 p-2 border-b-2">
							<div className="italic">"{quote.quote}"</div>
							<div className="text-right mt-1">- {quote.author}</div>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default ShowQuotes;
