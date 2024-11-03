import { useContext, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import CartItem from "./CartItem";
import SessionContext from "contexts/SessionContext";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";

const CartModal = (props) => {
    const { setCartModalOpen } = props;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { username } = useContext(SessionContext);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const response = await cartService.getCart();
            const data = await response.json();

            setItems(data);
            setIsLoading(false);
        })();

    }, []);

    return (
        <RemoveScroll>
            <div className="flex justify-end fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm">
                <div className="bg-white h-screen w-full max-w-xl">
                    <div className="bg-emerald-700 text-center text-2xl text-emerald-50 font-playfair py-9 shadow-md">{username}'s Cart</div>
                    <button onClick={() => setCartModalOpen(false)}>
                        <i className="fa-regular fa-circle-xmark fixed top-3 right-3 text-4xl text-emerald-500"></i>
                    </button>
                    <div className="flex flex-col font-lato">
                        {
                            isLoading ? <LoadingSpinner /> : 
                            items.map((item, index) => <CartItem item={item} key={item.id}/>)
                        }
                    </div>
                </div>
            </div>
        </RemoveScroll>
    );
};

export default CartModal;