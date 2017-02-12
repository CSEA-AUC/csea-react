import React, {Component, PropTypes} from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {PostList, Spinner} from '../../components/'

import {loadPostList}from '../../actions/blog'

import logo from '../../../assets/img/csealogo.png'
import styles from './home.scss';

class Home extends Component {
    componentWillMount() {
        this.props.loadPostList(1);
    }

    render() {
        let postList = this.props.postsLists[1];
        postList.results = postList.results.slice(0, 3);
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
                                <header className={styles.announcementsHeader}>
                                    <h3>Announcements</h3>
                                    <Link to={'announcements/'}>
                                        <span>View More Posts</span>
                                    </Link>
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