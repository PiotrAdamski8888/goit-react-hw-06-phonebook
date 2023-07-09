import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const handleRemoveContact = id => {
    dispatch(remove(id));
  };

  const filterContacts = () => {
    return contacts.filter(
      contact =>
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  return (
    <ul>
      {filterContacts().map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemoveContact={() => handleRemoveContact(contact.id)}
        />
      ))}
    </ul>
  );
};
