const initialSearchParams = {
    rating: [true, true, true, true, true],
    fromPrice: 800, toPrice: 6000,
    conditions: { sleep: true, breakfast: true },
    sortBy: "priceLowToHigh",
    byText:""
}

const getLocalStorageOrSetDefault = () => {
    const state = {
        currency: "$USD",
        searchParams: initialSearchParams,
        searchResult: [],
        filtersUpdated: true
    }
    localStorage.setItem('state', JSON.stringify(state));
    return state
}
const initialState = getLocalStorageOrSetDefault()

export default (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'RATING_UPDATE':
            newState = { ...state, searchParams: { ...state.searchParams, rating: action.rating } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'SLIDER_UPDATE':
            newState = { ...state, searchParams: { ...state.searchParams, fromPrice: action.sliderValue[0], toPrice: action.sliderValue[1] } }//price: { from: action.sliderValue[0], to: action.sliderValue[1] } } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_CONDITIONS':
            newState = { ...state, searchParams: { ...state.searchParams, conditions: action.newConditions } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'FILTER_UPDATE':
            newState = { ...state, filtersUpdated: action.isFilterUpdate }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_PACKAGE_RESULT':
            newState = { ...state, searchResult: action.searchResult }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'SORT_BY':
            newState = { ...state, searchParams: { ...state.searchParams, sortBy: action.sortBy } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'SEARCH_TEXT_UPDATE':
            newState = { ...state, searchParams: { ...state.searchParams, byText: action.text } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        default:
            return state
    }
}
