import Link from "next/link";
import MenuButton from "./MenuButton"

export default function Navbar() {
  return (
    <nav className="h-[70px] mt-4 w-full flex justify-between items-center pr-6 bg-white text-[#2a2a2a]">
         <img
              src="/onlyLogo.png"
              alt="Logo"
              width={100}
              className="w-[120px] flex items-center justify-center mt-[20px] text-left"
            />

            <nav style={{fontFamily:'MyIphoneFont',letterSpacing:1,width:'58%'}} className="hidden lg:flex justify-center font-semibold gap-10 text-lg">
              <Link className="hover:text-gray-500" href='/whatWeDo'>What we do</Link>
              <Link className="hover:text-gray-500" href='/pricing'>Price</Link>
              <Link className="hover:text-gray-500" href='/editing'>Editing</Link>
              <Link className="hover:text-gray-500" href='/preset'>Presets</Link>
              <Link className="hover:text-gray-500" href='/preset'>Assets</Link>
              <Link className="hover:text-gray-500" href='/preset'>Sound Effects</Link>
            </nav>

            <h2 style={{letterSpacing:'4px',fontFamily:'MyCustomFont',float:'right'}} className="text-[21px] md:text-4xl lg:5xl">BLACKFRAME PICTURES</h2>
            <div className="lg:hidden">
              <MenuButton/>
            </div>
    </nav>
  )
}
