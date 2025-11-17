const checkInput = document.getElementById("checkInp");
const navDown = document.getElementById("navdown");

checkInput.addEventListener("change", () => {
  // Remove animation classes first
  navDown.classList.remove(
    "animate__animated",
    "animate__slideInLeft",
    "animate__slideOutLeft"
  );

  // Force reflow
  navDown.offsetHeight;

  if (checkInput.checked) {
    // Show the element first, then animate
    navDown.style.visibility = "visible";
    navDown.style.opacity = "1";
    navDown.classList.add("animate__animated", "animate__slideInLeft");
  } else {
    // Animate out, then hide after animation completes
    navDown.classList.add("animate__animated", "animate__slideOutLeft");

    // Hide after animation completes (slideOut animations are typically 0.5s)
    setTimeout(() => {
      navDown.style.visibility = "hidden";
      navDown.style.opacity = "0";
    }, 1000);
  }
});

//
const TotalName = document.getElementById("MyName");
const MyProfession = document.getElementById("MyProfession");
const MyDiscription = document.getElementById("MyDiscription");

const MultiObserver = new IntersectionObserver(
  (enteries) => {
    if (enteries[0].isIntersecting) {
      TotalName.classList.add("animate__animated", "animate__backInDown");
      MyProfession.classList.add("animate__animated", "animate__slideInLeft");
      MyDiscription.classList.add("animate__animated", "animate__slideInRight");
    }
  },
  {
    threshold: 0.3,
  }
);
MultiObserver.observe(TotalName, MyProfession, MyDiscription);

const Client = document.getElementById("Client");
const SingleObserver = new IntersectionObserver(
  (enteries) => {
    if (enteries[0].isIntersecting) {
      Client.classList.add("animate__animated", "animate__slideInLeft");
    }
  },
  {
    threshold: 0.3,
  }
);
SingleObserver.observe(Client);

//
const slides = document.querySelectorAll(".slidebtn");

const BTNobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("animate__animated", "animate__slideInUp");

      BTNobserver.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);
slides.forEach((s) => BTNobserver.observe(s));

//
const PortfolioCard = document.querySelectorAll(".PortfolioCard");
PortfolioCard.forEach((el, i) => (el.dataset.idx = i));

const Cardobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const i = Number(entry.target.dataset.idx);
      const delay = i * 0.05;

      // use animationDelay (works with animate.css or custom animations)
      entry.target.style.animationDelay = `${delay}s`;
      entry.target.classList.add("animate__animated", "animate__slideInUp");

      // if you want it to only run once, uncomment:
      // observer.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);
PortfolioCard.forEach((pc) => Cardobserver.observe(pc));

//
const MiniCard = document.querySelectorAll(".MiniCard");
MiniCard.forEach((el, i) => (el.dataset.idx = i));
const MiniCardobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const i = Number(entry.target.dataset.idx);
      const delay = i * 0.03;

      entry.target.style.animationDelay = `${delay}s`;
      entry.target.classList.add("animate__animated", "animate__fadeIn");

      // if you want it to only run once, uncomment:
      // observer.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);
MiniCard.forEach((pc) => MiniCardobserver.observe(pc));

//
const MiniCoor = document.querySelectorAll(".MiniCoor");
MiniCoor.forEach((el, i) => (el.dataset.idx = i));
const MiniCoorobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const i = Number(entry.target.dataset.idx);
      const delay = i * 0.05;

      entry.target.style.animationDelay = `${delay}s`;
      entry.target.classList.add("animate__animated", "animate__slideInUp");

      // if you want it to only run once, uncomment:
      // observer.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);
MiniCoor.forEach((pc) => MiniCoorobserver.observe(pc));

// Contact info
// id for the body (Make sure this element exists in your HTML)
const PortPage = document.getElementById("Portpage");

