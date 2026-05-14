import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductsContext } from "../context/AppContext";


export const ProductDashboard = () => {
  const { producsList } = useContext(ProductsContext);

  return (
    <>
      <h1>Vista Resumen</h1>
      <div>
        { producsList.map((Product) => (
          <ProductCard key={Product.id} Product={Product} />
        ))}
      </div>
    </>
  );
};
