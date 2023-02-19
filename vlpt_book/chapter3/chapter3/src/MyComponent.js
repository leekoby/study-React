import React from "react";
import PropTypes from 'prop-types'
import "./App.css";

const MyComponent = ({ name, favoriteNumber, children }) => {

  return (
    <div>
      나의 새롭고 멋진 {name}<br />
      children 값은 {children}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다<div className=""></div>
    </div>
  )



};


MyComponent.defaultProps = {
  name: '기본 이름 '
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}


export default MyComponent;


