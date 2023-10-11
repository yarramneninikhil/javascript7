const form = document.querySelector("#addForm");
const items = document.querySelector(".list-group");
const filter = document.querySelector("#filter");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val1 = e.target.item1.value;
  const val2 = e.target.item2.value;
  const ele1 = document.createElement("li");
  ele1.textContent = val1;
  const ele2 = document.createElement("li");
  ele2.textContent = val2;
  ele1.style.listStyleType = "none";
  ele1.style.border = "1px solid #d4d4d4";
  ele1.style.padding = "15px";
  ele2.style.display = "inline-block";
  ele2.style.marginLeft = "5px";
  ele1.append(ele2);
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.style.float = "right";
  ele1.append(edit);
  const del = document.createElement("button");
  del.textContent = "X";
  del.classList.add("btn-danger", "btn-sm", "float-right", "delete");
  ele1.append(del);
  items.append(ele1);
});
items.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      items.removeChild(li);
    }
  }
});
filter.addEventListener("keyup", (e) => {
  let val = e.target.value.toLowerCase();
  const allitems = document.querySelectorAll("li"); // Move this line here
  allitems.forEach((p) => {
    let text = p.firstChild.textContent.toLowerCase();
    if (text.indexOf(val) != -1) p.style.display = "block";
    else p.style.display = "none";
  });
});
