import styles from './aside.module.css'

export function Aside() {
    return(
        <aside className={styles.aside}>
        <h2>Adicionar Contato</h2>
        <form>
            <div className={styles['divs-input']}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Nome' required />
            </div>

            <div className={styles['divs-input']}>
                <label htmlFor="">Número</label>
                <input type="number" placeholder='Número' required />
            </div>

            <div className={styles['divs-input']}>
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder='E-mail'/>
            </div>

            <button>Adicionar</button>
        </form>
        </aside>
    )
}