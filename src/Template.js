import React, { Component } from 'react';
import { withRouter } from 'react-router'
class Template extends Component {
  render() {
    return (
      <div>
        <div>Template</div>
        <div className="content">
          {this.props.children}
         </div>
      </div>

    );
  }
}

export default withRouter(Template);
