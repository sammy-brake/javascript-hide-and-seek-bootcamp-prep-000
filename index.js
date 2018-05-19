function getFirstSelector(selector) {
  let foundIt = document.querySelector(selector); 
  return foundIt; 
}

function nestedTarget() {
  let  unSure = document.querySelector('#nested .target');
  return unSure; 
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
  rankedLists[i].innerHTML = (i + n).toString();
}

return rankedLists;
}

function deepestChild() {
<<<<<<< HEAD
  let grandNode = document.querySelector('#grand-node div div div div');
  return grandNode;

=======
  let grandNode = document.getElementById('#grand-node div div div div')
  return grandNode
 
>>>>>>> 99a796b9eeb517d0b2aac817d1dcc0dd4f54cb87
  
  
  
}