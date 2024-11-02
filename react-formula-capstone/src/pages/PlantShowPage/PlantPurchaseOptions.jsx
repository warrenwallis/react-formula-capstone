import clsx from "clsx";
import { useState } from "react";
import { POT_COLORS } from "shared-components/util";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";

const PlantPurchaseOptions = (props) => {
	const { plant, imageIdx, setImageIdx } = props;
	const [quantity, setQuantity] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	console.log(plant);

	return (
		<div className="my-8">
			<div className="flex text-2xl text-emerald-700">
				<i className="fa-solid fa-brush mr-2"></i>
				Pot Color
			</div>
			<div className="mt-2 flex">
				{plant.images.map((image, idx) => {
					return (
						<div
							className={clsx(
								"flex flex-col items-cente text-sm mx-2",
								idx == imageIdx ? "text-slate-600" : "text-slate-400"
							)}
							key={idx}
						>
							<button
								className={clsx(
									"w-8 h-8 rounded-full border border-slate-400 my-2",
									POT_COLORS[image.pot_color],
									idx == imageIdx &&
										"outline outline-slate-400 outline-offset-2"
								)}
								onMouseEnter={() => setImageIdx(idx)}
							></button>
							{image.pot_color}
						</div>
					);
				})}
			</div>
			<div className="flex mt-8">
				<div className="flex item-center border border-slate-400 rounded-full px-4 py-3">
					<button
						className="mr-3"
						onClick={() => {
							if (quantity > 1) {
								setQuantity(quantity - 1);
							}
						}}
					>
						<i className="fa-solid fa-minus"></i>
					</button>
					<div className="w-5 text-center text-xl">{quantity}</div>
					<button className="ml-3" onClick={() => setQuantity(quantity + 1)}>
						<i className="fa-solid fa-plus"></i>
					</button>
				</div>
				<button
					className="flex flex-1 items-center justify-center rounded-full bg-emerald-700 text-emerald-50 ml-2"
					onClick={async () => {
						setIsLoading(true);

						const response = await cartService.addPlantToCart({
							quantity,
							plantId: plant.id,
							potColor: plant.images[imageIdx].pot_color,
						});

						setIsLoading(false);
						console.log(response);
					}}
				>
					{isLoading ? (
						<i className="fa-solid fa-spinner-scale text-xl animate-spin mr-2"></i>
					) : (
						<i className="fa-solid fa-cart-plus mr-2 text-xl"></i>
					)}
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default PlantPurchaseOptions;
