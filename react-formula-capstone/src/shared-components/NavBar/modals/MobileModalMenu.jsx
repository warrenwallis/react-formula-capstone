import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const MobileModalMenu = (props) => {
    const { onCartOpenClick } = props;
	const { username, signOut } = useContext(SessionContext);

	return (
		<div className="bg-emerald-700 text-emerald-50 rounded-bl-lg w-44 h-52 flex flex-col justify-end pl-6 pb-4 text-xl">
			<div className="my-2">
				<i className="fa-solid fa-user mr-2 text-lg"></i> {username}
			</div>
			<button className="my-2 text-left" onClick={signOut}>
				<i className="fa-solid fa-right-from-bracket mr-2"></i> 
                sign out
			</button>
			<button className="my-2 text-left" onClick={onCartOpenClick}>
				<i className="fa-solid fa-cart-shopping mr-2 text-lg"></i> 
                cart
			</button>
		</div>
	);
};

export default MobileModalMenu;
