import { useRef } from "react";
import { m, useReducedMotion, useScroll } from "motion/react";
import { experience } from "../data/content";
import { Reveal, Section } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const reduce = useReducedMotion();

  return (
    <Section id="experience" eyebrow="02. Experience" title="Where I've worked">
      <ol ref={ref} className="relative space-y-12 pl-8 sm:pl-10">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
        <m.span
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : scrollYProgress }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-primary"
        />
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-8 size-[15px] rounded-full border-2 border-primary bg-bg sm:-left-10"
            />
            <Reveal>
              <p className="font-mono text-sm text-muted">{job.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
              <p className="mt-1 font-medium text-primary">
                {job.company} <span className="font-normal text-muted">· {job.location}</span>
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-muted">
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
