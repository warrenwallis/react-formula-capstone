const CartItem = (props) => {
    const { item } = props;

    return (
        <>
            <div className="flex p-8">
                <img className="w-24 rounded-lg" src={item.image_src}/>
                <div className="flex-1 ml-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-emerald-800 text-xl">
                            {item.plant_name}
                        </div>
                        <div className="text-slate-700">
                            ${item.quantity * item.price_per_unit}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-14 text-slate-500">qty:</div>
                        <div className="text-slate-700">{item.quantity}</div>
                    </div>
                    <div className="flex">
                        <div className="w-14 text-slate-500">color:</div>
                        <div className="text-slate-700">{item.pot_color}</div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-slate-300 mx-8"></div>
        </>
    );
};

export default CartItem;