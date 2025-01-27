onmessage = function (event) {
  if (event.data['calculate-sum']) {
    console.log('Calculating sum');
    let sum = 0;

    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }

    postMessage(sum);
  }
};
