import { ProductsProvider } from "./context/AppContext";
import { ProductDashboard } from "./pages/ProductDashboard"
import { Routes, Route } from "react-router-dom";
import { Prestamos } from "./pages/prestamos"

function App() {
	return (
      <Routes>
        <Route path="/" element={<ProductDashboard />} />
		<Route path="/prestamo" element={<Prestamos />} />
      </Routes>
    
  );
}

export default App;
