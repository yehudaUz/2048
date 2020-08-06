import React from 'react'
import { connect } from 'react-redux';

const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="footer-header-wrapper">
                <label className="footer-header">הצטרפו למועדון הלקוחות שלנו</label>
            </div>
            <div className="footer-inputs-wrapper">
                <button className="footer-button">הרשם</button>
                <input placeholder="דואר אלקטרוני"></input>
                <input placeholder="שם מלא"></input>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Footer);