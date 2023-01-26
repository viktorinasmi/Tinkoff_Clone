//функция рандомного градиента

const gradients = [
  ['#433ca2', '#4A73C0'],
  ['#ea40ec', '#763dfb'],
  ['#fe8055', '#ed27a2'],
  ['#ffd53e', '#ff810a'],
  ['#7baaf9', '#2255ea'],
  ['#569e0c', '#72b00e'],
  ['#5f5d64', '#343237'],
  ['#31f3f6', '#0bccce'],
  ['#ff4270', '#fe0040'],
  ['#f641ae', '#c11b80'],
  ['#d74339', '#b9271d'],
  ['#ff0e01', '#fe5a00'],
];
export const getRandomGradient = () => {
  const min = 0;
  const max = gradients.length - 1;

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return gradients[randomNumber];
};
