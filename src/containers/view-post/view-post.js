import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col, Image} from 'react-bootstrap'

import moment from 'moment'

import {loadPost}from '../../actions/blog'
import {Spinner} from '../../components'

import Markdown from 'react-remarkable'

import styles from './view-post.scss'

class ViewPost extends Component {
    componentWillMount() {
        this.props.loadPost(this.props.postSlug);
    }

    render() {
        const post = this.props.postsBySlug[this.props.postSlug] || {isFetching: true, responseCode: null};
        const {isFetching, responseCode} = post;
        const timestamp = !isFetching ? moment(post.created).format('DD MMMM YYYY') : undefined;
        return (
                <Grid fluid>
                    <Row>
                        <Col className={styles.main} lg={6} lgOffset={3}>
                            {isFetching ? <Spinner bgColor={styles.spinnerColor}/> :
                                <div className={styles.post}>
                                    <header>
                                        <h2 className={styles.title}>{post.title}</h2>
                                        <h4 className={styles.subtitle}>{post.subtitle}</h4>
                                    </header>
                                    <div className={styles.postMeta}>
                                        <span className={styles.author}>{post.author}</span>
                                        <span className={styles.timestamp}>{timestamp}</span>
                                    </div>
                                    <div className={styles.contentWrapper}>
                                        {post.image &&
                                        <Image className={styles.contentImage} src={post.image} responsive/>}
                                        <div className={styles.content}>
                                            <Markdown>
                                                {post.content}
                                            </Markdown>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Grid>
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