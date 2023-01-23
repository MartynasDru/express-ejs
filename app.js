const path = require('path');
const express = require('express');
const mysql = require('mysql2');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const mysqlConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'test123',
    database: 'ssr_pamoka',
    port: 3306
}

const connection = mysql.createConnection(mysqlConfig);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views' , 'home.html'));
    res.render('home', { text: 'Home screen text', pageTitle: 'Home page' });
});

app.get('/contacts', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'contacts.html'));
    res.render('contacts', { text: 'This is contacts page content passed dynamically', pageTitle: 'Contacts page' });
});

app.get('/careers', (req, res) => {
    connection.execute('SELECT * FROM careers', (err, careers) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.render('careers', { pageTitle: 'Careers page', careers });
        }
    })
});

app.get('/api/restaurants', (req, res) => {
    res.send({ name: 'Martynas restaurant' });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));