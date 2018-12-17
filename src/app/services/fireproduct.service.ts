import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

import { Product } from '../shared/product';

@Injectable()
export class FireproductService {
  productCollection: AngularFirestoreCollection<Product[]> = this.db.collection('products');
  productDocument: AngularFirestoreDocument<Product>;

  products: Observable<Product[]>;
  product: Observable<Product>;
  folder: any;

// title Search source
  private titleSource = new BehaviorSubject<string>('');
  currentTitle = this.titleSource.asObservable();


  constructor(private db: AngularFirestore) {
          this.folder = 'bikeshopImages';
          this.getProducts();
      }

// get product data list
 getProducts () {
this.products = this.productCollection.snapshotChanges()
              .pipe(map(changes => {
                return changes.map(a => {
                                const id = a.payload.doc.id;
                                const data = {id, ...a.payload.doc.data()} as Product;
                                return data;
                              });
              }));

    return this.products;
 }
 // get single product data by id
 getProduct (id: string) {
   this.productDocument = this.db.doc('products/' + id);
   this.product = this.productDocument.snapshotChanges()
                 .pipe(map(product => {
                   const id = product.payload.id;
                   const data = {id, ...product.payload.data()} as Product;
                   return data;
                 }));
   return this.product;
 }

// operations wirh firestore
 createProduct (product, blobFile) {
   // create storage ref
   const storageRef = firebase.storage().ref();
   const path = `/${this.folder}/${product.img}`;
   const imageRef = storageRef.child(path);
   // put img to storage
   imageRef.putString(blobFile, 'base64').then(() => {
     // get full url for product before save to firestore
     storageRef.child(path).getDownloadURL().then((url) => {
       product.img = url;
       return this.productCollection.add(product);
     }).catch(error => console.log(error));
   }).catch(error => console.log(error));
}

updateProduct (product: Product) {
  return this.productDocument.update(product);
}

deleteProduct (id) {
  this.db.doc(`products/${id}`).delete();
}

// search data by form
changeTitle(message: string) {
   this.titleSource.next(message);
}
}
