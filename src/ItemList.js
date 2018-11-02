import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NewList from './NewList';
import CommentList from './CommentList';

const ItemList = ({title, by, descendants, url}) => {
    // TODO: do another fetch over on teach of the kids it if has one
    return (
        <div>
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