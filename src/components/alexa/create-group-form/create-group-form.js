import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

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
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="name" component={Input} label="Full Name"/>
                </div>
                <div>

                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

// Decorate the form component
CreateGroupForm = reduxForm({
    form: 'createGroup' // a unique name for this form
})(CreateGroupForm);

export default CreateGroupForm;