function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function horizetal(own) {
  let frame = own.parentElement;
  frame.style.background = randomColor();
  frame.classList.add("hor");
  frame.innerHTML = `
            <div class="frame">
                <button onclick="horizetal(this)" type="button">H</button>
                <button onclick="vertial(this)" type="button">V</button>
                <button onclick="remove(this)" type="button">-</button>
            </div>
            <div class="frame">
                <button onclick="horizetal(this)" type="button">H</button>
                <button onclick="vertial(this)" type="button">V</button>
                <button onclick="remove(this)" type="button">-</button>
            </div>
    `;
}

function vertial(own) {
  let frame = own.parentElement;
  frame.style.background = randomColor();
  frame.classList.add("ver");
  frame.innerHTML = `
            <div class="frame">
                <button onclick="horizetal(this)" type="button">H</button>
                <button onclick="vertial(this)" type="button">V</button>
                <button onclick="remove(this)" type="button">-</button>
            </div>
            <div class="frame">
                <button onclick="horizetal(this)" type="button">H</button>
                <button onclick="vertial(this)" type="button">V</button>
                <button onclick="remove(this)" type="button">-</button>
            </div>
    `;
}

function remove(own) {
  let frame = own.parentElement;
  let parent = frame.parentElement;

  if (parent) {
    parent.remove();
  }
  const buttons = document.querySelectorAll("button");

  if (buttons.length === 0) {
    const frame = document.querySelector(".frame");
    frame.style.background = randomColor();
    frame.innerHTML = `
            <div class="frame">
                <button onclick="horizetal(this)" type="button">H</button>
                <button onclick="vertial(this)" type="button">V</button>
            </div>
    `;
  }
}
