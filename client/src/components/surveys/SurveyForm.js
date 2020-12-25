// SurveyForm shows a form for the user to add input 
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; //allows to talk to redux store at the top of our app -similar to connect function-- Field is helper for rendering html 
import SurveyField from './SurveyField';

export class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Survey Title"
          type="text" name="title"
          component={SurveyField}
        />
           <Field
          label="Subject Line"
          type="text" name="subject"
          component={SurveyField}
        />
           <Field
          label="Email Body"
          type="text" name="body"
          component={SurveyField}
        />
           <Field
          label="Recipient List"
          type="text" name="emails"
          component={SurveyField}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'

})(SurveyForm);
