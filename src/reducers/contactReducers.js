const initialState = {
    contacts: []
}

export function contactReducers(state = initialState, action) {
    switch (action.type) {
        case "Add_Contact":
            const { id, data} = action.payload;
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    {
                        id: id, data: data, like: 'false'
                    }
                ]
            }
        
        default:
            return state;
    }
}