let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let bgcode = document.querySelector(".copycode");

    let rgb1 = "#051973";
    let rgb2 = "#008793";

    const hexcode = () => {
      let hex = "0123456789abcdef";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const updateGradient = () => {
      document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
      bgcode.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    };

    const action1 = () => {
      rgb1 = hexcode();
      btn1.textContent = rgb1;
      btn1.style.backgroundColor = rgb1;
      updateGradient();
    };

    const action2 = () => {
      rgb2 = hexcode();
      btn2.textContent = rgb2;
      btn2.style.backgroundColor = rgb2;
      updateGradient();
    };

    btn1.addEventListener("click", action1);
    btn2.addEventListener("click", action2);

    bgcode.addEventListener("click", () => {
      navigator.clipboard.writeText(bgcode.innerText);
      alert(`✅ Copied: ${bgcode.innerText}`);
    });

    updateGradient();