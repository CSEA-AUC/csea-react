import React, {Component, PropTypes} from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {PostList, Spinner} from '../../components/'

import {loadPostList}from '../../actions/blog'

import logo from '../../../assets/img/csealogo.png'
import styles from './home.scss';

class Home extends Component {
    componentWillMount() {
        this.props.loadPostList(1);
    }

    render() {
        const postList = this.props.postsLists[1];
        const isFetchingPostList = postList.isFetching;
        return (
            <div>
                <section className={"container-fluid " + styles.banner}>
                    <header>
                        <h4>The American University In Cairo's</h4>
                        <h1>Computer Science and Engineering Association</h1>
                    </header>
                    <div className={styles.logoWrapper}>
                        <Image className={styles.CSEALogo} src={logo} circle responsive/>
                    </div>
                </section>
                <section className={styles.mainWrapper}>
                    <Grid fluid>
                        <Row>
                            <Col className={styles.main} md={6} mdOffset={3}>
                                <header>
                                    <span>Latest Announcements</span>
                                    <span>View More Posts</span>
                                </header>
                                {isFetchingPostList ? <Spinner/> :
                                    <div>
                                        <PostList
                                            posts={postList}
                                            nextUrl={''}
                                            prevUrl={''}
                                        />
                                    </div>
                                }
                            </Col>
                        </Row>
                    </Grid>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {postsLists} = state.blog;
    return {postsLists}
}

function mapDispatchToProps(dispatch) {
    return {
        loadPostList: (pageNum) =>
            dispatch(loadPostList(pageNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)