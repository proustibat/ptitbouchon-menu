"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";

export default function LocaleSwitcher({ currentLang }) {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const getAsciiIcon = (locale) => {
    return { fr: "🇫🇷", en: "🇺🇸" }[locale];
  };

  return (
    <ul>
      {i18n.locales
        .filter((locale) => locale !== currentLang)
        .map((locale) => {
          return (
            <li key={locale} className="text-2xl">
              <Link
                className="inline-block pl-3 pr-2 py-2 text-right"
                href={redirectedPathName(locale)}
              >
                {getAsciiIcon(locale)}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
