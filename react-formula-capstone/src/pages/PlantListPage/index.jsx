import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import PlantItem from "./PlantItem";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";

const PlantListPage = () => {
	const [plants, setPlants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			const response = await plantService.getPlants();
			const data = await response.json();

			setPlants(data);
			setIsLoading(false);
		})();
	}, []);

	return (
		<RedirectToSignInIfSignedOut>
			<NavBar />
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className="flex justify-center py-24">
					<div className="w-full max-w-5xl px-8 font-playfair text-3xl text-emerald-800">
                        Plants in Stock
                        <div className="flex flex-wrap mt-4 justify-center font-lato">
                            {
                                plants.map((plant, idx) => <PlantItem key={plant.name} plant={plant}/>)
                            }
                        </div>
                    </div>
				</div>
			)}
		</RedirectToSignInIfSignedOut>
	);
};

export default PlantListPage;
