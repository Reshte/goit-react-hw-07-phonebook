import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from 'components/ContactForm/ContactForm'
import { FilterForm } from './FilterForm/FilterForm'
import { Wrapper, Title, TitleContacts } from './App.styled'


export function App() {
    
  return (
        <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>      
        <FilterForm />
        <ContactList />
        </Wrapper>
  )    
}

