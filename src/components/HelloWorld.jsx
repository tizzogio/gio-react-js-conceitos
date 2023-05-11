import styles from './HelloWorld.module.css'

function HelloWorld(){

  return(
    <div className={styles.meuContainer}>
        <p>Meu componente Hello world</p>
    </div>
  )
}

export default HelloWorld;