// Helper function to create and show the toast
function showToast(message, isSuccess = true) {
  // 1. Remove any existing toast to prevent duplicates
  const existingToast = document.getElementById("toastAlert");
  if (existingToast) {
    existingToast.remove();
  }

  // Determine colors and icon based on success/failure
  const bgColor = isSuccess ? "bg-teal-100" : "bg-red-100";
  const textColor = isSuccess ? "text-green-800" : "text-red-800";
  const iconColor = isSuccess ? "text-green-600" : "text-red-600";
  const iconBg = isSuccess ? "bg-green-300" : "bg-red-300";
  const closeColor = isSuccess
    ? "text-green-900 hover:text-green-700"
    : "text-red-900 hover:text-red-700";
  const messLogo = isSuccess
    ? `<i class="fa-regular fa-envelope"></i>`
    : `<i class="fa-solid fa-exclamation"></i>`;

  // 2. Create the HTML string for the new toast
  const toastHTML = `
      <div
        id="toastAlert"
        class="flex items-center w-full max-w-sm py-5 px-6 ${textColor} ${bgColor} rounded-xl border border-gray-200 shadow-sm fixed bottom-5 right-5 z-50 transition-transform duration-300 transform translate-y-0 opacity-100"
      >
        <div class="inline-flex space-x-3 items-center">
          <span class="w-9 h-9 rounded-full ${iconBg} flex items-center justify-center">
            <div class="w-5 h-5 flex justify-center items-center ${iconColor}">
              ${messLogo}
            </div>
          </span>
          <p class="text-base font-medium">${message}</p>
        </div>
        <div class="ml-auto flex items-center space-x-3">
          <a
            type="button"
            class="inline-flex justify-center items-center ${closeColor} transition-all duration-150 cursor-pointer"
            id="closeToastButton"
          >
            <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
      </div>
    `;

  // 3. Insert the HTML directly into the body for better positioning
  document.body.insertAdjacentHTML("beforeend", toastHTML);
  const newToast = document.getElementById("toastAlert");

  // 4. Attach the close event listener dynamically
  document.getElementById("closeToastButton").addEventListener("click", () => {
    newToast.remove();
  });

  // 5. Optional: Auto-hide the toast after a few seconds
  setTimeout(() => {
    if (newToast) {
      newToast.remove();
    }
  }, 8000);
}

// Function to submit the contact form data to Telegram
async function submitContact(e) {
  e.preventDefault();

  // =======================================================
  // ⚠️ CRITICAL: Replace these placeholders with your actual values
  // =======================================================
  const BOT_TOKEN = "8344261820:AAGY7QAf-AH3d6hUDocf_W3Kox0VvOOJYu8";
  const CHAT_ID = "6292904061";
  // =======================================================

  const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const form = document.getElementById("Client");

  // Collect Form Data using IDs
  const name = form.querySelector("#clientName").value;
  const email = form.querySelector("#clientEmail").value;
  const projectType = form.querySelector("#projectType").value;
  const projectDetails = form.querySelector("#projectDetails").value;

  if (
    name === "" ||
    email === "" ||
    projectType === "" ||
    projectDetails === ""
  ) {
    return showToast("Please, fill the demanded infos !!!", false);
  }

  // Helper function for HTML escaping
  const escapeHTML = (text) => {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const safeName = escapeHTML(name);
  const safeEmail = escapeHTML(email);
  const safeType = escapeHTML(projectType);
  const safeDetails = escapeHTML(projectDetails);
  const timestamp = new Date().toLocaleString();

  // 4. Format the Message Text using HTML tags
  const messageText = `
    <b>--- 📧 New Portfolio Client Message 📧 ---</b>

    <b>Client Name:</b> ${safeName}
    <b>Email:</b> ${safeEmail}
    <b>Project Type:</b> ${safeType}

    <b>Project Details:</b>
    <pre>${safeDetails}</pre>

    <b>Sent At:</b> ${timestamp}
  `;

  // 5. Send the Request to Telegram
  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageText,
        parse_mode: "HTML",
      }),
    });

    const result = await response.json();

    if (response.ok && result.ok) {
      showToast("Message Sent Successfully!", true);
      form.reset();
    } else {
      console.error("Telegram API Error:", result);
      showToast("Failed to send message.", false);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    showToast("An error occurred while connecting to the server.", false);
  }
}
