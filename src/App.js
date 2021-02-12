import React from "react";
import "./styles.css";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    let elem = document.getElementById(event.key);
    if (elem !== null) {
      elem.click();
    }
  }

  render() {
    return (
      <div className="parent-class">
        <div className="app-style">
          <div className="row-style">
            <Button
              innerButton="q"
              Name="a1"
              source="https://freesound.org/data/previews/364/364919_4900575-lq.mp3"
            />
            <Button
              innerButton="w"
              Name="a2"
              source="https://freesound.org/data/previews/0/808_797-lq.mp3"
            />
            <Button
              innerButton="e"
              Name="a3"
              source="https://freesound.org/data/previews/489/489892_3173681-lq.mp3"
            />
          </div>
          <div className="row-style">
            <Button
              innerButton="a"
              Name="a4"
              source="https://freesound.org/data/previews/455/455632_3677139-lq.mp3"
            />
            <Button
              innerButton="s"
              Name="a5"
              source="https://freesound.org/data/previews/471/471418_9934567-lq.mp3"
            />
            <Button
              innerButton="d"
              Name="a6"
              source="https://freesound.org/data/previews/167/167937_285630-lq.mp3"
            />
          </div>
          <div className="row-style">
            <Button
              innerButton="z"
              Name="a7"
              source="https://freesound.org/data/previews/172/172421_3217954-lq.mp3"
            />
            <Button
              innerButton="x"
              Name="a8"
              source="https://freesound.org/data/previews/336/336240_1772601-lq.mp3"
            />
            <Button
              innerButton="c"
              Name="a9"
              source="https://freesound.org/data/previews/231/231751_4184332-lq.mp3"
            />
          </div>
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  playAudio = () => {
    let x = document.getElementById(this.props.Name);
    x.play();
  };

  render() {
    return (
      <div>
        <button
          className="button-style"
          id={this.props.innerButton}
          onClick={this.playAudio}
        >
          {this.props.innerButton.toUpperCase()}
        </button>
        <audio id={this.props.Name} src={this.props.source} />
      </div>
    );
  }
}

export default DrumMachine;
