import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaArrowLeft, FaTerminal, FaCogs, FaBrain } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function MiniShell() {
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
                🐚 Mini_shell
              </h1>
              <p className="text-gray-600">Maggio-Luglio 2025</p>
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
            Implementazione di una shell UNIX
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Mini_shell è stato uno dei progetti più complessi e affascinanti affrontati finora. 
            Implementare una shell UNIX completa ha messo alla prova le mie capacità di problem solving, 
            gestione della memoria e conoscenze di basso livello.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaTerminal className="text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-700">Funzionalità della Shell</h3>
              </div>
              <p className="text-gray-700">
                La shell implementata supporta comandi built-in, esecuzione di programmi esterni, 
                gestione dei processi, pipe, redirezioni e variabili d'ambiente.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <FaCogs className="text-green-600" />
                <h3 className="text-lg font-semibold text-green-700">Sfide Tecniche</h3>
              </div>
              <p className="text-gray-700">
                Gestione dei processi, fork, exec, wait, gestione della memoria, 
                parsing dei comandi e gestione degli errori sono stati i punti più complessi.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Caratteristiche implementate
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Prompt interattivo con gestione della cronologia</li>
            <li>Esecuzione di comandi built-in (cd, pwd, echo, export, unset, env, exit)</li>
            <li>Esecuzione di programmi esterni con gestione del PATH</li>
            <li>Gestione dei processi con fork() e execve()</li>
            <li>Implementazione di pipe (|) per la comunicazione tra processi</li>
            <li>Redirezioni di input/output (&lt;, &gt;, &gt;&gt;)</li>
            <li>Gestione delle variabili d'ambiente</li>
            <li>Gestione dei segnali (Ctrl+C, Ctrl+D)</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Cosa ho imparato
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Gestione avanzata dei processi in Unix/Linux</li>
            <li>Comunicazione interprocesso con pipe</li>
            <li>Gestione della memoria dinamica complessa</li>
            <li>Parsing e tokenizzazione di stringhe</li>
            <li>Gestione degli errori e debugging avanzato</li>
            <li>Architettura dei sistemi operativi</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FaBrain className="text-purple-600" />
              <h3 className="text-lg font-semibold text-purple-700">Momenti di crescita</h3>
            </div>
            <p className="text-gray-700">
              Questo progetto mi ha fatto capire davvero come funziona un sistema operativo sotto il cofano. 
              Implementare una shell da zero è stato come costruire un piccolo sistema operativo. 
              Ogni bug risolto, ogni funzionalità implementata mi ha dato una comprensione più profonda 
              dell'informatica di basso livello.
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
              <strong>Sistema:</strong> Unix/Linux<br/>
              <strong>Complessità:</strong> Molto Alta
            </div>
            <div>
              <strong>Tempo di sviluppo:</strong> 8 settimane<br/>
              <strong>Righe di codice:</strong> ~1500<br/>
              <strong>File di progetto:</strong> 15+
            </div>
          </div>
        </motion.div>

        {/* Code example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-black text-green-400 p-6 rounded-lg mb-8 font-mono text-sm"
        >
          <div className="mb-2">$ ./minishell</div>
          <div className="mb-2">minishell$ ls -la</div>
          <div className="mb-2">total 32</div>
          <div className="mb-2">drwxr-xr-x  5 user  staff  160 Jul 15 10:30 .</div>
          <div className="mb-2">drwxr-xr-x  3 user  staff   96 Jul 15 10:29 ..</div>
          <div className="mb-2">-rw-r--r--  1 user  staff  1234 Jul 15 10:30 main.c</div>
          <div className="mb-2">minishell$ echo $PATH</div>
          <div className="mb-2">/usr/local/bin:/usr/bin:/bin</div>
          <div className="mb-2">minishell$ cat main.c | grep "int"</div>
          <div className="mb-2">int main(int argc, char **argv)</div>
          <div className="mb-2">int parse_command(char *line)</div>
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Prossimi passi
          </h3>
          <p className="text-gray-700">
            Dopo Mini_shell, il percorso continua con progetti ancora più avanzati. 
            Questa esperienza mi ha dato una base solida per comprendere i sistemi operativi 
            e mi ha preparata per sfide ancora più complesse nel mondo della programmazione di sistema.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 