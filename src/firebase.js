import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJ_odVhC7bswHhTi8m6fs5vc6Aw9cE014",
    authDomain: "office-hrm.firebaseapp.com",
    databaseURL: "https://office-hrm.firebaseio.com",
    projectId: "office-hrm",
    storageBucket: "office-hrm.appspot.com",
    messagingSenderId: "643361826411"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  export { firebaseDB }

//   firebase.database().ref().set({
//       name: 'suman',
//       role: 'devloper',
//       password: 'password',
//       team : ['kiran kumar mondal', 'swathi', 'Sai']
//   })
//   .then(()=>{
//       console.log('data saved')
//   })
//   .catch((e)=>{
//     console.log(e)
// })

// firebase.database().ref().on('value', (snapshot)=> {
//     console.log(snapshot.val())
// })

  //firebase.database().ref().set('')

