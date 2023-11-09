import { FETCH_PERSON_SUCCESS } from "../Actions/Index";

const initialState = {
    name:'',
    imageURL:'',
    city:''
}

const reducer = (state = initialState,action) => {
    console.log('reducer')
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