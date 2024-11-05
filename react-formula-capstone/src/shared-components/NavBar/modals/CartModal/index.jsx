import { useCallback, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CartItem from "./CartItem";
import SessionContext from "contexts/SessionContext";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";

const CartModal = (props) => {
	const { setCartModalOpen } = props;
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { username } = useContext(SessionContext);

	const fetchCart = useCallback(async () => {
		setIsLoading(true);

		const response = await cartService.getCart();
		const data = await response.json();

		setItems(data);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchCart();
	}, [fetchCart]);

	var numItems = 0,
		subtotal = 0;

	for (const item of items) {
		numItems += item.quantity;
		subtotal += item.quantity * item.price_per_unit;
	}

	return (
		<motion.div
			className="bg-white h-screen w-full max-w-xl flex flex-col"
			initial={{ translateX: "100%" }}
			animate={{ translateX: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="bg-emerald-700 text-center text-2xl text-emerald-50 font-playfair py-9 shadow-md">
				{username}'s Cart
			</div>
			<div className="flex flex-col font-lato overflow-y-scroll">
				{isLoading ? (
					<LoadingSpinner />
				) : (
					items.map((item, index) => (
						<CartItem item={item} key={item.id} fetchCart={fetchCart} />
					))
				)}
			</div>
			{!isLoading && (
				<div className="my-4 flex-1 flex flex-col justify-end">
					<div className="h-[1px] bg-slate-300"></div>
					<div className="px-8">
						<div className="flex justify-between my-3 text-slate-500">
							<div>{numItems} items</div>
							<div className="flex">
								<div>subtotal:</div>
								<div className="text-slate-600 ml-1">${subtotal}</div>
							</div>
						</div>
						<button
							className="text-2xl text-emerald-50 bg-emerald-700 rounded-full text-center p-4 font-lato w-full"
							onClick={() =>
								alert("this app is not a real plant selling site!")
							}
						>
							Checkout
							<i className="fa-solid fa-arrow-right ml-2"></i>
						</button>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default CartModal;
