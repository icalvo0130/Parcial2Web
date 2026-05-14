/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useState,
	type PropsWithChildren,
} from 'react';

import {initialData} from "../data/data"

export type ProductsContextType = {
	id: number;
	name: string;
	category: string;
	brand: string;
	location: string;
	available: boolean;
};


export const ProductsContext = createContext(null);


export const ProductsProvider = ({ children }:PropsWithChildren) => {
	//listica productos
	const [producsList, setProductsList] = useState(initialData);
	//esta dispo o no
	const [productAvailable, setProductAvailable] = useState([]);
	
	//categoria
	//const [priorityFilter, setPriorityFilter] = useState("all");
  	//const [statusFilter, setStatusFilter] = useState("all");


const handleProductAvailable = (product: any) => {
    const isproductAvailabled = productAvailable.includes(product);
    let newList;

    if (isproductAvailabled) {
      newList = productAvailable.filter((item: any) => item.id !== product.id);
    } else {
      newList = [...productAvailable, product];
    }

    setProductAvailable(newList);
  };

  return (
	<ProductsContext.Provider
		value={{ producsList, setProductsList, handleProductAvailable}}
		>
			{children}
		</ProductsContext.Provider>
  );
}; 