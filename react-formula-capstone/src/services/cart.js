import apiFetch from "./apiFetch";

export const addPlantToCart = ({ plantId, quantity, potColor }) => {
    return apiFetch("POST", `/cart/plants/${plantId}`, { 
        quantity, 
        pot_color : potColor
    });
};

export const getCart = () => {
    return apiFetch("GET", '/cart');
};