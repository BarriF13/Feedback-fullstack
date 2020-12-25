//Responsible For showing surveyForm and surveyFormReview 

import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFromReview from './SurveyFormReview';

export class SurveyNew extends Component {

  state = { showFromReview: false};

    renderContent(){
      if(this.state.showFromReview){
        return <SurveyFromReview/>;
      }
      return  <SurveyForm
       onSurveySubmit={()=> this.setState({ showFromReview: true}) }/>;
    }
  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default SurveyNew;
