import { connect } from 'react-redux';
import { updateCarSearchParams } from '../actions/actions'

const UpdateInitialSearchResult = async (props) => {
    fetch('http://localhost:3000/carSearchInitial', {
        method: 'POST',
    }).then(response => response.json()).then(data => {
        console.log(data)
        props.dispatch(updateCarSearchParams())
        return (data.body)
    }
    ).catch(error => console.log("ERROR: " + error)) // Handle the error response object)
}

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(UpdateInitialSearchResult);
