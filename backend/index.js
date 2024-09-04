// const express = require('express')
// var cors = require('cors')
// const connectToMongo = require('./db')
// connectToMongo()



// const app = express()

// app.use(cors())
// app.use(express.json())// Middleware to parse JSON request bodies

// // Use the auth routes with a base path
// app.use('/api/auth' , require('./routes/auth'))
// app.use('/api/note' , require('./routes/note'))

// // Start the server

// const port = 4000
// app.listen(port, () => {
//   console.log(`Backend running on port ${port}`)
// })


const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToMongo = require('./db');
connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/note', require('./routes/note'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
