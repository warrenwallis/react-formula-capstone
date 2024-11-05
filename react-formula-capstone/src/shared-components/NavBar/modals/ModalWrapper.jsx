import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";

const ModalWrapper = (props) => {
	const { children, isOpen, onCloseClick } = props;
	const backgroundDivRef = useRef();

	if (!isOpen) {
		return null;
	}

	return (
		<RemoveScroll>
			<div
				className="flex justify-end items-start fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm z-20"
				ref={backgroundDivRef}
				onClick={(e) => {
					if (e.target === backgroundDivRef.current) {
						onCloseClick();
					}
				}}
			>
				<motion.button
					onClick={onCloseClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					<i className="fa-regular fa-circle-xmark fixed top-3 right-3 text-4xl text-emerald-500"></i>
				</motion.button>
				{children}
			</div>
		</RemoveScroll>
	);
};

export default ModalWrapper;
