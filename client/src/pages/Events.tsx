import SiteImage from "@/components/SiteImage";
/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Events: Upcoming events and Friday Night Social.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Music,
  Pizza,
  Users,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

/* Social dance floor photo from IG */
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/ig-zouk-stanford_558433f0.jpg";

export default function Events() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden film-grain">
        <div className="absolute inset-0">
          <SiteImage
            fallbackLabel=""
            src={HERO_IMG}
            alt="SBSBZ social dance night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3"
          >
            Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl text-cream mb-4"
          >
            What&apos;s Happening
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            Socials, workshops, and performances — there is always something to
            look forward to.
          </motion.p>
        </div>
      </section>

      {/* ===== FRIDAY NIGHT SOCIAL — FEATURED ===== */}
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
              Featured Event
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-5xl text-cream"
            >
              Friday Night
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-charcoal-light to-charcoal border border-amber/20 rounded-2xl overflow-hidden"
          >
            {/* Schedule cards */}
            <div className="p-6 md:p-10 space-y-5">
              {/* Bachata Class */}
              <div className="flex items-center gap-4 md:gap-6 bg-charcoal/60 border border-border/30 rounded-xl p-4 md:p-5">
                <div className="text-center flex-shrink-0 w-20">
                  <p className="text-amber font-display text-xl md:text-2xl">
                    7 – 8 PM
                  </p>
                  <p className="text-amber/60 text-[10px] uppercase tracking-widest mt-0.5">
                    Bachata Class
                  </p>
                </div>
                <div className="w-px h-12 bg-amber/30" />
                <div>
                  <h3 className="text-cream font-display text-lg md:text-xl">
                    Bachata <span className="text-amber">Class</span>
                  </h3>
                  <p className="text-cream/60 text-sm">
                    with{" "}
                    <span className="text-amber/80 font-medium">
                      Brando &amp; Elisabeth
                    </span>
                  </p>
                  <p className="text-cream/40 text-xs flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Hacienda Commons
                  </p>
                </div>
              </div>

              {/* Zouk Class */}
              <div className="flex items-center gap-4 md:gap-6 bg-charcoal/60 border border-border/30 rounded-xl p-4 md:p-5">
                <div className="text-center flex-shrink-0 w-20">
                  <p className="text-amber font-display text-xl md:text-2xl">
                    7 – 8 PM
                  </p>
                  <p className="text-amber/60 text-[10px] uppercase tracking-widest mt-0.5">
                    Zouk Class
                  </p>
                </div>
                <div className="w-px h-12 bg-amber/30" />
                <div>
                  <h3 className="text-cream font-display text-lg md:text-xl">
                    Zouk <span className="text-amber">Class</span>
                  </h3>
                  <p className="text-cream/60 text-sm">
                    with{" "}
                    <span className="text-amber/80 font-medium">
                      Marcos &amp; Partner
                    </span>
                  </p>
                  <p className="text-cream/40 text-xs flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Willis&apos;s
                  </p>
                </div>
              </div>

              {/* Social Night */}
              <div className="flex items-center gap-4 md:gap-6 bg-charcoal/60 border border-amber/20 rounded-xl p-4 md:p-5">
                <div className="text-center flex-shrink-0 w-20">
                  <p className="text-amber font-display text-xl md:text-2xl">
                    8 – 12 AM
                  </p>
                  <p className="text-amber/60 text-[10px] uppercase tracking-widest mt-0.5">
                    Open Social
                  </p>
                </div>
                <div className="w-px h-12 bg-amber/30" />
                <div>
                  <h3 className="text-cream font-display text-lg md:text-xl">
                    Social <span className="italic text-amber">Night</span>
                  </h3>
                  <p className="text-cream/60 text-sm flex items-center gap-1">
                    <Music size={14} className="text-amber/70" /> DJ Whoman
                  </p>
                </div>
              </div>

              {/* Perks row */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 bg-amber/10 rounded-full px-4 py-2">
                  <Pizza size={16} className="text-amber" />
                  <span className="text-cream text-sm font-medium">
                    Free Pizza
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-amber/10 rounded-full px-4 py-2">
                  <Users size={16} className="text-amber" />
                  <span className="text-cream text-sm font-medium">
                    No Partner Needed
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                <span className="bg-amber/20 text-amber font-semibold text-sm px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <DollarSign size={14} /> Free for Stanford
                </span>
                <span className="text-cream/40 text-sm">•</span>
                <span className="bg-charcoal-light text-cream/70 font-medium text-sm px-4 py-1.5 rounded-full border border-border/30">
                  $10 Non-Stanford
                </span>
              </div>

              <p className="text-center text-cream/40 text-xs tracking-[0.15em] uppercase pt-2">
                All Levels Welcome
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="diagonal-top bg-charcoal-light py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber tracking-[0.2em] uppercase text-sm font-medium mb-3">
              Stay in the Loop
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
              Don&apos;t Miss a Beat
            </h2>
            <p className="text-cream/60 text-lg mb-8 max-w-xl mx-auto">
              Follow us on Instagram for event announcements, class updates, and
              behind-the-scenes moments from the SBSBZ community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/stanford_bachata_sensual_zouk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-amber text-charcoal hover:bg-amber-light font-semibold tracking-wide px-8">
                  Follow on Instagram
                </Button>
              </a>
              <Link href="/join">
                <Button
                  variant="outline"
                  className="border-amber/40 text-amber hover:bg-amber/10 font-semibold tracking-wide px-8"
                >
                  Join the Community <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
