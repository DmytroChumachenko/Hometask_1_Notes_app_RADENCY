import {
  CLEARROWS
} from "./clearRows.js";

import {
  CREATEMODALWINDOW,
  openModalWindow,
  closeModalWindow
} from "./modalWindow.js";


export let toListenROws = () => {
  let arrOfDivsRowWrapper = document.querySelectorAll('.row-wrapper');
  arrOfDivsRowWrapper.forEach(row => {
    row.addEventListener('click', (event) => {
      console.log(event.target);
      if (event.target.classList.contains('icon-delete')) {
        let arr = getArrOfObjects(arrOfDivsRowWrapper);
        console.log(arr);
     
      }
    })
  })
  // arrOfDivsRowWrapper.forEach(row => {
  //   row.addEventListener('click', (event) => {
  //     if (event.target.classList.contains('icon-delete')) {
  //       const divRowWrapper = event.target.closest('.row-wrapper');
  //       arrOfObjects.splice(divRowWrapper.dataset.id, 1);
  //       console.log(arrOfObjects);
  //       CLEARROWS();
  //       CREATEROW(arrOfObjects);
  //     }
  //   })
  // })
}

function getArrOfObjects(arr) {
  let newarr =[];
  arr.forEach(row => {
    const image = row.querySelector('.row-img').src;
    const name = row.querySelector('.row-name').textContent;
    const created = row.querySelectorAll('.row-elem')[1].textContent;
    const category = row.querySelectorAll('.row-elem')[2].textContent;
    const content = row.querySelectorAll('.row-elem')[3].textContent;
    const dates = row.querySelectorAll('.row-elem')[4].textContent;
    const icons = Array.from(row.querySelectorAll('.row-icons img')).map(img => img.src);
    const dataObject = {
      image,
      name,
      created,
      category,
      content,
      dates,
      icons,
    };
    newarr.push(dataObject);
  })
  return newarr;
}

// arrOfDivsRowWrappers.forEach(row => {
//   row.addEventListener('click', (event) => {
//     if (event.target.classList.contains('icon-delete')) {
//       const divRowWrapper = event.target.closest('.row-wrapper');
//       arrOfObjects.splice(divRowWrapper.dataset.id, 1);
//       console.log(arrOfObjects);
//       CLEARROWS();
//       CREATEROW(arrOfObjects);
//     }
//   })
// })


// const btnCreate = document.querySelector('.btn');
// btnCreate.addEventListener('click', () => {
//   CREATEMODALWINDOW();
//   openModalWindow(arrOfObjects);
//   const closeModalBtn = document.querySelector(".btn-close");
//   closeModalBtn.addEventListener("click", closeModalWindow);
// });