import { ContactListItem } from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { getContacts } from '../../redux/selectors'
import { getFilter } from '../../redux/selectors'

const getVisibleContacts = (contacts, filter) => {
    if (filter.length > 0) { return contacts.filter(({ name }) => name.toLowerCase().includes(filter)) }
    return contacts;
    };

export const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter);    
    const visibleContacts = getVisibleContacts(contacts, filter)
  
            return ( 
            <List>
                   {visibleContacts.map(({ id, name, phone }) => (
                       <ContactListItem key={id} id={id} name={name} phone={phone}/>))}
            </List> )
}

