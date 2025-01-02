export const sumTable = (data: { amount: number }[]) => {
  return data.reduce((acc, cur) => acc + cur.amount, 0);
};

export const extractTime = (str: string) => {
  const date = typeof str === "number" ? new Date(str) : new Date(str);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
