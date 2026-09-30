// Mobile menu

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}


// Demo results button

function showMessage() {

  const message = document.getElementById("message");

  message.innerHTML = `
    <div style="
      margin:25px auto;
      padding:20px;
      max-width:600px;
      background:#151e36;
      border-radius:10px;
      color:#ffd43b;
    ">
      More demo results will be added here.
      <br>
      <small style="color:#aaa;">
        This is sample data only.
      </small>
    </div>
  `;
}


// Contact form

function sendMessage(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("formMessage").innerHTML =
    "✅ धन्यवाद " + name + "! आपका demo message submit हो गया।";

  document.getElementById("formMessage").style.color = "#ffd43b";

  event.target.reset();
}