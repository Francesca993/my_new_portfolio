import React from 'react';
import { motion } from 'framer-motion';
import { FaSwimmer, FaArrowLeft, FaHeart, FaUsers, FaLightbulb, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import piscineSuperate from '../../assets/assets_articoli/Piscine_superate.png';

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
                🏊‍♂️ Le Piscine
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
          <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-6">
            <p className="text-black italic text-lg">
              "Al via le Piscine e l'inizio della 42! La storia di una nuova avventura sta per cominciare... 🚀"
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Come sono arrivata alla 42
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Dopo il percorso con Epicode, avevo scoperto un mondo che mi piaceva davvero tanto. 
            Ma sentivo di essere solo sulla punta dell'iceberg. Quello che avevo imparato in quel corso 
            era già molto, ma il mondo dietro era ancora più vasto. Così ho iniziato a cercare, 
            tra i corsi universitari e non solo, qualcosa che mi permettesse di continuare a crescere e apprendere.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ed è così che ho scoperto la 42 Roma Luiss. Il modello 42 mi ha subito affascinata: 
            una scuola senza professori, senza lezioni frontali, dove si impara facendo, collaborando, 
            sbagliando e correggendo. Un approccio completamente diverso da tutto quello che avevo conosciuto prima.
          </p>

          <div className="bg-pink-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-pink-700 mb-3">
              Il Modello 42
            </h3>
            <p className="text-gray-700">
              La 42 è una scuola di programmazione innovativa fondata in Francia nel 2013. 
              Il nome deriva dal romanzo "Guida galattica per autostoppisti" di Douglas Adams, 
              dove 42 è la risposta alla domanda fondamentale sulla vita, l'universo e tutto quanto. 
              La filosofia è semplice: imparare a programmare programmando, attraverso progetti pratici 
              e collaborazione tra studenti. Non ci sono professori, non ci sono lezioni tradizionali, 
              solo sfide da superare e compagni di viaggio con cui crescere insieme.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            L'inizio dell'avventura
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Iniziando quasi per gioco, ho fatto i due test online che sono due giochini di logica. 
            E dopo averli superati, via alla piscina! Quattro settimane di coding intenso, di nuove persone, 
            di farsi forza con il collega accanto, di fare gruppo, di nottate di coding intense e meravigliose.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaUsers className="text-red-600" />
                <h3 className="text-lg font-semibold text-red-700">Le Persone</h3>
              </div>
              <p className="text-gray-700">
                Ho avuto l'occasione di incontrare persone che ancora oggi porto nel cuore. 
                Insieme abbiamo superato difficoltà, condiviso successi e non ci siamo mai tirati indietro 
                di fronte alle sfide.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCoffee className="text-green-600" />
                <h3 className="text-lg font-semibold text-green-700">Le Nottate</h3>
              </div>
              <p className="text-gray-700">
                Nottate insonni di coding intensivo, ma ogni momento è stato speciale. 
                La determinazione e la passione ci hanno spinto oltre i limiti che pensavamo di avere.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa ho imparato
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Le basi del linguaggio C:</strong> La mia prima vera immersione nella programmazione di basso livello</li>
            <li><strong>Problem-solving:</strong> Affrontare problemi complessi con logica e creatività</li>
            <li><strong>Lavoro di squadra:</strong> Il vero valore del supporto reciproco e della collaborazione</li>
            <li><strong>Autonomia nell'apprendimento:</strong> Trovare le risorse online e imparare da soli</li>
            <li><strong>Resistenza e determinazione:</strong> Non arrendersi mai di fronte alle difficoltà</li>
            <li><strong>Gestione dello stress:</strong> Mantenere la calma anche sotto pressione</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-3">
              <FaHeart className="text-pink-600" />
              <h3 className="text-lg font-semibold text-pink-700">Il valore del supporto reciproco</h3>
            </div>
            <p className="text-gray-700">
              Sapere che ogni volta che avevo bisogno, c'era sempre un compagno accanto a me, è stato impagabile. 
              Questa esperienza non mi ha solo insegnato le basi del linguaggio C e del problem-solving, 
              ma mi ha anche mostrato il vero valore del lavoro di squadra e del supporto reciproco.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            La grande soddisfazione
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Passare l'esame finale è stata una delle soddisfazioni più grandi della mia vita. 
            Vedere che quel mondo alla fine era fatto davvero anche un po' per me, che potevo farcela, 
            che avevo le capacità e la determinazione necessarie. Era la conferma che avevo fatto la scelta giusta 
            e che la strada che avevo intrapreso era quella che volevo percorrere.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <img 
              src={piscineSuperate} 
              alt="Piscine superate - Certificato di completamento" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-yellow-800 italic">
              "Sono orgogliosa di aver superato questo intenso percorso di selezione e non vedo l'ora di iniziare 
              il vero viaggio come studentessa della 42 Roma Luiss. Il meglio deve ancora venire! 🚀"
            </p>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            I numeri delle Piscine
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Settimane</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Disponibilità</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Determinazione</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-pink-600">✅</div>
              <div className="text-sm text-gray-600">Superate</div>
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
            Una volta appreso di aver superato le Piscine, ho capito di aver imparato a nuotare in quel mare di codice che tanto mi affascinava. Questo mondo era fatto anche un po' per me, e ora il prossimo passo era prepararsi per l'inizio vero e proprio del common core: il 9 dicembre. Non più selezioni, non più prove: finalmente si iniziava a fare sul serio. E non vedevo l'ora di rivedere i miei compagni di avventura.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 