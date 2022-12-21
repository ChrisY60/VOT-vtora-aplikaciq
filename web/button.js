var button = document.querySelector('button');
button.addEventListener('mouseover', function () {
  button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
  console.log("HOW DID YOU EVEN CLICK IT");
});