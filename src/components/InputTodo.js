import React from "react";

class InputTodo extends React.Component {
  state = {
    input: ""
  };

  change = e => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.input) {
      this.props.addTodo({ text: this.state.input, iscomplete: false });
      this.setState({
        input: ""
      });
    } else alert("please enter a text");
  };

  render() {
    return (
      <div className="Input-todo">
        <h1>Todolist</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.input} onChange={this.change} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default InputTodo;
