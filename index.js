import {
  CREATEEL
} from "./src/createElement.js";
document.addEventListener("DOMContentLoaded", () => {
  const BODY = document.querySelector('body');
  const NOTESWRAPPER = CREATEEL({
    tag: 'div',
    classes: 'notes-wrapper'
  });
  const NOTESHEAD = CREATEEL({
    tag: 'div',
    classes: 'notes-head'
  });
  const NOTESNAME = CREATEEL({
    tag: 'span',
    textContent: 'Name'
  });
  const NOTESDATE = CREATEEL({
    tag: 'span',
    textContent: 'Created'
  });
  const NOTESCATEGORY = CREATEEL({
    tag: 'span',
    textContent: 'Category'
  })
  const NOTESCONTENT = CREATEEL({
    tag: 'span',
    textContent: 'Content'
  });
  const NOTESALLDATES = CREATEEL({
    tag: 'span',
    textContent: 'Dates'
  })
  NOTESHEAD.append(NOTESNAME,NOTESDATE,NOTESCATEGORY,NOTESCONTENT,NOTESALLDATES);
  NOTESWRAPPER.append(NOTESHEAD);
  BODY.append(NOTESWRAPPER);
  // const myElement = createElement({
  //   tag: 'div',
  //   classes: ['my-class'],
  //   attributes: {
  //     'data-attribute': 'my-value',
  //     'aria-label': 'My label'
  //   },
  //   textContent: 'Hello, world!',
  //   html: '<p>This is some HTML content</p>'
  // });
})