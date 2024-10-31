import clsx from "clsx";
import { useState } from "react";
import { POT_COLORS } from "shared-components/util";

const PlantPurchaseOptions = (props) => {
	const { plant, imageIdx, setImageIdx } = props;

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
							className={clsx("flex flex-col items-cente text-sm mx-2", idx == imageIdx ? "text-slate-600" : "text-slate-400")}
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
		</div>
	);
};

export default PlantPurchaseOptions;
