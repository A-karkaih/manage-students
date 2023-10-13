const initialState = {
    
    users: [
        { id: "1", nom: "achraf karkaih", email: "achrafkarkaih@g.com" },
        { id: "2", nom: "zahra laouini", email: "zahra@g.com" },
        { id: "3", nom: "yousra benzouine", email: "yousra@g.com" },
        
      
    ]
};


const reducer = (state = initialState, action)   => {
    
    switch (action.type) {

        case "Add_User": return { ...state, users: [...state.users, action.payload] };

        case "Update_User":

            const user = state.users.find((u) => u.id == parseInt(action.payload.id));

            if (user) {
                user.nom = action.payload.nom;
                user.email = action.payload.email;
            }
            
            return state ;
        
        case "Delete_User":
            
            return { ...state, users: [...state.users.filter((u) => u.id !== parseInt(action.payload))] };
        
        default:
            return state;
}




}

export default reducer;