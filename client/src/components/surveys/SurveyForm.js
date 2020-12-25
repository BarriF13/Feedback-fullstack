// SurveyForm shows a form for the user to add input 
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; //allows to talk to redux store at the top of our app -similar to connect function-- Field is helper for rendering html 
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

export class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text" label={label}
          name={name}
        />
      );
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>


        </form>
      </div>
    )
  }
}
function validate(values) {
  const errors = {};
   errors.emails = validateEmails(values.emails || '');

  _.forEach(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value!';
    }
  });



  return errors;
}
//redux form helper 
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false

})(SurveyForm);
