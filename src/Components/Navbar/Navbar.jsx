import { ShoppingCart } from 'lucide-react';
import LOGO from '../../Assets/Logo.png'
import { Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
import { ShopContext } from '../../Context/ShopContext';

const Navbar=()=>{
    const[showMenu,setShowMenu]=useState(false);

    const {getTotalCartItem} = useContext(ShopContext);
    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }
    return(
        <>
        <div className="bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
            <div className="max-w-7xl mx-auto py-2 px-5 justify-between items-center flex">
                <Link to='/' >
                <img src={LOGO} alt="Logo image" className='md:w-24 w-20'/>
                </Link>
                <div className='flex items-center gap-5'>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center font-semibold text-xl gap-7'>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/mens'><li>Mens</li></Link>
                            <Link to='/womens'><li>Womens</li></Link>
                            <Link to='/kids'><li>Kids</li></Link>
                            <Link to='/login'><li className='bg-red-500 text-white px-4 py-1 rounded-md'>Login</li></Link>
                        </ul>
                    </nav>
                    <Link to='/cart' className='relative'>
                        <ShoppingCart />
                        <div className='bg-red-500 w-5 h-5 absolute -top-2.5 justify-center left-2.5 flex items-center rounded-full text-white'>
                            {getTotalCartItem()}
                        </div>
                    </Link>
                    {
                        showMenu ? (
                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden' size={30} />
                        ):(
                        <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden' size={30} />
                        )
                    }
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        </>
    );
}
export default Navbar;