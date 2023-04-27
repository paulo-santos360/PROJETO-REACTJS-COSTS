import styles from './SubmitButton.module.css'

function SubmitButton({ text }) {

  return (

    <div>
        <butto className={styles.btn}>{text}</butto>
    </div>
  );
}

export default SubmitButton;