export type Question = {
  id: number;
  question: string;
  correctAnswer: 'right' | 'left';
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "歯は1日1回だけ磨けば十分である。",
    correctAnswer: "left",
    explanation: "理想は1日3回。特に寝る前の歯磨きは重要です。"
  },
  {
    id: 2,
    question: "虫歯は自然に治ることがある。",
    correctAnswer: "left",
    explanation: "虫歯は自然に治りません。進行するので、早めの治療が必要です。"
  },
  {
    id: 3,
    question: "親知らずは必ず抜かなければならない。",
    correctAnswer: "left",
    explanation: "問題がなければ抜かずにそのままにすることもあります。"
  },
  {
    id: 4,
    question: "甘いものを食べるとすぐに虫歯になる。",
    correctAnswer: "left",
    explanation: "すぐに虫歯になるわけではありませんが、長時間歯に糖が残るとリスクが上がります。"
  },
  {
    id: 5,
    question: "歯磨き粉は使わなくても歯は磨ける。",
    correctAnswer: "right",
    explanation: "正しいブラッシングをすれば、歯磨き粉がなくても歯垢は落とせます。"
  },
  {
    id: 6,
    question: "歯並びは遺伝が関係している。",
    correctAnswer: "right",
    explanation: "顎の大きさや歯の位置は遺伝の影響を受けることがあります。"
  },
  {
    id: 7,
    question: "小さい子どもの乳歯は虫歯になっても問題ない。",
    correctAnswer: "left",
    explanation: "乳歯の虫歯は永久歯の発育にも悪影響を与える可能性があります。"
  },
  {
    id: 8,
    question: "キシリトールは虫歯予防に効果がある。",
    correctAnswer: "right",
    explanation: "キシリトールは虫歯の原因菌の活動を抑える働きがあります。"
  },
  {
    id: 9,
    question: "電動歯ブラシを使えば正しい磨き方は必要ない。",
    correctAnswer: "left",
    explanation: "電動でも使い方を間違えると、磨き残しが出てしまいます。"
  },
  {
    id: 10,
    question: "歯科医院には痛みがなくても定期的に行った方が良い。",
    correctAnswer: "right",
    explanation: "定期検診で早期発見・予防ができ、将来の治療負担を減らせます。"
  }
]; 