import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = (props) => {
	const { children, isOpen, onCloseClick } = props;
    const backgroundDivRef = useRef();

	if (!isOpen) {
		return null;
	}

	return (
		<RemoveScroll>
			<div className="flex justify-end items-start fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm" ref={backgroundDivRef} onClick={(e) => {
                if (e.target === backgroundDivRef.current) {
                    onCloseClick();
                }
            }}>
				<button onClick={onCloseClick}>
					<i className="fa-regular fa-circle-xmark fixed top-3 right-3 text-4xl text-emerald-500"></i>
				</button>
				{children}
			</div>
		</RemoveScroll>
	);
};

export default ModalWrapper;
