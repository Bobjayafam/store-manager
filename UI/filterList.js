const search = () => {
  const input = document.querySelector("#input");
  const filter = input.value.toLowerCase();
  const table = document.querySelector("table");
  const tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

input.addEventListener("keyup", search);
