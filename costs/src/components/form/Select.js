import styles from './Select.module.css'

function Select({text, name, options, handleonChange, value }) {

  return (

    <div className={styles.form_control}>

      <label htmlFor={name}>{text}</label>
     
    <select name={name} id={name}>
        <option>
            Selecione uma opção
        </option>
        {options.map((option) => (
          <options value={option.id} key={option.id}>{option.name}</options>
          ))}
    </select>
    </div>
  );
}

export default Select;