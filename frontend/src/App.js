import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { message: '' };
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(e) {
        alert("A name was submitted:" + JSON.stringify({ name: this.state.value }));
        fetch("/name", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: this.state.value }),
            }).then(res => res.json())
            .then(response => alert('Success:', JSON.stringify(response)))
            .catch(error => console.log('Error:', error));
    }


    componentDidMount() {
        console.log('componentDidMount');
        fetch("/name")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('Result');
                    this.setState({
                        message: result.message
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        error
                    });
                }
            )
    }


    render() {
        const { error, message } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else
            return (
                <div className="App">
                    <link
                     rel="stylesheet"
                     href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                     integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                     crossorigin="anonymous"/>
                    <p>`Message from server: ${message}`</p>
                    <Form id="formName" onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" name="name" onChange={this.handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                </div>
            );

    }
}

export default App;