import React from "react";
import epicodeimg from "../assets/epicode.png";

export default function Portfolio() {
  return (
    <div className="bg-pink-50 pt-14 font-cormorant-sc min-h-screen flex flex-col items-center justify-start px-4">
      {/* Title */}
      <h1 className="text-5xl font-bold font-cormorant-sc text-black mb-8 mt-6 pt-2">
        Scopri il Mio Mondo Digitale
      </h1>

      {/* Layout for paragraph and cards */}
      <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 lg:w-3/4">
        {/* Left paragraph */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
          <p className="text-xl font-bold text-black md:mr-12 text-right">
            Benvenuto nel mio portfolio! 🚀 <br />
            Qui puoi esplorare le mie competenze e i miei progetti in ambito
            tecnologico. 💻 <br />
            Dai un'occhiata al mio GitHub per scoprire il codice che ho
            sviluppato 👨‍💻,
            <br /> visita il mio LinkedIn per conoscere il mio percorso
            professionale 💼,
            <br /> e scopri la mia formazione su Epicode 🎓.
            <br /> Che tu sia alla ricerca di collaborazioni o ispirazione, sei
            nel posto giusto! 🌍
            <br />
            <br />
            ✉️ Scrivimi ➤ montinifrancesca993@gmail.com <br />
            📞 Contattami ➤ +39 3894767812
          </p>
        </div>

        {/* Right cards */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Francesca993/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg w-52 h-32 p-4 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-black">GitHub</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/francesca-montini-19b90929a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg w-52 h-32 p-4 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-black">LinkedIn</p>
          </a>

          {/* Epicode Platform */}
          <a
            href="https://talent.epicode.com/talent/e0fdbcf6-2914-4383-8558-62666a53b481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg w-52 h-32 p-4 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <img src={epicodeimg} alt="Epicode" className="w-16 h-16 mb-2" />
            <p className="text-lg font-semibold text-black">Epicode</p>
          </a>
        </div>
      </div>

      <div className="w-full md:w-4/5 lg:w-3/4 mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-black mb-4 text-center">
          Progetti online
        </h2>
        <p className="text-lg text-black text-center">
          Una raccolta dei miei lavori già pubblicati sul web.  
          Ogni progetto è un piccolo viaggio tra idee, codice e creatività.  
          Torna a trovarmi: la lista è in continua evoluzione!
        </p>
        <ul className="mt-4 flex flex-col items-center gap-2">
          <li>
            <a
              href="https://agri-meteo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-3xl font-cormorant-sc text-rose-500 hover:text-rose-600 underline decoration-2 text-center transition-colors duration-200"
            >
              agri-meteo.vercel.app
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
