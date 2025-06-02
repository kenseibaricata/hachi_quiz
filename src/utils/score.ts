export type ScoreEvaluation = {
  title: string;
  comment: string;
};

export const evaluateScore = (score: number): ScoreEvaluation => {
  if (score === 100) {
    return {
      title: "🦷 歯の神",
      comment: "パーフェクト！あなたの知識は歯医者レベルです！"
    };
  } else if (score >= 80) {
    return {
      title: "😎 歯科エリート",
      comment: "素晴らしい！あと少しで完璧！この調子で続けましょう。"
    };
  } else if (score >= 60) {
    return {
      title: "🧐 歯科ビギナー",
      comment: "いい線いってます！少しずつ知識を深めていきましょう。"
    };
  } else {
    return {
      title: "😅 歯磨き戦士",
      comment: "まだまだこれから。毎日の歯磨きとともに学びも続けよう！"
    };
  }
}; 