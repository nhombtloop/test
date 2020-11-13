import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from '../../../styledComponent/Container.js';
import { Dropdown } from '../../../styledComponent/Dropdown.js';
import { Heading2, Heading3 } from '../../../styledComponent/Heading.js';
import { TextField } from '../../../styledComponent/TextField.js';
import { Button } from '../../../styledComponent/Button.js';
import { Table, Thead, Th, Tr } from '../../../styledComponent/Table.js';
import { connect } from 'react-redux';
import {
  addTask,
  changeTheme,
  doneTask,
  deleteTask,
  updateTask,
  editTask,
} from '../../../redux/actions/toDoList.actions';
import { themeArr } from '../../../Theme/ThemeManager.js';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      inputTerm: '',
    };
  }
  renderListTheme = () => {
    return themeArr.map((theme) => (
      <option key={theme.id} value={theme.id}>
        {theme.name}
      </option>
    ));
  };
  renderTaskToDo = () => {
    return this.props.toDoList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: 'middle' }}>{task.name}</Th>
            <Th className="text-right">
              <Button
                onClick={() => this.props.handleEditTask(task)}
                className="ml-1"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => this.props.handleDoneTask(task.id)}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => this.props.handleDeleteTask(task.id)}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskDone = () => {
    return this.props.toDoList
      .filter((task) => task.done)
      .map((task, index) => (
        <Tr key={index}>
          <Th style={{ verticalAlign: 'middle' }}>{task.name}</Th>
          <Th className="text-right">
            <Button
              onClick={() => this.props.handleDeleteTask(task.id)}
              className="ml-1"
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      ));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.editTask.id !== this.props.editTask.id) {
      this.setState({ inputTerm: this.props.editTask.name });
    }
  }
  render() {
    return (
      <div>
        <ThemeProvider theme={this.props.theme}>
          <Container className="w-50">
            <Dropdown
              onChange={(e) => this.props.handleChangeTheme(e.target.value)}
            >
              {this.renderListTheme()}
            </Dropdown>
            <Heading2 className="text-left">To do list</Heading2>
            <TextField
              onChange={(e) => {
                this.setState({ inputTerm: e.target.value });
              }}
              className="w-50"
              label="Task name"
              value={this.state.inputTerm}
            />
            <Button
              disabled={this.props.disabledAddButton}
              onClick={() => {
                this.props.handleAddTask(this.state.inputTerm);
                this.setState({ inputTerm: '' });
              }}
              className="ml-2"
            >
              <i className="fa fa-plus"></i> Add task
            </Button>
            <Button
              disabled={this.props.disabledUpdateButton}
              onClick={() => {
                this.props.handleUpdateTask(this.state.inputTerm);
                this.setState({ inputTerm: '' });
              }}
              className="ml-2"
            >
              <i className="fa fa-edit"></i> Update task
            </Button>
            <hr />
            <Heading3>Task to do</Heading3>
            <Table>
              <Thead>{this.renderTaskToDo()}</Thead>
            </Table>
            <Heading3>Task complete</Heading3>
            <Table>
              <Thead>{this.renderTaskDone()}</Thead>
            </Table>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.todolistReducer.currentTheme,
  toDoList: state.todolistReducer.tasks,
  editTask: state.todolistReducer.taskEdit,
  disabledAddButton: state.todolistReducer.disabledAddButton,
  disabledUpdateButton: state.todolistReducer.disabledUpdateButton,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTask: (taskName) => {
      let newTask = {
        id: Date().now,
        name: taskName,
        done: false,
      };
      dispatch(addTask(newTask));
    },
    handleChangeTheme: (themeId) => {
      dispatch(changeTheme(themeId));
    },
    handleDoneTask: (taskId) => dispatch(doneTask(taskId)),
    handleDeleteTask: (taskId) => dispatch(deleteTask(taskId)),
    handleEditTask: (taskEdit) => dispatch(editTask(taskEdit)),
    handleUpdateTask: (taskName) => dispatch(updateTask(taskName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
