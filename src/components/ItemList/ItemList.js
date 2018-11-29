import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentList from '../CommentList/CommentList';

const ItemList = ({kids}) => {
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