import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SqliteDbService {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(public storage: SQLite) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({name: 'data.db', location: 'default'}).then((db: SQLiteObject) => {
        this.db = db;
        // eslint-disable-next-line max-len
        db.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, identification INTEGER, name TEXT, lastname text)', []).then(() => {
          this.isOpen = true;
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  createUser(identification: number, name: string, lastname: string) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO users (identification, name, lastname) VALUES (?, ?, ?)';
      this.db.executeSql(sql, [identification, name, lastname]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql('SELECT * FROM users', []).then((data) => {
        const arrayUsers = [];
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id: data.rows.item(i).id,
              identification: data.rows.item(i).identification,
              name: data.rows.item(i).name,
              lastname: data.rows.item(i).lastname
            });
          }
        }
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      });
    });
  }


}

