// SurveyForm shows a form for the user to add input 
import React, { Component } from 'react';
import {reduxForm} from 'redux-form'; //allows to talk to redux store at the top of our app -similar to connect function

export class SurveyForm extends Component {
  render() {
    return (
      <div>
        surveyForm
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'

})(SurveyForm);
