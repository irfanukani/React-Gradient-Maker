import React from "react";
import style from "./styles.module.css";
import Navbar from "../Components/Navbar";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Scolor: "#0B40FC",
      Ecolor: "#283976",
      isOpen: false
    };

    //binding
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleChangeE = this.handleChangeE.bind(this);
    this.alertCss = this.alertCss.bind(this);
  }

  handleChangeS(event) {
    this.setState({ Scolor: event.target.value });
  }
  handleChangeE(event) {
    this.setState({ Ecolor: event.target.value });
  }

  alertCss() {
    let data =
      "background: linear-gradient(to bottom right," +
      this.state.Scolor +
      "," +
      this.state.Ecolor +
      ");";

    prompt("CSS CODE", data);
    document.execCommand("copy");
  }

  render() {
    const mystyle = {
      color: "white",
      marginTop: "30px",
      background:
        "linear-gradient(to bottom right," +
        this.state.Scolor +
        "," +
        this.state.Ecolor +
        ")",
      marginLeft: "10px",
      fontFamily: "Arial",
      height: "400px",
      width: "1000px",
      borderRadius: "50px",
      boxShadow: "3px 3px 5px 6px #ccc"
    };

    return (
      <div className={style.main}>
        <Navbar />
        <div style={mystyle}></div>
        <div className={style.colorP}>
          <div>
            <label for="colorpicker">Pick Start-Color : </label>
            <input
              type="color"
              id="colorpicker"
              value={this.state.Scolor}
              onChange={this.handleChangeS}
            />
          </div>
          <div>
            <label for="colorpicker">Pick End-Color : </label>
            <input
              type="color"
              id="colorpicker"
              value={this.state.Ecolor}
              onChange={this.handleChangeE}
            />
          </div>
        </div>
        <button className={style.btn} onClick={this.alertCss}>
          Get CSS
        </button>
      </div>
    );
  }
}
