import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

import {loadPost}from '../../actions/'
import {Spinner} from '../../components'

import styles from './view-post.scss'

class ViewPost extends Component {
    componentWillMount() {
        this.props.loadPost(this.props.postSlug);
    }

    render() {
        return (
            <section className={styles.mainWrapper}>
                <Grid fluid>
                    <Row>
                        <Col className={styles.main} md={6} mdOffset={3}>
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