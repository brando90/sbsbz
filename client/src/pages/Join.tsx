/* ==========================================================
   SBSBZ Join Page — Fluid Rhythm Design
   ========================================================== */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram, MessageCircle, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const ABSTRACT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-abstract-RNUvLdtxMuN63mTu8Ghuxm.webp";

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

const channels = [
  {
    icon: Instagram,
    title: "Instagram",
    handle: "@sbsbz",
    desc: "Follow us for class announcements, event photos, and community updates.",
    href: "https://www.instagram.com/sbsbz/",
    cta: "Follow on Instagram",
    color: "oklch(0.62 0.19 22)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Group",
    handle: "SBSBZ Community",
    desc: "Join our WhatsApp group for weekly class location updates and community chat.",
    href: "https://linktr.ee/ultimate_brando9",
    cta: "Join via Linktree",
    color: "oklch(0.55 0.12 145)",
  },
  {
    icon: Mail,
    title: "Email",
    handle: "sbsbz@stanford.edu",
    desc: "Have questions? Reach out to us directly by email.",
    href: "mailto:sbsbz@stanford.edu",
    cta: "Send an email",
    color: "oklch(0.45 0.08 260)",
  },
];

const steps = [
  {
    number: "01",
    title: "Just show up",
    desc: "Come to EVGR C Dance Room any Wednesday at 7 PM. No registration, no prior experience needed.",
  },
  {
    number: "02",
    title: "Take a class",
    desc: "Start with Fundamentals I — our beginner-friendly class that covers the basics of Bachata Sensual.",
  },
  {
    number: "03",
    title: "Stay for the social",
    desc: "After class, stay for the social/practica from 9–10 PM and dance with the community.",
  },
  {
    number: "04",
    title: "Join our channels",
    desc: "Follow our Instagram and join our WhatsApp group to stay connected and never miss a class.",
  },
];

export default function Join() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.012 75)" }}>
      <Navbar />

      {/* Header */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "oklch(0.18 0.015 65)" }}
      >
        <div className="absolute inset-0 opacity-20">
          <img src={ABSTRACT_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
          >
            Join SBSBZ
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start your
            <em className="block" style={{ color: "oklch(0.75 0.15 22)" }}>dance journey</em>
          </h1>
          <p
            className="text-base mt-6 max-w-lg"
            style={{ color: "oklch(0.7 0.01 75)", fontFamily: "var(--font-body)" }}
          >
            No experience needed. No registration required. Just come on Wednesday evening and we'll take care of the rest.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="oklch(0.975 0.012 75)" />
          </svg>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              How to join
            </div>
            <h2
              className="text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              Four simple steps
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <RevealSection key={step.number} delay={i * 80}>
                <div
                  className="p-6 rounded-2xl h-full relative"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                  }}
                >
                  <div
                    className="text-5xl font-bold mb-4 leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.62 0.19 22 / 0.15)" }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-16" style={{ background: "oklch(0.94 0.01 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "oklch(0.18 0.015 65)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Clock, title: "When", lines: ["Every Wednesday", "7:00 – 10:00 PM"] },
                  { icon: MapPin, title: "Where", lines: ["EVGR C Dance Room", "Stanford University"] },
                  { icon: CheckCircle, title: "Cost", lines: ["Free for Stanford students", "$5 honor system for guests"] },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "oklch(0.62 0.19 22 / 0.2)" }}
                    >
                      <Icon size={18} style={{ color: "oklch(0.75 0.15 22)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold tracking-widest uppercase mb-1"
                        style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                      >
                        {title}
                      </div>
                      {lines.map((line) => (
                        <div
                          key={line}
                          className="text-sm text-white"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Communication channels */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.975 0.012 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Stay Connected
            </div>
            <h2
              className="text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              Find us online
            </h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <RevealSection key={channel.title} delay={i * 100}>
                  <div
                    className="p-8 rounded-2xl h-full flex flex-col"
                    style={{
                      background: "oklch(0.99 0.008 75)",
                      border: "1px solid oklch(0.88 0.015 75)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${channel.color} / 0.1`, backgroundColor: `oklch(from ${channel.color} l c h / 0.1)` }}
                    >
                      <Icon size={22} style={{ color: channel.color }} />
                    </div>
                    <div
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: channel.color, fontFamily: "var(--font-body)" }}
                    >
                      {channel.title}
                    </div>
                    <div
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                    >
                      {channel.handle}
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-6 flex-1"
                      style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                    >
                      {channel.desc}
                    </p>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                      style={{ color: channel.color, fontFamily: "var(--font-body)" }}
                    >
                      {channel.cta}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Linktree */}
      <section className="py-16" style={{ background: "oklch(0.94 0.01 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <RevealSection>
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              All links in one place
            </h2>
            <p
              className="text-sm mb-6 max-w-sm mx-auto"
              style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
            >
              Visit our Linktree for all communication channels, class schedules, and community resources.
            </p>
            <a
              href="https://linktr.ee/ultimate_brando9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: "oklch(0.62 0.19 22)",
                color: "white",
                fontFamily: "var(--font-body)",
              }}
            >
              Visit our Linktree
              <ArrowRight size={16} />
            </a>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
