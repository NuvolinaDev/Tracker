function loadItems(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveItems(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
