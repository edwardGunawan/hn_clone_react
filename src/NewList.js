import React from 'react';
import PropTypes from 'prop-types';

const NewList = ({by, descendants, kids, time, title, type, url}) => {
    return (
        <div>
            <h6>{title}<span>({url})</span></h6>
            <p>{kids.length} by {by} {time} ago | <scan>{type}</scan></p>
        </div>
    )
}

NewList.propTypes = {
    by: PropTypes.string.isRequired,
    descendants: PropTypes.number.isRequired,
    kids: PropTypes.arrayOf(PropTypes.number).isRequired,
    time: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
export default NewList;