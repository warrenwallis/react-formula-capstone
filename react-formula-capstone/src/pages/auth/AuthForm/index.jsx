import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
    const { fields, submitButtonText } = props;
    const [ values, setValues ] = useState(() => {
        const initializeState = {};

        for (let field of fields) {
            initializeState[field.label] = '';
        }

        return initializeState;
    });

    return (
        <form className="border border-slate-300 rounded-lg bg-white flex flex-col items-center py-4 px-8 w-80 mx-8">
            {
                fields.map((field) => {
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
                })
            }
            <button className="bg-emerald-700 text-emerald-200 mt-6 rounded-lg w-full py-2">
                {submitButtonText}
            </button>
        </form>
    );
};

export default AuthForm;