export type RankingEntry = {
  name: string;
  score: number;
  time: number;
  date: string;
};

const RANKING_KEY = 'hachi_quiz_ranking';

export const getRanking = (): RankingEntry[] => {
  if (typeof window === 'undefined') return [];
  const ranking = localStorage.getItem(RANKING_KEY);
  return ranking ? JSON.parse(ranking) : [];
};

export const saveRanking = (entry: RankingEntry): void => {
  if (typeof window === 'undefined') return;
  const ranking = getRanking();
  ranking.push(entry);
  ranking.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.time - b.time;
  });
  const top10 = ranking.slice(0, 10);
  localStorage.setItem(RANKING_KEY, JSON.stringify(top10));
};

export const isTop10 = (score: number, time: number): boolean => {
  const ranking = getRanking();
  if (ranking.length < 10) return true;
  
  const lowestScore = ranking[ranking.length - 1].score;
  if (score > lowestScore) return true;
  if (score === lowestScore && time < ranking[ranking.length - 1].time) return true;
  
  return false;
}; 