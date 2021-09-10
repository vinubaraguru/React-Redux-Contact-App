const IntialState = [
    {
        id : 1,
        name: "Vinu",
        number:"0123456789",
        email:"vinu@gmail.com"
    },
    {
        id : 2,
        name: "Vinu",
        number:"01234567819",
        email:"vinu1@gmail.com"
    }

]


const contactReducer = (state = IntialState, action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state , action.payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact)=>contact.id === action.payload.id ? action.payload : contact)
            state = updateState
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact)
            state = filterContacts
            return state;
        default: return state
    }
}

export default  contactReducer;