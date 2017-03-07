import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Button} from 'react-bootstrap'
import {required, aucEmail, maxLength50, minLength3, maxLength200, mobileNumber} from '../../../utils/validators'
import {AUCEmailInput, FormInput} from '../../index'

class CreateGroupForm extends Component {
    render() {
        console.log(this.props);
        const {handleSubmit, submitting, valid, submitForm, ideaDescriptionValue} = this.props;
        return (
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <Field name="name" component={FormInput} label="Full Name"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="aucEmail" component={AUCEmailInput} label="AUC Email"
                           validate={[required, maxLength50, minLength3, aucEmail]}/>
                </div>
                <div>
                    <Field name="mobile" component={FormInput} label="Mobile Number"
                           validate={[required, mobileNumber]}/>
                </div>
                <div>
                    <Field name="major" component={FormInput} label="Major"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="standing" component={FormInput} label="Standing" componentClass="select"
                           validate={required}>
                        <option disabled selected value/>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </Field>
                </div>
                <div>
                    <Field name="ideaTitle" component={FormInput} label="Idea Title"
                           validate={[required, maxLength50, minLength3]}/>
                </div>
                <div>
                    <Field name="ideaDescription" component={FormInput} label="Idea Description" componentClass="textarea"
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
        const ideaDescriptionValue = selector(state, 'ideaDescription');
        return {ideaDescriptionValue}
    }
)(CreateGroupForm);

export default CreateGroupForm;