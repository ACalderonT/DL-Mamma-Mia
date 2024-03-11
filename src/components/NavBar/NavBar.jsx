import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContext";

import "./NavBar.css";

const NavBar = () => {
	const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
	const { totalPrice, quantity, showBanner } = useContext(PizzaContext);

	return (
		<div>
			<div className="nav-bar py-3 px-5 d-flex align-items-center justify-content-between bg-dark text-light">
				<div className="d-flex align-items-center gap-2">
					<NavLink className={setActiveClass} to="/">
						<img
							src="src/assets/img/pizza.png"
							alt="pizza-logo"
							className="img-fluid pizza-logo"
						/>
					</NavLink>
					<span className="brand-name">Pizzería Mamma Mia!</span>
				</div>
				<div className="d-flex align-items-center gap-3">
					{totalPrice > 0 ? (
						<span className="total rounded-pill bg-light text-dark p-2 fw-bold">
							$ {totalPrice.toLocaleString()}
						</span>
					) : null}
					<NavLink className={setActiveClass} to="/carrito">
						<div className="cart-container">
							<i className="fi fi-br-shopping-cart cart"></i>
							{quantity > 0 ? (
								<span className="cantidd">{quantity}</span>
							) : null}
						</div>
					</NavLink>
				</div>
			</div>
			{showBanner && (
				<div className="img-bg text-light">
					<div className="d-flex flex-column justify-content-center align-items-center gap-3 slogan">
						<span className="fs-1">¡Pizzería Mamma Mia!</span>
						<span className="fs-4">
							¡Tenemos las mejores pizzas que podrás encontrar!
						</span>
						<p className="br"></p>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavBar;
