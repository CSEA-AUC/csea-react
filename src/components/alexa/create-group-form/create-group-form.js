import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Button} from 'react-bootstrap'
import {required, aucEmail, maxLength50, minLength3, maxLength500, mobileNumber, universityId} from '../../../utils/validators'
import {AUCEmailInput, FormInput} from '../../index'
import {submitCreateGroupForm} from '../../../utils/form-submissions'

class CreateGroupForm extends Component {
    render() {
        const {handleSubmit, submitting, valid, ideaDescriptionValue} = this.props;
        return (
            <form onSubmit={handleSubmit(submitCreateGroupForm)}>
                <div>
                    <Field name="name" component={FormInput} label="Full Name"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="auc_id" component={FormInput} label="AUC ID"
                           validate={[required, universityId]}/>
                </div>
                <div>
                    <Field name="email" component={AUCEmailInput} label="AUC Email"
                           validate={[required, maxLength50, minLength3, aucEmail]}/>
                </div>
                <div>
                    <Field name="phone" component={FormInput} label="Mobile Number"
                           validate={[required, mobileNumber]}/>
                </div>
                <div>
                    <Field name="major" component={FormInput} label="Major"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="standing" component={FormInput} label="Standing" componentClass="select"
                           validate={required}>
                        <option disabled/>
                        <option value="FR">Freshman</option>
                        <option value="SO">Sophomore</option>
                        <option value="JR">Junior</option>
                        <option value="SR">Senior</option>
                        <option value="TA">Teaching Assistant</option>
                        <option value="AL">Alumni</option>
                    </Field>
                </div>
                <div>
                    <Field name="idea_title" component={FormInput} label="Idea Title"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="idea_description" component={FormInput} label="Idea Description" componentClass="textarea"
                           validate={[required, maxLength500, minLength3]}/>
                    {ideaDescriptionValue && <small style={{float:'right', clear: 'both', display: 'inline-block'}}>{ideaDescriptionValue.length}/500</small>}
                </div>
                <div>
                    <Button type="submit" bsStyle="primary" disabled={submitting || !valid}> {submitting ? 'Submitting...' : 'Submit'}</Button>
                </div>
            </form>
        )
    }
}

// Decorate the form component
CreateGroupForm = reduxForm({
    form: 'createGroupForm',
})(CreateGroupForm);

// Decorate with connect to read form values
const selector = formValueSelector('createGroupForm'); // <-- same as form name

CreateGroupForm = connect(
    state => {
        const ideaDescriptionValue = selector(state, 'idea_description');
        return {ideaDescriptionValue}
    }
)(CreateGroupForm);

export default CreateGroupForm;