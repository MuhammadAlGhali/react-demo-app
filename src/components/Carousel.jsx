import React, { button, Switch } from "react";
import { Carousel } from "antd";
import "../App.css";

// Class Component
class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Carousel>
          <div>
            <h3 style={contentStyle}>Hello</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </>
    );
  }
}

const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export { CarouselComponent };
