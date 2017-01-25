import React, {Component, PropTypes} from 'react'

import styles from './post-list.scss';

export default class PostList extends Component {
    createPost(post) {
        return (
            <article key={post.slug} className={styles.post}>
                <header>
                    <h2 className={styles.title}>{post.title}</h2>
                    <h5 className={styles.subtitle}>{post.subtitle}</h5>
                </header>
                <div className={styles.snippet}>
                    <span>{post.content}</span>
                </div>
                <footer>
                    <span className={styles.postAuthor}>{post.author}</span>
                    <span className={styles.postDate}>{post.date}</span>
                    <span className={styles.postCommentCount}>{post.comment_count + ' Comments'}</span>
                    <span className={styles.postContinueReading}>Continue Reading</span>
                </footer>
            </article>
        )
    }

    render() {
        return (
            <div>
                {this.props.posts.results.map(this.createPost)}
            </div>
        )
    }
}