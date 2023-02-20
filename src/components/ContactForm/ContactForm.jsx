import { Form, Label, Input, Button} from './ContactForm.styled'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations'


export function ContactForm () {
  const [name, setName] =useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
  
const handleSubmit = event => {
  event.preventDefault();
  const isNameInContacts = contacts.find(contact => contact.name.toLowerCase() ===  name.toLowerCase().trim() )
  if (isNameInContacts) {
    alert(`${name} is already in contacts`)
  } else {
    const contact = {name, phone}
    dispatch(addContact(contact))
  }
    reset();
  };


const handelInputChange = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value)
        break;
      
       case 'phone':
        setPhone(e.currentTarget.value)
        break;
    
      default:
        console.log("Бедося у тебя с руками")
    }}
         
   const reset = () => {
     setName('')
     setPhone('')
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
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={phone}
              onChange={handelInputChange}
                />
          </Label>
          <Button type="submit">Add contact</Button>       
          </Form>)

}

