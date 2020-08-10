const getLocalStorageOrSetDefault = () => {
    if (localStorage.getItem('state')) {
        let state = JSON.parse(localStorage.getItem('state'))
        state.score = 0
        return state
    }
    const state = {
        score: 0,
        bestScore: 0
    }
    localStorage.setItem('state', JSON.stringify(state));
    return state
}

const initialState = getLocalStorageOrSetDefault()

export default (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'UPDATE_SCORE':
            if (state.score + action.score > state.bestScore)
                newState = { score: state.score + action.score, bestScore: state.score + action.score }
            else
                newState = { ...state, score: state.score + action.score }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        default:
            return state
    }
}
