import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Statement from './Statement';
import CommentList from './CommentList';

const ItemList = ({title, by, descendants, url}) => {
    // TODO: do another fetch over on teach of the kids it if has one
    return (
        <div>
            <Statement />
            <CommentList />
            
        </div>
    )
}

ItemList.propTypes = {
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    descendants: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
}

export default ItemList;