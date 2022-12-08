const Contact = require('../models/Contact');
const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    res.render('index', { contacts: phonebook.getPhonebook() });
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    const name = req.body.name;
    const number = req.body.number;

    const contact = new Contact(name, number);
    phonebook.addContact(contact);

    res.redirect('/');
  },

  deletePhonebookPost: (req, res) => {
    const name = req.body.name;
    const number = req.body.number;

    const contact = new Contact(name, number);

    phonebook.deleteContact(contact);

    res.redirect('/');
  }
}