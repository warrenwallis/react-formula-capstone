import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import SessionContext from "contexts/SessionContext";
import * as userService from "services/user";

const SignInPage = () => {
	const [error, setError] = useState("");
	const location = useLocation();
    const sessionContext = useContext(SessionContext);

	return (
		<FormContainer>
			<div className="text-red-700">{error}</div>
			{location.state?.accountCreated && <div className="border border-emerald-600 rounded-lg bg-emerald-100 p-3 text-emerald-600 font-semibold">Account created successfully. Please sign in.</div>}
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
				onSubmit={async (values) => {
					const response = await userService.createSession({
						username: values.username,
						password: values.password,
					});
                    const data = await response.json();

					if (response.status === 201) {
						sessionContext.signIn(data.capstone_session_token);
						setError("");
					} else {
						setError(data.error);
					}
				}}
			/>
			<Link className="mt-4 underline text-emerald-700" to="/sign-up">
				create an account
			</Link>
		</FormContainer>
	);
};

export default SignInPage;
