import React from 'react'
import { connect } from 'react-redux';
import { updatePackageSearchResult } from '../actions/actions'
import { filterUpdated } from '../actions/actions'
import { Rating } from '@material-ui/lab';

const sendSearchRequest = async (props, isSearchWithParams) => {
    return new Promise((resolve, reject) => {
        let urlPath = "http://localhost:3000/packageSearchInitial"
        if (isSearchWithParams)
            urlPath = "http://localhost:3000/packageSearch"
        fetch(urlPath, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ packageSearchParams: props.searchParams, sortBy: props.sortBy })
        }).then(response => response.json()).then(data => {
            console.log(data)
            props.dispatch(updatePackageSearchResult(data.body))
            resolve(data.body)
        }).catch((error) => {
            console.log("ERROR: " + error)
            reject(error)
        })
    })
}

const daysBetween2Dates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    let days1Words = date1.split('/')
    let days2Words = date2.split('/')
    date1 = new Date(days1Words[1] + "/" + days1Words[0] + "/" + days1Words[2])
    date2 = new Date(days2Words[1] + "/" + days2Words[0] + "/" + days2Words[2])
    return Math.round(Math.abs((date1 - date2) / oneDay));
}

const formatPrice = (n) => {
    return n.toLocaleString("en-US");
}
const PackageSearchResult = (props) => {
    if (props.filtersUpdated)
        sendSearchRequest(props, true).then(() => props.dispatch(filterUpdated(false)))
    const sortBy = props.searchParams.sortBy
    if (sortBy === "worthwhile")
        props.searchResult.sort((a, b) => a.avgPrice - b.avgPrice);
    // if (props.searchParams.byText !== ""){
    //     props.searchResult = props.searchResult.filter((result) => result.name.includes(props.searchParams.byText))
    // }
    let allClicked = document.getElementsByClassName("clicked")
    if (allClicked.length > 0)
        [...allClicked].forEach(button => button.classList.remove("clicked"))
    if (sortBy === "worthwhile" || sortBy === "priceLowToHigh" || sortBy === "ratingHighToLow") {
        if (document.getElementsByClassName(sortBy).length > 0)
            document.getElementsByClassName(sortBy)[0].classList.add("clicked")
    }


    return (
        <div className="mainApp-result-wrapper">
            <div className="mainApp-result-header">
                <label>סה"כ נמצאו {props.searchResult.length} תוצאות</label>
            </div>
            <div className="mainApp-result">
                {props.searchResult.map(searchData => {
                    return (
                        <div key={searchData._id} className="mainApp-result-table">

                            <div className="mainApp-result-table-leftPart">
                                <div className="mainApp-result-leftPart-textWrapper">
                                    <label className="mainApp-result-leftPart-priceText">{formatPrice(searchData.price) + "$"}</label>
                                    <label className="mainApp-result-leftPart-text">מחיר ממוצע לאדם בחדר זוגי</label>
                                </div>
                                <button className="mainApp-result-table-leftPart-button">
                                    <label>פרטים נוספים</label>
                                </button>
                            </div>

                            <div className="mainApp-result-table-MainPart">
                                <label className="mainApp-result-name">{searchData.name}</label>
                                <Rating defaultValue={searchData.rating} readOnly className="mainApp-result-rating" />
                                <div className="mainApp-result-enter">
                                    <label className="mainApp-result-enterTime-header">כניסה:</label>
                                    <label className="mainApp-result-enterTime-data">{searchData.dateIn}</label>
                                </div>
                                <div className="mainApp-result-exit">
                                    <label className="mainApp-result-exitTime-header">יציאה:</label>
                                    <label className="mainApp-result-exitTime">{searchData.dateOut}</label>
                                </div>
                                <div className="mainApp-result-conditions">
                                    <label>
                                        {daysBetween2Dates(searchData.dateOut, searchData.dateIn) + " "}
                                    לילות
                                    </label>
                                    <span className="mainApp-vertical-line"></span>
                                    <label className="mainApp-result-conditions">
                                        {searchData.breakfast ? "ארוחת בוקר" : "חדר בלבד"}
                                    </label>
                                </div>
                            </div>

                            <div className="mainApp-result-table-rightPart">
                                < img className="mainApp-result-image" src={searchData.imgsLinks[0]} alt="search-result" />
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PackageSearchResult);