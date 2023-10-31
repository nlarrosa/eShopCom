import { useState } from "react";


export const useQuantity = () => {

    const [quantity, setQuantity] = useState(0);


    const sumQuantity = () => {
        setQuantity((prev) => prev + 1);
    }


    const restQuantity = () => {
        if(quantity <= 0) return;
        setQuantity((prev) => prev - 1);
    }

  return {
    quantity,
    sumQuantity,
    restQuantity
  }
}
