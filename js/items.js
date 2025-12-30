function createListItem(value, section) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.className = "deleteBtn";

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const key = section.dataset.key;
    const stored = loadItems(key).filter((item) => item !== value);
    saveItems(key, stored);

    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}

document.querySelectorAll(".section").forEach((section) => {
  const key = section.dataset.key;
  const list = section.querySelector(".itemList");
  const stored = JSON.parse(localStorage.getItem(key)) || [];

  stored.forEach((item) => {
    const li = createListItem(item, section);
    list.appendChild(li);
  });
});

window.createListItem = createListItem;
