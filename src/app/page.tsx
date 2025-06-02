'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">はち歯科クイズ</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ルール説明</h2>
          <ul className="text-left space-y-2 mb-6">
            <li>• 全10問の〇×クイズに挑戦します</li>
            <li>• 右スワイプで〇、左スワイプで×を選択</li>
            <li>• 1問10点、100点満点です</li>
            <li>• 回答時間も記録されます</li>
            <li>• 上位10位以内ならランキングに登録できます</li>
          </ul>
          <button
            onClick={() => router.push('/quiz')}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors"
          >
            スタート
          </button>
        </div>
      </div>
    </main>
  );
}
