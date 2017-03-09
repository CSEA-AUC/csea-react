import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'react-bootstrap'
import {required, aucEmail, maxLength50, minLength3, mobileNumber, universityId} from '../../../utils/validators'
import {AUCEmailInput, FormInput} from '../../index'
import {submitJoinGroupForm} from '../../../utils/form-submissions'

class JoinGroupForm extends Component {
    render() {
        const {handleSubmit, submitting, valid} = this.props;
        return (
            <form onSubmit={handleSubmit(submitJoinGroupForm)}>
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
                    <Button type="submit" bsStyle="primary" disabled={submitting || !valid}> {submitting ? 'Submitting...' : 'Submit'}</Button>
                </div>
            </form>
        )
    }
}

// Decorate the form component
JoinGroupForm = reduxForm({
    form: 'joinGroupForm',
})(JoinGroupForm);

export default JoinGroupForm;