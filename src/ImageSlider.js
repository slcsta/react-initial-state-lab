// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends React.Component {
    // we use the constructor to set the initial state
    constructor() {
        super();
        this.state = {
            currentSlideIndex: 0
        }
    }

    increment = () => {

        const newIndex = this.state.currentSlideIndex + 1;
        this.setState({
            currentSlideIndex: newIndex,
        });
    }; 
    
    render() {
        return ( 
        <div>
            <h4>I am on slide {this.state.currentSlideIndex}</h4>
        </div> 
        )
    }   
}


// initial state should have a property called currentSlideIndex that starts at 0
// It should only render text 'I am on slide <Current_Slide>' where <Current_Slide> is the value of this.state.currentSlideIndex

