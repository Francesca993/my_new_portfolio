import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaArrowLeft, FaHeart, FaCode, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MOTION = motion; // keep reference so eslint registers usage with JSX member syntax

export default function SoLong() {
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
              <FaBook size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-700 font-cormorant-sc">
                🐟 So_long!
              </h1>
              <p className="text-gray-600">Febbraio 2025</p>
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
          <div className="bg-gradient-to-r from-blue-50 to-pink-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
            <p className="text-blue-800 italic text-lg">
              "And thanks for all the fish!"
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Un progetto che è quasi un saluto ironico
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            So_long è stato il progetto dove ho messo più cuore, tempo e che mi ha divertita di più! 
            Un omaggio nerd che rappresenta un momento di riflessione, in equilibrio tra il codice scritto e quello ancora da scrivere.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaHeart className="text-pink-600" />
                <h3 className="text-lg font-semibold text-pink-700">Passione e Dedizione</h3>
              </div>
              <p className="text-gray-700">
                Questo progetto ha richiesto ore di lavoro intenso, ma ogni momento è stato un piacere. 
                La voglia di creare qualcosa di bello e funzionale mi ha spinta a dare sempre il massimo.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCode className="text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-700">Sfide Tecniche</h3>
              </div>
              <p className="text-gray-700">
                Implementare un gioco 2D con grafica ASCII, gestione della mappa, collisioni e pathfinding 
                ha messo alla prova tutte le mie competenze acquisite fino a quel momento.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Le caratteristiche del progetto
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Rendering grafico ASCII per la visualizzazione del gioco</li>
            <li>Gestione della mappa con parsing da file</li>
            <li>Sistema di collisioni e movimento del giocatore</li>
            <li>Algoritmo di pathfinding per i nemici</li>
            <li>Gestione della collezione di oggetti</li>
            <li>Sistema di vittoria e sconfitta</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa ho imparato
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Organizzazione del codice in moduli logici</li>
            <li>Gestione della memoria dinamica in C</li>
            <li>Debugging di algoritmi complessi</li>
            <li>Ottimizzazione delle performance</li>
            <li>Documentazione del codice</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaLightbulb className="text-yellow-600" />
              <h3 className="text-lg font-semibold text-pink-700">Momenti memorabili</h3>
            </div>
            <p className="text-gray-700">
              Il momento più emozionante è stato quando il gioco ha funzionato per la prima volta. 
              Vedere il personaggio muoversi sullo schermo, raccogliere gli oggetti e completare il livello 
              mi ha dato una soddisfazione immensa. Era la conferma che stavo imparando davvero qualcosa di concreto.
            </p>
          </div>
        </motion.div>

        {/* Technical details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Dettagli tecnici
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Linguaggio:</strong> C<br/>
              <strong>Librerie:</strong> mlx (MiniLibX)<br/>
              <strong>Paradigma:</strong> Programmazione procedurale
            </div>
            <div>
              <strong>Complessità:</strong> Media-Alta<br/>
              <strong>Tempo di sviluppo:</strong> 3 settimane<br/>
              <strong>Righe di codice:</strong> ~800
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
            Dopo So_long, il percorso continua con progetti sempre più complessi. 
            Questo progetto mi ha dato la fiducia necessaria per affrontare sfide ancora più grandi 
            e mi ha confermato che la programmazione è davvero la mia passione.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 
