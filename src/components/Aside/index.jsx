import { useEffect, useState } from 'react';
import styles from './aside.module.css'
import { STORAGE_SERVICE } from '../../service/storage';

export function Aside({ editContact, setEditContact }) {
    const [inputName, setInputName] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (editContact) {
            setInputName(editContact.contacts.name);
            setInputNumber(editContact.contacts.number);
            setInputEmail(editContact.contacts.email);
            setIsEditing(true);
        } else {
            setInputName('');
            setInputNumber('');
            setInputEmail('');
            setIsEditing(false);
        }
    }, [editContact]);

    function onSending() {
        const newContact = {
            name: inputName,
            number: inputNumber,
            email: inputEmail,
        };

        if (isEditing) {
            onUpdate();
        } else {
            STORAGE_SERVICE.createContact(newContact);
        }

        setInputName('');
        setInputNumber('');
        setInputEmail('');
        setIsEditing(false);
        setEditContact(null);
    }

    function onUpdate() {
        const updatedContact = {
            name: inputName,
            number: inputNumber,
            email: inputEmail,
        }

        STORAGE_SERVICE.updateContact(updatedContact);
    }

    return (
        <aside className={styles.aside}>
            <h2>{isEditing ? "Editar Contato" : "Adicionar Contato"}</h2>
            <form onSubmit={onSending}>
                <div className={styles['divs-input']}>
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder='Nome' value={inputName} onChange={(e) => setInputName(e.target.value)} required />
                </div>

                <div className={styles['divs-input']}>
                    <label htmlFor="">Número</label>
                    <input type="number" placeholder='Número' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} required />
                </div>

                <div className={styles['divs-input']}>
                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder='E-mail' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                </div>
                <button type='submit'>{isEditing ? ('Editar') : ("Adicionar")}</button>

            </form>
        </aside>
    )
}