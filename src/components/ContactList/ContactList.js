import PropTypes from 'prop-types';
import { Contacts, ButtonDelete } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, getContacts } from 'redux/contactSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // console.log(contacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contacts key={id}>
          {name}: {number}
          <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonDelete>
        </Contacts>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
