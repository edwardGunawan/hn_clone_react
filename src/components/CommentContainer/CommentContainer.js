import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsList from '../CommentsList/CommentsList';

const mapStateToProps = (state) => ({
    comments: state.commentContainer,
});



export default connect(mapStateToProps)(CommentsList);