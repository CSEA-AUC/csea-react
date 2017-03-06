import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ControlLabel, FormControl, Form, Button} from 'react-bootstrap'

import {Banner, Spinner} from '../../components'
import {
    loadAlexaGroupsSaga,
    joinAlexaGroupSaga,
    createAlexaGroupSaga,
    showGroupCreateModal,
    showGroupJoinModal,
    hideGroupCreateModal,
    hideGroupJoinModal
} from '../../actions/alexa'

import styles from './alexa.scss'

const group = [
    {
        title: 'Who am i whats my name',
        description: 'I AM WHO I AM I SEE WHO I SEE THIS IS WHO I AMMMMMMM THIS IS REALLY LONG PSOT ABOUT A DESCRIPTION THAT I DONT KNOW ABOUT OK IOJW IEOQWBNEQWU IEBQWYOPEQW',
        inventor_name: 'Shady Fanous',
        inventor_email: 'shady-fanous@aucegypt.edu',
        members: ['Hossam Hassan', "Who is this", "another random dude", "sdbqweqw"]
    },
    {
        title: 'Who am i whats my name',
        description: 'I AM WHO I AM I SEE WHO I SEE THIS IS WHO I AMMMMMMM THIS IS REALLY LONG PSOT ABOUT A DESCRIPTION THAT I DONT KNOW ABOUT OK IOJW IEOQWBNEQWU IEBQWYOPEQW',
        inventor_name: 'Shady Fanous',
        inventor_email: 'shady-fanous@aucegypt.edu',
        members: ['Hossam Hassan', "Who is this", "another random dude", "sdbqweqw"]
    },
    {
        title: 'Who am i whats my name',
        description: 'I AM WHO I AM I SEE WHO I SEE THIS IS WHO I AMMMMMMM THIS IS REALLY LONG PSOT ABOUT A DESCRIPTION THAT I DONT KNOW ABOUT OK IOJW IEOQWBNEQWU IEBQWYOPEQW',
        inventor_name: 'Shady Fanous',
        inventor_email: 'shady-fanous@aucegypt.edu',
        members: ['Hossam Hassan', "Who is this", "another random dude", "sdbqweqw"]
    }
];

class Alexa extends Component {
    componentWillMount() {
        this.props.loadAlexaGroupsSaga();
    }

    createAlexaGroup(group) {
        return (
            <section className={styles.groupWrapper}>
                <header>
                    <h2 className={styles.ideaTitle}>{group.title}</h2>
                    <Button className={styles.joinGroupButton} disabled={group.members.length >= 4}>Join Team</Button>
                </header>
                <p className={styles.ideaDescription}>{group.description}</p>
                <div className={styles.groupMembersWrapper}>
                    <h4>Team Members</h4>
                    <ul>
                        <li className={styles.groupMember}>{group.inventor_name}</li>
                        {group.members.map((member) => {
                            return (<li className={styles.groupMember}>{member}</li>)
                        })
                        }
                    </ul>
                </div>
            </section>
        )
    }

    render() {
        const alexaGroups = this.props.alexaGroups;
        const isFetching = alexaGroups.isFetching;

        return (
            <div>
                <Banner
                    title="Amazon Hackaton Registration"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                    className={styles.banner}
                />
                <section className={'container ' + styles.mainWrapper}>
                    <div className={styles.mainBar}>
                        <Button className={styles.createGroupButton}>Create a Team</Button>
                    </div>
                    {isFetching ? <Spinner/> :
                        <ul className={styles.groupsList}>
                            {group.map(this.createAlexaGroup)}
                            {/*{alexaGroups.results.length ? alexaGroups.results.map(this.createAlexaGroup) :*/}
                            {/*<div className={styles.noGroups}>*/}
                            {/*No groups were formed yet. Be the first!*/}
                            {/*</div>}*/}
                        </ul>
                    }
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.alexa}
}

function mapDispatchToProps(dispatch) {
    return {
        loadAlexaGroupsSaga: () =>
            dispatch(loadAlexaGroupsSaga()),
        joinAlexaGroupSaga: (uid, formData) =>
            dispatch(loadAlexaGroupsSaga(uid, formData)),
        createAlexaGroupSaga: (formData) =>
            dispatch(createAlexaGroupSaga(formData)),
        showGroupCreateModal: () =>
            dispatch(showGroupCreateModal()),
        showGroupJoinModal: () =>
            dispatch(showGroupJoinModal()),
        hideGroupCreateModal: () =>
            dispatch(hideGroupCreateModal()),
        hideGroupJoinModal: () =>
            dispatch(hideGroupJoinModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alexa)
