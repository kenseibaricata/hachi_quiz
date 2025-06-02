import { RankingEntry } from '@/utils/ranking';

type RankingTableProps = {
  ranking: RankingEntry[];
  currentScore?: number;
  currentTime?: number;
};

export const RankingTable = ({ ranking, currentScore, currentTime }: RankingTableProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">ランキング</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">順位</th>
              <th className="px-4 py-2">名前</th>
              <th className="px-4 py-2">スコア</th>
              <th className="px-4 py-2">時間</th>
              <th className="px-4 py-2">日付</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((entry, index) => (
              <tr
                key={index}
                className={`border-t ${
                  currentScore === entry.score && currentTime === entry.time
                    ? 'bg-blue-50'
                    : index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50'
                }`}
              >
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">{entry.name}</td>
                <td className="px-4 py-2 text-center">{entry.score}点</td>
                <td className="px-4 py-2 text-center">{entry.time}秒</td>
                <td className="px-4 py-2 text-center">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 