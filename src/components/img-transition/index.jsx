import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.scss";

import rir1 from '../../assets/rir1.png'
import rir2 from '../../assets/rir2.png'
import rir3 from '../../assets/rir3.png'
import rir4 from '../../assets/rir4.png'
import rir5 from '../../assets/rir5.png'
import rir6 from '../../assets/rir6.png'

class Porra extends Component {
    render() {
      return (

    <div class="slider">
        <div class="slide-track">
            <div class="slide">
        <img src={rir1} height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src={rir2} height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src={rir3} height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src={rir4} height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src={rir5} height="300" width="300"  alt="" />
        </div>
        <div class="slide">
        <img src={rir6} height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src={rir2} height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src={rir4} height="300" width="300" alt=""  />
        </div>
        <div class="slide">
        <img src={rir1} height="300" width="300" alt=""  />
        </div>
        <div class="slide">
        <img src={rir3} height="300" width="300" alt=""  />
        </div>
        <div class="slide">
        <img src={rir5} height="300" width="300" alt=""  />
        </div>
        <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="300" width="300" alt="" />
        </div>
        <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="300" width="300" alt="" />
        </div>
        </div>
        </div>
       
      );
    }
  }
  export default Porra

  ReactDOM.render(<Porra />, document.getElementById("root"));
  
