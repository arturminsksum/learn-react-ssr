const mongoose = require('mongoose');

const uri = 'mongodb://artur:artur-31@ds121088.mlab.com:21088/frontcamp';
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connection success');
});

module.exports = mongoose;
