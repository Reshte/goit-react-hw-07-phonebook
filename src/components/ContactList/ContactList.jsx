import { ContactListItem } from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'
import { useSelector } from "react-redux";
import { getcontacts } from '../../redux/selectors'
import { getFilter } from '../../redux/selectors'

const getVisibleContacts = (contacts, filter) => {
    if (filter.length > 0) { return contacts.filter(({ name }) => name.toLowerCase().includes(filter)) }
    return contacts;
    };

export const ContactList = () => {
    const contacts = useSelector(getcontacts)
    const filter = useSelector(getFilter);    
    const visibleContacts = getVisibleContacts(contacts, filter)
    console.log(contacts)
            return ( 
            <List>
                   {visibleContacts.map(({ id, name, number }) => (
                       <ContactListItem key={id} id={id} name={name} number={number}/>))}
            </List> )
}

