import { Form, Label, Input, Button} from './ContactForm.styled'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from '../../redux/contactsSlice'
import { useSelector } from 'react-redux';
import { getcontacts } from 'redux/selectors';

export function ContactForm () {
  const [name, setName] =useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch();
  const contacts = useSelector(getcontacts)
  
const handleSubmit = event => {
  event.preventDefault();
  const isNameInContacts = contacts.find(contact => contact.name.toLowerCase() ===  name.toLowerCase().trim() )
  if (isNameInContacts) {
    alert(`${name} is already in contacts`)
  } else {
    dispatch(addContacts(name, number))
  }
    reset();
  };


const handelInputChange = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value)
        break;
      
       case 'number':
        setNumber(e.currentTarget.value)
        break;
    
      default:
        console.log("Бедося у тебя с руками")
    }}
         
   const reset = () => {
     setName('')
     setNumber('')
    }
    
    return (<Form onSubmit={handleSubmit}>
          <Label htmlFor="" > Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handelInputChange}
              required />
          </Label>      
          <Label htmlFor=""> number
            <Input
             type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handelInputChange}
                />
          </Label>
          <Button type="submit">Add contact</Button>       
          </Form>)

}

