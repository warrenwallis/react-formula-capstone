import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
	const [plant, setPlant] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { plantId } = useParams();

	useEffect(() => {
		(async () => {
            setIsLoading(true);

			const response = await plantService.getPlantById({ id: plantId });
			const data = await response.json();

			setPlant(data);
            setIsLoading(false);
		})();
	}, []);

	console.log(plant);

	return (
		<RedirectToSignInIfSignedOut>
			<NavBar />
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className="flex justify-center">
					<div className="w-full max-w-5xl px-8 mt-16">
						<PlantInfoSection plant={plant} />
					</div>
				</div>
			)}
		</RedirectToSignInIfSignedOut>
	);
};

export default PlantShowPage;
