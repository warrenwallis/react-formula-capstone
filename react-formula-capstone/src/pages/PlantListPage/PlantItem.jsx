import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { POT_COLORS, getRandomElement } from "shared-components/util";

const PlantItem = (props) => {
	const { plant } = props;
	const [imageIdx, setImageIdx] = useState(() => getRandomElement(plant.images));

    console.log(plant);

	return (
		<div className="w-72 font-lato text-base flex flex-col my-4 mx-2">
            <Link to={'/plants/' + plant.id}>
                <img
                    className="rounded-lg h-80 w-full object-cover"
                    src={plant.images[imageIdx].src}
                />
            </Link>
			<div className="flex justify-between mt-4">
				<div className="text-lg">{plant.name}</div>
				<div>${plant.price}</div>
			</div>
			<div className="flex justify-between mt-2">
				<div className="text-sm text-slate-500">
					{plant.images[imageIdx].pot_color}
				</div>
				<div className="flex">
					{plant.images.map((image, key) => (
						<button
							className={clsx(
								"rounded-full w-5 h-5 mx-[3px] border border-slate-300",
								POT_COLORS[image.pot_color],
								imageIdx === key && "outline outline-slate-400 outline-offset-2"
							)}
							key={key}
                            onMouseEnter={() => {
                                setImageIdx(key)
                            }}
						></button>
					))}
				</div>
			</div>
		</div>
	);
};

export default PlantItem;
