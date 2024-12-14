import { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import EmptyCart from '../Assets/EmptyCart.png';
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
    const { all_product, new_collections, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem } = useContext(ShopContext)
    useEffect(() => {
        window.scroll(0, 0)
    }, []);
    return (
        <div className="mt-32">
            <div className="max-w-7xl mx-auto my-10 py-4">
                {
                    getTotalCartItem() === 0 ? (
                        <div className="flex items-center justify-center">
                            <img src={EmptyCart} alt="EmptyCart Image" />
                        </div>
                    ) : (
                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4">
                                <p>Products</p>
                                <p>Title</p>
                                <p className="hidden md:block">Price</p>
                                <p className="hidden md:block">Quantity</p>
                                <p className="hidden md:block">Total</p>
                                <p className="hidden md:block">Remove</p>
                            </div>
                            <hr className="bg-gray-300 border-0 my-2 h-[2px]" />
                            {
                                all_product.map((e) => {
                                    if (cartItems[e.id] > 0) {
                                        return (
                                            <div key={e.id}>
                                                <div className="text-gray-500 font-semibold text-sm sm:text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 gap-2">
                                                    <img src={e.image} className="h-16 w-16 object-cover" alt="Product" />
                                                    <p>{e.name}</p>
                                                    <p className="hidden md:block">${e.new_price}</p>
                                                    <button className="w-16 h-12 bg-white border border-gray-300">{cartItems[e.id]}</button>
                                                    <p className="hidden md:block">${e.new_price * cartItems[e.id]}</p>
                                                    <X className="cursor-pointer" onClick={() => { removeFromCart(e.id) }} />
                                                </div>
                                                <hr className="bg-gray-300 border-0 my-2 h-[2px]" />
                                            </div>
                                        )
                                    }
                                    return null;
                                })
                            }
                            <div className="flex flex-col lg:flex-row my-12 gap-10 md:gap-32">
                                <div className="flex flex-1 flex-col gap-4">
                                    <h1 className="text-lg font-bold">Cart Total</h1>
                                    <div>
                                        <div className="flex py-2 justify-between">
                                            <p>Subtotal</p>
                                            <p>${getTotalCartAmount()}</p>
                                        </div>
                                        <hr className="bg-gray-300 border-0 my-2 h-[2px]" />
                                        <div className="flex py-2 justify-between">
                                            <p>Shipping Fee</p>
                                            <p>Free</p>
                                        </div>
                                        <hr className="bg-gray-300 border-0 my-2 h-[2px]" />
                                        <div className="flex justify-between text-xl font-semibold py-2">
                                            <h3>Total</h3>
                                            <h3>${getTotalCartAmount()}</h3>
                                        </div>
                                    </div>
                                    <Link to='/login'>
                                        <button className="w-full lg:w-64 h-14 bg-orange-500 text-white font-semibold text-lg rounded-lg">PROCEED TO BUY</button>
                                    </Link>
                                </div>
                                <div className="flex-1 text-lg font-semibold w-full">
                                    <p className="text-gray-600">If you have a promo code, enter here:</p>
                                    <div className="w-full lg:w-80 mt-2 flex">
                                        <input type="text" placeholder="Promo code" className="flex-1 h-14 p-2 bg-gray-300 rounded-l-lg"/>
                                        <button className="h-14 w-32 bg-black text-white rounded-r-lg">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default Cart;