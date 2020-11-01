import React from 'react'
import {connect} from 'react-redux';
import {buyIceCream} from '../redux';


function IceCreamContainer(props) {
    console.log(props);
    return (
        <div>
            <h2>Number Of IceCreams  - {props.numOfIceCreams}</h2>
            <button onClick = {props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}


const mapStateToProps = state => {
    //console.log(state);
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)
