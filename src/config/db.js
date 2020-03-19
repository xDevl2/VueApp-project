import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import Firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

//let app = Firebase.initializeApp(config)
export const db = Firebase.initializeApp({ projectId: 'university-753fc' }).firestore()