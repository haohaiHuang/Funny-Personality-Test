import { motion } from 'framer-motion';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center max-w-sm mx-auto relative z-10"
      >
        <div className="mb-6 inline-block">
          <span className="text-5xl">☠️</span>
        </div>

        <div>
          <h1 className="text-4xl font-black text-white leading-tight mb-2 tracking-tight">
            你是职场
            <br />
            什么
            <span className="text-yellow-400">"毁"</span>？
          </h1>
        </div>

        <p className="text-zinc-400 text-base mt-4 mb-2 leading-relaxed">
          8道题，测出你在职场是什么货色
        </p>

        <p className="text-zinc-600 text-xs mb-10">
          结果仅供娱乐，如有雷同，纯属职场真相
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl py-5 px-8 rounded-2xl transition-colors duration-200 shadow-lg shadow-yellow-400/20"
        >
          开始测试
        </motion.button>

        <p className="mt-4 text-zinc-600 text-xs">
          测试仅需 1 分钟 · 无需注册
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 text-zinc-700 text-xs"
      >
        <span>8道题</span>
        <span>·</span>
        <span>8种人格</span>
        <span>·</span>
        <span>无限重测</span>
      </motion.div>
    </div>
  );
}
