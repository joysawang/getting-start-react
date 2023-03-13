import React, { useEffect, useState } from "react";

class Counter extends React.Component {
  state = {
    counter: 1,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  handleClick = () => {
    this.setState((prevState: any) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Counter {this.state.counter}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

// hook
const useCounter = (initalValue: number = 1) => {
  const [value, setValue] = useState<number>(initalValue);

  return { value, setValue };
};

// function component
const Counter2 = () => {
  const counter = useCounter(1);

  const handleClick = () => {
    counter.setValue(counter.value + 1);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log("Did mount");

    return () => {
      console.log("Will unmount");
    };
  }, []);

  return (
    <div>
      <p>Counter {counter.value}</p>
      <p>{`Counter ${counter.value}`}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Counter2;
