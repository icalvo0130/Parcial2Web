import { useContext } from "react";
import { ProductsContext } from "../context/AppContext";

export const ProductCard = ({ Product }: any) => {
  const { handleProductAvailable } = useContext(ProductsContext);
  return (
    <div>
      <p>{Product.id}</p>
      <p>{Product.name}</p>
      <p>{Product.category}</p>
      <p>{Product.brand}</p>
      <p>{Product.location}</p>
      <p>{Product.available}</p>
      <button onClick={() => handleProductAvailable(Product)}>Pedir Prestamo</button>
    </div>
  );
};
