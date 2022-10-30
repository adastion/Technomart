import noUiSlider from 'nouislider';

const slider = document.getElementById('range-slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 30000],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [30000],
    },
  });
}
