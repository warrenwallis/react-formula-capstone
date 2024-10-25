import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
	const { fields, submitButtonText, onSubmit } = props;
	const [values, setValues] = useState(() => {
		const initializeState = {};

		for (let field of fields) {
			initializeState[field.label] = "";
		}

		return initializeState;
	});
	const [loading, setLoading] = useState(false);

	return (
		<form
			className="border border-slate-300 rounded-lg bg-white flex flex-col items-center py-4 px-8 w-80 mx-8 mt-4"
			onSubmit={async (e) => {
				e.preventDefault();
                setLoading(true);
				await onSubmit(values);
                setLoading(false);
			}}
		>
			{fields.map((field) => {
				return (
					<Field
						key={field.label}
						field={field}
						values={values}
						onChange={(e) => {
							setValues({ ...values, [field.label]: e.target.value });
						}}
					/>
				);
			})}
			<button className="bg-emerald-700 text-emerald-200 mt-6 rounded-lg w-full py-2 relative">
				{submitButtonText}
				{loading && (
					<div className="absolute top-0 right-4 flex items-center h-full animate-spin">
						<i className="fa-solid fa-spinner-scale text-emerald-300 text-xl"></i>
					</div>
				)}
			</button>
		</form>
	);
};

export default AuthForm;
