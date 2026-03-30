const colorPicker = document.querySelector("#colorpicker");
const colorShow = document.querySelector("#color-show");
const colorCode = document.querySelector('#color-code');

colorPicker.addEventListener("input", () => {
  colorShow.style.backgroundColor = colorPicker.value;
  colorCode.innerHTML = colorPicker.value;
})

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const button = document.getElementById("button1");

button.addEventListener("click", () => {
  const color = getRandomColor();

  colorPicker.value = color;
  colorShow.style.backgroundColor = color;
  document.getElementById("color-code").textContent = color;
});

const btn = document.getElementById("hotbar");
const sidebar = document.getElementById("sidebar");
const xmark = document.getElementById("xmark");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

xmark.addEventListener("click", () => {
  sidebar.classList.toggle("active")
})

document.getElementById('button2').addEventListener('click', () => {
  const hex = document.getElementById('colorpicker').value.toUpperCase();

  navigator.clipboard.writeText(hex).then(() => {
    const btn = document.getElementById('button2');
    btn.textContent = 'Copied! ✓';
    setTimeout(() => {
      btn.innerHTML = 'Export Colors <i class="fa-regular fa-floppy-disk btn-text"></i>';
    }, 2000);
  });
});