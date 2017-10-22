import React from 'react';
import ReactDom from 'react-dom';
import timer from 'react-timer-hoc';

const TIMER_DELAY = 10;

function timerComponent({ timer }) {
    return <span>{ timer.tick }</span>
}

export default (timer(TIMER_DELAY)(timerComponent))
