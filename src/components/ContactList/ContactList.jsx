
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const filteredData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(handleRemoveContact(contactId));
  };

  return (
    <div>
       <ul className={`${css.contactList} ${css.noPadding}`}>
        {filteredData.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


