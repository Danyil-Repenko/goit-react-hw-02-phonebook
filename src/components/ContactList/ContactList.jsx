import { ContactItem } from 'components/ContactsItem/ContactsItem';

let creatContacts = null;
let creatContactItem = null;

export const ContactList = ({ contacts, filterState, handleBtnClick }) => {
  creatContactItem = ({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      handleRemoval={handleBtnClick}
    />
  );

  if (filterState === '') {
    creatContacts = contacts.map(creatContactItem);
  } else {
    creatContacts = contacts
      .filter(contact => contact.name.toLowerCase().includes(filterState))
      .map(creatContactItem);
  }

  return <ul>{creatContacts}</ul>;
};
