const FormContainer = (props) => {
    const { children } = props;
    return (
        <div className="flex">
            <div className="relative hidden md:flex">
                <img className="h-screen object-cover" src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"/>
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-200/40"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen bg-emerald-50 flex-1">
                <div className="flex flex-col justify-center items-center mb-6">
                    <img
                        className="w-16 mb-2"
                        src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
                    />
                    <div className="text-3xl text-emerald-700">Rica's Plants</div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
