const express = require('express');
const fs = require('fs');
const simp = require('./simpsons.json');

const app = express();

app.use(express.json());
// ex2
// app.get('/ping', (req, res) => {
//     res.json({message: 'Pong!'})
// });
// ex3
// app.post('/hello', (req, res) => {
//     const {name} = req.body;
//     res.json({message: `Hello ${name}`});
// });

// ex4
app.post('/hello', (req, res) => {
    const {name, age} = req.body;
    if (age > 17) {
        res.status(200).json({message: `Hello ${name}`});
    }
    res.status(401).json({message: `Unauthorized`});
});

// ex5
app.put('/users/:name/:age', (req, res) => {
    const {name, age} = req.params;
    res.json({message: `Seu nome é ${name} e você tem ${age}  anos de idade`});
});

// ex7
app.get('/simpsons', (req, res) => {
    res.send(console.log(simp));
});

//ex8
app.get('/simpsons/:id', (req, res) => {
    const {id} = req.params;
    if (id == simp.id) {
        res.json({name:simp[id-1].name})
    }
    return []
    
});


app.listen(3000, () => console.log("New connection"));
