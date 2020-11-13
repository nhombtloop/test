import React, { Component } from 'react';
import './userProfile.css';
import Swal from 'sweetalert2';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        passwordConfirm: '',
      },
      errors: {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        passwordConfirm: '',
      },
    };
  }
  handleInputChange = (e) => {
    let { name, value, type } = e.target;
    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.errors };
    if (value === '') {
      newError[name] = `${name} is required!!!`;
    } else {
      newError[name] = '';
    }
    if (type === 'email') {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        newError[name] = 'invalid email';
      } else {
        newError[name] = '';
      }
    }
    if (name === 'passwordConfirm') {
      if (this.state.values.password !== value) {
        newError[name] = 'password must be match';
      } else {
        newError[name] = '';
      }
    }
    this.setState({
      values: newValue,
      errors: newError,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { values } = this.state;
    const newError = { ...this.state.errors };
    let valid = true;
    for (let key in values) {
      if (values[key] === '') {
        valid = false;
        newError[key] = `${key} is required`;
      }
    }
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== '') {
        valid = false;
      }
    }
    console.log(newError);
    if (!valid) {
      this.setState({ errors: newError });
    } else {
      Swal.fire({
        title: 'Sign Up Success',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div
          style={{
            backgroundColor: '#EEEEEE',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <form
            onSubmit={this.handleSubmit}
            className="bg-white m-5 p-5"
            style={{ width: 600 }}
          >
            <h2>User Profile</h2>
            <div className="row my-5">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.firstName}
                    onChange={this.handleInputChange}
                    type="text"
                    name="firstName"
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>firstName</label>
                  <span className="text text-danger">
                    * {this.state.errors.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.lastName}
                    onChange={this.handleInputChange}
                    type="text"
                    name="lastName"
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>lastName</label>
                  <span className="text text-danger">
                    * {this.state.errors.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12">
                <div className="group">
                  <input
                    value={this.state.values.userName}
                    onChange={this.handleInputChange}
                    name="userName"
                    type="text"
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>userName</label>
                  <span className="text text-danger">
                    * {this.state.errors.userName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12">
                <div className="group">
                  <input
                    value={this.state.values.email}
                    onChange={this.handleInputChange}
                    name="email"
                    type="email"
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>email</label>
                  <span className="text text-danger">
                    * {this.state.errors.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.password}
                    onChange={this.handleInputChange}
                    name="password"
                    type="password"
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>password</label>
                  <span className="text text-danger">
                    * {this.state.errors.password}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.passwordConfirm}
                    onChange={this.handleInputChange}
                    name="passwordConfirm"
                    type="password"
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>passwordConfirm</label>
                  <span className="text text-danger">
                    * {this.state.errors.passwordConfirm}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <button
                className="col-12 w-100 btn bg-dark text-light"
                style={{ fontSize: 20 }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
