import {Component} from "react";

export function ReactClass() {
  return <Modal />;
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }

  render() {
    return (
      <div>
        안녕{this.state.age}
        <button
          onClick={() => {
            this.setState({
              age: this.state.age + 1,
            });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}
