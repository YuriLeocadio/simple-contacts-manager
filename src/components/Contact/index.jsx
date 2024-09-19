import styles from './contact.module.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";


export function Contact() {
    return (
        <main className={styles.main}>
            <h2>Contatos</h2>
            <ul className={styles.contacts}>
                <li>
                    <div className={styles.contact}>
                        <div className={styles['alter-contact']}>
                        <h3>Dados de contato</h3>
                        <GoPencil size={20} />
                        <FaRegTrashAlt size={20} />
                        </div>
                        <div className={styles['div-info']}>
                            <strong>Yuri Leocadio</strong>
                            <span>Nome</span>
                        </div>

                        <div className={styles['div-info']}>
                            <strong>12685371263</strong>
                            <span>Celular</span>
                        </div>

                        <div className={styles['div-info']}>
                            <strong>yurileocadio0411@gmail</strong>
                            <span>E-mail</span>
                        </div>
                    </div>
                </li>
            </ul>
        </main>
    )
}