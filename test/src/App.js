import React from 'react';
import './App.scss';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  handelModal1(){
    this.setState({ show: !this.state.show })
  }

  handelModal2(){
    this.setState({ show: !this.state.show })
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={()=>this.handelModal1()} variant="primary" >All Contacts</Button>
        <Modal show={this.state.show} onHide={()=>this.handelModal1()}>
          <Modal.Header closeButton>
            Modal 1
          </Modal.Header>
          <Modal.Body>
              asdasdad
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.handelModal1()}>Close</Button>
          </Modal.Footer>
        </Modal>
		    
        <Button onClick={()=>this.handelModal2()} variant="success">US Contacts</Button>

        <Modal show={this.state.show} onHide={()=>this.handelModal2()}>
          <Modal.Header closeButton>
            Modal 2
          </Modal.Header>
          <Modal.Body>
              asdasdad
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.handelModal2()}>Close</Button>
          </Modal.Footer>
        </Modal>
        
      </header>
    </div>
  );
}
}

export default App;
