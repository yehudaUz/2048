import React from 'react'
import { connect } from 'react-redux';
import HeaderField from './HeaderField'
import Currency from './Currency'
import HomeLink from './HomeLink'
import { UseViewPort } from './UseViewPort'
import { Collapse } from 'react-collapse';


const Header = (props) => {
    const { width } = UseViewPort();
    const breakpoint = 1200;

    const [isOpen, setOpen] = React.useState(false);


    return (
        <div className="header-wrapper">
            <div className="header-centerize-wrapper">
                <div className="header-left">
                    <Currency />
                    <HomeLink />
                </div>
                {width > breakpoint ?
                    <div className="header-right">
                        <HeaderField text="צור קשר" link="/contact" />
                        <HeaderField text="טיולים מאורגנים" link="/orginaizedTrips" />
                        <HeaderField text="טיסות" link="/flights" />
                        <HeaderField text="חבילות נופש" link="/holidaysPackges" />
                        <HeaderField text="דף הבית" link="/" />
                    </div>
                    :
                    <div className="header-menu-button" onClick={() => setOpen(!isOpen)}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <Collapse isOpened={isOpen}>
                            <HeaderField text="צור קשר" link="/contact" />
                            <HeaderField text="טיולים מאורגנים" link="/orginaizedTrips" />
                            <HeaderField text="טיסות" link="/flights" />
                            <HeaderField text="חבילות נופש" link="/holidaysPackges" />
                            <HeaderField text="דף הבית" link="/" />
                        </Collapse>
                    </div>
                }
            </div>
        </div>
    )

    //return width > breakpoint ? <DesktopComponent /> : <h1>asdfasdfasfasf</h1>;
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Header);