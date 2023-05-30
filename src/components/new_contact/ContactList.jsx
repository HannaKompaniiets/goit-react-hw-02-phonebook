import css from './new_contacts.module.css'
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteButton }) => { 
   
    return (
        <ul className={ css.contact_list}>
            {contacts.map(({ id, name, number }) => (
                <li  className={ css.contact_item} key={id}>
                    <p className={ css.contact_title}>{name} : {number}</p> 
                    <button className={ css.button_delete} onClick={()=> onDeleteButton(id) } type='button'>Delete</button>
                </li>))}
        </ul>
    )
}



ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteButton: PropTypes.func.isRequired,
} ;   
export default ContactList;
