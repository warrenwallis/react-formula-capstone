import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignInPage = () => {
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
				]}
				submitButtonText="sign in"
			/>
			<Link className="mt-4 underline text-emerald-700" to="/sign-up">
				create an account
			</Link>
		</FormContainer>
	);
};

export default SignInPage;
