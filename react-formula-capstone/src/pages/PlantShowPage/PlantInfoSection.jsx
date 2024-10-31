import PlantHeading from "./PlantHeading";

const PlantInfoSection = (props) => {
    const { plant } = props;

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:hidden">
                    <PlantHeading plant={plant} />
                </div>
            <div className="flex flex-col flex-1">
                <img className="rounded-lg" src={plant.images[0].src} />
                <div className="flex">
                    <div className="flex flex-col">
                        TODO
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 md:pl-8">
                <div className="hidden md:flex">
                    <PlantHeading plant={plant} />
                </div>
                <div className="my-3 text-slate-600 leading-relaxed">{plant.description}</div>
            </div>
        </div>
    );
};

export default PlantInfoSection;