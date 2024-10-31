const PlantHeading = (props) => {
    const { plant } = props;
	return (
		<div className="flex-col w-full">
			<div className="flex text-4xl text-emerald-700 justify-between">
				<div>{plant.name}</div>
				<div>${plant.price}</div>
			</div>
			<div className="my-3 text-slate-600">{plant.botanical_name}</div>
		</div>
	);
};

export default PlantHeading;
