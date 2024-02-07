import { useContext, useState } from "react";
import moon from '../../public/assets/icons/moon.svg';
import sun from '../../public/assets/icons/sun.svg';
import { MovieContext, ThemeContext } from "../context";
import CartDetails from './CartDeatils';
export default function Navbar() {
    const { state } = useContext(MovieContext)
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    const [showCart, setShowCart] = useState(false);
    const handleCartShow = () => {
        setShowCart(true)

    }
    return (
        <header>
            {
                showCart && <CartDetails onClose={() => setShowCart(false)} />
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src="./assets/logo.svg" width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"

                        >
                            <img src="./assets/ring.svg" width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
                            onClick={() => setDarkMode(darkMode => !darkMode)}
                        >
                            <img
                                src={darkMode ? sun : moon}
                                width="24"
                                height="24"
                                alt=""
                            />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={handleCartShow}>
                            <img src="./assets/shopping-cart.svg" width="24" height="24" alt="" />
                            {
                                state.cartData.length > 0 && (
                                    <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">{state.cartData.length}</span>
                                )
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}