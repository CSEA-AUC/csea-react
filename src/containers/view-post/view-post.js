import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Image} from 'react-bootstrap'

import {loadPost}from '../../actions/'
import {Spinner} from '../../components'

import styles from './view-post.scss'

class ViewPost extends Component {
    componentWillMount() {
        this.props.loadPost(this.props.postSlug);
    }

    render() {
        const post = this.props.postsBySlug[this.props.postSlug] || {isFetching: true, responseCode: null};
        const {isFetching, responseCode} = post;

        return (
            <section className={styles.mainWrapper}>
                <Grid fluid>
                    <Row>
                        <Col className={styles.main} md={6} mdOffset={3}>
                            {isFetching ? <Spinner/> :
                                <div className={styles.post}>
                                    <header>
                                        <h2 className={styles.title}>{post.title}</h2>
                                        <h4 className={styles.subtitle}>{post.subtitle}</h4>
                                        <div className={styles.postMeta}>
                                            <span className={styles.author}>{post.author}</span>
                                            <span className={styles.timestamp}>{post.created}</span>
                                        </div>
                                    </header>
                                    <div className={styles.contentWrapper}>
                                        <div className={styles.content}>{post.content}</div>
                                        <Image className={styles.contentImage} src={post.image} responsive/>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

ViewPost.propTypes = {
    postsBySlug: PropTypes.object.isRequired,
    postSlug: PropTypes.string.isRequired,
    loadPost: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    const {slug} = ownProps.params;
    const {postsBySlug} = state.blog;

    return {
        postsBySlug,
        postSlug: slug
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPost: (slug) =>
            dispatch(loadPost(slug))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost)