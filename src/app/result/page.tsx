'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ScoreComment } from '@/components/ScoreComment';
import { NameInputModal } from '@/components/NameInputModal';
import { isTop10, saveRanking } from '@/utils/ranking';

export default function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showNameModal, setShowNameModal] = useState(false);

  const score = Number(searchParams.get('score')) || 0;
  const time = Number(searchParams.get('time')) || 0;

  useEffect(() => {
    if (isTop10(score, time)) {
      setShowNameModal(true);
    }
  }, [score, time]);

  const handleNameSubmit = (name: string) => {
    saveRanking({
      name,
      score,
      time,
      date: new Date().toLocaleDateString('ja-JP')
    });
    setShowNameModal(false);
    router.push('/ranking');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ScoreComment score={score} time={time} />
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={() => router.push('/quiz')}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            もう一度挑戦
          </button>
          <button
            onClick={() => router.push('/ranking')}
            className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors"
          >
            ランキングを見る
          </button>
        </div>
      </div>
      <NameInputModal
        isOpen={showNameModal}
        onClose={() => {
          setShowNameModal(false);
          router.push('/ranking');
        }}
        onSubmit={handleNameSubmit}
      />
    </main>
  );
} 