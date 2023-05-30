import { Component } from "react"; 
import css from './form.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleInputChange = event => {
       this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    };
    
    contactButtonSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({ name: '', number: '' });
    };
  
render() { 
    return (
      <form className={ css.form} onSubmit={this.contactButtonSubmit}>
        <label className={ css.label_name}> Name
          <input className={css.intup}
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          
          <label className={ css.label_name}> Number
            <input className={css.intup}
              value={ this.state.number}
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        <button className={ css.button_add} type='submit'> Add contact</button>
            
      </form>
        
    );
}
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

