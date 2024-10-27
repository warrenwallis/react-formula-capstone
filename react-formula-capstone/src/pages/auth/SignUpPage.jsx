import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";
import * as userService from "services/user";

const SignUpPage = () => {
    const [ error, setError ] = useState("");
    const navigate = useNavigate();

	return (
        <RedirectToPlantsIfSignedIn>
            <FormContainer>
                <div className="text-red-700">{error}</div>
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
                    onSubmit={async (values) => {
                        if (values.username.length < 4) {
                            setError('username too short');
                            return;
                        }
                        if (values.password !== values['confirm password']) {
                            setError('passwords do not match');
                            return;
                        }
                        if (values.password.length < 4) {
                            setError('password too short');
                            return;
                        }

                        const response = await userService.createUser({
                            username: values.username,
                            password: values.password
                        });

                        if (response.status === 201) {
                            setError("");
                            navigate('/', {
                                state: {
                                    accountCreated: true
                                }
                            });
                        } else {
                            const data = await response.json();
                            setError(data.error);
                        }
                    }}
                />
                <Link className="mt-4 underline text-emerald-700" to="/">
                    sign in
                </Link>
            </FormContainer>
        </RedirectToPlantsIfSignedIn>
	);
};

export default SignUpPage;
