import React, {Component, PropTypes} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import styles from './list-posts.scss';

export default class ListPosts extends Component {
    createPost(post, index) {
        return (
            <article key={index} className={styles.post}>
                <header>
                    <h2 className={styles.title}>
                        {/*post.title*/}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h2>
                    <h5 className={styles.subtitle}>
                        {/*post.subtitle*/}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h5>
                </header>
                <div className={styles.snippet}>
                    <span>
                        {/*post.content*/}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at vestibulum nunc.
                        Proin tincidunt ex sapien, maximus tristique ligula finibus sit amet. Quisque eu massa mollis, egestas ipsum vel, molestie magna.
                        Donec porttitor ac turpis non pharetra. Duis vitae interdum orci. Morbi nisl tellus, aliquam vel lobortis id, maximus at purus.
                        Nam rutrum leo lectus, vel dictum velit luctus quis. Donec id eleifend risus. Aliquam erat volutpat. Maecenas ac nibh diam. In non cursus felis.
                    </span>
                </div>
                <footer>
                    <span className={styles.postAuthor}>CSEA Admin {/*post.author*/}</span>
                    <span className={styles.postDate}>15 SEPTEMBER 2015 {/*post.date*/}</span>
                    <span className={styles.postCommentCount}>5 Comments {/*post.commentCount*/}</span>
                    <span className={styles.postContinueReading}>Continue Reading</span>
                </footer>
            </article>
        )
    }
    render() {
        const posts = [1, 2, 3, 4];
        return (
            <Grid fluid>
                <Row>
                    <Col className={styles.main} md={6} mdOffset={3}>
                        <h2>Latest Announcements</h2>
                        {posts.map(this.createPost)}
                    </Col>
                </Row>
            </Grid>
        )
    }
}