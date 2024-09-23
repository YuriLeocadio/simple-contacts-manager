const DB_KEY = "@contacts"

export const STORAGE_SERVICE = {
    listContacts: () => {
        const storage = localStorage.getItem(DB_KEY)

        if (storage) {
            return JSON.parse(storage)
        }

        return []
    },

    createContact: (contact) => {
        const storage = localStorage.getItem(DB_KEY)

        const newContact = {
            contacts: contact
        }

        if (storage) {
            const storageParsed = JSON.parse(storage)
            const contacts = [...storageParsed, newContact]

            return localStorage.setItem(DB_KEY, JSON.stringify(contacts))
        }

        return localStorage.setItem(DB_KEY, JSON.stringify([newContact]))
    },

    deleteContact: (contact) => {
        const storage = localStorage.getItem(DB_KEY)

        if (storage) {
            const storageParsed = JSON.parse(storage)
            const filterdContact = storageParsed.filter(item => item.contacts.number !== contact.contacts.number)

            return localStorage.setItem(DB_KEY, JSON.stringify(filterdContact))
        }

        return alert('Contato não encontrado')
    },

    updateContact: (updatedContact) => {
        const storage = localStorage.getItem(DB_KEY)

        if (storage) {
            const storageParsed = JSON.parse(storage)
            const updatedContacts = storageParsed.map(item => {
                if (item.contacts.number === updatedContact.contacts.number) {
                    return {
                        contacts: updatedContact
                    }
                }

                return item;
            })
            localStorage.setItem(DB_KEY, JSON.stringify(updatedContacts))
        }
        return alert('Contato não encontrado para atualizar')
    }
}