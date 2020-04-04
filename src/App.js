import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ToDolist from "./components/ToDolist";

class App extends React.Component {
  state = {
    todos: [{ text: "how are you ?", iscomplete: false }]
  };

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  complete = i => {
    this.setState({
      todos: this.state.todos.map((todo, index) =>
        index === i ? { ...todo, iscomplete: !todo.iscomplete } : todo
      )
    });
  };
  deleteitem = i => {
    this.setState({
      todos: this.state.todos.filter((el, index) => index !== i)
    });
  };

  render() {
    return (
      <div>
        <InputTodo addTodo={this.addTodo} />
        <ToDolist
          todos={this.state.todos}
          complete={this.complete}
          deleteitem={this.deleteitem}
        />
      </div>
    );
  }
}

export default App;
