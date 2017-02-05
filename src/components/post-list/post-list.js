import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

import moment from 'moment'

import UserIcon from 'react-icons/lib/fa/user'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import CommentsIcon from 'react-icons/lib/fa/comment-o'
import RightAngleIcon from 'react-icons/lib/fa/angle-double-right'
import styles from './post-list.scss';

export default class PostList extends Component {
    createPost(post) {
        const timestamp = moment(post.created);
        return (
            <article key={post.slug} className={styles.post}>
                <header>
                    <Link to={'/announcements/' + post.slug}>
                        <h2 className={styles.title}>{post.title}</h2>
                    </Link>
                    <h5 className={styles.subtitle}>{post.subtitle}</h5>
                </header>
                <div className={styles.snippet}>
                    <span>{post.excerpt}</span>
                </div>
                <footer>
                    <div className={styles.postAuthor}>
                        <UserIcon/>
                        <span>{post.author}</span>
                    </div>
                    <span className={styles.postDate}><CalendarIcon/>{timestamp.format('D MMM YYYY')}</span>
                    <span className={styles.postCommentCount}><CommentsIcon/>{post.comment_count + ' Comments'}</span>
                    <span className={styles.postContinueReading}>Continue Reading<RightAngleIcon/></span>
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