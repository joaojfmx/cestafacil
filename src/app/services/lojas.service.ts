import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


import { Loja } from '../model/loja';
import { Usuario } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(
    private bd: AngularFireDatabase,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth

  ) { }

  getAll() {
    return this.afs.collection('Carrefour').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
        )
      );
  }
}


