const worker = new Worker('./worker.js');
const sumButton = document.getElementById('calculate-sum');
const bgButton = document.getElementById('change-background');

bgButton.addEventListener('click', function () {
  if (document.body.style.backgroundColor === 'gray') {
    document.body.style.backgroundColor = 'lightgray';
  } else {
    document.body.style.backgroundColor = 'gray';
  }
});

sumButton.addEventListener('click', function () {
  worker.postMessage({ 'calculate-sum': true });
});

worker.onmessage = function (event) {
  alert('The sum is: ' + event.data);
};

