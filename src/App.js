import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-header">
          <div className="item">About</div>
          <div className="item">Reference</div>
          <div className="item">Contact</div>
        </div>

        <section className="content">
          <h1>Twilio Program Testing API</h1>
          <div className="description">
            Lorem ipsum dolor amet
            <br/>
            <div className="caption">
              <em>Lorem Ipsum Dolor Amet</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget rhoncus dolor, vel gravida felis. Donec commodo tellus pretium, tempus mauris nec, ornare erat. Fusce non ex sollicitudin, auctor mi nec, placerat mauris. Integer ac tortor ut diam tempus egestas a porttitor purus. Suspendisse vitae condimentum lacus. Morbi commodo malesuada tortor, eu auctor ex convallis vitae. Praesent pellentesque mi non ex dictum, quis aliquet dolor consequat. Etiam cursus commodo ipsum. Praesent placerat aliquam auctor. Duis ut ligula mauris. Fusce quis elementum quam. Fusce at ex eu lacus convallis tempor. Etiam venenatis risus nec tristique interdum.

              Maecenas metus sem, egestas quis ultricies eu, hendrerit at lacus. Sed dolor enim, porttitor id venenatis viverra, mollis ac nulla. Proin posuere non lectus nec malesuada. Etiam tellus est, ornare eget dolor id, ultricies hendrerit mi. Curabitur mattis augue ac porta lobortis. Etiam erat dui, sodales quis egestas et, semper a diam. Fusce ac ligula velit. Nulla ex diam, bibendum sed est vel, tempus faucibus magna.

              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Morbi nec turpis eu turpis interdum consequat vel et lacus. Duis mattis sem sed congue iaculis. Nulla consectetur turpis in lorem molestie lacinia. Vestibulum ac enim eros. Vestibulum molestie gravida tortor, a eleifend dolor scelerisque ac.
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(state => state)(App);
