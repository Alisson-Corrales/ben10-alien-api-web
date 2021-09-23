export const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_LOADING': return {
            ...state,
            loading: true,
        }
        case 'SET_ALIENS' : return {
            ...state,
            loading: false,
            aliens: action.payload.aliens,
        };

        default:
            throw new Error(`Check out ${action.type} action type. Sus.`)
    }
}
