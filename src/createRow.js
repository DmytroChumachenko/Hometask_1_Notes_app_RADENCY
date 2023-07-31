import {
  CREATEEL
} from "./createElement.js";

import {
  CLEARROWS
} from "./clearRows.js";

import {
  CREATEMODALWINDOW,
  openModalWindow,
  closeModalWindow
} from "./modalWindow.js";


export const CREATEROW = (arrOfObjects) => {

  const HEAD = document.querySelector('.notes-wrapper');

  for (let i = 0; i < arrOfObjects.length; i++) {
    const ROWIMAGE = CREATEEL({
      tag: 'img',
      classes: 'row-img',
      src: arrOfObjects[i].image
    });
    const ROWIMAGEWRAPPER = CREATEEL({
      tag: 'div',
      classes: ['img-wrapper', 'row-elem'],
    });
    const ROWNAME = CREATEEL({
      tag: 'span',
      textContent: arrOfObjects[i].name,
      classes: ['row-name', 'row-elem']
    });
    const ROWDATE = CREATEEL({
      tag: 'span',
      textContent: arrOfObjects[i].created,
      classes: 'row-elem'
    });
    const ROWCATEGORY = CREATEEL({
      tag: 'span',
      textContent: arrOfObjects[i].category,
      classes: 'row-elem'
    })
    const ROWCONTENT = CREATEEL({
      tag: 'span',
      textContent: arrOfObjects[i].content,
      classes: 'row-elem'
    });
    const ROWALLDATES = CREATEEL({
      tag: 'span',
      textContent: arrOfObjects[i].dates,
      classes: 'row-elem'
    })
    const ROWICONS = CREATEEL({
      tag: 'div',
      classes: ['row-icons', 'row-elem']
    })

    let iconsLength = arrOfObjects[i].icons.length;

    let rowAsObj = arrOfObjects[i];

    for (let j = 0; j < iconsLength; j++) {
      if (j == 0) {
        const ROWIMAGE = CREATEEL({
          tag: 'img',
          classes: ['icon', 'icon-edit'],
          src: rowAsObj.icons[j]
        });
        ROWICONS.append(ROWIMAGE)
      }
      if (j == 1) {
        const ROWIMAGE = CREATEEL({
          tag: 'img',
          classes: ['icon', 'icon-archive'],
          src: rowAsObj.icons[j]
        });
        ROWICONS.append(ROWIMAGE)
      }
      if (j == 2) {
        const ROWIMAGE = CREATEEL({
          tag: 'img',
          classes: ['icon', 'icon-delete'],
          src: rowAsObj.icons[j]
        });
        ROWICONS.append(ROWIMAGE);
      }
    }

    let rowDiv = CREATEEL({
      tag: 'div',
      classes: 'row-wrapper',
      attributes: {
        'data-id': i
      },
    });

    ROWIMAGEWRAPPER.append(ROWIMAGE);
    rowDiv.append(ROWIMAGEWRAPPER, ROWNAME, ROWDATE, ROWCATEGORY, ROWCONTENT, ROWALLDATES, ROWICONS);
    HEAD.append(rowDiv);
  }

  let arrOfDivsRowWrappers = document.querySelectorAll('.row-wrapper');

  arrOfDivsRowWrappers.forEach(row => {
    row.addEventListener('click', (event) => {
      if (event.target.classList.contains('icon-delete')) {
        const divRowWrapper = event.target.closest('.row-wrapper');
        arrOfObjects.splice(divRowWrapper.dataset.id, 1);
        console.log(arrOfObjects);
        CLEARROWS();
        CREATEROW(arrOfObjects);
      }
    })
  })


  const btnCreate = document.querySelector('.btn');
  btnCreate.addEventListener('click', () => {
    CREATEMODALWINDOW();
    openModalWindow(arrOfObjects);
    const closeModalBtn = document.querySelector(".btn-close");
    closeModalBtn.addEventListener("click", closeModalWindow);
  });


}