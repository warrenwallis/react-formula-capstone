import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const NavBar = () => {
    const { username } = useContext(SessionContext);

    return (
        <nav className='flex justify-center bg-emerald-700'>
            <div className="text-emerald-50 text-2xl border border-white w-full max-w-5xl flex justify-between items-center px-8 py-4">
                <div className="flex items-center">
                    <img className="w-12 mr-4" src="https://static-task-assets.react-formula.com/capstone_logo_light.png" />
                    Rica's Plants   
                </div>
                <div className="text-emerald-200 text-lg">
                    <button className="flex items-center">
                        <i className="fa-solid fa-user mr-2 text-3xl"></i>
                        {username}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;