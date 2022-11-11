import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById("root"));

// example 1

var sampleJSX =
<div>
    <h1>hello world!</h1>
</div>

root.render(sampleJSX);

// example 2

class Example extends React.Component {
    render () {
        return (
            <div>
                {2+2}
            </div>
        )
    }
}

root.render(<Example/>);


// example 3

function hello(){
    return <h1>hello world!</h1>
}

class Hello extends React.Component {
    render(){
        return (
            <div>
                {hello()}
            </div>
        )
    }
}

root.render(<Hello/>);

// example 4

class Props extends React.Component {
    render() {
        return (
            <div>
                {this.props.sampleProp} {this.props.sampleProp2}
            </div>
        )
    }
}

root.render(<Props sampleProp="two plus two is" sampleProp2={2+2}/>);


// example 5

class MultipleComps extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Props sampleProp="two plus two is" sampleProp2={2+2}/>
            </div>
        )
    }
}

root.render(<MultipleComps/>);

// example 6

function range(){
    return Array.from({length:10}, (x,i) => <h2> {i} </h2>)
}

class List extends React.Component {
    render(){
        return (
            <div>
                <h1>Numbers ranked from smallest to largest</h1>
                {range()}
            </div>
        )
    }
}

root.render(<List/>);


// example 7

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time:0};
        this.tick = this.tick.bind(this);
        setInterval(this.tick, 1000);
    }

    tick() {
        return this.setState({time:this.state.time + 1});
    }

    render(){
        return (
            <div>
                <h1>Seconds since page is loaded:</h1>
                <h2>{this.state.time}</h2>
            </div>
        )
    }

}

root.render(<Timer/>);


// example 8

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {hidden:false}
        this.hide = this.hide.bind(this)
    }

    hide() {
        this.setState({hidden:true})
    }

    render(){
        if (!this.state.hidden)
            return (
                <div>
                    <button onMouseOver={this.hide}> Click Me </button>
                </div>
            );

        return (
            <div>haha</div>
        )
    }
}

root.render(<Button/>);
