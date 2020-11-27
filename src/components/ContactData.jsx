import React from 'react';
import classes from  '../CSS/ContactData.module.css';
import Button from './Button';


const ContactData = () => {
    
    /* const[ contact, setContact ] = useState({
         name: '',
         email: '',
         address: {
             street: '',
             postalCode: ''
         } 
     })*/
     return (
         <div className={classes.ContactData}>
             <p>Please fill in the form:</p>
             <form > 
                 <input  type="text" name='name' placeholder='Full name'/>
                 <input type="text" name='email' placeholder='Your email'/>
                 <input type="text" name='street' placeholder='Your street and number'/>
                 <input type="text" name='postalCode' placeholder='Your postal code'/>
                 <Button btnType='Success'>ORDER</Button>
 
             </form>
         </div>
 
     )
 
 }
 

export default ContactData;