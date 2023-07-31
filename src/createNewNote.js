
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
    let newObj = {
      image: image,
      name: name,
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
    })
    
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

