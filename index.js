function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const allDivs = document.querySelectorAll('main div');
  let arr = [];

  for ( let i = 0; i < allDivs.length; i++) {
    const div = allDivs[i].querySelectorAll('div')
    if (div.length === 0) {
      arr.push(allDivs[i])
    }
  }
  return arr.pop();
}

function increaseRankBy(n) {
  const rankLis = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < rankLis.length; i++) {
    rankLis[i].textContent = parseInt(rankLis[i].textContent) + n
  }
}
