import clsx from "clsx";

const BenefitBox = (props) => {
	const { icon, title, description } = props;

	return (
		<div className="flex flex-col flex-1 p-2 text-center">
			<i className={clsx("text-emerald-700 text-3xl", icon)}></i>
			<div className="my-2">{title}</div>
			<p className="text-slate-600 text-sm">{description}</p>
		</div>
	);
};

export default BenefitBox;
