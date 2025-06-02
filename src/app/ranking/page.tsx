'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RankingTable } from '@/components/RankingTable';
import { getRanking } from '@/utils/ranking';
import { RankingEntry } from '@/utils/ranking';

export default function Ranking() {
  const router = useRouter();
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  useEffect(() => {
    setRanking(getRanking());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">ランキング</h1>
        <RankingTable ranking={ranking} />
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            トップに戻る
          </button>
        </div>
      </div>
    </main>
  );
} 