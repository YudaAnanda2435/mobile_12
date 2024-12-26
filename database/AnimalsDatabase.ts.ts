// src/database/animalDatabase.ts
import SQLite, {Transaction, ResultSet} from 'react-native-sqlite-storage';

// Initialize database
const db = SQLite.openDatabase({name: 'Animals.db', location: 'default'});

// Initialize all tables
export const initializeTables = (): void => {
  db.transaction((tx: Transaction) => {
    const tables = ['Cats', 'Dogs', 'Rabbits'];
    tables.forEach(table => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${table} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          type TEXT,
          owner TEXT,
          dateTaken TEXT
        );`,
      );
    });
  });
};

// Fetch all entries from a specific table
export const getAnimalsFromDB = (tableName: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        `SELECT * FROM ${tableName}`,
        [],
        (_: Transaction, results: ResultSet) => {
          const rows = results.rows;
          const animals: any[] = [];
          for (let i = 0; i < rows.length; i++) {
            const animal = rows.item(i);
            // Pastikan id adalah number
            animal.id = Number(animal.id);
            animals.push(animal);
          }
          resolve(animals);
        },
        (_, error: any) => {
          console.error(`Error fetching animals from ${tableName}:`, error);
          reject(error);
        },
      );
    });
  });
};

// Add an entry to a specific table
export const addAnimalToDB = (
  tableName: string,
  animal: {name: string; type: string; owner: string; dateTaken: string},
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        `INSERT INTO ${tableName} (name, type, owner, dateTaken) VALUES (?, ?, ?, ?)`,
        [animal.name, animal.type, animal.owner, animal.dateTaken],
        () => resolve(),
        (_, error: any) => {
          console.error(`Error adding animal to ${tableName}:`, error);
          reject(error);
        },
      );
    });
  });
};

// Update an entry in a specific table
export const updateAnimalInDB = (
  tableName: string,
  id: number,
  animal: {name: string; type: string; owner: string; dateTaken: string},
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        `UPDATE ${tableName} SET name = ?, type = ?, owner = ?, dateTaken = ? WHERE id = ?`,
        [animal.name, animal.type, animal.owner, animal.dateTaken, id],
        () => resolve(),
        (_, error: any) => {
          console.error(`Error updating animal in ${tableName}:`, error);
          reject(error);
        },
      );
    });
  });
};

// Delete an entry from a specific table
export const deleteAnimalFromDB = (
  tableName: string,
  id: number,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: Transaction) => {
      tx.executeSql(
        `DELETE FROM ${tableName} WHERE id = ?`,
        [id],
        () => resolve(),
        (_, error: any) => {
          console.error(`Error deleting animal from ${tableName}:`, error);
          reject(error);
        },
      );
    });
  });
};
