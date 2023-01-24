const { getCareers, deleteCareers } = require('../models/careersModel');

module.exports = {
    index: (req, res) => {
        getCareers((err, careers) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('careers', { pageTitle: 'Careers page', careers });
            }
        });
    },
    delete: (req, res) => {
        const id = req.params;
        deleteCareers((err, result) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }, id)
    }
};