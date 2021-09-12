export const StyleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STYLE':
            return [{ background: 'chartreuse' }]
        case 'REMOVE_STYLE':
            return []
        default:
            return state;
    }
}
