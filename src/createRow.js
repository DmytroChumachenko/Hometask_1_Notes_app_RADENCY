import {
  CREATEEL
} from "./createElement.js";
import {
  changeRow
} from "./interactiveWithRow.js";
import { ROWS } from "./initialRows.js";
import { CLEARROWS } from "./clearRows.js";

export const CREATEROW = (options) => {

  const HEAD = document.querySelector('.notes-wrapper');
  let arrOfRows = options;

  for (let i = 0; i < arrOfRows.length; i++) {
    const ROWIMAGE = CREATEEL({
      tag: 'img',
      classes: 'row-img',
      src: arrOfRows[i].image
    });
    const ROWIMAGEWRAPPER = CREATEEL({
      tag: 'div',
      classes: ['img-wrapper', 'row-elem'],
    });

    const ROWNAME = CREATEEL({
      tag: 'span',
      textContent: arrOfRows[i].name,
      classes: ['row-name', 'row-elem']
    });
    const ROWDATE = CREATEEL({
      tag: 'span',
      textContent: arrOfRows[i].created,
      classes: 'row-elem'
    });
    const ROWCATEGORY = CREATEEL({
      tag: 'span',
      textContent: arrOfRows[i].category,
      classes: 'row-elem'
    })
    const ROWCONTENT = CREATEEL({
      tag: 'span',
      textContent: arrOfRows[i].content,
      classes: 'row-elem'
    });
    const ROWALLDATES = CREATEEL({
      tag: 'span',
      textContent: arrOfRows[i].dates,
      classes: 'row-elem'
    })
    const ROWICONS = CREATEEL({
      tag: 'div',
      classes: ['row-icons', 'row-elem']
    })

    let leng = arrOfRows[i].icons.length;
    let row = arrOfRows[i];
    for (let j = 0; j < leng; j++) {
      if (j == 0) {
        const ROWIMAGE = CREATEEL({
          tag: 'img',
          classes: ['icon', 'icon-edit'],
          src: row.icons[j]
        });
        ROWICONS.append(ROWIMAGE)
      }
      if (j == 1) {
        const ROWIMAGE = CREATEEL({
          tag: 'img',
          classes: ['icon', 'icon-archive'],
          src: row.icons[j]
        });
        ROWICONS.append(ROWIMAGE)
      }
      if (j == 2) {
        const ROWIMAGE = CREATEEL({
          tag: 'img',
          classes: ['icon', 'icon-delete'],
          src: row.icons[j]
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

  let arr = document.querySelectorAll('.row-wrapper');
  arr.forEach(row => {
    row.addEventListener('click', (event) => {
      console.log(event.target);
      if (event.target.classList.contains('icon-delete')) {
        const rowWrapper = event.target.closest('.row-wrapper');
        ROWS.splice(rowWrapper.dataset.id,1);
        console.log(ROWS);
        CLEARROWS();
        CREATEROW(ROWS);
        // changeRow(ROWS)
      }
    })
  })

}