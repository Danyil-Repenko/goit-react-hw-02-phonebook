export const Contacts = ({ contacts }) => {
  const creatContacts = contacts.map(contact => (
    <li key={contact.id}>{contact.name}</li>
  ));
  return <ul>{creatContacts}</ul>;
};
