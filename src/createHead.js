import {
  CREATEEL
} from "./createElement.js";
export let createHead = () => {
  
  const BODY = document.querySelector('body');
  const NOTESWRAPPER = CREATEEL({
    tag: 'div',
    classes: 'notes-wrapper'
  });
  const NOTESIMG = CREATEEL({
    tag: 'div',
    classes: 'row-elem'
  });
  const NOTESHEAD = CREATEEL({
    tag: 'div',
    classes: 'notes-head'
  });
  const NOTESNAME = CREATEEL({
    tag: 'span',
    textContent: 'Name',
    classes: 'row-elem'
  });
  const NOTESDATE = CREATEEL({
    tag: 'span',
    textContent: 'Created',
    classes: 'row-elem'
  });
  const NOTESCATEGORY = CREATEEL({
    tag: 'span',
    textContent: 'Category',
    classes: 'row-elem'
  })
  const NOTESCONTENT = CREATEEL({
    tag: 'span',
    textContent: 'Content',
    classes: 'row-elem'
  });
  const NOTESALLDATES = CREATEEL({
    tag: 'span',
    textContent: 'Dates',
    classes: 'row-elem'
  });
  const NOTESICONS = CREATEEL({
    tag: 'div',
    classes: 'row-elem'
  });
  const BTNWRAPPER = CREATEEL({
    tag: 'div',
    classes: 'btn-wrapper'
  });
  const BTNCREATE = CREATEEL({
    tag: 'button',
    classes: 'btn',
    textContent: 'Create Notes'
  });
  BTNWRAPPER.append(BTNCREATE)
  NOTESHEAD.append(NOTESIMG,NOTESNAME, NOTESDATE, NOTESCATEGORY, NOTESCONTENT, NOTESALLDATES,NOTESICONS);
  NOTESWRAPPER.append(NOTESHEAD);
  BODY.append(NOTESWRAPPER,BTNWRAPPER);
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
}