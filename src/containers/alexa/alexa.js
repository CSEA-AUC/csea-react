import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ControlLabel, FormControl, Form, Button, Modal, Image} from 'react-bootstrap'

import {Banner, Spinner, CreateGroupForm} from '../../components'

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

class Alexa extends Component {
    constructor(props){
        super(props);
        this.handleCreateGroupSubmit = this.handleCreateGroupSubmit.bind(this);
    }

    componentWillMount() {
        this.props.loadAlexaGroupsSaga();
    }

    handleCreateGroupSubmit(values) {
        this.props.createAlexaGroupSaga(values);
    }

    createAlexaGroup(group) {
        return (
            <section key={group.id} className={styles.groupWrapper}>
                <header>
                    <h2 className={styles.ideaTitle}>{group.idea_title}</h2>
                    <Button className={styles.joinGroupButton} disabled={group.members.length >= 4}>
                        {group.members.length >= 5 ? 'Team is Full' : 'Join Team'}
                    </Button>
                </header>
                <p className={styles.ideaDescription}>{group.idea_description}</p>
                <div className={styles.groupMembersWrapper}>
                    <h4>Team Members ({group.members.length}/5)</h4>
                    <ul>
                        {/*<li className={styles.groupMember}>{group.inventor_name}</li>*/}
                        {group.members.map((member) => {
                            return (<li key={member.id} className={styles.groupMember}>{member.name}</li>)
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
        const responseCode = alexaGroups.responseCode;
        const showCreateGroupModal = this.props.createGroupModal.show;
        return (
            <div>
                <Modal show={showCreateGroupModal} onHide={this.props.hideGroupCreateModal} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Create a Team!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateGroupForm submitForm={this.handleCreateGroupSubmit}/>
                    </Modal.Body>
                </Modal>
                <Banner
                    title="Amazon Alexa Hackaton Registration"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut."
                    className={styles.banner}
                />
                <section className={'container ' + styles.mainWrapper}>
                    <div className={styles.mainBar}>
                        <Button className={styles.createGroupButton} onClick={this.props.showGroupCreateModal}>Create a Team</Button>
                    </div>
                    {isFetching ? <Spinner/> :
                        <ul className={styles.groupsList}>
                            {alexaGroups.results.length ? alexaGroups.results.map(this.createAlexaGroup) :
                                <div className={styles.noGroups}>
                                    No groups were formed yet. Be the first!
                                </div>}
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
