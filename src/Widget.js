import { Component } from 'react';

class Widget extends Component {

    componentWillMount() {
        this.initiateCall();
    }

    initiateCall() {
        this.initialize(document, "freshchat-js-sdk");
      }
    
      initialize(i, t) {
        let e;
        return i.getElementById(t) ? this.initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = this.initFreshChat, i.head.appendChild(e));
      }
    
      initFreshChat() {
        window.fcWidget.init({
          token: "66cf57d6-66f9-431e-8215-a8e5fc205c07",
          host: "https://wchat.freshchat.com",
          open: true
        });

        // window.fcWidget.user.setProperties({
        //   firstName: "ARUN",
        //   lastName: "S",
        //   email: "a@gmail.com",
        //   phone: "9047392918"
        // });
      }
    render() {
        
       return (
          null
       );
    }
}

export default Widget;