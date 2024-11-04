import * as cartService from "services/cart";

const CartItem = (props) => {
    const { item, fetchCart } = props;

    return (
        <>
            <div className="flex p-8">
                <img className="w-28 rounded-lg" src={item.image_src}/>
                <div className="flex flex-col flex-1 ml-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-emerald-800 text-xl">
                            {item.plant_name}
                        </div>
                        <div className="text-slate-600">
                            ${item.quantity * item.price_per_unit}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-14 text-slate-500">qty:</div>
                        <div className="text-slate-600">{item.quantity}</div>
                    </div>
                    <div className="flex">
                        <div className="w-14 text-slate-500">color:</div>
                        <div className="text-slate-600">{item.pot_color}</div>
                    </div>
                    <div className="flex flex-1 justify-end items-end text-slate-600">
                        <button className="flex items-center hover:text-red-700" onClick={async () => {
                            await cartService.removeItemFromCart({ cartItemId: item.id });
                            fetchCart();
                        }}>
                            remove
                            <i className="fa-solid fa-trash ml-2 text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 mx-8 p-[1px]"></div>
        </>
    );
};

export default CartItem;