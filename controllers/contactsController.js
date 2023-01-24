module.exports = (req, res) => {
    res.render(
        'contacts', 
        { text: 'This is contacts page content passed dynamically', pageTitle: 'Contacts page' }
    );
}
