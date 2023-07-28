import {
  CREATEEL
} from "./createElement.js";

 const CREATEMODALWINDOW = () => {
  const BODY = document.querySelector('body')
  let section = CREATEEL({
    tag: 'section',
    classes: ['modal', 'hidden']
  });
  let div1 = CREATEEL({
    tag: 'div',
    classes: 'flex'
  });
  let btnX = CREATEEL({
    tag: 'button',
    classes: 'btn-close',
    textContent: '⨉'
  });

  let lblName = CREATEEL({
    tag: 'label',
    classes: 'label-name',
    attributes: {
      'for': 'labelName'
    },
    textContent: 'Write about name'
  });
  let inputName = CREATEEL({
    tag: 'input',
    classes: 'input-name',
    attributes: {
      'id': 'inputName',
      'type': 'text'
    }
  });

  let btnSubmit = CREATEEL({
    tag: 'button',
    classes: 'btn-submit',
    textContent: 'Submit'

  });
  let div2 = CREATEEL({
    tag: 'div',
    classes: ['overlay', 'hidden']
  });

  div1.append(btnX);
  section.append(div1, lblName, inputName, btnSubmit);
  BODY.append(section, div2);
}

let openModWin = () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModalBtn = document.querySelector(".btn-close");
  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  openModal();
  let closemodal = () => {
    modal.classList.add("hidden");
  overlay.classList.add("hidden");
  }
  closeModalBtn.addEventListener("click", closemodal)
}



export{CREATEMODALWINDOW,openModWin}