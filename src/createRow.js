import {
  CREATEEL
} from "./createElement.js";


export const CREATEROW = (options) => {
  const HEAD = document.querySelector('.notes-wrapper');
  let arrOfRows = options;
    for(let i = 0; i < arrOfRows.length; i++) {
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
        classes:  'row-elem'
      });
      const ROWCATEGORY = CREATEEL({
        tag: 'span',
        textContent: arrOfRows[i].category,
        classes:  'row-elem'
      })
      const ROWCONTENT = CREATEEL({
        tag: 'span',
        textContent: arrOfRows[i].content,
        classes: 'row-elem'
      });
      const ROWALLDATES = CREATEEL({
        tag: 'span',
        textContent: arrOfRows[i].dates,
        classes:  'row-elem'
      })
      const ROWICONS = CREATEEL({
        tag: 'div',
        classes: ['row-icons', 'row-elem']
      })
     
      let leng = arrOfRows[i].icons.length;
      let row = arrOfRows[i];
      for(let i = 0; i < leng; i ++) {
        if(i ==0) {
          const ROWIMAGE = CREATEEL({
            tag: 'img',
            classes: ['icon', 'icon-edit'],
            src: arrOfRows[i].icons[i]
          });
          ROWICONS.append(ROWIMAGE)
        }
        if(i ==1) {
          const ROWIMAGE = CREATEEL({
            tag: 'img',
            classes: ['icon', 'icon-archive'],
            src: arrOfRows[i].icons[i]
          });
          ROWICONS.append(ROWIMAGE)
        }
        if(i ==2) {
          const ROWIMAGE = CREATEEL({
            tag: 'img',
            classes: ['icon', 'icon-delete'],
            src: row.icons[i]
          });
          ROWICONS.append(ROWIMAGE)
        }
        
      }
  
      let rowDiv = CREATEEL({
        tag: 'div',
        classes: 'row-wrapper',
        attributes: {
              'data-id':i
            },
      });
      ROWIMAGEWRAPPER.append(ROWIMAGE)
      rowDiv.append(ROWIMAGEWRAPPER,ROWNAME, ROWDATE,ROWCATEGORY,ROWCONTENT,ROWALLDATES,ROWICONS)
      HEAD.append(rowDiv);
    }
   
  
  
  
  
}