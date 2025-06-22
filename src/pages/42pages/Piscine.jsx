import React from 'react';
import { motion } from 'framer-motion';
import { FaSwimmer, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Piscine() {
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
              <FaSwimmer size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-700 font-cormorant-sc">
                🏊‍♂️ Piscine
              </h1>
              <p className="text-gray-600">16 Settembre - 11 Ottobre 2024</p>
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
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Un salto nell'ignoto
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Le Piscine sono state il mio primo vero contatto con il mondo della programmazione. 
            Giorni (e notti) scanditi da sfide logiche, bug ostinati e piccoli trionfi. 
            Qui ho imparato che non si nuota mai da soli: collaborazione, determinazione e caffè sono stati i miei primi alleati.
          </p>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Le sfide principali
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Gestione del tempo e della pressione</li>
            <li>Risoluzione di problemi logici complessi</li>
            <li>Collaborazione con altri studenti</li>
            <li>Gestione dello stress e della stanchezza</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa ho imparato
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>L'importanza del lavoro di squadra</li>
            <li>Come gestire la frustrazione quando il codice non funziona</li>
            <li>La bellezza della logica pura</li>
            <li>Che ogni errore è un'opportunità di crescita</li>
          </ul>

          <div className="bg-pink-50 border-l-4 border-pink-700 p-4 rounded-r-lg">
            <p className="text-pink-800 italic">
              "Il momento più emozionante è stato quando ho risolto il mio primo esercizio complesso. 
              Quella sensazione di soddisfazione mi ha fatto capire che avevo fatto la scelta giusta."
            </p>
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-pink-700 mb-3">
            Prossimi passi
          </h3>
          <p className="text-gray-700">
            Dopo aver superato le Piscine, il prossimo obiettivo era affrontare le selezioni finali. 
            La determinazione e la passione dimostrate durante questo periodo mi hanno dato la fiducia necessaria per continuare.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 