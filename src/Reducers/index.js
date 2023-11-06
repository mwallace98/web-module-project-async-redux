import { FETCH_PERSON_SUCCESS } from "../Actions/GetPerson";

const initialState = {
    name:'',
    imageURL:'',
    city:''
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_PERSON_SUCCESS:
            return{
                ...state,
                name: action.payload.name,
                city: action.payload.city,
                imageURL:action.payload.imageURL
            }
        default:
            return state
    }
};


export default reducer;