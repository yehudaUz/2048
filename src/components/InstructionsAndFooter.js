import React from 'react'
import Instruction from './Instruction'
import ButtonWithTextAndSvg from './ButtonWithTextAndSvg'

const howToPlayText = <>
    <strong>HOW TO PLAY:</strong> Use your < strong > arrow keys</strong > to move the tiles.When two tiles with the same number touch, they < strong > merge into one!</strong >
</>
const howToPlayNoteText = <>
    <strong>NOTE:</strong> The game on <strong>this site</strong> is the original version of 2048. Apps for <strong>iOS</strong> and <strong>Android</strong> are also available. Other versions are derivatives or fakes, and should be used with caution.
</>
const createdByText = <>
    Created by <strong>Gabriele Cirulli.</strong> Based on <strong>1024 by Veewo Studio</strong> and conceptually similar to <strong>Threes by Asher Vollmer.</strong>
</>
const TwitterButton = () => <>
    <a className="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        data-size="small">
        Tweet
                    </a>
</>
const paypalSvg = () =>
    <svg className="paypal svg" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" space="preserve">
        <g>
            <circle fill="#FFFFFF" cx="10" cy="10" r="10" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" fill="#195A7F" d="M12.3,4.8h-5L5,15h3l0.7-3.4h2.1c2,0,3.7-1.2,4.2-3.4  C15.5,5.9,13.8,4.8,12.3,4.8z M12.2,8.3c-0.2,0.8-0.9,1.4-1.7,1.4H9.1l0.6-2.8h1.4C11.9,6.9,12.4,7.5,12.2,8.3z" />
    </svg>
const btcSvg = () =>
    <svg className="btc svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" space="preserve">
        <g>
            <path fill="#DDB802" d="M10,19.5c-5.2,0-9.5-4.3-9.5-9.5S4.8,0.5,10,0.5s9.5,4.3,9.5,9.5S15.2,19.5,10,19.5z" />
            <path fill="#FFED95" d="M10,1c5,0,9,4,9,9c0,5-4,9-9,9c-5,0-9-4-9-9C1,5,5,1,10,1 M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10   c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0L10,0z" />
        </g>
        <path fill="#FFFFFF" d="M15,8.5c0.2-1.4-0.9-2.2-2.5-2.7l0.5-2l-1.3-0.3l-0.5,1.9c-0.3-0.1-0.7-0.2-1-0.2l0.5-1.9L9.4,3L8.9,5  C8.6,4.9,8.3,4.8,8.1,4.8l0,0L6.3,4.4L6,5.6c0,0,0.9,0.2,0.9,0.2C7.4,6,7.5,6.3,7.5,6.5L6.9,8.8c0,0,0.1,0,0.1,0c0,0-0.1,0-0.1,0  l-0.8,3.1C6,12,5.9,12.3,5.5,12.2c0,0-0.9-0.2-0.9-0.2L4,13.3l1.6,0.4c0.3,0.1,0.6,0.1,0.9,0.2l-0.5,2l1.3,0.3l0.5-2  c0.3,0.1,0.7,0.2,1,0.2l-0.5,1.9l1.3,0.3l0.5-2c2.2,0.4,3.8,0.2,4.5-1.6c0.6-1.5,0-2.3-1.2-2.9C14.2,10.1,14.8,9.6,15,8.5L15,8.5z   M12.1,12.3c-0.4,1.5-3,0.7-3.9,0.5l0.7-2.6C9.7,10.4,12.5,10.8,12.1,12.3z M12.5,8.5C12.1,9.9,9.9,9.2,9.2,9l0.6-2.4  C10.5,6.8,12.8,7.1,12.5,8.5z" />
    </svg>

const InstructionsAndFooter = (props) =>  (
        <div className="instructionsAndFooter">
            <Instruction continer="howToPlayContiner" label="howToPlay" text={howToPlayText} />
            <Instruction continer="howToPlayNoteContiner" label="howToPlayNote" text={howToPlayNoteText} />
            <Instruction continer="createdByContiner" label="createdBy" text={createdByText} />
            <div className="footerContiner">
                <TwitterButton />
                <ButtonWithTextAndSvg continer="donate paypal" svg={paypalSvg} text="Donate" />
                <ButtonWithTextAndSvg continer="donate btc" svg={btcSvg} text="Donate" />
            </div>
        </div >
    )

export default  InstructionsAndFooter 
