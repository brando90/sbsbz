/* ==========================================================
   SBSBZ Events Page — Fluid Rhythm Design
   ========================================================== */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, ArrowRight, Instagram } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-community-a7pW75M9DnwKAbFPZKhXN5.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-hero-9V6BxWvPmVJEcRnRcxpps6.webp";
const ZOUK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-zouk-D8g3VyFndxPWyGR6jDsnN5.webp";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const upcomingEvents = [
  {
    type: "Weekly Class",
    tag: "bachata",
    title: "Weekly Bachata & Zouk Class",
    date: "Every Wednesday",
    time: "7:00 – 10:00 PM",
    location: "EVGR C Dance Room, Stanford",
    desc: "Our regular weekly class — Fundamentals I (beginner), Fundamentals II (intermediate), and a social/practica. Free for Stanford students.",
    img: COMMUNITY_IMG,
    cta: { label: "See class details", href: "/classes" },
  },
  {
    type: "Social Event",
    tag: "social",
    title: "SBSBZ Social Dance Night",
    date: "June 21, 2025",
    time: "TBA",
    location: "Stanford Campus",
    desc: "Our upcoming social dance event — a full evening of Bachata Sensual and Brazilian Zouk with the community. Details to be announced on Instagram.",
    img: HERO_IMG,
    cta: { label: "Follow for updates", href: "https://www.instagram.com/sbsbz/", external: true },
  },
];

const pastEvents = [
  {
    title: "SBSBZ Social (November 2024)",
    date: "November 2, 2024",
    type: "Social",
    img: ZOUK_IMG,
  },
];

export default function Events() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.012 75)" }}>
      <Navbar />

      {/* Header */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "oklch(0.18 0.015 65)" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
          >
            Events
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Dance events &
            <em className="block" style={{ color: "oklch(0.75 0.15 22)" }}>socials</em>
          </h1>
          <p
            className="text-base mt-6 max-w-lg"
            style={{ color: "oklch(0.7 0.01 75)", fontFamily: "var(--font-body)" }}
          >
            From weekly classes to special social nights — here's where the SBSBZ community gathers to dance, connect, and celebrate.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="oklch(0.975 0.012 75)" />
          </svg>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Upcoming
            </div>
            <h2
              className="text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              What's coming up
            </h2>
          </RevealSection>

          <div className="space-y-8">
            {upcomingEvents.map((event, i) => (
              <RevealSection key={event.title} delay={i * 100}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                    boxShadow: "0 2px 20px oklch(0.18 0.015 65 / 0.06)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 h-56 md:h-auto">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`dance-tag ${
                              event.tag === "bachata" ? "dance-tag-bachata" : event.tag === "zouk" ? "dance-tag-zouk" : "dance-tag-social"
                            }`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                        >
                          {event.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed mb-5"
                          style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
                        >
                          {event.desc}
                        </p>
                        <div className="flex flex-wrap gap-4 mb-6">
                          {[
                            { icon: Calendar, text: event.date },
                            { icon: Clock, text: event.time },
                            { icon: MapPin, text: event.location },
                          ].map(({ icon: Icon, text }) => (
                            <div
                              key={text}
                              className="flex items-center gap-1.5 text-xs"
                              style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                            >
                              <Icon size={13} style={{ color: "oklch(0.62 0.19 22)" }} />
                              {text}
                            </div>
                          ))}
                        </div>
                      </div>
                      {event.cta.external ? (
                        <a
                          href={event.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group w-fit"
                          style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                        >
                          {event.cta.label}
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      ) : (
                        <Link
                          href={event.cta.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group w-fit"
                          style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                        >
                          {event.cta.label}
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-20 md:py-24" style={{ background: "oklch(0.94 0.01 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Past Events
            </div>
            <h2
              className="text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              Memories from the dance floor
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, i) => (
              <RevealSection key={event.title} delay={i * 100}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                  }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="dance-tag dance-tag-social mb-3 inline-block">{event.type}</span>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                    >
                      {event.date}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20" style={{ background: "oklch(0.975 0.012 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <RevealSection>
            <Instagram size={32} className="mx-auto mb-4" style={{ color: "oklch(0.62 0.19 22)" }} />
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              Stay in the loop
            </h2>
            <p
              className="text-sm mb-6 max-w-sm mx-auto"
              style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
            >
              Follow us on Instagram for real-time event announcements, class updates, and behind-the-scenes dance moments.
            </p>
            <a
              href="https://www.instagram.com/sbsbz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: "oklch(0.62 0.19 22)",
                color: "white",
                fontFamily: "var(--font-body)",
              }}
            >
              <Instagram size={16} />
              Follow @sbsbz
            </a>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
