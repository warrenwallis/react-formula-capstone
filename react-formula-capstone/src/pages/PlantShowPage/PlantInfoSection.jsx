import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import BenefitBox from "./BenefitBox";
import PlantHeading from "./PlantHeading";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { getRandomElement } from "shared-components/util";
import 'react-medium-image-zoom/dist/styles.css'

const PlantInfoSection = (props) => {
	const { plant } = props;
	const [imageIdx, setImageIdx] = useState(() =>
		getRandomElement(plant.images)
	);

	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:hidden">
				<PlantHeading plant={plant} />
			</div>
			<div className="flex flex-col items-center flex-1">
                <Zoom>
                    <img
                        className="rounded-lg h-[700px] w-full object-cover"
                        src={plant.images[imageIdx].src}
                    />
                </Zoom>
				<div className="flex my-4">
					<BenefitBox
						icon="fa-regular fa-circle-check"
						title="Guaranteed Healthy"
						description="Guaranteeed to arrive healthy or your money back"
					/>
					<div className="w-0.5 bg-slate-300 rounded-full"></div>
					<BenefitBox
						icon="fa-regular fa-truck-fast"
						title="Free Shipping"
						description="Get free ground shipping on orders of $50 or more"
					/>
				</div>
			</div>
			<div className="flex flex-col flex-1 md:pl-8">
				<div className="hidden md:flex">
					<PlantHeading plant={plant} />
				</div>
				<p className="my-3 text-slate-600 leading-relaxed">
					{plant.description}
				</p>
				<PlantPurchaseOptions
					plant={plant}
					imageIdx={imageIdx}
					setImageIdx={setImageIdx}
				/>
			</div>
		</div>
	);
};

export default PlantInfoSection;
