// SurveyForm shows a form for the user to add input 
import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'; //allows to talk to redux store at the top of our app -similar to connect function-- Field is helper for rendering html 
import SurveyField from './SurveyField';

export class SurveyForm extends Component {
  renderFields(){
    return(
      <div>
        <Field type="text" name="title" component={SurveyField}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.props.handleSubmit(values =>console.log(values))}>
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
