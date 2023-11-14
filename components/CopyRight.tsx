import Link from "next/link";

export default function CopyRight() {
  return (
    // <div className="w-full bg-[#e9ecef] flex justify-center text-black p-6">
      <div className="w-full rounded-md shadow-md flex flex-col justify-between bg-[#e9ecef] text-black p-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 mb-32"
          style={{ fontFamily: "myIphoneFont" }}
        >
          <div className="py-2">
            <p
              style={{
                fontFamily: "myCustomFont",
                letterSpacing: "3px",
                fontSize: "30px",
              }}
            >
              BLACKFRAME PICTURES
            </p>
            <p style={{ fontFamily: "myIphoneFont" }}>
              "Experience cinematic excellence with our video production team.
              From concept to final cut, we specialize in bringing your vision
              to life. Our talented team ensures top-notch quality, creativity,
              and innovation in every frame. Elevate your brand with compelling
              visuals - choose us for unparalleled video production expertise."
            </p>
          </div>
          <div className="py-2">
            <h2 className="py-2 font-semibold lg:text-center">
              CONTENT
            </h2>
            <p className="lg:text-center">tutorial</p>
          </div>
          <div>
            <h2 className="py-2 font-semibold">CONNECT WITH US</h2>
            <div className="flex items-center">
                <a
                  href="https://www.youtube.com/channel/UCsSBb9aWfTzKWSH_Jw3BHww"
                  target="_blank"
                >
                  <img
                    src="/youtubeLogo.png"
                    alt="youtube"
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "contain",
                    }}
                  />
                </a>
                <a
                  href="https://instagram.com/black_frame_pictures?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <img
                    src="/instagramLogo.png"
                    alt="instagram"
                    style={{
                      height: "35px",
                      width: "35px",
                      objectFit: "contain",
                    }}
                  />
                </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <p>© 2023 vishnu. All rights reserved.</p>
          <Link href="/terms">terms & conditions</Link>
        </div>
      </div>
    // </div>
  );
}
