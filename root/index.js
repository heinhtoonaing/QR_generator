var qrcode = new QRCode("qrcode", {
    colorDark: "#000",
    colorLight: "#fff",
  });
  
  const makeCode = () => {
    var Text = document.getElementById("text");
  
    if (!Text.value) {
      alert("Input a text");
      Text.focus();
      return;
    }
  
    qrcode.makeCode(Text.value);
  };
  
  makeCode();
  
  $("#text")
    .on("blur", function () {
      makeCode();
    })
    .on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });
  
  const laserEffect = document.querySelector('.laser');
  
  const randomizeLaserPosition = () => {
    const randomX = Math.random() * 100; // Random X position
    const randomY = Math.random() * 100; // Random Y position
    laserEffect.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
  };
  
  // Move laser effect every second
  setInterval(randomizeLaserPosition, 1000);
  