/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Join: How to get involved, contact info, and links.
 */
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, ArrowUpRight, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/community-social_87318cd8.jpg";

const steps = [
  {
    num: "01",
    title: "Show Up",
    desc: "Come to any of our weekly classes. No sign-up needed — just walk in. Check our Classes page for the schedule.",
  },
  {
    num: "02",
    title: "Follow Us",
    desc: "Follow @stanford_bachata_sensual_zouk on Instagram for class updates, event announcements, and behind-the-scenes content.",
  },
  {
    num: "03",
    title: "Join Our Mailing List",
    desc: "Email us to get added to our mailing list for weekly updates, special workshops, and social invitations.",
  },
  {
    num: "04",
    title: "Dance & Connect",
    desc: "Come to our socials, make friends, and become part of a community that shares your love for dance.",
  },
];

const benefits = [
  "Free weekly classes for all levels",
  "No partner or experience required",
  "Welcoming, inclusive community",
  "Social dance events and parties",
  "Workshops with champion-level instructors",
  "Connections to the Bay Area & national dance scene",
  "A healthy outlet for stress and creativity",
];

export default function Join() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden film-grain">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Dancers in warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
          >
            Get Involved
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl text-cream mb-4"
          >
            Join SBSBZ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            Becoming part of our community is simple. Here is how to get started.
          </motion.p>
        </div>
      </section>

      {/* ===== HOW TO JOIN ===== */}
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
              Getting Started
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Four Simple Steps
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                custom={i}
                className="bg-charcoal-light border border-border/40 rounded-lg p-6 hover:border-amber/30 transition-all duration-500 group"
              >
                <span className="font-display text-4xl text-amber/20 group-hover:text-amber/40 transition-colors duration-500">
                  {step.num}
                </span>
                <h3 className="font-display text-xl text-cream mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="diagonal-top bg-charcoal-light py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                Why Join
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-display text-3xl md:text-4xl text-cream mb-6"
              >
                What You Get
              </motion.h2>
              <motion.div
                variants={fadeUp}
                custom={2}
                className="space-y-3"
              >
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-amber mt-0.5 flex-shrink-0"
                    />
                    <span className="text-cream/70 text-sm">{b}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal border border-border/40 rounded-lg p-8"
            >
              <h3 className="font-display text-2xl text-cream mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <a
                  href="https://www.instagram.com/stanford_bachata_sensual_zouk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/70 hover:text-amber transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                    <Instagram size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cream">Instagram</p>
                    <p className="text-xs text-cream/50">@stanford_bachata_sensual_zouk</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-cream/30 group-hover:text-amber transition-colors"
                  />
                </a>

                <a
                  href="mailto:sbsbz.su@gmail.com"
                  className="flex items-center gap-3 text-cream/70 hover:text-amber transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                    <Mail size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cream">Email</p>
                    <p className="text-xs text-cream/50">sbsbz.su@gmail.com</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-cream/30 group-hover:text-amber transition-colors"
                  />
                </a>

                <div className="flex items-center gap-3 text-cream/70">
                  <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cream">Location</p>
                    <p className="text-xs text-cream/50">
                      Wed: Roble 114 &middot; Thu: EVGR C Dance Studio
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <a
                  href="https://linktr.ee/ultimate_brando9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-amber text-charcoal hover:bg-amber-light font-semibold tracking-wide">
                    Sign Up & Info
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 bg-charcoal text-center">
        <div className="container max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-3xl md:text-5xl text-cream mb-4"
            >
              Your First Dance <span className="text-amber">Awaits</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-cream/70 text-lg mb-2"
            >
              No experience. No partner. No excuses.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-cream/50 text-sm"
            >
              Just show up to our next class and let the music move you.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
