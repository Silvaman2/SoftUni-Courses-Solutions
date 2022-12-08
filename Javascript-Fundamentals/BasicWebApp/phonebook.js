/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const phonebook = [];

function getPhonebook() {
	return phonebook;
}

function addContact(contact) {
	phonebook.push(contact);
}

function deleteContact(contact) {
	const contactIndex = phonebook.indexOf(contact);
	phonebook.splice(contactIndex, 1);
}

module.exports = {
	getPhonebook,
	addContact,
	deleteContact
};