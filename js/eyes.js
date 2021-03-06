function eyesFollow(event) {
  var eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 0;
    eye.style.transform = `rotate(${rotation}deg)`;
  });
}

function attachListener(listener) {
  document.querySelector('.todo').addEventListener('mousemove', listener);
}

attachListener(eyesFollow);
