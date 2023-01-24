const path = require('path');
const express = require('express');

const homeRoute = require('./routes/homeRoute');
const contactsRoute = require('./routes/contactsRoute');
const careersRoute = require('./routes/careersRoute');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);
app.use('/contacts', contactsRoute);
app.use('/careers', careersRoute);

app.get('/api/restaurants', (req, res) => {
    res.send({ name: 'Martynas restaurant' });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));