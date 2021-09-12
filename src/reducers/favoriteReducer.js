export const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, {
                id: action.favorite.id
            }]
        case 'REMOVE_FAVORITE':
            return state.filter(favorite => favorite.id !== action.id);
        default:
            return state;
    }
}