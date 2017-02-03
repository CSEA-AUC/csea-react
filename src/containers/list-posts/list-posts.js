import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {loadPostList}from '../../actions/blog'
import {PostList, Spinner} from '../../components/'

import styles from './list-posts.scss'


class ListPosts extends Component {
    componentWillMount() {
        this.props.loadPostList(this.props.pageNum);
    }

    render() {
        const postList = this.props.postsLists[this.props.pageNum];
        const {nextUrl, prevUrl} = this.props;
        const isFetching = postList.isFetching;
        return (
            <Grid fluid>
                <Row>
                    <Col className={styles.main} lg={6} lgOffset={3}>
                        {isFetching ? <Spinner bgColor={styles.spinnerColor}/> :
                            <div>
                                <h2>Latest Announcements</h2>
                                <PostList
                                    posts={postList}
                                    nextUrl={nextUrl}
                                    prevUrl={prevUrl}
                                />
                            </div>
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}

ListPosts.propTypes = {
    postsLists: PropTypes.object.isRequired,
    pageNum: PropTypes.number.isRequired,
    nextUrl: PropTypes.string.isRequired,
    prevUrl: PropTypes.string.isRequired,
    loadPostList: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const {nextUrl, prevUrl, pageNum, postsLists} = state.blog;
    return {postsLists, pageNum, nextUrl, prevUrl}
}

function mapDispatchToProps(dispatch) {
    return {
        loadPostList: (pageNum) =>
            dispatch(loadPostList(pageNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)