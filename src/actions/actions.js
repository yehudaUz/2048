
export const updateSortBy = (sortBy) => ({
    type: "SORT_BY",
    sortBy
})

export const updateRatingValue = (rating) => ({
    type: "RATING_UPDATE",
    rating
})

export const updateSliderValues = (sliderValue) => ({
    type: "SLIDER_UPDATE",
    sliderValue
})

export const updateConditions = (newConditions) => ({
    type: "UPDATE_CONDITIONS",
    newConditions
})

export const updatePackageSearchResult = (searchResult) => ({
    type: "UPDATE_PACKAGE_RESULT",
    searchResult
})

export const filterUpdated = (isFilterUpdate) => ({
    type: "FILTER_UPDATE",
    isFilterUpdate
})

export const updateSearchText = (text) => ({
    type:"SEARCH_TEXT_UPDATE",
    text
})