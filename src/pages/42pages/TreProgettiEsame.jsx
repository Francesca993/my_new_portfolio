import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaArrowLeft, FaCode, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MOTION = motion; // keep reference so eslint registers usage with JSX member syntax

export default function TreProgettiEsame() {
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
              <FaLaptopCode size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-700 font-cormorant-sc">
                💻 3 progetti e un esame
              </h1>
              <p className="text-gray-600">Gennaio - Febbraio 2025</p>
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
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
            <p className="text-red-800 italic text-lg">
              "Il secondo cerchio: qui si fa sul serio. Tre progetti intensi e un esame che sembra un boss di fine livello."
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Ogni sfida superata aggiunge un livello alla mia skill tree
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Il secondo cerchio del Common Core è stato un periodo intenso e formativo. Tre progetti complessi 
            e un esame finale che ha messo alla prova tutte le competenze acquisite fino a quel momento. 
            Ma ogni sfida superata aggiunge un livello alla mia skill tree.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCode className="text-red-600" />
                <h3 className="text-lg font-semibold text-red-700">I Tre Progetti</h3>
              </div>
              <p className="text-gray-700">
                Tre progetti di complessità crescente che hanno richiesto ore di lavoro, 
                debugging intenso e collaborazione con altri studenti.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaGraduationCap className="text-orange-600" />
                <h3 className="text-lg font-semibold text-orange-700">L'Esame Finale</h3>
              </div>
              <p className="text-gray-700">
                Un esame pratico che simula le condizioni reali di lavoro, 
                testando non solo le competenze tecniche ma anche la gestione dello stress.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            I progetti affrontati
          </h3>
          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">1. Printf</h4>
              <p className="text-gray-700 text-sm">
                Implementazione della funzione printf in C. Gestione di diversi tipi di formattazione, 
                flag e precisione. Un progetto che ha richiesto una comprensione profonda della gestione 
                delle stringhe e dei parametri variabili.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">2. Born2beroot</h4>
              <p className="text-gray-700 text-sm">
                Configurazione di un server virtuale con Debian, implementazione di politiche di sicurezza 
                e gestione dei servizi. Un progetto che ha aperto le porte al mondo dei sistemi operativi 
                e dell'amministrazione di sistema.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">3. Pipex</h4>
              <p className="text-gray-700 text-sm">
                Implementazione del comportamento delle pipe Unix, gestione dei processi e comunicazione 
                interprocesso. Un progetto che ha richiesto una comprensione approfondita dei sistemi operativi.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa ho imparato
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Gestione avanzata delle stringhe in C</li>
            <li>Amministrazione di sistemi Linux</li>
            <li>Gestione dei processi e comunicazione interprocesso</li>
            <li>Debugging di codice complesso</li>
            <li>Gestione dello stress durante gli esami</li>
            <li>Collaborazione efficace in team</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaUsers className="text-pink-600" />
              <h3 className="text-lg font-semibold text-pink-700">La collaborazione</h3>
            </div>
            <p className="text-gray-700">
              Durante questo periodo ho imparato l'importanza della collaborazione. Nonostante la 42 
              promuova l'apprendimento individuale, lavorare con altri studenti sui progetti più complessi 
              ha accelerato il mio apprendimento e mi ha insegnato a comunicare efficacemente le idee tecniche.
            </p>
          </div>
        </motion.div>

        {/* Exam experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-orange-700 mb-4">
            L'esperienza dell'esame
          </h3>
          <p className="text-gray-700 mb-4">
            L'esame finale è stato un'esperienza intensa. Simulare le condizioni reali di lavoro, 
            con tempo limitato e pressione, mi ha insegnato a gestire lo stress e a mantenere la concentrazione 
            anche in situazioni difficili.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-3 rounded-lg">
              <div className="text-lg font-bold text-orange-600">4h</div>
              <div className="text-xs text-gray-600">Tempo limite</div>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <div className="text-lg font-bold text-orange-600">100%</div>
              <div className="text-xs text-gray-600">Concentrazione</div>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <div className="text-lg font-bold text-orange-600">✅</div>
              <div className="text-xs text-gray-600">Superato</div>
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
            Prossimi passi
          </h3>
          <p className="text-gray-700">
            Dopo aver superato questo secondo cerchio, il percorso continua con progetti ancora più complessi. 
            Le competenze acquisite mi hanno dato una base solida per affrontare le sfide future, 
            inclusi i progetti grafici e i sistemi operativi avanzati.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 
