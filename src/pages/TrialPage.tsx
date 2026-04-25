import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonalityResult } from '../data/quiz';

interface TrialPageProps {
  result: PersonalityResult;
  onComplete: () => void;
}

export default function TrialPage({ result, onComplete }: TrialPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const verdicts = result.trialVerdicts;

  const handleNext = () => {
    if (currentIndex < verdicts.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
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

  const getAvatarEmoji = (name: string) => {
    const avatarMap: Record<string, string> = {
      '孔子': '🧔‍♂️',
      '霍布斯': '👴',
      '达尔文': '🔬',
      '尼采': '🤔',
      '马基雅维利': '👤',
      '弗洛伊德': '🧠',
      '加缪': '📚',
      '韩非子': '📜',
      '彼得·德鲁克': '💼',
      '柏拉图': '🏛️',
      '戈夫曼': '🎭',
      '卓别林': '🤡',
      '耶稣': '✝️',
      '阿伦特': '👩',
      '海德格尔': '🧐',
      '帕金森': '⏰',
      '卡夫卡': '🕷️',
      '马克思': '👥',
      '韦伯': '⚖️',
      '西西弗斯': '⛰️',
      '维特根斯坦': '💭',
      '赫胥黎': '🌍',
      '福柯': '🔍',
    };
    return avatarMap[name] || '👤';
  };

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 bg-gradient-to-b from-[#2D1B69] to-black">
      <div className="flex items-center justify-between mb-8 px-2">
        <span className="text-yellow-400 text-sm font-medium">
          人物审判庭
        </span>
        <span className="text-yellow-400/70 text-sm">
          {currentIndex + 1} / {verdicts.length}
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
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/80 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-125" />
                  <div className="relative w-16 h-16 rounded-full bg-zinc-800 border border-yellow-400/50 flex items-center justify-center">
                    <span className="text-3xl">
                      {getAvatarEmoji(verdicts[currentIndex].character.name)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {verdicts[currentIndex].character.name}
                  </h3>
                  <p className="text-yellow-400/70 text-sm">
                    {verdicts[currentIndex].character.era} · {verdicts[currentIndex].character.role}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                <p className="text-yellow-400 text-sm font-medium mb-2">
                  {verdicts[currentIndex].opening}
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {verdicts[currentIndex].viewpoint}
                </p>
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3 mb-4">
                  <p className="text-yellow-400 text-sm italic">
                    "{verdicts[currentIndex].quote}"
                  </p>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-3">
                  <p className="text-white text-sm font-medium mb-1">【简言之】</p>
                  <p className="text-yellow-400 text-sm">
                    {verdicts[currentIndex].summary}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {verdicts.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-yellow-400' : 'w-3 bg-yellow-400/30'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-8 pb-4">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex-1 bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/50 text-zinc-300 disabled:opacity-50 font-bold text-base py-4 rounded-2xl transition-all duration-200"
        >
          上一位
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-yellow-400/20"
        >
          {currentIndex === verdicts.length - 1 ? '查看结果' : '下一位'}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-yellow-400/50 text-xs mt-4"
      >
        审判正在进行中...
      </motion.div>
    </div>
  );
}
