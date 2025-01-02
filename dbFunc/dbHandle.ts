import { formatDateDb } from "./formatData";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("databaseName");

const createTable = async () => {
  const result = await db.runAsync(
    "CREATE TABLE IF NOT EXISTS Waterlog (id INTEGER PRIMARY KEY AUTOINCREMENT , createdAt DATETIME , amount DOUBLE)"
  );
  return result;
};

const getAllRows = async (index = 0, count = 5) => {
  try {
    const dateNow = formatDateDb(new Date()).split(" ")[0];

    const result = await db.getAllAsync(
      `SELECT * FROM Waterlog WHERE createdAt LIKE '${
        dateNow + "%"
      }' ORDER BY createdAt DESC`
      // `SELECT * FROM Waterlog WHERE createdAt LIKE '${
      //   dateNow + "%"
      // }' ORDER BY createdAt DESC LIMIT ${index + count} OFFSET ${index * 5}`
    );

    return result;
  } catch (err: any) {
    if (err.message.includes("no such table")) {
      return;
    }
    console.error(err);
  }
};

const createRecord = async (amount: number) => {
  try {
    const dateNow = formatDateDb(new Date());
    const result = await db.runAsync(
      "INSERT INTO Waterlog (amount , createdAt) VALUES (?,?)",
      amount,
      dateNow
    );
    return result;
  } catch (err: any) {
    console.error(err);
  }
};

const updateRecord = async (amount: number, id: number) => {
  try {
    const result = await db.runAsync(
      "UPDATE Waterlog SET amount = ? WHERE id = ?",
      amount,
      id
    );
    return result;
  } catch (err: any) {
    console.error(err);
  }
};

const deleteRecord = async (id: number) => {
  try {
    const result = await db.runAsync("DELETE FROM Waterlog WHERE id = ?", id);
  } catch (err: any) {
    console.error(err);
  }
};

const resetAllTable = async () => {
  const result = await db.runAsync("DELETE FROM Waterlog");
};

const getDataAtDate = async (date: string) => {
  const formatedDate = date.split("-").reverse().join("-");
  console.log(formatedDate);
  const query = `SELECT * FROM Waterlog WHERE createdAt LIKE '${
    formatedDate + "%"
  }' ORDER BY createdAt DESC`;
  try {
    const result = await db.getAllAsync(query);
    return result;
  } catch (err: any) {
    console.error(err);
  }
};

export default {
  createTable,
  getAllRows,
  createRecord,
  updateRecord,
  deleteRecord,
  resetAllTable,
  getDataAtDate,
};
