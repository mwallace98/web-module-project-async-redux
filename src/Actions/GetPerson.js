export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';

export const fetchPersonSuccess = (name,city) => {
    return {
        type: FETCH_PERSON_SUCCESS,
        payload: {name,city}
    }
}