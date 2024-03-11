import { Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Pizzas from "./views/Pizzas/Pizzas";
import Carrito from "./views/Carrito/Carrito";
import PizzaDetail from "./views/PizzaDetail/PizzaDetail";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Pizzas />} />
				<Route path="/pizza/:id" element={<PizzaDetail />} />
				<Route path="/carrito" element={<Carrito />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
