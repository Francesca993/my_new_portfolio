import React from "react";
import JumbotronAbout from "../components/JumbotronAbout";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ResumeSection from "../components/ResumeSection";

export default function About() {
  return (
    <div className="pt-14">
      <JumbotronAbout />
      <Skills />
      <Education />
      <ResumeSection />
    </div>
  );
} 