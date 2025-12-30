// ===== DOM references =====
const modal = document.getElementById("modalOverlay");
const modalInput = document.getElementById("modalInput");
const modalError = document.getElementById("modalError");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

// ===== Modal helpers =====
function openModal(section) {
  activeSection = section;
  modal.classList.remove("hidden");
  resetModal();
}

function closeModal() {
  modal.classList.add("hidden");
}

function resetModal() {
  modalInput.value = "";
  hideError();
}

function showError(message) {
  modalError.textContent = message;
  modalError.classList.remove("hidden");
}

function hideError() {
  modalError.textContent = "";
  modalError.classList.add("hidden");
}

// ===== Event bindings =====

// Open modal
document.querySelectorAll(".addBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const section = e.target.closest(".section");
    if (section) {
      openModal(section);
    }
  });
});

// Close modal
cancelBtn.addEventListener("click", closeModal);

// Hide error while typing
modalInput.addEventListener("input", hideError);

// Confirm add
confirmBtn.addEventListener("click", () => {
  const value = modalInput.value.trim();
  if (!activeSection) {
    showError("Please select a section first.");
    return;
  }

  if (!value) {
    showError("Please enter a title.");
    return;
  }

  const key = activeSection.dataset.key;
  const list = activeSection.querySelector(".itemList");

  const stored = loadItems(key);

  const normalizedValue = value.toLowerCase();
  const isDuplicate = stored.some(
    (item) => item.toLowerCase() === normalizedValue
  );

  if (isDuplicate) {
    showError("This title already exists.");
    return;
  }

  const li = createListItem(value, activeSection);

  list.appendChild(li);

  stored.push(value);
  saveItems(key, stored);

  closeModal();
});
