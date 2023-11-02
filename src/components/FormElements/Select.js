import './Select.css';

const Select = props => {

  const options = [
    "Canabis",
    "Amphetamine",
    "Benzodiasapine",
    "Extasy",
    "Ketamine",
    "Acid",
    'Heroine'
];

const {onOptionChangeHandler} = props;
  return (
    <div
    className={'form-control'}
  >
    <label htmlFor={props.id}>Select</label>
    <select onChange={onOptionChangeHandler}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
    </div>
  );
};

export default Select;
