export const CLEARROWS = () => {
  let arr = document.querySelectorAll('.row-wrapper');
  arr.forEach(row => {
    row.remove();
  })
}