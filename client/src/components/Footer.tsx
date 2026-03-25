/* ==========================================================
   SBSBZ Footer — Fluid Rhythm Design
   ========================================================== */

import { Instagram, Mail, MapPin, Heart } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "oklch(0.18 0.015 65)" }}
    >
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 0 L0 0 Z" fill="oklch(0.975 0.012 75)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-display font-bold text-2xl text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SBSBZ
              </span>
              <div
                className="text-xs font-medium tracking-widest uppercase mt-1"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                Stanford Dance
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.7 0.01 75)", fontFamily: "var(--font-body)" }}
            >
              Stanford Bachata Sensual & Brazilian Zouk — a student-run community dedicated to connected, meaningful social dance.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/sbsbz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: "oklch(0.62 0.19 22 / 0.15)", color: "oklch(0.62 0.19 22)" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:sbsbz@stanford.edu"
                className="p-2 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: "oklch(0.62 0.19 22 / 0.15)", color: "oklch(0.62 0.19 22)" }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/classes", label: "Classes" },
                { href: "/events", label: "Events" },
                { href: "/join", label: "Join Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "oklch(0.7 0.01 75)", fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & info */}
          <div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Find Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "oklch(0.62 0.19 22)" }} />
                <div>
                  <p className="text-sm text-white font-medium" style={{ fontFamily: "var(--font-body)" }}>EVGR C Dance Room</p>
                  <p className="text-sm mt-0.5" style={{ color: "oklch(0.7 0.01 75)", fontFamily: "var(--font-body)" }}>
                    Stanford University Campus
                  </p>
                  <a
                    href="https://maps.app.goo.gl/NfbxfTvpLEdaGFRRA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-1 inline-block transition-colors hover:text-white"
                    style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                  >
                    Get directions →
                  </a>
                </div>
              </div>
              <div className="text-sm" style={{ color: "oklch(0.7 0.01 75)", fontFamily: "var(--font-body)" }}>
                <p className="font-medium text-white">Weekly Classes</p>
                <p>Wednesdays · 7:00 – 10:00 PM</p>
                <p className="mt-1 text-xs">Always free for Stanford students & affiliates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(1 0 0 / 0.08)",
            color: "oklch(0.55 0.01 75)",
            fontFamily: "var(--font-body)",
          }}
        >
          <p>© 2025 Stanford Bachata Sensual & Brazilian Zouk. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} style={{ color: "oklch(0.62 0.19 22)" }} fill="oklch(0.62 0.19 22)" /> at Stanford
          </p>
        </div>
      </div>
    </footer>
  );
}
