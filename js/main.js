const createNavi = () => {
  let nav = document.createElement('div');
  nav.style = ''
}

const getWords = async () => {
  const response = await fetch("https://www.sozdikqor.org/api/query/all", {
    method: "post",
  });
  const words = await response.json();

  let table = document.querySelector("table");

  let thead = document.createElement("thead");
  let theadTr = document.createElement("tr");
  let theadArr = new Array(
    "#",
    "Кілт тізбегі",
    "Қазақша",
    "Русский",
    "English",
    "Türkçe",
    "简体中文"
  );
  for (let item of theadArr) {
    let th = document.createElement("th");
    th.innerText = item;
    theadTr.appendChild(th);
  }
  thead.appendChild(theadTr);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  let index = 1;
  for (let key in words) {
    let tr = document.createElement("tr");

    let tdIndex = document.createElement("td");
    tdIndex.innerText = index++;
    tr.appendChild(tdIndex);

    let td = document.createElement("td");
    td.innerText = key;
    tr.appendChild(td);

    for (let innerKey in words[key]) {
      let td = document.createElement("td");
      td.innerText = words[key][innerKey];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);

  pageLoading = document.querySelector('.pageLoading');
  pageLoading.style = 'display:none;';
};

document.addEventListener('DOMContentLoaded', getWords);


