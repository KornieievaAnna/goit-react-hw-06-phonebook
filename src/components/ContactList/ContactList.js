import { Contacts, ButtonDelete } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selector';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
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
