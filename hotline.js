// Heart icon system

const heartIcons = document.getElementsByClassName("heart-icon");
let heartCount = parseInt(document.getElementById("heart-count").innerText);

for(const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function (){
        heartCount++;
        document.getElementById("heart-count").innerText = heartCount;

    })
}


// Copy button system
const copyButtons = document.getElementsByClassName("copy-btn");
const numbers = document.getElementsByClassName("number");
let copyCount = parseInt(document.getElementById("copy-count").innerText);

for (let i = 0; i < copyButtons.length; i++) {
  const buttons = copyButtons[i];
  const number = numbers[i].innerText;

  buttons.addEventListener("click", function () {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Number copied ${number}`);
      })
      .catch((err) => {
        alert("Failed to copy text: ", err);
      });

    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  });
}



// Coin Collect System
let coinCount = parseInt(document.getElementById("coin-count").innerText);
const hotlineNumber = document.getElementsByClassName("number");
const callingBtn = document.getElementsByClassName("calling-btn");
const title = document.getElementsByClassName("service-title");
const clearBtn = document.getElementById("clear-btn");

for (let i = 0; i < callingBtn.length; i++) {
  const btn = callingBtn[i];
  const serviceName = title[i].innerText;
  const numbers = hotlineNumber[i].innerText;

  btn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("❌ You don't have enough coins to make a call!");
      return;
    }

    alert(`📞 Calling ${serviceName} ${numbers}`);

    coinCount -= 20;
    document.getElementById("coin-count").innerText = coinCount;

    // Call history
    const callTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    const parentCardContent = document.getElementById("parent-card");
    const cardContent = document.createElement("div");
    cardContent.classList =
      "max-w-md mx-auto mt-2 bg-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm";
    cardContent.innerHTML = `
      <div>
        <h2 class="font-semibold text-[18px]">${serviceName}</h2>
        <p class="text-gray-700 text-sm font-semibold">${numbers}</p>
      </div>

      <span class="text-gray-600 text-base">${callTime}</span>
    `;

    parentCardContent.appendChild(cardContent);
  });
}


//Remove Call History
clearBtn.addEventListener("click", function (){
    const card = document.getElementById("parent-card");
    card.innerText = "";
});