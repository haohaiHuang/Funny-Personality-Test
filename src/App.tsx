import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import TrialPage from './pages/TrialPage';
import ResultPage from './pages/ResultPage';
import { calculateResult, personalityResults } from './data/quiz';

type Stage = 'landing' | 'quiz' | 'trial' | 'result';

export default function App() {
  const [stage, setStage] = useState<Stage>('landing');
  const [resultKey, setResultKey] = useState<string>('');

  const handleStart = () => setStage('quiz');

  const handleComplete = (answers: ('A' | 'B' | 'C')[]) => {
    const key = calculateResult(answers);
    setResultKey(key);
    setStage('trial');
  };

  const handleTrialComplete = () => {
    setStage('result');
  };

  const handleRetry = () => {
    setResultKey('');
    setStage('landing');
  };

  const currentResult = resultKey ? personalityResults[resultKey] : null;

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
          {stage === 'trial' && currentResult && (
            <motion.div
              key="trial"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <TrialPage result={currentResult} onComplete={handleTrialComplete} />
            </motion.div>
          )}
          {stage === 'result' && currentResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResultPage result={currentResult} onRetry={handleRetry} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
