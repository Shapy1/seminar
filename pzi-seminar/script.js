import { books } from "./books.js";

const library = [];

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(function (section) {
    section.classList.add("hidden");
  });
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove("hidden");
}

function openPopup() {
  alert("Server Offline");
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], textarea'
  );
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const label = this.parentNode.querySelector("label");
      label.classList.toggle("has-text", this.value.trim() !== "");
    });
  });
});

window.onload = function () {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], textarea'
  );
  inputs.forEach(function (input) {
    input.value = "";
  });
};

// New stuff

const createElement = (type) => document.createElement(type);
const getElementById = (id) => document.getElementById(id);
const querySelector = (query) => document.querySelector(query);

const generateCategories = () => {
  const categories = books
    .map((book) => book.genre)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  const element = getElementById("categories-table");
  categories.forEach((category) => {
    const li = createElement("li");
    li.innerHTML = category;
    li.addEventListener("click", () => filterBooksByGenre(category));
    element.append(li);
  });
};

const addToLibrary = (book) => {
  if (!library.includes(book)) {
    library.push(book);
    alert(`Added ${book.name} to library`);
  }
  console.log(library);
};

const clearBestSellers = () => {
  const sellers = querySelector(".best-sellers");
  sellers.innerHTML = "";
};

const filterBooksByName = () => {
  const string = getElementById("search-bar").value;
  const filtered = books.filter((book) => book.name.includes(string));
  displayBooks(filtered);
};

const filterBooksByGenre = (genre) => {
  displayBooks(books.filter((book) => book.genre === genre));
};

const createBookDiv = (book) => {
  const div = createElement("div");
  const img = createElement("img");
  const p = createElement("p");

  img.src = book.poster;
  p.innerHTML = book.name;

  div.append(img);
  div.append(p);
  div.addEventListener("click", () => addToLibrary(book));
  return div;
};

const displayBooks = (books) => {
  clearBestSellers();
  const sellers = querySelector(".best-sellers");

  books.forEach((book) => {
    sellers.append(createBookDiv(book));
  });
};

getElementById("search-btn").addEventListener("click", filterBooksByName);

generateCategories();
