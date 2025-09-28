import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaArrowLeft, FaTrophy, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MOTION = motion; // keep reference so eslint registers usage with JSX member syntax

export default function ExamRank03() {
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
              <FaAward size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-700 font-cormorant-sc">
                🏆 Exam Rank 03
              </h1>
              <p className="text-gray-600">Maggio 2025</p>
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
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
            <p className="text-yellow-800 italic text-lg">
              "Una tappa che brilla: non solo per il risultato, ma per il percorso fatto."
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Un riconoscimento che parla di impegno
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            L'Exam Rank 03 è stato un momento di grande soddisfazione. Non solo per il risultato ottenuto, 
            ma per tutto il percorso che ha portato a questo traguardo. Un riconoscimento che parla di impegno, 
            costanza e voglia di migliorare.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaTrophy className="text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-700">Il Traguardo</h3>
              </div>
              <p className="text-gray-700">
                Superare l'Exam Rank 03 significa aver dimostrato di padroneggiare i concetti fondamentali 
                della programmazione C e di essere pronti per sfide più complesse.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaStar className="text-green-600" />
                <h3 className="text-lg font-semibold text-green-700">La Preparazione</h3>
              </div>
              <p className="text-gray-700">
                Settimane di studio intenso, esercitazioni continue e revisione di tutti i progetti 
                precedenti hanno portato a questo risultato.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa includeva l'esame
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Valutazione dei progetti completati fino al Rank 03</li>
            <li>Test pratici di programmazione in C</li>
            <li>Verifica della comprensione dei concetti fondamentali</li>
            <li>Dimostrazione delle competenze acquisite</li>
            <li>Colloquio tecnico con i valutatori</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Competenze dimostrate
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Programmazione in C a livello intermedio</li>
            <li>Gestione della memoria dinamica</li>
            <li>Strutture dati e algoritmi</li>
            <li>Debugging e ottimizzazione del codice</li>
            <li>Comprensione dei sistemi Unix/Linux</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaCheckCircle className="text-green-600" />
              <h3 className="text-lg font-semibold text-pink-700">Momenti di soddisfazione</h3>
            </div>
            <p className="text-gray-700">
              Il momento più emozionante è stato quando ho ricevuto la conferma del superamento dell'esame. 
              Era la prova che tutto l'impegno, le notti insonni, i momenti di frustrazione e le piccole vittorie 
              avevano un senso. Questo traguardo mi ha dato la fiducia per continuare il percorso con ancora più determinazione.
            </p>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Statistiche del percorso
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-gray-600">Progetti completati</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">8+</div>
              <div className="text-sm text-gray-600">Mesi di studio</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Determinazione</div>
            </div>
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Prossimi obiettivi
          </h3>
          <p className="text-gray-700">
            Dopo aver superato l'Exam Rank 03, il percorso continua verso sfide ancora più complesse. 
            Il prossimo obiettivo è affrontare progetti di livello superiore e continuare a crescere 
            come programmatrice. La strada è ancora lunga, ma ogni passo avanti è una conquista.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 
