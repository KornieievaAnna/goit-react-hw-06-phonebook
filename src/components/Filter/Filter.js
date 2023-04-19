import { ImputForm, Label } from '../Form/Form.styled';

import { filterContact } from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <ImputForm>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={filter}
          onChange={evt => dispatch(filterContact(evt.target.value))}
          required
        />
      </Label>
    </ImputForm>
  );
};

export default Filter;
