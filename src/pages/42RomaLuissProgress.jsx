import React, { useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSwimmer, FaCheckCircle, FaRocket, FaBook, FaLaptopCode, FaAward } from 'react-icons/fa';
import Stepper42RomaLuiss from '../components/Stepper42RomaLuiss';

const events = [
  {
    title: "Piscine",
    description: "Esperienza intensa e immersiva delle piscine...",
    date: "16 Settembre - 11 Ottobre 2024",
    icon: <FaSwimmer />,
  },
  {
    title: "Selezioni Superate",
    description: "La gioia e la soddisfazione di aver superato le selezioni!",
    date: "Ottobre 2024",
    icon: <FaCheckCircle />,
  },
  {
    title: "Inizio del Percorso",
    description: "L'inizio ufficiale del percorso, nuove sfide...",
    date: "9 Dicembre 2024",
    icon: <FaRocket />,
  },
  {
    title: "3 progetti e un esame",
    description: "Secondo cerchio -> 3 progetti e un esame",
    date: "Gennaio - Febbraio 2025",
    icon: <FaLaptopCode />,
  },
  {
    title: "So_long!",
    description: "And thanks for all the fish!",
    date: "Febbraio2025",
    icon: <FaBook />,
  },
  {
    title: "Exam Rank 03",
    description: "Ho ricevuto un riconoscimento per l'impegno e la crescita personale.",
    date: "Maggio 2025",
    icon: <FaAward />,
  },
  {
    title: "Mini_shell ",
    description: "Implementazione di una shell",
    date: "Maggio-Luglio 2025",
    icon: <FaAward />,
  },
];

const timelineStyles = {
  lineColor: "#be185d", // pink-700
  activeLineColor: "#f472b6", // pink-400
  dotColor: "#be185d",
  activeDotColor: "#f472b6",
  dotSize: "1.5rem",
  titleColor: "#be185d",
  descriptionColor: "#374151",
  dateColor: "#be185d",
};

function TimelineItem({ event, isActive, isLast, onHover, index, activeIndex }) {
  const fillDelay = activeIndex !== null ? Math.max(0, (index - 1) * 0.1) : 0;
  const fillDuration = activeIndex !== null ? Math.max(0.2, 0.5 - index * 0.1) : 0.5;

  return (
    <motion.div
      className="flex flex-row items-center last:mb-0 cursor-pointer min-h-[3.5rem]"
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center justify-center min-w-[2.5rem]">
        <div
          className={`absolute ${isLast ? "hidden" : "block"} top-0 left-1/2 -translate-x-1/2 w-1 h-full`}
          style={{ backgroundColor: timelineStyles.lineColor, zIndex: 0 }}
        >
          <motion.div
            className="w-full origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isActive ? 1 : 0 }}
            transition={{ duration: fillDuration, delay: fillDelay }}
            style={{ height: "100%", backgroundColor: timelineStyles.activeLineColor }}
          />
        </div>
        <motion.div
          className="relative z-10 rounded-full border-4"
          style={{
            width: timelineStyles.dotSize,
            height: timelineStyles.dotSize,
            borderColor: isActive ? timelineStyles.activeDotColor : timelineStyles.dotColor,
            backgroundColor: isActive ? timelineStyles.activeDotColor : "#fff",
          }}
          animate={{
            scale: isActive ? 1.2 : 1,
            backgroundColor: isActive ? timelineStyles.activeDotColor : "#fff",
            borderColor: isActive ? timelineStyles.activeDotColor : timelineStyles.dotColor,
          }}
          transition={{ duration: fillDuration, delay: fillDelay }}
        />
      </div>
      <div className="flex flex-col justify-center ml-6">
        <h3 className="text-lg font-semibold leading-tight" style={{ color: timelineStyles.titleColor }}>
          {event.title}
        </h3>
        <p style={{ color: timelineStyles.descriptionColor }}>{event.description}</p>
        <span className="text-sm" style={{ color: timelineStyles.dateColor }}>
          {event.date}
        </span>
      </div>
    </motion.div>
  );
}

export default function RomaLuissProgress() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="pt-24 min-h-screen flex flex-col items-center bg-pink-50 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-pink-700 mb-4 font-cormorant-sc text-center mt-12">
        42 Roma Luiss Progress
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8 mt-4">
        In questa pagina racconterò i miei progressi, le sfide e le conquiste durante il mio percorso alla 42 Roma Luiss. Stay tuned!
      </p>
      <div className="w-full max-w-2xl mx-auto py-8 flex flex-col gap-12 mt-2">
        <VerticalTimeline>
          {events.map((event, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={event.date}
              iconStyle={{ background: '#be185d', color: '#fff' }}
              icon={event.icon}
              dateClassName="px-8 md:px-16 mx-4 md:mx-8"
              contentClassName=""
            >
              <h3 className="vertical-timeline-element-title mt-4">{event.title}</h3>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
} 