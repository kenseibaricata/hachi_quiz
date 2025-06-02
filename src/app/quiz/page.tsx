'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { QuizCard } from '@/components/QuizCard';
import { startTimer } from '@/utils/timer';

export default function Quiz() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);

  useEffect(() => {
    // 問題をシャッフル
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    // タイマー開始
    setStartTime(startTimer());
  }, []);

  const handleSwipe = (direction: 'left' | 'right') => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = direction === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + 10);
    }

    setShowExplanation(true);

    // 2秒後に次の問題へ
    setTimeout(() => {
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex(prev => prev + 1);
        setShowExplanation(false);
      } else {
        // クイズ終了
        const endTime = performance.now();
        const time = Math.floor((endTime - startTime) / 1000);
        router.push(`/result?score=${score + (isCorrect ? 10 : 0)}&time=${time}`);
      }
    }, 2000);
  };

  if (shuffledQuestions.length === 0) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <p className="text-lg font-bold">
            問題 {currentQuestionIndex + 1}/10
          </p>
          <p className="text-sm text-gray-600">
            スコア: {score}点
          </p>
        </div>
        <QuizCard
          question={shuffledQuestions[currentQuestionIndex]}
          onSwipe={handleSwipe}
          showExplanation={showExplanation}
        />
      </div>
    </main>
  );
} 