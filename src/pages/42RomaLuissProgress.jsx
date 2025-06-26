import React, { useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSwimmer, FaCheckCircle, FaRocket, FaBook, FaLaptopCode, FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Stepper42RomaLuiss from '../components/Stepper42RomaLuiss';

const events = [
  {
    title: "🏊‍♂️ Piscine",
    description: "Un salto nell'ignoto. Giorni (e notti) scanditi da sfide logiche, bug ostinati e piccoli trionfi. Qui ho imparato che non si nuota mai da soli: collaborazione, determinazione e caffè sono stati i miei primi alleati.",
    date: "16 Settembre - 11 Ottobre 2024",
    icon: <FaSwimmer />,
    slug: "piscine"
  },
  {
    title: "🚀 Inizio del Percorso",
    description: "L'avventura inizia ufficialmente. Un mix di entusiasmo, curiosità e un pizzico di timore. Ogni riga di codice, ogni errore, ogni confronto è un passo verso la versione migliore di me.",
    date: "9 Dicembre 2024",
    icon: <FaRocket />,
    slug: "inizio-percorso"
  },
  {
    title: "📚 I primi progetti",
    description: "I miei primi progetti del Common Core, dove ho imparato a scrivere codice in C.",
    date: "Gennaio -Febbraio 2025",
    icon: <FaCheckCircle />,
    slug: "primi-progetti"
  },
  {
    title: "💻 3 progetti e un esame",
    description: "Il secondo cerchio: qui si fa sul serio. Tre progetti intensi e un esame che sembra un boss di fine livello. Ma ogni sfida superata aggiunge un livello alla mia skill tree.",
    date: "Gennaio - Febbraio 2025",
    icon: <FaLaptopCode />,
    slug: "3-progetti-esame"
  },
  {
    title: "🐟 So_long!",
    description: "And thanks for all the fish! Un progetto che è quasi un saluto ironico, un omaggio nerd. Un momento di riflessione, in equilibrio tra il codice scritto e quello ancora da scrivere. Il progetto dove ho messo più cuore, tempo e che mi ha divertita di più!",
    date: "Febbraio2025",
    icon: <FaBook />,
    slug: "so-long"
  },
  {
    title: "🏆 Exam Rank 03",
    description: "Una tappa che brilla: non solo per il risultato, ma per il percorso fatto. Un riconoscimento che parla di impegno, costanza e voglia di migliorare.",
    date: "Maggio 2025",
    icon: <FaAward />,
    slug: "exam-rank-03"
  },
  {
    title: "🐚 Mini_shell",
    description: "Implementazione di una shell UNIX: uno dei progetti più complessi e affascinanti affrontati finora, dove ho messo alla prova le mie capacità di problem solving, gestione della memoria e conoscenze di basso livello.",
    date: "Maggio-Luglio 2025",
    icon: <FaAward />,
    slug: "mini-shell"
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
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/42romaluiss/${slug}`);
  };

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
              <div 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 p-4 rounded-lg hover:bg-pink-50"
                onClick={() => handleCardClick(event.slug)}
              >
                <h3 className="vertical-timeline-element-title mt-4">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
} 