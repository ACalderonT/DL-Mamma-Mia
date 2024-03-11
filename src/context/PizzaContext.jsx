import { createContext, useEffect, useState } from "react";
import { FetchPizzas } from "../services/services";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
    const [pizzas, setPizzas] = useState([]);
	const [showBanner, setShowBanner] = useState(true);

	useEffect(() => {
		FetchPizzas().then((response) => setPizzas(response));
	}, []);

	return (
		<PizzaContext.Provider
			value={{
				totalPrice,
				setTotalPrice,
				quantity,
				setQuantity,
                pizzas,
				setPizzas,
				showBanner,
				setShowBanner
			}}
		>
			{children}
		</PizzaContext.Provider>
	);
};
export default PizzaProvider;
