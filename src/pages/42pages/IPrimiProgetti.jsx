import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaDoorOpen, FaSmile, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import libftImg from '../../assets/assets_articoli/libft.png';
import iPrimiProgettiImg from '../../assets/assets_articoli/iPrimiProgetti.png';

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

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
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

          

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-pink-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaDoorOpen className="text-pink-600" />
                <h3 className="text-lg font-semibold text-pink-700">La Porta si Apre</h3>
              </div>
              <p className="text-gray-700">
                Superare le selezioni significa aver dimostrato di avere le capacità e la determinazione 
                necessarie per affrontare il percorso formativo della 42.
              </p>
            </div>

            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaSmile className="text-pink-600" />
                <h3 className="text-lg font-semibold text-pink-700">Soddisfazione e Gioia</h3>
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

        {/* Nuova sezione: Born to Be Root, ft_printf & get_next_line */}
        <div className="mt-10">
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

          <h4 className="text-lg font-semibold text-pink-700 mb-2 flex items-center gap-2">🖨️ ft_printf: Reinventare la ruota… e scoprire che ha mille bulloni</h4>
          <p className="text-gray-700 mb-2">
            Se pensavi che scrivere <code>printf("ciao %s", nome);</code> fosse banale, aspetta di doverlo scrivere da zero.<br/>
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
      </div>
    </div>
  );
} 