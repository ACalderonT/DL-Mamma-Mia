import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../../context/PizzaContext";

import "./Pizzas.css";

const Pizzas = () => {
	const { pizzas, setQuantity, setTotalPrice, setShowBanner} = useContext(PizzaContext);
	const navigate = useNavigate();

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

	const handleAddBtn = (pizzaObj) => {
		const pizzaIndex = pizzas.findIndex((pizza) => pizza.id === pizzaObj.id );

		pizzas[pizzaIndex].qty += 1;

		handleTotalPriceQtty()
	}

	const handleDetail = (pizzaObj) => {
		navigate(`/pizza/${pizzaObj.id}`)
	}

	useEffect(() => {
		setShowBanner(true)
	}, [])

	return (
		<div className="cards-container">
			{pizzas.map((pizza) => (
				<div className="card" key={pizza.id}>
					<img
						src={pizza.img}
						alt="pizza"
						className="img-fluid"
					/>
					<div className="card-body">
						<p className="card-title p-3 border-bottom fs-4 fw-bold mb-4">
							{pizza.name}
						</p>

						<p className="card-title pt-1 p-3 fs-6 fw-bold">
							Ingredientes:{" "}
						</p>
						<ul className="list-img border-bottom mb-2 pb-4">
							{ pizza.ingredients.map((ingredient, index) => (
								<li key={index}>{ ingredient }</li>
							))}
						</ul>
						<p className="text-center display-6 p-4 fw-bold">
							$ { pizza.price?.toLocaleString()}
						</p>
						<div className="d-flex align-items-center justify-content-evenly mt-2 border-top p-4">
							<button className="btn btn-outline-primary d-flex align-items-center gap-1" onClick={() => handleDetail(pizza)}>
								Detalle
							</button>
							<button className="btn btn-primary d-flex align-items-center gap-1" onClick={() => handleAddBtn(pizza)}>
								Añadir
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Pizzas;
