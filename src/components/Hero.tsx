import { m, type Variants } from "motion/react";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { profile } from "../data/content";
import SocialLinks from "./SocialLinks";
import { ease } from "./Reveal";

const container: Variants = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="mx-auto max-w-5xl px-5 pt-12 pb-16 sm:px-8 sm:pt-24 sm:pb-24">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between md:gap-12"
      >
        <div className="max-w-xl">
          <m.p variants={item} className="font-mono text-sm text-primary">
            Hi, I'm
          </m.p>
          <m.h1 variants={item} className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </m.h1>
          <m.p variants={item} className="mt-3 text-lg font-medium text-fg/90 sm:text-xl">
            {profile.title}
          </m.p>
          <m.p variants={item} className="mt-4 text-base text-muted sm:text-lg">
            {profile.tagline}
          </m.p>
          <m.ul variants={item} className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </li>
            <li className="flex items-center gap-1.5">
              <BadgeCheck className="size-4" aria-hidden="true" />
              {profile.note}
            </li>
          </m.ul>
          <m.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-on-primary shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-110"
            >
              View Projects
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-medium transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              Get in touch
            </a>
          </m.div>
          <m.div variants={item} className="mt-8">
            <SocialLinks />
          </m.div>
        </div>

        <m.div variants={item} className="shrink-0">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width={480}
            height={507}
            fetchPriority="high"
            className="h-auto w-44 rounded-2xl border border-line object-cover shadow-sm sm:w-56 md:w-64"
          />
        </m.div>
      </m.div>
    </section>
  );
}
