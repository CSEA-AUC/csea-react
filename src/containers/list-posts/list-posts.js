import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import styles from './list-posts.scss';
import {PostList} from '../../components/';
import {loadPostList}from '../../actions/index'

class ListPosts extends Component {
    componentWillMount() {
        this.props.loadPostList(this.props.pageNum);
    }

    render() {
        const posts = this.props.postsLists[this.props.pageNum];
        const {nextUrl, prevUrl} = this.props;
        return (
            <section className={styles.mainWrapper}>
                <Grid fluid>
                    <Row>
                        <Col className={styles.main} md={6} mdOffset={3}>
                            <h2>Latest Announcements</h2>
                            <PostList
                                posts={posts}
                                nextUrl={nextUrl}
                                prevUrl={prevUrl}
                            />
                        </Col>
                    </Row>
                </Grid>
            </section>
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