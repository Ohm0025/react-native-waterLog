export const sumTable = (data: { amount: number }[]) => {
  return data.reduce((acc, cur) => acc + cur.amount, 0);
};
