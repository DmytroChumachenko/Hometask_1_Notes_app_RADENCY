import {
  CREATEROW
} from "./createRow.js";
import {
  closeModalWindow
} from "./modalWindow.js";
export let createNote = (arr) => {
  const BTNSUBMIT = document.querySelector('.btn-submit');

  BTNSUBMIT.addEventListener("click", () => {
    let image;
    let name = document.querySelector('.input-name').value;
    let dateCreated = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    let category = document.querySelector('#selectCategory').value;
    let content = document.querySelector('.input-content').value;
    let dateTag = document.querySelector('.input-date').value;

    let date = getDate(dateTag);
    if (category === "Task") {
      image = '../image/task.png';
    }
    if (category === "Random Thought") {
      image = '../image/thinking-male.png';
    }
    if (category === "Idea") {
      image = '../image/idea.png';
    }
    let checkName = name.length !== 0 && typeof name === 'string' && isNaN(+name);
    let checkContent = content.length !== 0;
    let checkDate = dateTag.length !== 0;


    if (checkName && checkContent && checkDate) {
      let newObj = {
        image: image,
        name: name.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase()),
        created: dateCreated,
        category: category,
        content: content,
        dates: date,
        icons: ['../image/edit.png', '../image/archive.png', '../image/delete.svg']
      }

      arr.push(newObj);

      let arrOfRows = document.querySelectorAll('.row-wrapper');
      arrOfRows.forEach(row => {
        row.remove()
      });
      CREATEROW(arr);
      closeModalWindow();
    }
  })
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function getDate(tag) {
  const date = new Date(tag); // Convert the input value to a Date object
  const formattedDate = formatDate(date);
  return formattedDate;
}