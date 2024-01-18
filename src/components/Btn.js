import React, { useState } from 'react';
import Proptypes from 'prop-types'
const Btn = (props) => {
    return (
        <button className="btn-pink ">{props.text}</button>
    )
}
export default Btn;