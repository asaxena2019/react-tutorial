const root3 = ReactDOM.createRoot(document.getElementById("root3"));

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {hidden:false}
    }

  render() {
    if (!this.state.hidden)
            return React.createElement('button', { onMouseOver: () => this.setState({ hidden: true }) }, 'Click'
    );

    return React.createElement(null,null,null);
  }
}

root3.render(React.createElement(Button));
