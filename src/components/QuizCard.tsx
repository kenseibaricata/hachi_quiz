import { motion, PanInfo } from 'framer-motion';
import { Question } from '@/data/questions';

type QuizCardProps = {
  question: Question;
  onSwipe: (direction: 'left' | 'right') => void;
  showExplanation: boolean;
};

export const QuizCard = ({ question, onSwipe, showExplanation }: QuizCardProps) => {
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: 'grabbing' }}
    >
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">{question.question}</h2>
        {showExplanation && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>← ×</span>
          <span>〇 →</span>
        </div>
      </div>
    </motion.div>
  );
}; 