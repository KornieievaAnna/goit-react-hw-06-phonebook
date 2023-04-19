import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Conteiner, Title } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contact</Title>
      {contacts.length !== 0 && <Filter />}
      <ContactList />
    </Conteiner>
  );
}
export default App;
