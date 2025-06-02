export const startTimer = (): number => {
  return performance.now();
};

export const endTimer = (startTime: number): number => {
  const endTime = performance.now();
  return Math.floor((endTime - startTime) / 1000); // 秒単位に変換
}; 