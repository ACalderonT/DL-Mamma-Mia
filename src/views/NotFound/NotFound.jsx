import { useContext, useEffect } from "react";
import { PizzaContext } from "../../context/PizzaContext";

import "./NotFound.css";

const NotFound = () => {
	const { setShowBanner } = useContext(PizzaContext);

	useEffect(() => {
		setShowBanner(false);
	}, []);
	
	return (
		<div className="d-flex flex-column align-items-center justify-content-center gap-4 p-5">
			<span className="display-3">404</span>
			<img
				src="src/assets/img/not-found.png"
				alt="pizza-not-found"
				className="pizza-not-found"
			/>
			<span className="display-3">Pizza not found</span>
		</div>
	);
};

export default NotFound;
