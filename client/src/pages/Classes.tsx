/*
 * Design: Warm Nocturne — Intimate Evening Social Aesthetic
 * Classes: Schedule, class descriptions, and FAQ.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const CLASSES_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663473601426/7gzhQsJe2FTkW26T6eRQxD/classes-section-fbNMSLfGYgYsWjJqJQvxJu.webp";

const schedule = [
  {
    day: "Monday",
    classes: [
      {
        name: "Beginner Bachata Sensual",
        time: "7:00 PM – 8:00 PM",
        location: "Roble Studio",
        level: "All Levels",
        desc: "Learn the fundamentals of Bachata Sensual — basic steps, connection, and simple turn patterns. No experience or partner needed.",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        name: "Intermediate Bachata Sensual",
        time: "7:00 PM – 8:00 PM",
        location: "Roble Studio",
        level: "Intermediate",
        desc: "Build on your foundations with body waves, isolations, and more complex lead/follow patterns.",
      },
      {
        name: "Brazilian Zouk Fundamentals",
        time: "8:15 PM – 9:15 PM",
        location: "Roble Studio",
        level: "All Levels",
        desc: "Explore the flowing movements and head movements of Brazilian Zouk. Beginners welcome.",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        name: "Open Practice / Social",
        time: "8:00 PM – 10:00 PM",
        location: "Roble Studio",
        level: "All Levels",
        desc: "Practice what you have learned and social dance with the community. Music, vibes, and good company.",
      },
    ],
  },
];

const faqs = [
  {
    q: "Do I need a partner?",
    a: "No! We rotate partners during class so everyone gets to dance with different people. Come solo or bring a friend.",
  },
  {
    q: "Do I need dance experience?",
    a: "Not at all. Our beginner classes start from the very basics. Many of our members had zero dance experience when they joined.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable clothing you can move in. Avoid shoes with too much grip — socks or smooth-soled shoes work well on studio floors.",
  },
  {
    q: "Is it free?",
    a: "Yes! SBSBZ is a non-profit, student-run organization. All our regular classes and socials are free for Stanford students.",
  },
];

export default function Classes() {
  return (
    <div className="min-h-screen pt-20">
      {/* ===== HERO ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden film-grain">
        <div className="absolute inset-0">
          <img
            src={CLASSES_IMG}
            alt="Dance class in session"
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
            Classes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl text-cream mb-4"
          >
            Learn to Dance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            Weekly classes for all levels. No partner or experience required.
          </motion.p>
        </div>
      </section>

      {/* ===== WEEKLY SCHEDULE ===== */}
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
              Schedule
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Weekly Classes
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {schedule.map((day, dayIdx) => (
              <motion.div key={day.day} variants={fadeUp} custom={dayIdx}>
                <h3 className="font-display text-2xl text-amber mb-4 border-b border-amber/20 pb-2">
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.classes.map((cls) => (
                    <div
                      key={cls.name}
                      className="bg-charcoal-light border border-border/40 rounded-lg p-6 hover:border-amber/30 transition-all duration-500"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-display text-xl text-cream mb-2">
                            {cls.name}
                          </h4>
                          <p className="text-cream/60 text-sm leading-relaxed mb-3">
                            {cls.desc}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1.5 text-cream/50">
                              <Clock size={14} className="text-amber/70" />
                              {cls.time}
                            </span>
                            <span className="flex items-center gap-1.5 text-cream/50">
                              <MapPin size={14} className="text-amber/70" />
                              {cls.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-amber/10 text-amber px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap self-start">
                          <Star size={12} />
                          {cls.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream/40 text-sm text-center mt-8"
          >
            Schedule is subject to change. Follow us on Instagram for the latest
            updates.
          </motion.p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="diagonal-top bg-charcoal-light py-20 md:py-28">
        <div className="container max-w-3xl">
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
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl md:text-4xl text-cream"
            >
              Common Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                custom={i}
                className="border-l-2 border-amber/30 pl-6"
              >
                <h3 className="font-display text-lg text-cream mb-1">
                  {faq.q}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {faq.a}
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
                Join Us <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
