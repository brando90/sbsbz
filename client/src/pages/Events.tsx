/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Events: Upcoming events, socials, and workshops.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
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
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/IMG-20260209-WA0010_c85d2f35.jpg";

const upcomingEvents = [
  {
    title: "Spring Quarter Welcome Social",
    date: "April 5, 2026",
    time: "8:00 PM – 11:00 PM",
    location: "Stanford Campus",
    desc: "Kick off Spring Quarter with an evening of Bachata and Zouk social dancing. Open to all — beginners, come try your first dance! Light refreshments provided.",
    tag: "Social",
  },
  {
    title: "Bachata Sensual Workshop: Body Waves & Isolations",
    date: "April 12, 2026",
    time: "3:00 PM – 5:00 PM",
    location: "EVGR C Dance Room (C153)",
    desc: "A deep-dive workshop with Kriss & Natalia / Brando & Elisabeth on body waves and isolations in Bachata Sensual. Learn the mechanics behind fluid movement and how to incorporate them into your social dancing.",
    tag: "Workshop",
  },
  {
    title: "Zouk Musicality Night",
    date: "April 19, 2026",
    time: "7:00 PM – 9:30 PM",
    location: "Willis Lounge",
    desc: "Explore the relationship between music and movement in Brazilian Zouk with Brando & Fontaine. We will break down how to interpret different genres and rhythms through dance.",
    tag: "Workshop",
  },
  {
    title: "SBSBZ End-of-Month Social",
    date: "April 26, 2026",
    time: "8:00 PM – 11:00 PM",
    location: "Stanford Campus",
    desc: "Our monthly social dance party. DJ sets, good vibes, and a welcoming dance floor. All levels welcome.",
    tag: "Social",
  },
];

const pastHighlights = [
  {
    title: "Chicago Salsa & Bachata Festival",
    date: "February 2026",
    desc: "SBSBZ members traveled to Chicago for the Salsa & Bachata Festival — workshops, social dancing, and unforgettable memories.",
  },
  {
    title: "Winter Quarter Classes Launch",
    date: "January 2026",
    desc: "Launched our first full quarter of weekly Bachata and Zouk classes with Kriss, Natalia, Brando, and Fontaine.",
  },
  {
    title: "SBSBZ Founded",
    date: "Fall 2025",
    desc: "Brando founded SBSBZ to bring Bachata Sensual and Brazilian Zouk to the Stanford community.",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden film-grain">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Social dance event"
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
            Socials, workshops, and performances — there is always something
            to look forward to.
          </motion.p>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
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
              Coming Up
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Upcoming Events
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                variants={fadeUp}
                custom={i}
                className="bg-charcoal-light border border-border/40 rounded-lg p-6 md:p-8 hover:border-amber/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Date badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-amber/10 rounded-lg flex flex-col items-center justify-center">
                    <Calendar size={18} className="text-amber mb-0.5" />
                    <span className="text-amber text-xs font-medium">
                      {event.date.split(",")[0].split(" ")[1]}
                    </span>
                    <span className="text-amber/60 text-[10px] uppercase">
                      {event.date.split(",")[0].split(" ")[0]}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-xl text-cream">
                        {event.title}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          event.tag === "Social"
                            ? "bg-amber/15 text-amber"
                            : "bg-burgundy/20 text-burgundy-light"
                        }`}
                      >
                        {event.tag}
                      </span>
                    </div>
                    <p className="text-cream/60 text-sm leading-relaxed mb-3">
                      {event.desc}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-cream/50">
                        <Clock size={14} className="text-amber/70" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-cream/50">
                        <MapPin size={14} className="text-amber/70" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PAST HIGHLIGHTS ===== */}
      <section className="diagonal-top bg-charcoal-light py-20 md:py-28">
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
              Highlights
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Past Events
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pastHighlights.map((event, i) => (
              <motion.div
                key={event.title}
                variants={fadeUp}
                custom={i}
                className="bg-charcoal border border-border/40 rounded-lg p-6 hover:border-amber/20 transition-all duration-500"
              >
                <p className="text-amber/70 text-sm mb-2">{event.date}</p>
                <h3 className="font-display text-lg text-cream mb-2">
                  {event.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/join">
              <Button className="bg-amber text-charcoal hover:bg-amber-light font-semibold tracking-wide px-8">
                Join the Community <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
