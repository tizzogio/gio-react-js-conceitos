import styles from './Texts.module.css'

function Texts({text}){

  return(
    <>
        <p className={styles.TextosPadrao}>{text}</p>
    </>
  )
}

export default Texts;