"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/praxis", label: "Praxis" },
  { href: "/methoden", label: "Methoden" },
  { href: "/indikationen", label: "Indikationen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/aktuelles", label: "Aktuelles" },
  { href: "/raum", label: "Raum" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stein-linie bg-stein/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo Praxisgemeinschaft Wasserschloss"
            width={44}
            height={48}
            priority
          />
          <span className="font-display text-lg leading-tight font-semibold tracking-tight text-wasser md:text-xl">
            Wasserschloss
            <span className="block font-body text-xs font-normal tracking-wide text-salbei-tief md:text-sm">
              Zentrum für Naturmedizin · Turgi
            </span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-base font-medium underline-offset-8 transition-colors hover:text-tuerkis ${
                      active
                        ? "text-tuerkis underline decoration-2"
                        : "text-tinte"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-stein-linie lg:hidden"
        >
          <span className="sr-only">{open ? "Menü schliessen" : "Menü öffnen"}</span>
          <span
            className={`h-0.5 w-6 bg-wasser transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-wasser transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation mobil"
          className="border-t border-stein-linie bg-stein-hell lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-4">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-xl font-medium ${
                      active ? "text-tuerkis" : "text-tinte"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
