import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from 'components/ContactForm/ContactForm'
import { FilterForm } from './FilterForm/FilterForm'
import { Wrapper, Title, TitleContacts } from './App.styled'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContackts } from "redux/operations";



export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(fetchContackts());
  }, [dispatch])
    
  return (
        <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>      
        <FilterForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
        </Wrapper>
  )    
}

