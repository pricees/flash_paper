/**
 * This is an exploratory program.  I am finally learning Javascript.
 *
 * NOTE: Interestingly enough, Firebase writes locally, then writes the cloud
 * when available.  
 *
 *
 */
var Firebase = require('firebase');

if (process.argv.length > 2) {
  var firebase_db = process.env.FIREBASE_DB;
  var url_db      = 'https://' + firebase_db + '.firebaseio.com/'
  var myRootRef   = new Firebase(url_db);
  note            = process.argv[2];

  if (note === 'list') {
    data_ref = myRootRef.child('note');
    data_ref.on('value', function(snapshot) {
      console.log(snapshot.val());
      process.exit();
    });
  } else {
    myRootRef.child('note').push({ "note" : note, "category" : "stuff" }, 
      function() { process.exit(); });
  }
} else {
  console.log('FIREBASE_DB=[your_db] node flashpaper.js [note]');
}
