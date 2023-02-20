import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations"

export const ContactListItem = ({ id, name, phone }) => {
     const dispatch = useDispatch()
     const handleDelete = () => dispatch(deleteContact(id));
     return (  
<Item key={id}>
           <p>{name} : {phone}</p>
<Button type='button' onClick={handleDelete}>Delete</Button>
</Item>)  
}