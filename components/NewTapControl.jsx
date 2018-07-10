import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTapForm from './NewTapForm';
import PropTypes from 'prop-types';

class NewTapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTapForm onNewTapCreation={this.props.onNewTapCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation=
        {this.handleTroubleshootingConfirmation} />;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTapControl.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapControl;
