import React, { Component } from "react";
import "./App.scss";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { setAllContact } from "./redux/actions";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
    };
  }
  componentDidMount() {
    this.getAllContact();
  }
  getAllContact = () => {
    let URL = "https://api.dev.pastorsline.com/api/contacts.json";
    let AuthStr =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk";
    let params = {
      companyId: "171",
      query: "names",
      page: "1",
      countryId: "226",
    };
    axios
      .get(URL, {
        params,
        headers: { Authorization: AuthStr },
      })
      .then(
        (response) => {
          var res = response.data;
          console.log("contact", res);
          if (response.status === 200) {
            this.props.onSetAllContact(response.data);
          }
        },
        (error) => {
          var status = error.response.status;
        }
      );
  };

  handelModal1() {
    this.setState({ show1: !this.state.show1 });
  }

  handelModal2() {
    this.setState({ show2: !this.state.show2 });
  }
  render() {
    let myCont = this.props.userContact.contacts_ids;
    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={() => this.handelModal1()} variant="primary">
            All Contacts
          </Button>
          <Modal show={this.state.show1} onHide={() => this.handelModal1()}>
            <Modal.Header closeButton>Modal 1</Modal.Header>
            {myCont &&
              myCont.map((item) => (
                <Modal.Body onClick={() => alert(item)}>{item}</Modal.Body>
              ))}

            <Modal.Footer>
              <Button onClick={() => this.handelModal1()}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Button onClick={() => this.handelModal2()} variant="success">
            US Contacts
          </Button>

          <Modal show={this.state.show2} onHide={() => this.handelModal2()}>
            <Modal.Header closeButton>Modal 2</Modal.Header>
            <Modal.Body>Abhi sir</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.handelModal2()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("get Contact", state.user.contactAll);
  return {
    userContact: state.user.contactAll,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSetAllContact: (val) => {
      console.log("set Contact", val);
      dispatch(setAllContact(val));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
