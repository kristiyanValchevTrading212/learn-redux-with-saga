import { Component, memo } from "react";

class Spacer extends Component {
   render() {
      return (
         <div className="spacer" style={{ height: `${this.props.height}px` }}></div>
      );
   }
}

export default memo(Spacer);