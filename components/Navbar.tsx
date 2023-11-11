import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[80px] mt-4 w-full flex justify-between items-center pr-6 text-4xl bg-white text-[#2a2a2a]">
         <img
              src="/onlyLogo.png"
              alt="Logo"
              width={100}
              className="w-[120px] flex items-center justify-center mt-[20px] text-left"
            />

            <nav style={{fontFamily:'MyIphoneFont',letterSpacing:1,width:'55%'}} className="hidden lg:flex justify-center gap-10 text-2xl w-2/3">
              <Link href='/whatWeDo'>What we do</Link>
              <Link href='/pricing'>Price</Link>
              <Link href='/editing'>Editing</Link>
              <Link href='/preset'>Presets</Link>
            </nav>

            <h2 style={{letterSpacing:'4px',fontFamily:'MyCustomFont'}} className="text-4xl md:text-5xl">BLACKFRAME PICTURES</h2>
    </nav>
  )
}
