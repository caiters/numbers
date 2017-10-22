const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";
const RESET_TIMER = "RESET_TIMER";

const startTimer = () => ({
    type: START_TIMER
});

const stopTimer = () => ({
  type: STOP_TIMER
});

const resetTimer = () => ({
    type: RESET_TIMER
});
export { START_TIMER, STOP_TIMER, RESET_TIMER, startTimer, stopTimer, resetTimer };
