import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaDoorOpen, FaSmile, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SelezioniSuperate() {
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
              <FaCheckCircle size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-700 font-cormorant-sc">
                🏆 Selezioni Superate
              </h1>
              <p className="text-gray-600">Ottobre 2024</p>
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
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
            <p className="text-green-800 italic text-lg">
              "Il momento in cui tutto ha preso forma. Una conferma importante: ce la posso fare."
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            L'ingresso in un mondo che promette di cambiare tutto
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Le selezioni sono state il momento decisivo. Dopo le intense settimane delle Piscine, 
            finalmente ho ricevuto la conferma che il mio percorso alla 42 Roma Luiss poteva iniziare ufficialmente. 
            L'ingresso in un mondo che promette di cambiare il mio modo di pensare, creare, crescere.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaDoorOpen className="text-green-600" />
                <h3 className="text-lg font-semibold text-green-700">La Porta si Apre</h3>
              </div>
              <p className="text-gray-700">
                Superare le selezioni significa aver dimostrato di avere le capacità e la determinazione 
                necessarie per affrontare il percorso formativo della 42.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaSmile className="text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-700">Soddisfazione e Gioia</h3>
              </div>
              <p className="text-gray-700">
                Il momento della conferma è stato indescrivibile. Tutti i sacrifici, l'impegno e la passione 
                avevano finalmente un riconoscimento concreto.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa significava superare le selezioni
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Conferma delle capacità dimostrate durante le Piscine</li>
            <li>Accesso ufficiale al programma formativo della 42</li>
            <li>Possibilità di iniziare il percorso di studi strutturato</li>
            <li>Ingresso nella community degli studenti 42</li>
            <li>Inizio di un'avventura formativa unica nel suo genere</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Le emozioni del momento
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Gioia immensa per il traguardo raggiunto</li>
            <li>Orgoglio per aver superato una selezione così competitiva</li>
            <li>Eccitazione per l'avventura che stava per iniziare</li>
            <li>Gratitudine per l'opportunità ricevuta</li>
            <li>Determinazione per affrontare le sfide future</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaRocket className="text-pink-600" />
              <h3 className="text-lg font-semibold text-pink-700">Il futuro si apre</h3>
            </div>
            <p className="text-gray-700">
              Da quel momento in poi, sapevo che la mia vita stava per cambiare. La 42 non è solo una scuola, 
              è un'esperienza di vita che ti trasforma completamente. Ero pronta ad abbracciare questa nuova avventura 
              con tutto l'entusiasmo e la determinazione possibili.
            </p>
          </div>
        </motion.div>

        {/* Timeline preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-orange-700 mb-4">
            Cosa aspettarsi dal percorso
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">💻</div>
              <div className="text-sm text-gray-700">Progetti pratici</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">🤝</div>
              <div className="text-sm text-gray-700">Collaborazione</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">🚀</div>
              <div className="text-sm text-gray-700">Crescita continua</div>
            </div>
          </div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Prossimi passi
          </h3>
          <p className="text-gray-700">
            Con le selezioni superate, il vero percorso poteva finalmente iniziare. Il 9 dicembre 2024 
            sarebbe stato il giorno dell'inizio ufficiale, e non vedevo l'ora di immergermi completamente 
            in questa esperienza formativa unica.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 