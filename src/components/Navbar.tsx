
import Link from "next/link"
// import MenuPage from "./MenuPage"
// import CartIcon from "./CartIcon"
import { FaTwitter } from "react-icons/fa6";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import Image from "next/image"
import MenuPage from "./MenuPage";
const Navbar=()=>{

    const user=false
    return (
      <div className="sticky top-12 z-20 bg-gray-600 h-12 text-red-500 py-2 px-2 flex items-center  border-b-2 border-b-gray-500  md:h-24 lg:px-20 xl:px-40">
        {/* Left Links */}
        <div className="hidden font-bold text-white md:flex gap-4 flex-1">
            <Link href="/">brand</Link>
            <Link href="/menu">shop</Link>
            <Link href="/contact">premiun</Link>
            <Link href="/contact">gift cards</Link>

        </div>
        {/* Logo */}
        <div className="text-3xl italic font-bold  text-[#E1C300] md:font-bold flex-1 md:text-center">
        <Link className="shadow-xl" href="/">
         brava
        </Link>
        </div>
    {/* MobileMenu */}
    <div className="md:hidden">
        <MenuPage/>
    </div>
    {/* Right Links */}
    <div className="hidden md:flex text-white gap-4 items-center justify-end flex-1">
       
           
        <Link className="font-bold" href="/">become a affailiate</Link>
            <Link href="/menu">
            <FaTwitter size={25}/>
            </Link>
            <Link href="/contact">
                <BiLogoTiktok size={25}/>
            </Link>
            <Link href="/contact">
                <BiLogoInstagram size={25}/>
            </Link>
   
        
  
            <Link href="/login"><LuUser2 size={25}/></Link>
                <Link href="/orders"><CiSearch size={25}/></Link>
       
            
        
           
                <Link href="/"><FiShoppingBag size={25}/></Link>
 

        </div>
      </div>
    )
   }
   export default Navbar