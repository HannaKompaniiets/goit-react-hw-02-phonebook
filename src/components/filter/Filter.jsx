import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <label className={css.label_title}>Find contact by name:
            <input className={ css.filter_input} onChange={onChange} type='name' value={value}></input>
        </label>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;