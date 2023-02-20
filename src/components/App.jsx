import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from 'components/ContactForm/ContactForm'
import { FilterForm } from './FilterForm/FilterForm'
import { Wrapper, Title, TitleContacts } from './App.styled'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getIsLoading, getError} from "redux/selectors"



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  
  useEffect(() => {
       dispatch(fetchContacts());
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

