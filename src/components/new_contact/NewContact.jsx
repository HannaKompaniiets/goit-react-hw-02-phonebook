import css from './new_contacts.module.css'
import PropTypes from 'prop-types';

const NewContact = ({ contacts, onDeleteButton }) => { 
   
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



NewContact.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
        id: PropTypes.any.isRequired,
        name: PropTypes.string,
        number: PropTypes.number,
    })),
    onDeleteButton: PropTypes.func.isRequired,
} ;   
export default NewContact;
