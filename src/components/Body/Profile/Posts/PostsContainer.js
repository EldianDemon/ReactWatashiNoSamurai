import React from "react";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        PostsData: state.profilePage.PostsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;