import '../libs/nouislider/nouislider.min.js';

const slider = document.getElementById('range-slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [1500, 30000],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [35000],
    },
  });

  const inputOne = document.getElementById('input01');
  const inputTwo = document.getElementById('input02');
  const inputs = [inputOne, inputTwo];
  
  slider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });
  
  const setSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  };
  
  inputs.forEach((item, index) => {
    item.addEventListener('change', (e) => {
      setSlider(index, e.currentTarget.value);
    });
  });
}

