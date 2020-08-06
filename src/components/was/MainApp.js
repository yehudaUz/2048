import React from 'react'
import { connect } from 'react-redux';
import RatingFilter from './RatingFilter'
import PriceSlider from './PriceSlider'
import HostingBase from './HostingBase'
import SearchInput from './SearchInput'
import ButtonWithIcon from './ButtonWithIcon'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Paper from './Paper'
import Select from './Select'
import PackageSearchResults from './PackageSearchResult'
import { UseViewPort } from './UseViewPort'

const trophyIcon = () => <i className="fa fa-trophy" aria-hidden="true"></i>


const MainApp = (props) => {
    const { width } = UseViewPort();
    const breakpoint = 950;

    const [isOpen, setOpen] = React.useState(false);

    return (
        <div className="mainApp-wrapper">
            <div className="mainApp-centerize-wrapper">

                <div className="mainApp-sortAndResult">

                    <div className="mainApp-sort">
                        <Select />
                        <span className="mainApp-vertical-line">|</span>
                        <div className="mainApp-sort-buttons">
                            <ButtonWithIcon text="הכי משתלם" icon={CreditCardIcon} sortType="worthwhile" />
                            <ButtonWithIcon text="הכי פופולרי" icon={trophyIcon} sortType="ratingHighToLow" />
                            <ButtonWithIcon text="הכי זול" icon={AttachMoneyIcon} sortType="priceLowToHigh" />
                        </div>
                    </div>

                    <PackageSearchResults />

                </div>

                {/* {width > breakpoint ? */}
                <div className="mainApp-filter-wrapper">
                    <div className="mainApp-filter-header">
                        <label>סינון תוצאות</label>
                    </div>
                    <RatingFilter />
                    <PriceSlider />
                    <HostingBase />
                    <SearchInput />
                </div>
                {/* : */}
                {/* <h1>adsfasfsfaas</h1> */}
                {/* } */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(MainApp);