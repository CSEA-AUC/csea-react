import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, InputGroup} from 'react-bootstrap'

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

export default AUCEmailInput