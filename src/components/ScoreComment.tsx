import { ScoreEvaluation, evaluateScore } from '@/utils/score';

type ScoreCommentProps = {
  score: number;
  time: number;
};

export const ScoreComment = ({ score, time }: ScoreCommentProps) => {
  const evaluation = evaluateScore(score);

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-2">{evaluation.title}</h2>
      <p className="text-xl mb-4">{evaluation.comment}</p>
      <div className="text-gray-600">
        <p>スコア: {score}点</p>
        <p>回答時間: {time}秒</p>
      </div>
    </div>
  );
}; 