import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../../context/PizzaContext";

const PizzaDetail = () => {
	const { id } = useParams();
	const { pizzas, setShowBanner, setTotalPrice, setQuantity } = useContext(PizzaContext);
	const [pizzaIndex, setPizzaIndex] = useState(null);

    const handleTotalPriceQtty = () => {
		let totalPriceTemp = 0;
		let totalQtty = 0;

		pizzas.map((pizza) => {
			if(pizza.qty > 0){
				totalPriceTemp += pizza.price * pizza.qty;
				totalQtty += pizza.qty;
			}
		})

		setTotalPrice(totalPriceTemp);
		setQuantity(totalQtty);
	}

    const handleAddClick = () => {
        pizzas[pizzaIndex].qty += 1;
        handleTotalPriceQtty();
    }

	useEffect(() => {
		setShowBanner(false);
		const pizzaFiltered = pizzas.findIndex((pizza) => pizza.id === id);

		setPizzaIndex(pizzaFiltered);
	}, []);

	return (
		<div className="container-fluid p-5 bg-transparent">
			<div className="container-fluid p-4 bg-secondary-subtle rounded d-flex align-items-center gap-3">
				<img
					src={pizzas[pizzaIndex]?.img}
					alt="pizza-detail"
					className="img-fluid rounded"
				/>
				<div className="vr"></div>
				<div className="container-fluid p-4 bg-light vstack gap-2 rounded">
					<span className="display-6 border-bottom mb-3">
						{pizzas[pizzaIndex]?.name}
					</span>
					<span className="mb-2">{pizzas[pizzaIndex]?.desc}</span>
					<span className="fw-bold mb-1">Ingredientes: </span>
					<ul className="list-img border-bottom mb-2 pb-4">
						{pizzas[pizzaIndex]?.ingredients.map(
							(ingredient, index) => (
								<li key={index}>{ingredient}</li>
							)
						)}
					</ul>
					<div className="d-flex align-items-center justify-content-between">
						<span className="fs-3 fw-bold">
							Precio: ${(pizzas[pizzaIndex]?.price)?.toLocaleString()}
						</span>
                        <button type="button" className="btn btn-primary" onClick={handleAddClick}>
                            Añadir
                        </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PizzaDetail;
