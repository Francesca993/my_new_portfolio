import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaDoorOpen, FaSmile, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import libftImg from '../../assets/assets_articoli/libft.png';
import iPrimiProgettiImg from '../../assets/assets_articoli/iPrimiProgetti.png';
import borntoberootImg from '../../assets/assets_articoli/borntoberoot.png';
import getnextlineImg from '../../assets/assets_articoli/gnl.png';
import ftprintfImg from '../../assets/assets_articoli/printf.png';

export default function IPrimiProgetti() {
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
                📚 I primi progetti
              </h1>
              <p className="text-gray-600">Gennaio - Febbraio 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Content principale animato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* --- TILE COLORATA: I primi progetti del Common Core --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-4">
              I primi progetti del Common Core
            </h3>
            <div className="w-full grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg w-full">
                <h4 className="font-semibold text-purple-700 mb-2">Libft</h4>
                <p className="text-sm text-gray-600">Implementazione di funzioni della libreria standard C</p>
              </div>
              <div className="bg-white p-4 rounded-lg w-full">
                <h4 className="font-semibold text-purple-700 mb-2">get_next_line</h4>
                <p className="text-sm text-gray-600">Lettura di file riga per riga, gestione buffer e file descriptor</p>
              </div>
              <div className="bg-white p-4 rounded-lg w-full">
                <h4 className="font-semibold text-purple-700 mb-2">Born2beroot</h4>
                <p className="text-sm text-gray-600">Configurazione di un server Linux sicuro e automatizzato</p>
              </div>
              <div className="bg-white p-4 rounded-lg w-full">
                <h4 className="font-semibold text-purple-700 mb-2">ft_printf</h4>
                <p className="text-sm text-gray-600">Reimplementazione della funzione printf in C, gestione formattazione avanzata</p>
              </div>
            </div>
            <div className="w-full flex justify-center mt-6">
              <img src={iPrimiProgettiImg} alt="I Primi Progetti" className="max-w-md rounded-lg shadow-lg border" />
            </div>
          </motion.div>

          {/* --- PRIMA TILE COLORATA: Libft --- */}
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
                  Un risultato che mi ha riempita di orgoglio! La soddisfazione di vedere la mia libreria funzionare è stata enorme.
                </p>
              </div>
              <div className="w-full flex justify-center mt-6">
                <img src={libftImg} alt="Votazione Libft" className="max-w-full h-auto rounded-lg shadow-lg border" />
              </div>
              <div className="w-full flex justify-center mt-4">
                <a
                  href="https://github.com/Francesca993/Libft-42-s-cursus-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold rounded-lg shadow transition-colors border border-pink-200"
                >
                  <span>👇🏻 Clicca qui per andare alla repo! </span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* --- SECONDA TILE COLORATA: Born to Be Root, ft_printf & get_next_line --- */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 items-center"
            >
              <div className="w-full">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">🚀 Livello Up: Born to Be Root, ft_printf & get_next_line</h3>
                <p className="text-gray-800 mb-4">
                  Dopo aver combattuto con ogni singola funzione della mia personalissima libft, pensavo di aver visto tutto. <strong>Spoiler</strong>: non avevo ancora visto nulla.<br/>
                  Il percorso alla 42 non ti dà tregua (per fortuna), e subito dopo la libreria standard arriva un bel combo di progetti che ti insegnano davvero cosa vuol dire capire il C, pensare come una macchina… e perdere la testa su puntatori, buffer e file descriptor.
                </p>
                <h4 className="text-lg font-semibold text-pink-700 mb-2 flex items-center gap-2">🧠 Born to Be Root: Dove capisci che il terminale è un universo</h4>
                <p className="text-gray-700 mb-2">
                  Questo progetto è un'introduzione tecnica e mentale alla 42. Letteralmente ti prende per mano e ti fa entrare nei meandri di Unix, della shell, del filesystem, dei permessi, dei comandi base... e dell'inizio della tua trasformazione in root.
                </p>
                <p className="text-gray-700 mb-2"><strong>Cosa ho imparato qui:</strong></p>
                <ul className="list-disc list-inside ml-4 text-gray-700 mb-4">
                  <li>La differenza tra <code>&gt;</code> e <code>&gt;&gt;</code> smette di essere "una freccina".</li>
                  <li>I comandi tipo <code>chmod</code>, <code>touch</code>, <code>grep</code>, <code>awk</code> diventano amici fedeli.</li>
                  <li>Il terminale smette di essere un'interfaccia passiva e diventa uno strumento di controllo.</li>
                </ul>
                <p className="text-gray-700 italic mb-4">Fun fact nerd: per la prima volta nella vita ho modificato un file nascosto senza toccare il mouse. Sì, ero fiera. Sì, lo sono ancora.</p>
                <div className="w-full flex justify-center mt-6 mb-6">
                  <img src={borntoberootImg} alt="Born to Be Root" className="max-w-full h-auto rounded-lg shadow-lg border" />
                </div>

                <h4 className="text-lg font-semibold text-pink-700 mb-2 flex items-center gap-2">🖨️ ft_printf: Reinventare la ruota… e scoprire che ha mille bulloni</h4>
                <p className="text-gray-700 mb-2">
                  Se pensavi che scrivere <code>printf(\"ciao %s\", nome);</code> fosse banale, aspetta di doverlo scrivere da zero.<br/>
                  Questo progetto è una sfida mentale bellissima: decostruisci una funzione che usi da sempre… e ti accorgi che dietro c'è un mondo.
                </p>
                <p className="text-gray-700 mb-2"><strong>Cosa ho imparato qui:</strong></p>
                <ul className="list-disc list-inside ml-4 text-gray-700 mb-4">
                  <li>Parsing complesso: leggere e interpretare una stringa come fa il compilatore.</li>
                  <li>Gestione della variadicità con <code>va_start</code>, <code>va_arg</code>, <code>va_end</code>.</li>
                  <li>Tanta cura nei dettagli: padding, flag, numeri negativi, hex, pointer.</li>
                  <li>Modularizzazione del codice: ogni tipo (%c, %s, %d, %x) ha le sue regole.</li>
                </ul>
                <p className="text-gray-700 italic mb-4">Note personali:<br/>Ho passato mezza giornata a capire perché il mio %p stampava cose arcane tipo 0x7fffffffdeadbeef. Alla fine era un cast sbagliato. Ho imparato che in C, se sbagli un cast, è come scrivere una lettera d'amore e mandarla al tuo nemico.</p>
                <div className="w-full flex justify-center mt-6 mb-6">
                  <img src={ftprintfImg} alt="ft_printf" className="max-w-full h-auto rounded-lg shadow-lg border" />
                </div>
                <div className="w-full flex justify-center mt-6 mb-6">
                  <a
                    href="https://github.com/Francesca993/Printf-42-s-cursus-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold rounded-lg shadow transition-colors border border-pink-200"
                  >
                    <span>👇🏻 Clicca qui per andare alla repo! </span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <h4 className="text-lg font-semibold text-pink-700 mb-2 flex items-center gap-2">🧵 get_next_line: Il progetto che ti insegna a leggere… bene</h4>
                <p className="text-gray-700 mb-2">
                  Sottotitolo alternativo: "Come leggere un file riga per riga senza piangere (troppo)".<br/>
                  Qui la sfida è apparentemente semplice: leggere una linea alla volta da un file descriptor.<br/>
                  Ma poi ci sono i buffer. Le letture parziali. Il backup. I ritorni a capo. I file multipli. Gli edge case. I sogni infranti.
                </p>
                <p className="text-gray-700 mb-2"><strong>Cosa ho imparato qui:</strong></p>
                <ul className="list-disc list-inside ml-4 text-gray-700 mb-4">
                  <li>Gestione avanzata della memoria (<code>malloc</code> e <code>free</code> diventano il tuo pane).</li>
                  <li>Manipolazione delle stringhe con precisione chirurgica.</li>
                  <li>Come costruire un flusso di lettura che sia sicuro, efficiente e gestibile.</li>
                  <li>L'importanza di testare tutto, anche gli edge case più assurdi (tipo file vuoti, o file con solo \n).</li>
                </ul>
                <p className="text-gray-700 italic mb-4">Esperienza personale:<br/>Quando BUFFER_SIZE è troppo basso, è come cercare di leggere "Il Signore degli Anelli" una lettera alla volta. Però alla fine ti senti un eroe.</p>
                <div className="w-full flex justify-center mt-6 mb-6">
                  <img src={getnextlineImg} alt="get_next_line" className="max-w-full h-auto rounded-lg shadow-lg border" />
                </div>
                <div className="w-full flex justify-center mt-6 mb-6">
                  <a
                    href="https://github.com/Francesca993/Get_next_line-42-s-cursus-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold rounded-lg shadow transition-colors border border-pink-200"
                  >
                    <span>👇🏻 Clicca qui per andare alla repo! </span>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <h4 className="text-lg font-bold text-purple-700 mb-2">💬 Conclusione nerd-sentimentale</h4>
                <p className="text-gray-800 mb-2">
                  Questi tre progetti, insieme a Libft, sono la mia vera base. Non solo perché mi hanno insegnato il C, ma perché mi hanno insegnato a pensare come una dev.<br/>
                  Ogni bug che ho risolto, ogni memory leak che ho fixato, ogni test passato è stato un piccolo level up personale.
                </p>
                <p className="text-gray-800 mb-2">
                  Alla 42 non impari "a programmare". Impari a risolvere problemi, a sbagliare, a chiedere aiuto, a leggere la documentazione, a dubitare di tutto e a fare sempre meglio.
                </p>
                <p className="text-gray-800">
                  E, cosa non da poco… impari a goderti il processo.
                </p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 