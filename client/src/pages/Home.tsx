/* ==========================================================
   SBSBZ Home Page — Fluid Rhythm Design
   Sections: Hero, About, Dances, Classes, Events, Join CTA
   ========================================================== */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, MapPin, Clock, Users, Music, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-hero-9V6BxWvPmVJEcRnRcxpps6.webp";
const ZOUK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-zouk-D8g3VyFndxPWyGR6jDsnN5.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-community-a7pW75M9DnwKAbFPZKhXN5.webp";
const CLASS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-class-5GyBDdVFmVuH9D9ABTWsL3.webp";
const ABSTRACT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-abstract-RNUvLdtxMuN63mTu8Ghuxm.webp";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.012 75)" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Bachata dance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, oklch(0.12 0.015 65 / 0.85) 0%, oklch(0.12 0.015 65 / 0.5) 60%, oklch(0.12 0.015 65 / 0.2) 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "oklch(0.62 0.19 22 / 0.2)",
                border: "1px solid oklch(0.62 0.19 22 / 0.4)",
                color: "oklch(0.9 0.08 22)",
                fontFamily: "var(--font-body)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.19_22)] animate-pulse" />
              Stanford University · Est. 2024
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dance with your
              <br />
              <em className="not-italic" style={{ color: "oklch(0.75 0.15 22)" }}>whole soul</em>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: "oklch(0.9 0.01 75)", fontFamily: "var(--font-body)" }}
            >
              Stanford's community for Bachata Sensual and Brazilian Zouk — where deep connection meets elegant technique. Free classes every Wednesday.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "oklch(0.62 0.19 22)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 24px oklch(0.62 0.19 22 / 0.4)",
                }}
              >
                Join the community
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/20"
                style={{
                  border: "1.5px solid oklch(1 0 0 / 0.4)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  backdropFilter: "blur(8px)",
                }}
              >
                See classes
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { value: "Free", label: "For Stanford students" },
                { value: "Wed", label: "Weekly classes" },
                { value: "2+", label: "Dance styles" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-wide mt-0.5"
                    style={{ color: "oklch(0.75 0.01 75)", fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <div className="w-1 h-1 rounded-full bg-white/50" />
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.975 0.012 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <RevealSection>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                Our Mission
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
              >
                Connection through
                <br />
                <em style={{ color: "oklch(0.62 0.19 22)" }}>movement</em>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                We are a student-run community at Stanford dedicated to social dance that is deep, connected, and technically beautiful. Our mission is to inspire you to co-create a dance experience with any partner.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                We do this through Bachata Sensual — a close dance emphasizing full mind, body, and soul connection — and Brazilian Zouk, known for its flowing, wave-like movements. Always non-profit and Stanford student-run.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                Learn more about us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </RevealSection>

            {/* Image */}
            <RevealSection delay={150}>
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                  style={{ background: "oklch(0.62 0.19 22 / 0.12)" }}
                />
                <img
                  src={COMMUNITY_IMG}
                  alt="SBSBZ community dancing"
                  className="relative rounded-2xl w-full h-80 md:h-96 object-cover shadow-xl"
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-5 -right-5 px-5 py-4 rounded-xl shadow-lg"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs tracking-wide"
                    style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                  >
                    Free for Stanford
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── TWO DANCES ── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "oklch(0.94 0.01 75)" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div className="text-center mb-16">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                What We Dance
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
              >
                Two styles, one community
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bachata card */}
            <RevealSection delay={0}>
              <div
                className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer"
                style={{ boxShadow: "0 8px 40px oklch(0.18 0.015 65 / 0.12)" }}
              >
                <img
                  src={CLASS_IMG}
                  alt="Bachata Sensual"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, oklch(0.12 0.015 65 / 0.85) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="dance-tag dance-tag-bachata mb-3 inline-block">Bachata Sensual</span>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Bachata Sensual
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.82 0.01 75)", fontFamily: "var(--font-body)" }}
                  >
                    Created by Korke & Judith — a close dance emphasizing body waves, connection, and the creative expression of music.
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Zouk card */}
            <RevealSection delay={150}>
              <div
                className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer"
                style={{ boxShadow: "0 8px 40px oklch(0.18 0.015 65 / 0.12)" }}
              >
                <img
                  src={ZOUK_IMG}
                  alt="Brazilian Zouk"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, oklch(0.12 0.015 65 / 0.85) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="dance-tag dance-tag-zouk mb-3 inline-block">Brazilian Zouk</span>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Brazilian Zouk
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.82 0.01 75)", fontFamily: "var(--font-body)" }}
                  >
                    Known for its flowing, wave-like movements and deep connection — a dance that feels like music made visible.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── WEEKLY CLASS ── */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.975 0.012 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <RevealSection>
              <div className="relative">
                <img
                  src={ABSTRACT_IMG}
                  alt="Dance movement abstract"
                  className="rounded-2xl w-full h-72 md:h-80 object-cover"
                />
                {/* Schedule card */}
                <div
                  className="absolute -bottom-6 left-6 right-6 p-6 rounded-xl shadow-xl"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                  }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Calendar, label: "Day", value: "Wednesday" },
                      { icon: Clock, label: "Time", value: "7–10 PM" },
                      { icon: MapPin, label: "Location", value: "EVGR C" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="text-center">
                        <Icon size={18} className="mx-auto mb-1.5" style={{ color: "oklch(0.62 0.19 22)" }} />
                        <div
                          className="text-xs uppercase tracking-wide"
                          style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                        >
                          {label}
                        </div>
                        <div
                          className="text-sm font-semibold mt-0.5"
                          style={{ color: "oklch(0.18 0.015 65)", fontFamily: "var(--font-body)" }}
                        >
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Text */}
            <RevealSection delay={150}>
              <div className="pt-8 lg:pt-0">
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                >
                  Weekly Classes
                </div>
                <h2
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                >
                  Every Wednesday,
                  <br />
                  <em style={{ color: "oklch(0.62 0.19 22)" }}>come dance</em>
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    {
                      time: "7:00 – 8:00 PM",
                      title: "Fundamentals I",
                      desc: "Beginner-friendly Bachata Sensual — body waves, basic connection, and the joy of dance.",
                    },
                    {
                      time: "8:00 – 9:00 PM",
                      title: "Fundamentals II",
                      desc: "Intermediate techniques — advanced body waves, dips, and partner work.",
                    },
                    {
                      time: "9:00 – 10:00 PM",
                      title: "Social / Practica",
                      desc: "Free social dancing — practice what you've learned and connect with the community.",
                    },
                  ].map((item) => (
                    <div
                      key={item.time}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ background: "oklch(0.94 0.01 75)" }}
                    >
                      <div
                        className="text-xs font-mono font-medium shrink-0 mt-0.5 w-24"
                        style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                      >
                        {item.time}
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold mb-0.5"
                          style={{ color: "oklch(0.18 0.015 65)", fontFamily: "var(--font-body)" }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/classes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: "oklch(0.62 0.19 22)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  View full class schedule
                  <ArrowRight size={16} />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.18 0.015 65)" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div className="text-center mb-16">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                Our Values
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What we stand for
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Deep Connection",
                desc: "We believe the most fulfilling social dance comes from genuine mind, body, and soul connection with your partner.",
              },
              {
                icon: Music,
                title: "Musical Expression",
                desc: "Dance is music made visible. We cultivate sensitivity to rhythm, melody, and the creative space between partners.",
              },
              {
                icon: Users,
                title: "Inclusive Community",
                desc: "Always free for Stanford students. We foster a healthy, welcoming environment where everyone can grow as a dancer.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <RevealSection key={title} delay={0}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.08)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "oklch(0.62 0.19 22 / 0.15)" }}
                  >
                    <Icon size={22} style={{ color: "oklch(0.75 0.15 22)" }} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.65 0.01 75)", fontFamily: "var(--font-body)" }}
                  >
                    {desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: "oklch(0.975 0.012 75)" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <RevealSection>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Ready to dance?
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              Your first dance is
              <br />
              <em style={{ color: "oklch(0.62 0.19 22)" }}>waiting for you</em>
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
            >
              No experience needed. Just show up on Wednesday evening and we'll take care of the rest. Free for all Stanford students and affiliates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "oklch(0.62 0.19 22)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 24px oklch(0.62 0.19 22 / 0.35)",
                }}
              >
                Join our community
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.instagram.com/sbsbz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  border: "1.5px solid oklch(0.88 0.015 75)",
                  color: "oklch(0.35 0.015 65)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Follow @sbsbz
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
