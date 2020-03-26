const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// Quando tiver no ar
// app.use(cors(){
//   origin: "http://meusite.com.br"
// });

app.use(express.json());
app.use(routes);



app.listen(3333);


