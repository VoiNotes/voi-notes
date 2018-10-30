import React, { Component } from 'react';
import './Meeting.css';
import { ReactMic } from 'react-mic';



class Meeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            record: false
        }

    }

    startRecording = () => {
        this.setState({
            record: true
        });
    }

    stopRecording = () => {
        this.setState({
            record: false
        });
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }
    render() {
        return (
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081" />
                <button className={"btn btn-success"} onTouchTap={this.startRecording} type="button">Start</button>
                <button className={"btn btn-failed"} onTouchTap={this.stopRecording} type="button">Stop</button>
            </div>
        );
    }
}

export default Meeting;