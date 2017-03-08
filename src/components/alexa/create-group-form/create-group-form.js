import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Button} from 'react-bootstrap'
import {required, aucEmail, maxLength50, minLength3, maxLength200, mobileNumber} from '../../../utils/validators'
import {AUCEmailInput, FormInput} from '../../index'

class CreateGroupForm extends Component {
    render() {
        const {handleSubmit, submitting, valid, submitForm, ideaDescriptionValue} = this.props;
        return (
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <Field name="name" component={FormInput} label="Full Name"
                           validate={[required, maxLength50, minLength3]}/>
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
                    </Field>
                </div>
                <div>
                    <Field name="idea_title" component={FormInput} label="Idea Title"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="idea_description" component={FormInput} label="Idea Description" componentClass="textarea"
                           validate={[required, maxLength200, minLength3]}/>
                    {ideaDescriptionValue && <small style={{float:'right', clear: 'both', display: 'inline-block'}}>{ideaDescriptionValue.length}/200</small>}
                </div>
                <div>
                    <Button type="submit" bsStyle="primary" disabled={submitting || !valid}>Submit</Button>
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