let selectedAmount = 30;
let selectedPrice = "$0.31";

function select(el, amount, price) {
  document.querySelectorAll(".coin").forEach(c => c.classList.remove("active"));
  el.classList.add("active");

  selectedAmount = amount;
  selectedPrice = price;

  document.querySelector(".buy").innerText = "Buy for " + price;
}

// Fake user preview (like TikTok)
function findUser() {
  let input = document.getElementById("searchUser").value;
  let card = document.getElementById("userCard");

  if (input.length > 2) {
    card.classList.remove("hidden");
    card.innerHTML = `
      <h3>@${input}</h3>
      <p>Demo user preview</p>
    `;
  } else {
    card.classList.add("hidden");
  }
}

// Send coins (UI)
function sendToUser() {
  let username = document.getElementById("searchUser").value;

  if (!username) {
    alert("Enter username first");
    return;
  }

  alert("Sent " + selectedAmount + " coins to @" + username);
}
