import React, { Component } from 'react';
import './App.css';
import ButtonOk from './components/ButtonOk';
import Modal from './components/Modal';

class App extends Component {

  constructor(props){
    super();
      this.state = {
        isVisible: false
      };
  }

  showModal = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  handleCancel = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  handleCreate = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  saveFormRef = (form) => {
    this.form = form;
  }

  render() {
    return (
      <div>
        <ButtonOk 
          showModal={this.showModal}
        />
        <Modal 
          isVisible={this.state.isVisible} 
          onOki={this.handleCreate}
          onNoOki={this.handleCancel}
        >
        </Modal>
      </div>
    );
  }
}

export default App;
