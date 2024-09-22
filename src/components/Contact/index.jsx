import { useEffect, useState } from 'react';
import styles from './contact.module.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { STORAGE_SERVICE } from '../../service/storage';


export function Contact({ setEditContact }) {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        const contactList = STORAGE_SERVICE.listContacts()
        setContact(contactList)
    }, []);

    if (contacts.length === 0) {
        return (
            <main className={styles.main}>
                <h2>Contatos</h2>
                <p>Nenhum contato adicionado.</p>
            </main>
        )
    }

    return (
        <main className={styles.main}>
            <h2>Contatos</h2>
            <ul className={styles.contacts}>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <div className={styles.contact}>
                            <div className={styles['alter-contact']}>
                                <h3>Dados de contato</h3>
                                <button className={styles.btn} onClick={() => setEditContact(contact)}>
                                    <GoPencil size={20} />
                                </button>

                                <button className={styles.btn} onClick={() => {
                                    STORAGE_SERVICE.deleteContact(contact)
                                    setContact(STORAGE_SERVICE.listContacts())
                                }}>
                                    <FaRegTrashAlt size={20} />
                                </button>
                            </div>
                            <div className={styles['div-info']}>
                                <strong>{contact.contacts.name}</strong>
                                <span>Nome</span>
                            </div>

                            <div className={styles['div-info']}>
                                <strong>{contact.contacts.number}</strong>
                                <span>Celular</span>
                            </div>

                            <div className={styles['div-info']}>
                                <strong>{contact.contacts.email}</strong>
                                <span>E-mail</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}