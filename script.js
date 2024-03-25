const handleOnScroll = () => {
  let ele1 = document.getElementById("header");
  let ele2 = document.getElementById("top-btn");
  ele1.classList.toggle("sticky", scrollY > 10);
  ele2.classList.toggle("d-block", scrollY > 300);
};
const mytime = () => {
  const time = new Date();
  document.getElementById("seconds").innerText = time.getSeconds();
  document.getElementById("seconds2").innerText = time.getSeconds();
  document.getElementById("seconds3").innerText = time.getSeconds();
};
setInterval(mytime, 1000);
