const TIMER_INTERVAL = 100;

const start = () => {
    var start = new Date().getTime(),
        time = 0,
        elapsed = '0.0';
        
    const instance = () => {
        time += 100;

        elapsed = Math.floor(time / 100) / 10;
        if (Math.round(elapsed) == elapsed) { elapsed += '.0'; }

        var diff = (new Date().getTime() - start) - time;
        window.setTimeout(instance, (100 - diff));
    }
    window.setTimeout(instance, 100);
    return start;
}

const stop = () => {
    //window.clearTimeout(instance);
}

const reset = () => {

}
const create = () => {
  const shuffled = shuffle(
    Array.from(new Array(NUMBER_OF_BOXES), (val, index) => index + 1)
  );
  const numbers = shuffled.map(n => ({
    number: n,
    selected: null
  }));

  const encoded = Buffer.from(shuffled).toString("base64");

  return {
    encoded,
    lastSelected: 0,
    numbers
  };
};

const startTimer = gameBoard => {
  const Timer = timer(0)(timerComponent);
  return Timer;
};

const initNada = () => {
  return {};
};

const selectNumber = (index, gameBoard) => {
  let lastSelected = gameBoard.lastSelected;

  const numbers = gameBoard.numbers.map((n, i) => {
    if (i === index) {
      // This is the number we are selecting!
      lastSelected = n.number;
      return {
        number: n.number,
        selected: true
      };
    }
    return Object.assign({}, n);
  });

  const isEndGame = (elem, index, array) => elem.selected;

  if (numbers.every(isEndGame)) {
    endGame();
  }

  return Object.assign({}, gameBoard, {
    lastSelected,
    numbers
  });
};

const endGame = gameboard => {
  // Do cool end game stuff
};

export { start, stop, reset };
