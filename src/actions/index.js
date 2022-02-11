export const addContact = (data) => {
    return {
        type: "Add_Contact",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const favContact = (contact) => {
    return {
        type: "Fav_Contact",
        payload: contact
    }
}

export const editContact = (id) => {
    return {
        type: "Edit_Contact",
        id
    }
}