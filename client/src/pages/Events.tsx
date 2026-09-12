import SiteImage from "@/components/SiteImage";
/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Events: Upcoming events and the featured social.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Music,
  Utensils,
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
const HERO_IMG = import.meta.env.BASE_URL + "photos/zouk-stanford.webp";

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

      {/* ===== MEGA BACHATA PARTY — FEATURED ===== */}
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
              Mega Bachata Party
            </motion.h2>
            <p className="text-cream/70 mt-4">
              A belated birthday. A big bachata night. One more dance before
              graduation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-charcoal-light to-charcoal border border-amber/20 rounded-2xl overflow-hidden"
          >
            <div className="p-6 md:p-10 pb-0 md:pb-0 flex flex-wrap justify-center gap-x-6 gap-y-3 text-cream/80 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-amber" /> Saturday,
                September 19, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-amber" /> 8 PM – 1 AM (ends
                Sunday, September 20)
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-amber" /> Hacienda Commons at
                Rains
              </span>
            </div>
            <p className="px-6 pt-4 text-center text-cream/70 text-sm">
              <a
                href="https://maps.app.goo.gl/NgcWLjxzMZJz7XQg8"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-amber"
              >
                796 Escondido Rd, Stanford, CA 94305 · Get Directions
              </a>
            </p>
            {/* Schedule cards */}
            <div className="p-6 md:p-10 space-y-5">
              {/* Bachata Class */}
              <div className="flex items-center gap-4 md:gap-6 bg-charcoal/60 border border-border/30 rounded-xl p-4 md:p-5">
                <div className="text-center flex-shrink-0 w-20">
                  <p className="text-amber font-display text-xl md:text-2xl">
                    8 – 9 PM
                  </p>
                  <p className="text-amber/60 text-[10px] uppercase tracking-widest mt-0.5">
                    All-Levels Class
                  </p>
                </div>
                <div className="w-px h-12 bg-amber/30" />
                <div>
                  <h3 className="text-cream font-display text-lg md:text-xl">
                    All-Levels <span className="text-amber">Bachata Class</span>
                  </h3>
                  <p className="text-cream/60 text-sm">
                    with{" "}
                    <span className="text-amber/80 font-medium">
                      Brando &amp; Marta
                    </span>
                  </p>
                </div>
              </div>

              {/* Social Night */}
              <div className="flex items-center gap-4 md:gap-6 bg-charcoal/60 border border-amber/20 rounded-xl p-4 md:p-5">
                <div className="text-center flex-shrink-0 w-20">
                  <p className="text-amber font-display text-xl md:text-2xl">
                    9 PM – 1 AM
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
                    <Music size={14} className="text-amber/70" /> DJ Nick — all
                    night
                  </p>
                </div>
              </div>

              {/* Perks row */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 bg-amber/10 rounded-full px-4 py-2">
                  <Utensils size={16} className="text-amber" />
                  <span className="text-cream text-sm font-medium">
                    FREE Mediterranean food
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
                  <DollarSign size={14} /> Free Entry
                </span>
              </div>

              <p className="text-center text-cream/60 text-sm pt-2">
                All levels welcome. Come solo or bring friends!
              </p>
              <div className="text-center pt-4">
                <a
                  href="https://partiful.com/e/ohtSD9MnHe6u71JQx60X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber text-charcoal hover:bg-amber-light font-semibold px-8">
                    Save Your Spot on Partiful{" "}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </a>
                <p className="text-cream/50 text-xs mt-3">
                  Check Partiful for the latest event updates.
                </p>
              </div>
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
