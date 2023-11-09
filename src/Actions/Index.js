export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';

export const fetchPersonSuccess = (name,city,imageURL) => {
    return {
        type: FETCH_PERSON_SUCCESS,
        payload: {name,city,imageURL}
    }
}