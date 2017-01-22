import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import styles from './list-posts.scss';
import {PostList} from '../../components/';
import {loadPostList}from '../../actions/index'

class ListPosts extends Component {
    componentWillMount() {
        this.props.loadPostList(1);
    }

    render() {
        const posts = [1, 2, 3];
        return (
            <section className={styles.mainWrapper}>
                <Grid fluid>
                    <Row>
                        <Col className={styles.main} md={6} mdOffset={3}>
                            <h2>Latest Announcements</h2>
                            <PostList posts={posts}/>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

ListPosts.propTypes = {
    postList: PropTypes.object.isRequired,
    loadPostList: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return state.blogState
}

function mapDispatchToProps(dispatch) {
    return {
        loadPostList: (pageNum) =>
            dispatch(loadPostList(pageNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)