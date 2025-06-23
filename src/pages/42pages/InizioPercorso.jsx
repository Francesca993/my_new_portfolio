import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowLeft, FaCalendar, FaUsers, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import libftImg from '../../assets/assets_articoli/libft.png';

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
              "L'avventura inizia ufficialmente."
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            Ogni riga di codice è un passo verso i miei obiettivi
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Il 9 dicembre 2024 è stato il giorno dell'inizio ufficiale del mio percorso alla 42 Roma Luiss.
            Un giorno molto atteso, per scoprire il mondo 42 che era ancora tutto nuovo, 
            per rivedere quelle persone che in cosi poco tempo erano divetate amicizie strette,
            ma soprattutto non vedevo l'oro di ricominciare a scrivere codice, confrontarmi e portare a compimento 
            nuovi progetti. Pronta e dterminata a mettermi in gioco! 
            Un mix di entusiasmo, curiosità e un pizzico di timore. Ogni riga di codice, ogni errore, 
            ogni confronto è un passo verso il cambiamento e gli obbiettivi che desidero raggiungere.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCalendar className="text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-700">Il Primo Giorno</h3>
              </div>
              <p className="text-gray-700">
                Presentazioni, introduzioni al campus, conoscenza dei nuovi compagni di viaggio, ritrovare i vecchi.<br />
                Il primo giorno è stato un mix di emozioni e aspettative per il futuro.
                La community della 42 è uno degli aspetti più preziosi di questa esperienza.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-3">
              <FaBook className="text-pink-600" />
              <h3 className="text-lg font-semibold text-pink-700">La metodologia 42</h3>
            </div>
            <p className="text-gray-700">
              La 42 non è una scuola tradizionale. Non ci sono professori, non ci sono lezioni frontali. 
              Si impara facendo, collaborando, sbagliando e correggendo. È un approccio che richiede 
              iniziativa, curiosità e determinazione. Qui si cresce davvero mettendosi in gioco ogni giorno.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            🎯 Cosa aspettarsi dal percorso 42
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-4">
            <li>
              <span className="font-semibold">Un ambiente intensamente pratico</span><br />
              Imparare facendo: niente lezioni frontali, ma solo progetti concreti da completare. Il motto è "learn by doing" — e qui viene preso davvero sul serio.
            </li>
            <li>
              <span className="font-semibold">Collaborazione costante</span><br />
              Lavorare a stretto contatto con gli altri studenti. Il peer-to-peer learning è fondamentale: imparare tanto spiegando agli altri quanto risolvendo i propri problemi.
            </li>
            <li>
              <span className="font-semibold">Tanta autonomia e responsabilità</span><br />
              Nessuno controlla l'orario: bisogna organizzarsi in totale autonomia. La motivazione interna è ciò che spinge avanti.
            </li>
            <li>
              <span className="font-semibold">Un inizio molto tosto: la Piscine</span><br />
              4 settimane molto intense per selezionare chi può accedere al percorso. Mettersi alla prova mentalmente, tecnicamente ed emotivamente. Un'esperienza formativa a sé, anche se non si dovesse continuare.
            </li>
            <li>
              <span className="font-semibold">Un percorso a lungo termine (2-3 anni)</span><br />
              La formazione completa richiede tempo e dedizione. Possibilità di lavorare su progetti avanzati, anche in gruppo o in contesti reali.
            </li>
            <li>
              <span className="font-semibold">Feedback costante, ma non "classico"</span><br />
              Nessun voto da professori, ma valutazioni tra pari e test automatici. Imparare a ricevere e dare critiche costruttive.
            </li>
            <li>
              <span className="font-semibold">Un mindset da sviluppatore</span><br />
              Risolvere problemi da soli e in squadra, spesso con poche istruzioni. Diventare sempre più bravi a cercare, documentarsi e "smanettare".
            </li>
            <li>
              <span className="font-semibold">Una comunità molto viva</span><br />
              Partecipare a eventi, hackathon, coding nights… mille occasioni per crescere. Trovarsi in mezzo a persone super motivate e diversissime tra loro.
            </li>
            <li>
              <span className="font-semibold">Un'esperienza trasformativa</span><br />
              Non è solo coding: sviluppare resilienza, pensiero critico, spirito di iniziativa. Cambiare modo di affrontare i problemi, anche fuori dalla tecnologia.
            </li>
          </ul>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-4">
            I primi progetti del Common Core
          </h3>
          <div className="w-full">
            <div className="bg-white p-4 rounded-lg w-full">
              <h4 className="font-semibold text-purple-700 mb-2">Libft</h4>
              <p className="text-sm text-gray-600">Implementazione di funzioni della libreria standard C</p>
            </div>
          </div>
        </motion.div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8">
            <div className="flex flex-col gap-6 items-center">
              <div className="w-full">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Il primo progetto: Libft
              </h3>
                <h4 className="font-semibold text-purple-700 mb-2">Libft – Il mio primo vero traguardo</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Libft</strong> è stato il mio battesimo del fuoco nel mondo della programmazione in C. L'obiettivo? Costruire da zero una libreria personale (<code>libft.a</code>), riscrivendo tante funzioni standard che usiamo ogni giorno, come <code>strlen</code>, <code>strcpy</code>, <code>memset</code>, <code>calloc</code>, e molte altre. Ma non solo: anche funzioni più avanzate come <code>ft_split</code>, <code>ft_itoa</code> e <code>ft_strtrim</code>.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Cosa ho affrontato:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Ricreare le funzioni della libc, solo con C puro e tanta pazienza.</li>
                    <li>Scrivere codice robusto, modulare e pulito, rispettando le severe norme di stile 42.</li>
                    <li>Gestire la memoria dinamica: <code>malloc</code>, <code>free</code> e la lotta ai memory leak.</li>
                    <li>Implementare funzioni complesse come <code>ft_split</code> (gestione di array di stringhe), <code>ft_strjoin</code>, <code>ft_substr</code>, <code>ft_strtrim</code> e <code>ft_itoa</code> (conversione int → stringa).</li>
                    <li>Imparare a usare Makefile per automatizzare la compilazione.</li>
                  </ul>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Cosa mi ha lasciato:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Le basi solide del C: puntatori, array, gestione della memoria, funzioni.</li>
                    <li>Debugging vero: imparare a trovare e correggere segmentation fault, memory leak, edge case.</li>
                    <li>Precisione e pulizia: per rispettare gli standard e rendere il codice leggibile a tutti.</li>
                    <li>Pazienza e autonomia: nessuna soluzione pronta, solo documentazione, test e tanta determinazione.</li>
                    <li>Struttura modulare: separare i file, usare header (<code>libft.h</code>), Makefile.</li>
                    <li>Confronto e collaborazione: peer review, scambio di idee e soluzioni con altri cadetti.</li>
                  </ul>
                </p>
                <p className="text-purple-800 font-semibold mt-4">
                  🏁 <span className="text-lg">Punteggio finale: 123/100</span><br/>
                  Un risultato che mi ha riempita di orgoglio! Qualche piccolo dettaglio da migliorare (forse un edge case sfuggito), ma la soddisfazione di vedere la mia libreria funzionare è stata enorme.
                </p>
              </div>
              <div className="w-full flex justify-center mt-6">
                <img src={libftImg} alt="Votazione Libft" className="max-w-2xl rounded-lg shadow-lg border" />
              </div>
            </div>
          </div>

        </motion.div>

        {/* First projects preview */}

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6"
        >
        </motion.div>
      </div>
    </div>
  );
} 