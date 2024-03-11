import { useContext, useEffect } from "react";
import { PizzaContext } from "../../context/PizzaContext";

import "./Carrito.css";

const Carrito = () => {
	const {
		pizzas,
		setShowBanner,
		quantity,
		totalPrice,
		setTotalPrice,
		setQuantity,
	} = useContext(PizzaContext);

	const handleTotalPriceQtty = () => {
		let totalPriceTemp = 0;
		let totalQtty = 0;

		pizzas.map((pizza) => {
			if (pizza.qty > 0) {
				totalPriceTemp += pizza.price * pizza.qty;
				totalQtty += pizza.qty;
			}
		});

		setTotalPrice(totalPriceTemp);
		setQuantity(totalQtty);
	};

	const handleAddBtn = (pizzaObj) => {
		const pizzaIndex = pizzas.findIndex(
			(pizza) => pizza.id === pizzaObj.id
		);

		pizzas[pizzaIndex].qty += 1;

		handleTotalPriceQtty();
	};

	const handleSubButton = (pizzaObj) => {
		const pizzaIndex = pizzas.findIndex(
			(pizza) => pizza.id === pizzaObj.id
		);

		pizzas[pizzaIndex].qty -= 1;

		handleTotalPriceQtty();
	};

	useEffect(() => {
		setShowBanner(false);
	}, []);

	return (
		<div className="details-container bg-transparent p-5">
			<div className="container-fluid bg-secondary-subtle p-5 rounded">
				<p className="fs-5 mb-3">Detalles del pedido: </p>
				{quantity > 0 ? (
					pizzas.map((pizza) =>
						pizza.qty > 0 ? (
							<div
								className="container-fluid bg-white d-flex alig-items-center justify-content-between p-3 mb-3 rounded"
								key={pizza.id}
							>
								<div className="d-flex align-items-center gap-2">
									<img
										src={pizza.img}
										alt="pizza"
										className="img-fluid img-detail rounded"
									/>
									<div className="vr"></div>
									<span>{pizza.name}</span>
								</div>
								<div className="d-flex align-items-center gap-3">
									<span className="fw-bolder fs-5">
										{(
											pizza.price * pizza.qty
										).toLocaleString()}
									</span>
									<div className="btn-group" role="group">
										<button
											type="button"
											className="btn btn-danger fw-bold"
                                            onClick={() => handleSubButton(pizza)}
										>
											-
										</button>
										<button
											type="button"
											className="btn disabled fw-bolder text-dark border border-0"
										>
											{pizza.qty}
										</button>
										<button
											type="button"
											className="btn btn-primary fw-bold"
											onClick={() => handleAddBtn(pizza)}
										>
											+
										</button>
									</div>
								</div>
							</div>
						) : null
					)
				) : (
					<p className="display-6 bg-light text-center rounded p-4 mb-4">
						Tu carrito está vacío
					</p>
				)}
				<div className="d-flex align-items-center justify-content-between">
					<button type="button" className="btn btn-success">
						Ir a Pagar
					</button>
					<span className="fs-2">
						Total: $ {totalPrice.toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Carrito;
