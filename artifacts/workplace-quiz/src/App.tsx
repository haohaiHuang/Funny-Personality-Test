import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import { calculateResult } from './data/quiz';

type Stage = 'landing' | 'quiz' | 'result';

export default function App() {
  const [stage, setStage] = useState<Stage>('landing');
  const [resultKey, setResultKey] = useState<string>('');

  const handleStart = () => setStage('quiz');

  const handleComplete = (answers: ('A' | 'B' | 'C')[]) => {
    const key = calculateResult(answers);
    setResultKey(key);
    setStage('result');
  };

  const handleRetry = () => {
    setResultKey('');
    setStage('landing');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto min-h-screen">
        <AnimatePresence mode="wait">
          {stage === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage onStart={handleStart} />
            </motion.div>
          )}
          {stage === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <QuizPage onComplete={handleComplete} />
            </motion.div>
          )}
          {stage === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResultPage resultKey={resultKey} onRetry={handleRetry} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
