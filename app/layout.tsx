import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLACKFRAME PICTURES",
  description:
    "Experience cinematic excellence with our video production team. From concept to final cut, we specialize in bringing your vision to life. Our talented team ensures top-notch quality, creativity and innovation in every frame. Elevate your brand with compelling visuals - choose us for for unparalleled video production expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="author" content="Your Creator Name" />
        <meta name="web designer" content="Vishnu V S" />
        <meta name="web-developer" content="Vishnu V S" />
        <meta name="client" content="blackframe pictures" />
        <meta name="company" content="blackframe pictures" />
        <meta
          name="description"
          content="Experience cinematic excellence with our video production team.
              From concept to final cut, we specialize in bringing your vision
              to life. Our talented team ensures top-notch quality, creativity,
              and innovation in every frame. Elevate your brand with compelling
              visuals - choose us for unparalleled video production expertise."
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
