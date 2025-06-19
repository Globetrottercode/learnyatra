import React from "react";
import Container from "./Container";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="Who We Are"
      description="We are a pioneering E-learning platform dedicated to empowering industrial professionals with high-quality training in AI-powered tools."
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mt-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p>
                We recognize the transformative impact of Artificial
                Intelligence across industries and are committed to equipping
                our learners with the skills needed to thrive in an AI-driven
                world. As one of the first platforms to focus extensively on AI
                tools for professionals, Learn Yatra leads the way in delivering
                future-focused education.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <div className="prose prose-lg max-w-none space-y-4">
                <p>
                  At Learn Yatra, we believe education is not just about
                  employment—it&apos;s about empowerment.
                </p>
                <p>
                  Founded with the vision to transform traditional views on
                  careers and learning, we aim to reshape how Indian students
                  and professionals see their roles in the global tech
                  ecosystem.
                </p>
                <p>
                  For decades, Indian education prepared students to be
                  efficient executors—but rarely creators. We&apos;re here to
                  change that.
                </p>
                <p>
                  Learn Yatra helps shift learners from task-followers to bold
                  creators—equipping them with the tools, mindset, and practical
                  skills to become innovators, entrepreneurs, and leaders.
                </p>
                <p>
                  Our hands-on, project-based learning approach provides
                  real-world exposure in cutting-edge technologies like:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Generative AI</li>
                  <li>Blockchain Technology</li>
                  <li>Data Science and Analytics</li>
                </ul>
                <p className="font-semibold">
                  We are not just another E-learning platform.
                  <br />
                  We are a movement to unlock the creator in every learner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
