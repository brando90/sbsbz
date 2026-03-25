/* ==========================================================
   SBSBZ Classes Page — Fluid Rhythm Design
   ========================================================== */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, MapPin, DollarSign, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

const CLASS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/2SfSAdoJFhgMEYGNqBnyxz/sbsbz-class-5GyBDdVFmVuH9D9ABTWsL3.webp";
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

const schedule = [
  {
    time: "7:00 – 8:00 PM",
    title: "Fundamentals I — Beginner",
    style: "Bachata Sensual",
    tag: "bachata",
    desc: "Perfect for first-timers. We cover the basic step, body awareness, and the foundational principles of connection in Bachata Sensual. No partner needed — we rotate!",
    topics: ["Basic step & timing", "Body awareness & posture", "Lead & follow fundamentals", "Body waves introduction"],
  },
  {
    time: "8:00 – 9:00 PM",
    title: "Fundamentals II — Intermediate",
    style: "Bachata Sensual",
    tag: "bachata",
    desc: "For those with some Bachata experience. We explore more advanced body mechanics, partner work, and musicality.",
    topics: ["Advanced body waves & reverse waves", "Dips and boleros", "Pinza & impulso", "Musical interpretation"],
  },
  {
    time: "9:00 – 10:00 PM",
    title: "Social / Practica",
    style: "All styles",
    tag: "social",
    desc: "Open social dancing — practice what you've learned, meet new people, and enjoy the music. Brazilian Zouk also welcome!",
    topics: ["Free social dancing", "Practice with partners", "Community connection", "Brazilian Zouk welcome"],
  },
];

const fundamentals = [
  "Turn", "Body roll (reverse, pendulum)", "Side body roll", "Lateral body roll",
  "Bolero", "Impulso", "Pinza", "Slide", "Counter hips", "Vertical culito",
  "Hip Throw", "Paseala", "Head roll", "Cambre", "Completo",
  "Media (step tap step tap)", "Maton", "Dips",
];

export default function Classes() {
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
            Classes & Schedule
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Learn to dance,
            <em className="block" style={{ color: "oklch(0.75 0.15 22)" }}>every Wednesday</em>
          </h1>
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: Clock, text: "7:00 – 10:00 PM" },
              { icon: MapPin, text: "EVGR C Dance Room" },
              { icon: DollarSign, text: "Free for Stanford students" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm"
                style={{ color: "oklch(0.75 0.01 75)", fontFamily: "var(--font-body)" }}
              >
                <Icon size={15} style={{ color: "oklch(0.62 0.19 22)" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0 C360 60 1080 60 1440 0 L1440 60 L0 60 Z" fill="oklch(0.975 0.012 75)" />
          </svg>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
            >
              Weekly Schedule
            </div>
            <h2
              className="text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
            >
              What to expect each week
            </h2>
          </RevealSection>

          <div className="space-y-6">
            {schedule.map((item, i) => (
              <RevealSection key={item.title} delay={i * 100}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                    boxShadow: "0 2px 16px oklch(0.18 0.015 65 / 0.06)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Time */}
                    <div
                      className="p-6 md:p-8 flex flex-col justify-center"
                      style={{ background: "oklch(0.94 0.01 75)", borderRight: "1px solid oklch(0.88 0.015 75)" }}
                    >
                      <div
                        className="text-xs font-mono font-semibold tracking-wide mb-2"
                        style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                      >
                        {item.time}
                      </div>
                      <div
                        className="text-xl font-bold"
                        style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                      >
                        {item.title}
                      </div>
                      <span
                        className={`dance-tag mt-3 inline-block w-fit ${
                          item.tag === "bachata" ? "dance-tag-bachata" : item.tag === "zouk" ? "dance-tag-zouk" : "dance-tag-social"
                        }`}
                      >
                        {item.style}
                      </span>
                    </div>
                    {/* Description */}
                    <div className="p-6 md:p-8 md:col-span-2">
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
                      >
                        {item.desc}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {item.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-center gap-2 text-xs"
                            style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                          >
                            <ChevronRight size={12} style={{ color: "oklch(0.62 0.19 22)" }} />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fundamentals moves */}
      <section className="py-20 md:py-24" style={{ background: "oklch(0.94 0.01 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
              >
                Curriculum
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
              >
                Bachata Sensual fundamentals
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
              >
                Our curriculum covers a comprehensive set of Bachata Sensual moves, from the basics to intermediate techniques. Each move is taught with an emphasis on connection, musicality, and the natural mechanics of the body.
              </p>
              <div className="flex flex-wrap gap-2">
                {fundamentals.map((move) => (
                  <span
                    key={move}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "oklch(0.99 0.008 75)",
                      border: "1px solid oklch(0.88 0.015 75)",
                      color: "oklch(0.35 0.015 65)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {move}
                  </span>
                ))}
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="relative">
                <img
                  src={ZOUK_IMG}
                  alt="Dance class"
                  className="rounded-2xl w-full h-80 object-cover shadow-xl"
                />
                <div
                  className="absolute -bottom-5 left-6 right-6 p-5 rounded-xl shadow-lg"
                  style={{
                    background: "oklch(0.99 0.008 75)",
                    border: "1px solid oklch(0.88 0.015 75)",
                  }}
                >
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "oklch(0.18 0.015 65)", fontFamily: "var(--font-body)" }}
                  >
                    Pricing
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                  >
                    <strong>Free</strong> for Stanford students & active affiliates (post-docs, professors, etc.). Non-Stanford guests are asked to contribute <strong>$5</strong> per session — honor system, reinvested into the community.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.975 0.012 75)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="p-8 rounded-2xl"
                style={{ background: "oklch(0.94 0.01 75)", border: "1px solid oklch(0.88 0.015 75)" }}
              >
                <MapPin size={24} className="mb-4" style={{ color: "oklch(0.62 0.19 22)" }} />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.015 65)" }}
                >
                  EVGR C Dance Room
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.42 0.015 65)", fontFamily: "var(--font-body)" }}
                >
                  Our primary venue on Stanford campus. The location is shared on our WhatsApp group before each session.
                </p>
                <p
                  className="text-xs mb-4"
                  style={{ color: "oklch(0.52 0.015 65)", fontFamily: "var(--font-body)" }}
                >
                  <strong>Parking tip:</strong> Residential lots (E/ES) are enforced on weekdays and weekends. Visitor/commuter lots (A and C permits) are recommended.
                </p>
                <a
                  href="https://maps.app.goo.gl/NfbxfTvpLEdaGFRRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "oklch(0.62 0.19 22)", fontFamily: "var(--font-body)" }}
                >
                  Get directions
                  <ArrowRight size={14} />
                </a>
              </div>
              <div
                className="p-8 rounded-2xl"
                style={{ background: "oklch(0.18 0.015 65)" }}
              >
                <Clock size={24} className="mb-4" style={{ color: "oklch(0.62 0.19 22)" }} />
                <h3
                  className="text-xl font-bold mb-3 text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Stay connected
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.65 0.01 75)", fontFamily: "var(--font-body)" }}
                >
                  We share weekly class announcements, location updates, and community news through our communication channels. Join to stay in the loop!
                </p>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    background: "oklch(0.62 0.19 22)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Join our channels
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
