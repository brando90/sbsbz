/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Footer: Deep charcoal with warm amber accents. Minimal, elegant.
 */
import { Link } from "wouter";
import { Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-cream mb-3">SBSBZ</h3>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Stanford Bachata Sensual & Brazilian Zouk. Inspiring the Stanford
              community through connection, technique, and creative expression.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-amber mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/classes", label: "Classes" },
                { href: "/events", label: "Events" },
                { href: "/join", label: "Join Us" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-cream/60 hover:text-amber text-sm transition-colors duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-amber mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/stanford_bachata_sensual_zouk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-amber text-sm transition-colors duration-300"
              >
                <Instagram size={16} />
                @stanford_bachata_sensual_zouk
              </a>
              <a
                href="mailto:sbsbz.su@gmail.com"
                className="flex items-center gap-2 text-cream/60 hover:text-amber text-sm transition-colors duration-300"
              >
                <Mail size={16} />
                sbsbz.su@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} SBSBZ &mdash; Stanford University. Non-profit & student-run.
          </p>
          <p className="text-cream/40 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-burgundy" /> at Stanford
          </p>
        </div>
      </div>
    </footer>
  );
}
