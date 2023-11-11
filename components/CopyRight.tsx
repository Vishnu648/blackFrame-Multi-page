import Link from "next/link";

export default function CopyRight() {
  return (
    <div className="h-[80vh] w-full bg-[#e9ecef] flex justify-center text-black p-6">
      <div className="w-full mx-auto p-6 rounded-md shadow-md flex flex-col justify-between">
        <table
          style={{ borderStyle: "none", textAlign: "left" }}
          className="w-full table-auto"
        >
          <thead>
            <tr>
              <th className="flex items-center" style={{ width: "100%" }}>
                <p
                  style={{
                    fontFamily: "myCustomFont",
                    letterSpacing: "3px",
                    fontSize: "30px",
                  }}
                >
                  BLACKFRAME PICTURES
                </p>
              </th>
              <th className="py-2" style={{ textAlign: "center" }}>
                CONTENT
              </th>
              <th className="py-2">CONNECT WITH US</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2" style={{ fontFamily: "myIphoneFont" }}>
                "Experience cinematic excellence with our video production team.
                From concept to final cut, we specialize in bringing your vision
                to life. Our talented team ensures top-notch quality,
                creativity, and innovation in every frame. Elevate your brand
                with compelling visuals – choose us for unparalleled video
                production expertise."
              </td>
              <td style={{ textAlign: "center" }}>Tutorial</td>
              <td className="flex  items-center gap-2">
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
              </td>
            </tr>
            <tr>
              <td className="py-2"></td>
              <td className="py-2"></td>
              <td className="py-2"></td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between">
          <p>© 2023 vishnu. All rights reserved.</p>
          <Link href='/terms'>terms and conditions</Link>
        </div>
      </div>
    </div>
  );
}
