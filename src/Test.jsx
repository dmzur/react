import React from "react";

export class Form extends React.Component {
    state = {
        count: 1,
        name: 'DM'
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
    }
    render() {
        return <form>
            <p>Count: {this.state.count}</p>
            <button type="button" onClick={this.handleClick}>Click</button>
            <hr />
            <form onSubmit={this.handleSubmit}>
                <p>Name: {this.state.name}</p>
                <input type="text"  onChange={this.handleChangeName} />
                <button>change</button>
            </form>
        </form>
    }
}