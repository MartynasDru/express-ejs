module.exports = (req, res) => {
    res.render('home', { text: 'Home screen text', pageTitle: 'Home page' });
};