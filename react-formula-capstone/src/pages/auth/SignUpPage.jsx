import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
	return (
		<FormContainer>
			<AuthForm
				fields={[
					{
						label: "username",
						type: "text",
					},
					{
						label: "password",
						type: "password",
					},
					{
						label: "confirm password",
						type: "password",
					},
				]}
				submitButtonText="create an account"
			/>
			<Link className="mt-4 underline text-emerald-700" to="/">
				sign in
			</Link>
		</FormContainer>
	);
};

export default SignUpPage;
