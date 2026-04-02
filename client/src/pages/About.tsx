/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * About: Mission, dance styles, instructors, and leadership team.
 */
import { motion } from "framer-motion";
import { Heart, Zap, Globe, Users, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

/* Real SBSBZ photos */
const ABOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/IMG-20260209-WA0003_c5ee2812.jpg";
const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/IMG-20260209-WA0004_d0cb47fc.jpg";
const ZOUK_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/IMG-20260209-WA0006_c8a73ca0.jpg";

const leadershipTeam = [
  {
    name: "Brando",
    role: "President & Founder",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/brando_dcc73627.webp",
  },
  {
    name: "Henry Bosch",
    role: "Vice President",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/henry_b8544d4d.webp",
  },
  {
    name: "Elizabeth",
    role: "Financial Officer",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/elizabeth_3e0dc739.png",
  },
  {
    name: "Abhinav Garg",
    role: "Social Chair",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/abhinav_75b397d4.jpeg",
  },
  {
    name: "Nick Montes",
    role: "Logistics & Operations",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/nick_01e3496a.png",
  },
  {
    name: "Lorena Oliveira",
    role: "Officer",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/lorena_new_c1e46175.png",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO BANNER ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden film-grain">
        <div className="absolute inset-0">
          <img
            src={ABOUT_IMG}
            alt="Brando dancing at a social"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="relative z-10 container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl text-cream mb-4"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            A Stanford student-run community dedicated to the art and joy of
            Bachata Sensual and Brazilian Zouk.
          </motion.p>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="font-display text-3xl md:text-4xl text-cream mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-cream/70 leading-relaxed mb-4"
              >
                It is our mission to inspire the Stanford community to engage
                with social dance and have connected, deep, meaningful dances
                while at the same time understanding the mechanics of elegant
                technique.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-cream/70 leading-relaxed mb-4"
              >
                We are founded with the principle that the most fulfilling way
                to social dance is a combination of deep connection and
                awareness of excellent technique, with space for the creative
                expression of music. Our mission is to inspire you to co-create
                a dance experience with any lead and follow.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-cream/70 leading-relaxed"
              >
                Our focus is the Stanford community and fostering a healthy
                environment for the development of our Stanford members — where
                we hope they can grow as dancers and leaders. The group will
                always remain non-profit and Stanford student-run.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                {
                  icon: Heart,
                  title: "Connection",
                  desc: "Full mind, body, and soul connection through partner dance.",
                },
                {
                  icon: Zap,
                  title: "Technique",
                  desc: "Solid lead & follow principles based on natural energy and motion.",
                },
                {
                  icon: Globe,
                  title: "Expression",
                  desc: "Space for creative musical interpretation and personal style.",
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "A welcoming, non-profit, student-run environment for growth.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="bg-charcoal-light border border-border/40 rounded-lg p-5 hover:border-amber/30 transition-all duration-500"
                >
                  <item.icon size={22} className="text-amber mb-3" />
                  <h3 className="font-display text-lg text-cream mb-1">
                    {item.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== DANCE STYLES ===== */}
      <section className="diagonal-top bg-charcoal-light py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
            >
              Our Dances
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              What We Dance
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal border border-border/40 rounded-lg p-8 hover:border-amber/30 transition-all duration-500"
            >
              <h3 className="font-display text-2xl text-amber mb-4">
                Bachata Sensual
              </h3>
              <p className="text-cream/70 leading-relaxed mb-4">
                Created by renowned artists Korke and Judith, Bachata Sensual
                is a dance tested and based on solid follow and lead principles
                of natural motions of energy and how to use this energy with
                your partner.
              </p>
              <p className="text-cream/70 leading-relaxed">
                It emphasizes a close embrace and full connection between
                partners, blending traditional Bachata footwork with body
                waves, isolations, and fluid movements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-charcoal border border-border/40 rounded-lg p-8 hover:border-burgundy/30 transition-all duration-500"
            >
              <h3 className="font-display text-2xl text-burgundy-light mb-4">
                Brazilian Zouk
              </h3>
              <p className="text-cream/70 leading-relaxed mb-4">
                Brazilian Zouk is a flowing, creative partner dance known for
                its beautiful head movements, deep connection, and musicality.
                Originating from Brazil, it has evolved into a global social
                dance phenomenon.
              </p>
              <p className="text-cream/70 leading-relaxed">
                Zouk emphasizes fluidity, body awareness, and musical
                interpretation, making it a perfect complement to Bachata
                Sensual in our curriculum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY IMAGE BREAK ===== */}
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

      {/* ===== LEADERSHIP TEAM ===== */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
            >
              Our People
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Leadership Team
            </motion.h2>
          </motion.div>

          {/* Group photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden mb-12"
          >
            <img
              src={COMMUNITY_IMG}
              alt="SBSBZ leadership team at a Bachata festival"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {leadershipTeam.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                custom={i}
                className="bg-charcoal-light border border-border/40 rounded-lg p-5 text-center hover:border-amber/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-xl text-amber">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg text-cream mb-1">
                  {member.name}
                </h3>
                <p className="text-cream/50 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="diagonal-top bg-charcoal-light py-20 md:py-28">
        <div className="container max-w-3xl text-center">
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
              Our Values
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream mb-10"
            >
              What Guides Us
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "No Experience Required",
                desc: "Many of our lessons are beginner-friendly. We welcome everyone regardless of dance background.",
              },
              {
                title: "Non-Profit & Student-Run",
                desc: "SBSBZ exists to serve the Stanford community. We are and will always remain a non-profit, student-run organization.",
              },
              {
                title: "Healthy Environment",
                desc: "We foster a safe, respectful space where members can grow as dancers and leaders.",
              },
              {
                title: "Accessible to All",
                desc: "No partner needed. No special attire. Free for Stanford affiliates. Just come as you are and be ready to move.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                custom={i}
                className="text-left border-l-2 border-amber/40 pl-6"
              >
                <h3 className="font-display text-xl text-cream mb-1">
                  {value.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FOUNDER'S STORY ===== */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/brando_dcc73627.webp"
                  alt="Brando Miranda, Founder of SBSBZ"
                  className="w-full rounded-lg object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-3 -right-3 bg-amber/10 border border-amber/20 rounded-lg px-4 py-2">
                  <p className="font-display text-amber text-sm">Est. 2024</p>
                </div>
              </div>
            </motion.div>

            {/* Story column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
              >
                Origin Story
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-3xl md:text-4xl text-cream mb-6"
              >
                From the Dance Floor to Stanford
              </motion.h2>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="bg-charcoal-light border border-amber/20 rounded-lg p-6 mb-6"
              >
                <Quote size={20} className="text-amber/40 mb-3" />
                <p className="text-cream/80 italic leading-relaxed text-sm">
                  "The most fulfilling way to social dance is a combination of
                  deep connection and awareness of good technique, with space for
                  the creative expression of music."
                </p>
                <p className="text-amber/60 text-xs mt-3">— Brando Miranda</p>
              </motion.div>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-cream/70 leading-relaxed mb-4"
              >
                SBSBZ was born from a lifelong passion for partner dance. Founder
                Brando Miranda spent over five years training intensively — at
                least ten hours a week — studying under world-class instructors,
                attending international congresses, and completing the official
                World Master certification program created by Korke and Judith,
                the originators of Bachata Sensual.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={4}
                className="text-cream/70 leading-relaxed mb-4"
              >
                Before Stanford, Brando founded a similar organization at the
                University of Illinois Urbana-Champaign, where he taught as an
                instructor at Urbana Dance Company and built a community around
                technique-driven, connection-based social dancing. That
                experience — and the belief that anyone can co-create a beautiful
                dance with any partner — became the foundation for SBSBZ.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={5}
                className="text-cream/70 leading-relaxed mb-6"
              >
                Today, SBSBZ carries that same mission at Stanford: making
                world-class partner dance accessible to everyone, no experience
                or partner required.
              </motion.p>

              <motion.a
                variants={fadeUp}
                custom={6}
                href="https://brando90.github.io/brandomiranda/dance.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber/70 hover:text-amber text-sm transition-colors duration-300 border-b border-amber/30 hover:border-amber pb-0.5"
              >
                Read the full story
                <span className="text-xs">→</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
