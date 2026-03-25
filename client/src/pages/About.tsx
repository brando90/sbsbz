/* ==========================================================
   SBSBZ About Page — Fluid Rhythm Design
   ========================================================== */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Heart, Users, Star, Shield } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-community-a7pW75M9DnwKAbFPZKhXN5.webp";
const CLASS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-class-5GyBDdVFmVuH9D9ABTWsL3.webp";

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

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.012 75)" }}>
      <Navbar />

      {/* Page header */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "oklch(0.18 0.015 65)" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
          >
            About SBSBZ
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A community built on
            <em className="block" style={{ color: "oklch(0.75 0.15 22)" }}>connection & dance</em>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="oklch(0.975 0.012 75)" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
              >
                Our Mission
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                It is our mission to inspire the Stanford community to engage with social dance and have connected, deep, meaningful dances while at the same time understanding the mechanics of elegant technique.
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                We are founded with the principle that the most fulfilling way to social dance is a combination of deep connection and awareness of excellent technique, with space for the creative expression of music.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                Our mission is to inspire you to co-create a dance experience with any lead and follow. The group will always remain <strong>non-profit and Stanford student-run</strong>.
              </p>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="relative">
                <div
                  className="absolute -top-4 -right-4 w-full h-full rounded-2xl"
                  style={{ background: "oklch(0.62 0.19 22 / 0.1)" }}
                />
                <img
                  src={COMMUNITY_IMG}
                  alt="SBSBZ community"
                  className="relative rounded-2xl w-full h-80 object-cover shadow-xl"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Bachata Sensual */}
      <section className="py-20 md:py-24" style={{ background: "oklch(0.94 0.01 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection delay={150}>
              <div className="relative order-2 lg:order-1">
                <img
                  src={CLASS_IMG}
                  alt="Bachata class at Stanford"
                  className="rounded-2xl w-full h-80 object-cover shadow-xl"
                />
              </div>
            </RevealSection>
            <RevealSection className="order-1 lg:order-2">
              <span className="dance-tag dance-tag-bachata mb-4 inline-block">Bachata Sensual</span>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
              >
                The art of Bachata Sensual
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                Bachata Sensual was created by renowned artists <strong>Korke and Judith</strong> — a dance tested and based on solid follow and lead principles of natural motions of energy and how to use this energy with your partner.
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                It is a close dance that emphasizes full mind, body, and soul connection. Through body waves, boleros, dips, and the subtle language of touch, dancers co-create a shared experience in real time.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                Our focus is the Stanford community — fostering a healthy environment where members grow as dancers and as people. No prior experience required to join.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.975 0.012 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div className="text-center mb-16">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                Our Principles
              </div>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
              >
                How we operate
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Non-Profit", desc: "All fees from non-Stanford guests are reinvested into the group to fund events and sustain our community." },
              { icon: Users, title: "Student-Run", desc: "Organized and led entirely by Stanford students, for the Stanford community." },
              { icon: Star, title: "Free for Stanford", desc: "Always free for Stanford students, post-docs, professors, and active affiliates." },
              { icon: Shield, title: "Safe Space", desc: "We maintain clear community standards to ensure a welcoming, respectful environment for all dancers." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <RevealSection key={title} delay={i * 80}>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{ background: "oklch(0.94 0.01 75)", border: "1px solid oklch(0.88 0.015 75)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "oklch(0.62 0.19 22 / 0.12)" }}
                  >
                    <Icon size={18} style={{ color: "oklch(0.62 0.19 22)" }} />
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                  >
                    {desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(0.94 0.01 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <RevealSection>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              Come dance with us
            </h2>
            <p
              className="text-base mb-8 max-w-md mx-auto"
              style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
            >
              Every Wednesday evening at EVGR C Dance Room. No experience needed.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "oklch(0.62 0.19 22)",
                color: "white",
                fontFamily: "var(--font-body)",
              }}
            >
              Get involved
              <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
