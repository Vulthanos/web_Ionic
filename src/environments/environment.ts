// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore} from "@angular/fire/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyAOs5F1izcHbBhvDIZf_-SjG6rHkegt9dQ",
        authDomain: "vulthanosangular.firebaseapp.com",
        projectId: "vulthanosangular",
        storageBucket: "vulthanosangular.appspot.com",
        messagingSenderId: "1083165440814",
        appId: "1:1083165440814:web:3f9b27d670e2247e30d8bf"
    }
};

// Initialize Firebase
export const app = initializeApp(environment.firebaseConfig);








/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
