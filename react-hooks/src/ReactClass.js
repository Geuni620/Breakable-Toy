import {Component, useReducer} from "react";

export function ReactClass() {
  return <Counter />;
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

/*
function Hello({color, name, isSpecial}) {
  return (
    <div style={{color}}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

class Hello extends Component {
  static defaultProps = {
    name: "이름없음",
  };

  render() {
    const {color, name, isSpecial} = this.props;
    return <div style={{color}}></div>;
  }
}
*/

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1,
  };
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  // handleDecrease = () => {
  //   this.setState(
  //     {
  //       counter: this.state.counter - 1,
  //     },
  //     () => {
  //       console.log(this.state.counter);
  //     }
  //   );
  // };

  handleDecrease = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));

    console.log(this.state.counter);
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}
