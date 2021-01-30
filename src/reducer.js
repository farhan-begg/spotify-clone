export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove string after finished developing
    token: 'BQCUMcZhNUUr3iM1LnvUWMNUTOmjC_2XzZVf90u355Rugg2wJ5QUHx0fHkQ3Og8rj4RCD7eXh6tYJaO70QPPPFopdrpOcHppu58XiqcmdmPNHZKKw6ZNYsTqjOorWAeY3OQUceDAKD3dCVQFY3tCg7g2s0dEucUdYHSqhgRQZ6pc33RW'
}

const reducer = (state, action) => {
    console.log(action);

    // Action => type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN': 
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }

}

export default reducer;