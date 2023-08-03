import {
  CREATEEL
} from "./createElement.js";


const CREATEMODALWINDOW = () => {
  const BODY = document.querySelector('body');
  //***************Creating 
  let section = CREATEEL({
    tag: 'section',
    classes: ['modal', 'hidden']
  });
  //*************** Button Closed
  let div1 = CREATEEL({
    tag: 'div',
    classes: 'flex'
  });
  let btnX = CREATEEL({
    tag: 'button',
    classes: 'btn-close',
    textContent: '⨉'
  });

  //**************Name
  let lblName = CREATEEL({
    tag: 'label',
    classes: 'label-name',
    attributes: {
      'for': 'labelName'
    },
    textContent: "Note's name :"
  });
  let inputName = CREATEEL({
    tag: 'input',
    classes: 'input-name',
    attributes: {
      'id': 'inputName',
      'type': 'text'
    }
  });
  let tipName = CREATEEL({
    tag: 'div',
    classes: 'tip',
    textContent: 'Please enter your name',
  })
  //*************Category
  let lblCategory = CREATEEL({
    tag: 'label',
    classes: 'label-category',
    attributes: {
      'for': 'selectCategory'
    },
    textContent: "Category :"
  });
  let selectCategory = CREATEEL({
    tag: 'select',
    attributes: {
      'id': 'selectCategory',
    }
  });
  let option1 = CREATEEL({
    tag: 'option',
    attributes: {
      'id': 'Task',
    },
    textContent: "Task"
  });
  let option2 = CREATEEL({
    tag: 'option',
    attributes: {
      'id': 'RandomThought',
    },
    textContent: "Random Thought"
  });
  let option3 = CREATEEL({
    tag: 'option',
    attributes: {
      'id': 'Idea',
    },
    textContent: "Idea"
  });
  //**************Content
  let lblContent = CREATEEL({
    tag: 'label',
    classes: 'label-content',
    attributes: {
      'for': 'labelContent'
    },
    textContent: "Note's content :"
  });
  let inputContent = CREATEEL({
    tag: 'input',
    classes: 'input-content',
    attributes: {
      'id': 'inputContent',
      'type': 'text'
    }
  });

  //************Date
  let lblDate = CREATEEL({
    tag: 'label',
    classes: 'label-date',
    attributes: {
      'for': 'labelDate'
    },
    textContent: "Change Note's Date :"
  });
  let inputDate = CREATEEL({
    tag: 'input',
    classes: 'input-date',
    attributes: {
      'id': 'inputDate',
      'type': 'date',
      'required': 'true'
    }
  });
  //***************** Button Submit
  let btnSubmit = CREATEEL({
    tag: 'button',
    classes: 'btn-submit',
    textContent: 'Submit'

  });
  let div2 = CREATEEL({
    tag: 'div',
    classes: ['overlay', 'hidden']
  });

  //******************** Appending
  selectCategory.append(option1, option2, option3)
  div1.append(btnX);
  section.append(div1, lblName, inputName, tipName, lblCategory, selectCategory,
    lblContent, inputContent, lblDate, inputDate, btnSubmit);
  BODY.append(section, div2);
  
}

let openModalWindow = () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const input = document.querySelector('.input-name');
  const tip = document.querySelector('.tip');
  input.addEventListener('focus', showTooltip(tip));
  input.addEventListener('blur', hideTooltip(tip));
}

let closeModalWindow = () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector('.modal').remove();
  document.querySelector('.overlay').remove();
}



function showTooltip(el) {
  el.style.visibility = 'visible';
}

// Function to hide the tooltip
function hideTooltip(el) {
  el.style.visibility = 'hidden';
}

export {
  CREATEMODALWINDOW,
  openModalWindow,
  closeModalWindow
}