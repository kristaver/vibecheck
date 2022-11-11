import * as SQLite from 'expo-sqlite';

  const readDatabase = () => {
    return SQLite.openDatabase('moods')
  }
  
  const writeToDatabase = (obj) => {
    if (obj === null || obj === undefined) {
      console.log("error writing to database, object is malformed: ", obj)
      return false;
    }

    const db = readDatabase();

    db.transaction(
      tx => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [obj]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      []
    );

  }

export { readDatabase, writeToDatabase }