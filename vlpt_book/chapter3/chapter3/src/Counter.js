import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   //* state 초깃값 설정하기

  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state
    //* state를 조회할 때는 this.state로 조회합니다. 

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>


        {/* //* onClick을 통해 버튼을 클릭했을 때 호출할 함수 지정 */}

        <button onClick={() => {

          // *this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
          // this.setState({ number: number + 1 })
          this.setState(prevState => {
            return {
              number: prevState.number + 1
            }
          },
            () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            }
          )
        }}
        >
          +1
        </button>
      </div >
    );

  }

}

export default Counter;
