const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views' , 'home.html'));
    res.render('home', { text: 'Home screen text', pageTitle: 'Home page' });
});

app.get('/contacts', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'contacts.html'));
    res.render('contacts', { text: 'This is contacts page content passed dynamically', pageTitle: 'Contacts page' });
});

app.get('/api/restaurants', (req, res) => {
    res.send({ name: 'Martynas restaurant' });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));