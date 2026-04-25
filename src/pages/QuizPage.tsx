import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/quiz';

interface QuizPageProps {
  onComplete: (answers: ('A' | 'B' | 'C')[]) => void;
}

export default function QuizPage({ onComplete }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<('A' | 'B' | 'C')[]>([]);
  const [direction, setDirection] = useState(1);
  const [selectedKey, setSelectedKey] = useState<'A' | 'B' | 'C' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleGoBack = () => {
    if (isAnimating || currentIndex <= 0) return;
    setDirection(-1);
    setCurrentIndex(currentIndex - 1);
    setSelectedKey(answers[currentIndex - 1] ?? null);
    setIsAnimating(false);
  };

  const handleSelect = (key: 'A' | 'B' | 'C') => {
    if (isAnimating) return;
    setSelectedKey(key);
    setIsAnimating(true);

    setTimeout(() => {
      const isEditing = currentIndex < answers.length;
      const newAnswers = isEditing
        ? answers.map((a, i) => (i === currentIndex ? key : a))
        : [...answers, key];
      if (currentIndex + 1 >= questions.length) {
        onComplete(newAnswers);
      } else {
        setDirection(1);
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setSelectedKey(null);
        setIsAnimating(false);
      }
    }, 380);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 overflow-hidden">
      <div className="flex items-center justify-between mb-8 px-2">
        <span className="text-zinc-600 text-sm font-medium">
          职场毁型人格测试
        </span>
        <span className="text-zinc-500 text-sm">
          {currentIndex + 1} <span className="text-zinc-700">/</span> {questions.length}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="w-full"
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-3 block"
              >
                Q{currentQuestion.id}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-white text-xl font-bold leading-snug"
              >
                {currentQuestion.text}
              </motion.h2>
            </div>

            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedKey === option.key;
                return (
                  <motion.button
                    key={option.key}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + idx * 0.06, duration: 0.35 }}
                    onClick={() => handleSelect(option.key)}
                    disabled={isAnimating}
                    className={`
                      w-full text-left p-4 rounded-2xl border transition-all duration-200
                      ${isSelected
                        ? 'bg-yellow-400 border-yellow-400 text-black scale-[0.98]'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-200 active:bg-zinc-800 active:border-zinc-700'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`
                        flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black mt-0.5
                        ${isSelected ? 'bg-black/20 text-black' : 'bg-zinc-800 text-yellow-400'}
                      `}>
                        {option.key}
                      </span>
                      <span className="text-sm leading-relaxed font-medium pt-0.5">
                        {option.text}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

          </motion.div>
        </AnimatePresence>

        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleGoBack}
            className="ml-auto mt-5 text-zinc-500 text-sm underline underline-offset-2 hover:text-zinc-400 transition-colors duration-200"
          >
            ← 返回上一题
          </motion.button>
        )}
      </div>

      <div className="flex justify-center gap-1.5 mt-8 pb-4">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx < currentIndex
                ? 'w-6 bg-yellow-400'
                : idx === currentIndex
                ? 'w-6 bg-yellow-400/60'
                : 'w-3 bg-zinc-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
