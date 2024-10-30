import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";

const NavBar = () => {
	const [userMenuOpen, setUserMenuOpen] = useState(false);
	const { username, signOut } = useContext(SessionContext);

	return (
		<nav
			className="flex justify-center items-center bg-emerald-700"
			onMouseLeave={() => setUserMenuOpen(false)}
		>
			<div className="text-emerald-50 text-2xl w-full max-w-5xl flex justify-between items-center px-8 py-4">
				<div className="flex items-center">
					<img
						className="w-12 mr-4"
						src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
					/>
					Rica's Plants
				</div>
				<div className="text-emerald-200 text-base flex-1 flex justify-end">
					<div className="relative w-32 flex justify-end">
						<button
							className="flex items-center pl-3"
							onClick={() => {
								setUserMenuOpen(true);
							}}
						>
							<i className="fa-solid fa-user mr-2 text-lg"></i>
							{username}
						</button>
						{userMenuOpen && (
							<div className="absolute top-7 right-0 bg-white rounded-lg shadow-md">
								<button className="text-slate-500 hover:text-emerald-700 px-3 py-3" onClick={signOut}>
									<i className="fa-solid fa-right-from-bracket mr-2"></i>
									sign out
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
