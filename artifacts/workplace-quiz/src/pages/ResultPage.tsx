import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalityResults } from '../data/quiz';

interface ResultPageProps {
  resultKey: string;
  onRetry: () => void;
}

export default function ResultPage({ resultKey, onRetry }: ResultPageProps) {
  const result = personalityResults[resultKey];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sharing, setSharing] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const generateShareImage = async () => {
    setSharing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = 750;
    const H = 1000;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#1a1a1a';
    ctx.roundRect(40, 40, W - 80, H - 80, 32);
    ctx.fill();

    const gradient = ctx.createLinearGradient(0, 0, W, H / 2);
    gradient.addColorStop(0, 'rgba(234,179,8,0.07)');
    gradient.addColorStop(1, 'rgba(239,68,68,0.04)');
    ctx.fillStyle = gradient;
    ctx.roundRect(40, 40, W - 80, H - 80, 32);
    ctx.fill();

    ctx.fillStyle = '#eab308';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('职场毁型人格测试', W / 2, 140);

    ctx.fillStyle = 'rgba(234,179,8,0.3)';
    ctx.beginPath();
    ctx.arc(W / 2, 280, 90, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(234,179,8,0.1)';
    ctx.beginPath();
    ctx.arc(W / 2, 280, 110, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '80px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💀', W / 2, 310);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 64px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.title, W / 2, 430);

    ctx.fillStyle = '#eab308';
    ctx.font = 'bold 26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`职场毁型人格 · 第 ${result.rank} 名`, W / 2, 490);

    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.roundRect(80, 530, W - 160, 320, 20);
    ctx.fill();

    const diagnosis = result.shortDiagnosis;
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    const maxWidth = W - 200;
    const lineHeight = 48;
    const words = diagnosis.split('');
    let line = '';
    let y = 610;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, W / 2, y);
        line = words[i];
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, W / 2, y);

    ctx.fillStyle = '#eab308';
    ctx.font = 'bold 26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('"' + result.shortDiagnosis + '"', W / 2, y + 60);

    ctx.strokeStyle = 'rgba(234,179,8,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 100, 890);
    ctx.lineTo(W / 2 + 100, 890);
    ctx.stroke();

    ctx.fillStyle = '#52525b';
    ctx.font = '22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('完整测试在小红书', W / 2, 930);

    try {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `职场毁型人格-${result.title}.png`;
        a.click();
        URL.revokeObjectURL(url);
        setSharing(false);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      }, 'image/png');
    } catch {
      setSharing(false);
    }
  };

  if (!result) return null;

  return (
    <div className="min-h-screen flex flex-col px-4 py-8">
      <canvas ref={canvasRef} className="hidden" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', bounce: 0.3 }}
          className="flex flex-col items-center mb-8 pt-4"
        >
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-150" />
            <div className="relative w-24 h-24 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
              <span className="text-5xl">{result.icon}</span>
            </div>
          </div>

          <p className="text-zinc-500 text-sm mb-1">你的职场人格是</p>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
            {result.title}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-sm font-bold">职场毁型人格</span>
            <span className="text-zinc-600 text-sm">·</span>
            <span className="text-zinc-400 text-sm">第 {result.rank} 名</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-4"
        >
          <p className="text-zinc-400 text-sm leading-relaxed">
            {result.diagnosis}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-4 mb-6"
        >
          <p className="text-yellow-400/80 text-xs text-center font-medium">
            发给同事看看，看谁才是真正的毁王 👀
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 mt-auto">
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileTap={{ scale: 0.97 }}
            onClick={generateShareImage}
            disabled={sharing}
            className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 text-black font-black text-lg py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-yellow-400/20"
          >
            {sharing ? '生成中...' : shareSuccess ? '保存成功 ✓' : '截图分享'}
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRetry}
            className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-bold text-base py-4 rounded-2xl transition-all duration-200"
          >
            再测一次
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-zinc-700 text-xs mt-4 pb-4"
        >
          完整测试在小红书
        </motion.p>
      </motion.div>
    </div>
  );
}
