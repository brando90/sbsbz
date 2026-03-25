/* ==========================================================
   SBSBZ Navbar — Fluid Rhythm Design
   Transparent → frosted glass on scroll
   ========================================================== */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome || menuOpen
          ? "bg-[oklch(0.975_0.012_75/0.95)] backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.015_75)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-bold text-xl tracking-tight"
                style={{
                  color: scrolled || !isHome || menuOpen ? "oklch(0.18 0.015 65)" : "oklch(0.99 0.005 75)",
                  fontFamily: "var(--font-display)",
                }}
              >
                SBSBZ
              </span>
              <span
                className="text-[10px] font-body font-medium tracking-widest uppercase"
                style={{
                  color: scrolled || !isHome || menuOpen ? "oklch(0.62 0.19 22)" : "oklch(0.99 0.005 75/0.8)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Stanford Dance
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium font-body transition-colors duration-200 group ${
                  location === link.href
                    ? "text-[oklch(0.62_0.19_22)]"
                    : scrolled || !isHome
                    ? "text-[oklch(0.35_0.015_65)] hover:text-[oklch(0.62_0.19_22)]"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left ${
                    location === link.href ? "scale-x-100 bg-[oklch(0.62_0.19_22)]" : "scale-x-0 bg-[oklch(0.62_0.19_22)] group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <a
              href="https://www.instagram.com/sbsbz/"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 p-2 rounded-full transition-all duration-200 ${
                scrolled || !isHome
                  ? "text-[oklch(0.52_0.015_65)] hover:text-[oklch(0.62_0.19_22)] hover:bg-[oklch(0.62_0.19_22/0.08)]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome || menuOpen
                ? "text-[oklch(0.18_0.015_65)] hover:bg-[oklch(0.93_0.015_75)]"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location === link.href
                  ? "bg-[oklch(0.62_0.19_22/0.1)] text-[oklch(0.48_0.18_22)]"
                  : "text-[oklch(0.35_0.015_65)] hover:bg-[oklch(0.93_0.015_75)]"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/sbsbz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-[oklch(0.35_0.015_65)] hover:bg-[oklch(0.93_0.015_75)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Instagram size={16} />
            Instagram @sbsbz
          </a>
        </div>
      </div>
    </nav>
  );
}
