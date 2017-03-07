import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel, InputGroup, Button} from 'react-bootstrap'

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength50 = maxLength(50);
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or less` : undefined;
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue3 = minValue(3);
const aucEmail = value =>
    value && !/^[A-Z0-9._%+-]+@$/i.test(value) ? 'Invalid email address' : undefined;
const mobileNumber = number =>
    number && !/^\+?1?\d{9,11}$/i.test(number) ? 'Invalid mobile number' : undefined;

class AUCEmailInput extends Component {
    render() {
        const {
            feedbackIcon,
            input,
            label,
            type,
            meta: {error, warning, touched},
            ...props
        } = this.props;

        let message;
        const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;

        if (touched && ( error || warning )) {
            message = <span className="help-block">{ error || warning }</span>;
        }

        return (
            <FormGroup validationState={ validationState }>
                <ControlLabel>{ label }</ControlLabel>
                <InputGroup>
                    <FormControl { ...input }
                                 type={ type }
                                 { ...props }/>
                    <InputGroup.Addon>@aucegypt.edu</InputGroup.Addon>
                </InputGroup>
                { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
                { message }
            </FormGroup>
        );
    }
}
class Input extends Component {
    render() {
        const {
            feedbackIcon,
            input,
            label,
            type,
            meta: {error, warning, touched},
            ...props
        } = this.props;

        let message;
        const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;

        if (touched && ( error || warning )) {
            message = <span className="help-block">{ error || warning }</span>;
        }

        return (
            <FormGroup validationState={ validationState }>
                <ControlLabel>{ label }</ControlLabel>
                <FormControl { ...input }
                             type={ type }
                             { ...props }>
                    {this.props.children}
                </FormControl>
                { feedbackIcon ? <FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> : null }
                { message }
            </FormGroup>
        );
    }
}

class CreateGroupForm extends Component {
    render() {
        const {handleSubmit, pristine, reset, submitting, valid} = this.props;
        console.log(this.props);
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="name" component={Input} label="Full Name" validate={[required, maxLength50, minValue3]}/>
                </div>
                <div>
                    <Field name="aucEmail" component={AUCEmailInput} label="AUC Email"/>
                </div>
                <div>
                    <Field name="mobile" component={Input} label="Mobile Number" type="number"/>
                </div>
                <div>
                    <Field name="major" component={Input} label="Major"/>
                </div>
                <div>
                    <Field name="standing" component={Input} label="Standing" componentClass="select">
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </Field>
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
    form: 'createGroup',
})(CreateGroupForm);

export default CreateGroupForm;