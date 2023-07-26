import {
  CREATEEL
} from "./createElement.js";


export const CREATEROW = (options) => {
  const HEAD = document.querySelector('.notes-wrapper');
  let arrOfRows = options.row;
  console.log(arrOfRows);
  arrOfRows.forEach(row => {
    const ROWIMAGE = CREATEEL({
      tag: 'img',
      classes: 'row-img',
      src: row.image
    });
    const ROWIMAGEWRAPPER = CREATEEL({
      tag: 'div',
      classes: ['img-wrapper', 'row-elem'],
    });
    
    const ROWNAME = CREATEEL({
      tag: 'span',
      textContent: row.name,
      classes: ['row-name', 'row-elem']
    });
    const ROWDATE = CREATEEL({
      tag: 'span',
      textContent: row.created,
      classes:  'row-elem'
    });
    const ROWCATEGORY = CREATEEL({
      tag: 'span',
      textContent: row.category,
      classes:  'row-elem'
    })
    const ROWCONTENT = CREATEEL({
      tag: 'span',
      textContent: row.content,
      classes: 'row-elem'
    });
    const ROWALLDATES = CREATEEL({
      tag: 'span',
      textContent: row.dates,
      classes:  'row-elem'
    })
    const ROWICONS = CREATEEL({
      tag: 'div',
      classes: ['row-icons', 'row-elem']
    })
    for(let i = 0; i < row.icons.length; i ++) {
      const ROWIMAGE = CREATEEL({
        tag: 'img',
        classes: 'icon',
        src: row.icons[i]
      });
      ROWICONS.append(ROWIMAGE)
    }

    let rowDiv = CREATEEL({
      tag: 'div',
      classes: 'row-wrapper'
    });
    ROWIMAGEWRAPPER.append(ROWIMAGE)
    rowDiv.append(ROWIMAGEWRAPPER,ROWNAME, ROWDATE,ROWCATEGORY,ROWCONTENT,ROWALLDATES,ROWICONS)
    HEAD.append(rowDiv);
  })
  
  
  
}