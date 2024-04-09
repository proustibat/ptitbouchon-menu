"use client";
import { Lora } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LocaleSwitcher from "@/app/[lang]/components/LocaleSwitcher";
import { useRouter, usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const lora = Lora({ subsets: ["latin"] });
// export const metadata = {
//   title: "La carte du P'tit Bouchon",
// };

export default function RootLayout({ children, params: { lang } }) {
  const router = useRouter();
  const pathName = usePathname();

  // console.log("LAYOUT:", pathName);

  const handleBack = () => {
    router.back();
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <html
      lang={lang}
      className="bg-gray-100"
      title={`${lang === "fr" ? "La carte du P'tit Bouchon" : "Le P'tit Bouchon Menu"}`}
    >
      <head>
        <title>{`${lang === "fr" ? "La carte du P'tit Bouchon" : "Le P'tit Bouchon Menu"}`}</title>
        <meta charSet="UTF-8" />
      </head>
      <body className={`${lora.className}`}>
        <nav className="bg-slate-700 p-5 sticky top-0 z-10 flex flex-row">
          <div
            onClick={handleBack}
            className="w-20 text-left flex items-center justify-start text-white"
          >
            {pathName !== `/${lang}` && <span>←</span>}
          </div>
          <div className="w-auto flex items-center" onClick={goHome}>
            <h1 className="block text-2xl text-white text-center uppercase font-bold">
              {`${lang === "fr" ? "La carte du P'tit Bouchon" : "Le P'tit Bouchon Menu"}`}
            </h1>
          </div>
          <div className="text-right flex items-center justify-end">
            <LocaleSwitcher currentLang={lang} />
          </div>
        </nav>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
