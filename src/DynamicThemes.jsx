import React from "react";

// const ChildA = () => (
//   <div
//     className="childA"
//     // onMouseEnter={() => alert("Mouse Entered")}
//     onMouseEnter={() => console.log("Mouse Entered")}
//     onMouseLeave={() => console.log("Mouse Left")}
//     onMouseMove={e => console.log("X-pos: ", e.screenX, "Y-pos:", e.screenY)}
//   >
//     <p>I am Child A... </p>
//   </div>
// );

// to make the innerDiv so something on MouseEnter , we need state
//and that why converting to class

const styles = {
  border: "3px dashed red",
  backgroundColor: "blue"
};

class ChildA extends React.Component {
  state = {
    isInnerDivA: false
  };

  render() {
    return (
      <div
        className="childA"
        // onMouseEnter={() => alert("Mouse Entered")}
        onMouseEnter={() => this.setState({ isInnerDivA: true })}
        onMouseLeave={() => this.setState({ isInnerDivA: false })}
        onMouseMove={e =>
          console.log("X-pos: ", e.screenX, "Y-pos:", e.screenY)
        }
        style={this.state.isInnerDivA ? styles : {}}
      >
        <p>I am Child A... </p>
      </div>
    );
  }
}

const ChildB = () => (
  <div className="childB">
    <h3>I am child B... </h3>
  </div>
);

class DynamicThemes extends React.Component {
  state = {
    isDark: false
  };

  toggleDivThemes = () => {
    this.setState({
      isDark: !this.state.isDark
    });
  };

  render() {
    const { isDark } = this.state;
    return (
      <div className={isDark ? "Wrapper Dark" : "Wrapper Light"}>
        <h1>{isDark ? "Dark Themes" : "Light-Themes"}</h1>
        {isDark ? <ChildA /> : <ChildB />}
        <button
          onClick={this.toggleDivThemes}
          className={isDark ? "btn-danger" : "btn-success"}
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    );
  }
}
export default DynamicThemes;
