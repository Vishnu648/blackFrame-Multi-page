import Link from "next/link";

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
              <Link href='/whatWeDo'>What we do</Link>
              <Link href='/pricing'>Price</Link>
              <Link href='/editing'>Editing</Link>
              <Link href='/preset'>Presets</Link>
              <Link href='/preset'>Assets</Link>
              <Link href='/preset'>Sound Effects</Link>
            </nav>

            <h2 style={{letterSpacing:'4px',fontFamily:'MyCustomFont',float:'right'}} className="text-[21px] md:text-5xl">BLACKFRAME PICTURES</h2>
    </nav>
  )
}
