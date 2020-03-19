<template>
  <div class="class">
      <h1>{{msg}}</h1>
      <div class="list-subjects">
        <ul>
          <li v-for="(subject, idx) in subjects" class="subject" :key="idx">
          <span>{{subject.subject}}</span>
          <button v-on:click="deleteSubject(subject.id)">X</button>
        </li>
        </ul>
      </div>
      <div class="add-new-subject">
          <form id="form" v-on:submit.prevent="addSubject">
              <input type="text" v-model="newSubject.subject" class="subject-input" />
              <input type="submit" class="btn-add-subject" value="Add Subject" />
          </form>
      </div>
  </div>
</template>

<script>
  import { db } from '../config/db';
  
  export default {
    name: 'University',
    data() {
      return {
        newSubject : { subject: '' },
        subjects: [],
        log(message){
          console.log(message)
        }
      }
    },
    firestore(){
      return{
        subjects: db.collection('subjects')
      }
    },
    methods: {
      addSubject(){
          db.collection('subjects').add(this.newSubject)   
      },
      deleteSubject (id) {
        db.collection('subjects').doc(id).delete()
      }
    },
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>