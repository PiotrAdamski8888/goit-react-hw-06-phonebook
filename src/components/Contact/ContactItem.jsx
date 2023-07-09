import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  return (
    <li className={css.item}>
      {contact.name} - {contact.number}
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
