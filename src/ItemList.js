import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import CommentList from './CommentList';

const ItemList = ({kids}) => {
    // TODO: do another fetch over on teach of the kids it if has one
    return (
        <div>
            {kids.map((kid, i) => <CommentList key={`${i}-${kid}`} kid={kid}/> )}
        </div>
    )
}

ItemList.propTypes = {
    kids: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default ItemList;