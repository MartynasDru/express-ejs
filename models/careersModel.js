const { createConnection } = require('../db');

module.exports = {
    getCareers: (callback) => {
        const connection = createConnection();
        connection.execute('SELECT * FROM careers', (err, careers) => callback(err, careers))
    },
    deleteCareers: (callback, id) => {
        const connection = createConnection();
        connection.execute('DELETE FROM careers WHERE id=?', [id], (err, result) => callback(err, result))
    }
}