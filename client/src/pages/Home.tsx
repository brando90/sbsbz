/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Home: Full-bleed hero with real SBSBZ dance photos, diagonal transitions,
 * warm amber/burgundy accents on deep charcoal.
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Music, Users, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

/* Real SBSBZ photos from Google Drive */
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/IMG-20260209-WA0007_0b11703e.jpg";
const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/IMG-20260209-WA0004_d0cb47fc.jpg";
const CLASSES_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/ig-post5_485f39af.jpg";
const ZOUK_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/ig-post3_f2e47c60.jpg";
const INSTRUCTORS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/WhatsApp%20Image%202026-02-05%20at%2010.34.47%20PM_10db0395.jpeg";

/* Instructor bio card images */
const BRANDO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/brando-stef-dance-pic_c1e4e7f5.jpg";
const FONTAINE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/ig-fontaine_c3ea7eb9.jpg";
const NATALIA_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/WhatsApp%20Image%202025-12-04%20at%2010.00.16%20AM_d3085849.jpeg";
const KRISS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/WhatsApp%20Image%202025-12-11%20at%2010.48.57%20AM_9686d3fc.jpeg";

const instructors = [
  {
    name: "Brando",
    role: "Zouk Teacher",
    bio: "Born in Mexico City. AI researcher at Stanford. Fave zouk music: Firestone (Kygo).",
    img: BRANDO_IMG,
  },
  {
    name: "Fontaine",
    role: "Zouk Teacher",
    bio: "Born in Texas, Stanford undergrad. Startup Founder. Fave zouk music: chill & flowy.",
    img: FONTAINE_IMG,
  },
  {
    name: "Kriss",
    role: "Bachata Teacher",
    bio: "2x Poland Bachata Champion. Fave bachata: I Want It That Way (DJ Alejandro).",
    img: KRISS_IMG,
  },
  {
    name: "Natalia",
    role: "Bachata Teacher",
    bio: "PhD in Cancer Research. Fave bachata: Sin Fin (Romeo Santos & Justin Timberlake).",
    img: NATALIA_IMG,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden film-grain">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="SBSBZ members dancing Bachata at a social"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>

        {/* Hero content — left-aligned */}
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-amber font-medium tracking-[0.2em] uppercase text-sm mb-4"
            >
              Stanford University
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] mb-6"
            >
              Bachata Sensual
              <br />
              <span className="text-amber">&</span> Brazilian Zouk
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-cream/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Connection. Technique. Creative expression. Join the Stanford
              community in discovering the art of partner dance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-amber text-charcoal hover:bg-amber-light font-semibold tracking-wide px-8"
                >
                  Join Us <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/classes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream/30 text-cream hover:bg-cream/10 tracking-wide px-8"
                >
                  View Classes
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-amber rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="py-24 md:py-32 bg-charcoal relative">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl md:text-5xl text-cream"
            >
              Dance with Purpose
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Music,
                title: "Bachata Sensual",
                desc: "A close dance emphasizing full mind, body, and soul connection — created by Korke & Judith.",
              },
              {
                icon: Sparkles,
                title: "Brazilian Zouk",
                desc: "Flowing, creative partner dance known for its beautiful head movements and musicality.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "A welcoming space for all levels. No prior dance experience needed to join our classes.",
              },
              {
                icon: Calendar,
                title: "Weekly Classes",
                desc: "Zouk Wednesdays 7:30 PM, Bachata Thursdays 7 PM. Free for Stanford affiliates. Social dancing after every class.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group bg-charcoal-light border border-border/40 rounded-lg p-6 hover:border-amber/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-4 group-hover:bg-amber/20 transition-colors duration-500">
                  <item.icon size={24} className="text-amber" />
                </div>
                <h3 className="font-display text-xl text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW — diagonal top ===== */}
      <section className="diagonal-top relative bg-charcoal-light overflow-hidden">
        <div className="container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={COMMUNITY_IMG}
                  alt="SBSBZ members at the Chicago Salsa & Bachata Festival"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              {/* Decorative warm gradient border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-amber/20 rounded-lg -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
              >
                Our Mission
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-3xl md:text-4xl text-cream mb-6"
              >
                Connection Through Dance
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-cream/70 leading-relaxed mb-4"
              >
                It is our mission to inspire the Stanford community to engage
                with social dance and have connected, deep, meaningful dances
                while understanding the mechanics of elegant technique.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-cream/70 leading-relaxed mb-8"
              >
                Founded in 2022, we believe the most fulfilling way to social
                dance is a combination of deep connection and awareness of
                excellent technique, with space for the creative expression of
                music.
              </motion.p>
              <motion.div variants={fadeUp} custom={4}>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-amber/40 text-amber hover:bg-amber/10 tracking-wide"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CLASSES PREVIEW ===== */}
      <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text — left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
              >
                Classes
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-3xl md:text-4xl text-cream mb-6"
              >
                Learn at Every Level
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-cream/70 leading-relaxed mb-6"
              >
                Whether you are stepping onto the dance floor for the first
                time or refining advanced techniques, our classes are designed
                to meet you where you are. No partner or experience required.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="space-y-4 mb-8"
              >
                {[
                  { label: "Wednesday — Zouk", time: "7:30–8:45 PM + Social 8:45–10:30 PM" },
                  { label: "Thursday — Bachata Sensual", time: "7:00–9:00 PM + Social 9:00–10:00 PM" },
                ].map((cls) => (
                  <div
                    key={cls.label}
                    className="flex items-center justify-between border-b border-border/30 pb-3"
                  >
                    <span className="text-cream/90 font-medium">
                      {cls.label}
                    </span>
                    <span className="text-amber/80 text-sm">{cls.time}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <Link href="/classes">
                  <Button className="bg-burgundy text-cream hover:bg-burgundy-light tracking-wide">
                    View Full Schedule <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image — right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  src={CLASSES_IMG}
                  alt="SBSBZ members dancing at a social"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-charcoal/30 to-transparent" />
              </div>
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-burgundy/20 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTORS ===== */}
      <section className="diagonal-top relative bg-charcoal-light overflow-hidden">
        <div className="container py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
            >
              Meet Our Teachers
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Our Instructors
            </motion.h2>
          </motion.div>

          {/* Kriss & Natalia / Brando & Elisabeth promo photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md mx-auto mb-14 rounded-lg overflow-hidden"
          >
            <img
              src={INSTRUCTORS_IMG}
              alt="Kriss and Natalia — Bachata instructors"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {instructors.map((inst, i) => (
              <motion.div
                key={inst.name}
                variants={fadeUp}
                custom={i}
                className="group bg-charcoal border border-border/40 rounded-lg overflow-hidden hover:border-amber/40 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={inst.img}
                    alt={`${inst.name} — ${inst.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-cream">
                    {inst.name}
                  </h3>
                  <p className="text-amber text-sm font-medium mb-2">
                    {inst.role}
                  </p>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {inst.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ZOUK IMAGE BREAK ===== */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={ZOUK_IMG}
          alt="SBSBZ members dancing Brazilian Zouk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl text-cream text-center px-4"
          >
            Everyone is <span className="text-amber">Welcome</span>
          </motion.p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="container py-20 md:py-28 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
            >
              Ready to <span className="text-amber">Dance</span>?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-cream/70 text-lg max-w-xl mx-auto mb-8"
            >
              No experience needed. No partner required. Free for Stanford
              affiliates. Just bring yourself and an open mind.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-amber text-charcoal hover:bg-amber-light font-semibold tracking-wide px-10"
                >
                  Join SBSBZ
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream/30 text-cream hover:bg-cream/10 tracking-wide px-10"
                >
                  Upcoming Events
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
