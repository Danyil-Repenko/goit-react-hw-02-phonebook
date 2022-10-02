export const Contacts = ({ contacts }) => {
  const creatContacts = contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
    </li>
  ));
  return <ul>{creatContacts}</ul>;
};
