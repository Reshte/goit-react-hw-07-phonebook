// import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../../redux/contactsSlice"

export const ContactListItem = ({ id, name, number }) => {
     const dispatch = useDispatch()
     const handleDelete = () => dispatch(deleteContact(id));
     return (  
<Item key={id}>
           <p>{name} : {number}</p>
<Button type='button' onClick={handleDelete}>Delete</Button>
</Item>)  
}