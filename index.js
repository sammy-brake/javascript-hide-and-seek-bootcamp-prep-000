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
  let grandNode = document.querySelector('#grand-node div div div div');
  return grandNode;

  
  
  
}