import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowLeft, FaCalendar, FaUsers, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function InizioPercorso() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-pink-50 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/42romaluiss')}
            className="flex items-center gap-2 text-pink-700 hover:text-pink-900 transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Torna alla timeline</span>
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-700 text-white rounded-full">
              <FaRocket size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-700 font-cormorant-sc">
                🚀 Inizio del Percorso
              </h1>
              <p className="text-gray-600">9 Dicembre 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
            <p className="text-purple-800 italic text-lg">
              "L'avventura inizia ufficialmente. Un mix di entusiasmo, curiosità e un pizzico di timore."
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Ogni riga di codice è un passo verso la versione migliore di me
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Il 9 dicembre 2024 è stato il giorno dell'inizio ufficiale del mio percorso alla 42 Roma Luiss. 
            Un mix di entusiasmo, curiosità e un pizzico di timore. Ogni riga di codice, ogni errore, 
            ogni confronto è un passo verso la versione migliore di me.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCalendar className="text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-700">Il Primo Giorno</h3>
              </div>
              <p className="text-gray-700">
                Presentazioni, introduzioni al campus, conoscenza dei compagni di viaggio. 
                Il primo giorno è stato un mix di emozioni e aspettative per il futuro.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaUsers className="text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-700">La Community</h3>
              </div>
              <p className="text-gray-700">
                Incontrare altri studenti con la stessa passione per la programmazione. 
                La community della 42 è uno degli aspetti più preziosi di questa esperienza.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa aspettarsi dal percorso
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Progetti pratici e hands-on</li>
            <li>Collaborazione con altri studenti</li>
            <li>Peer-to-peer learning</li>
            <li>Valutazioni continue e feedback</li>
            <li>Crescita personale e professionale</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            I primi obiettivi
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Familiarizzare con l'ambiente di lavoro</li>
            <li>Conoscere i compagni di corso</li>
            <li>Comprendere la metodologia di apprendimento</li>
            <li>Iniziare i primi progetti del Common Core</li>
            <li>Stabilire una routine di studio efficace</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaBook className="text-pink-600" />
              <h3 className="text-lg font-semibold text-pink-700">La metodologia 42</h3>
            </div>
            <p className="text-gray-700">
              La 42 non è una scuola tradizionale. Non ci sono professori, non ci sono lezioni frontali. 
              Si impara facendo, collaborando, sbagliando e correggendo. È un approccio che richiede 
              iniziativa, curiosità e determinazione. E sono pronta ad abbracciare completamente questa filosofia.
            </p>
          </div>
        </motion.div>

        {/* First projects preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            I primi progetti del Common Core
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Libft</h4>
              <p className="text-sm text-gray-600">Implementazione di funzioni della libreria standard C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">Get_next_line</h4>
              <p className="text-sm text-gray-600">Lettura di file riga per riga</p>
            </div>
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-orange-700 mb-3">
            Prossimi passi
          </h3>
          <p className="text-gray-700">
            Il percorso è appena iniziato, ma già sento che questa esperienza mi cambierà profondamente. 
            Nei prossimi mesi affronterò progetti sempre più complessi, svilupperò competenze tecniche 
            e personali, e crescerò come programmatrice e come persona.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 