import { Task } from "./src/task.js";
import { Group } from "./src/group.js";

document.querySelector('.create-group').addEventListener('click', () => {
  create_group_popup();
});

document.querySelector('.select-group').addEventListener('click', () => {

  select_group_popup();
});

document.querySelector('.delete-group').addEventListener('click', () => {
  delete_group_popup();
});
document.querySelector('#create-group-popup button').addEventListener('click', () => {
  create_group();
});

document.querySelector('#select-group-popup button').addEventListener('click', () => {
  select_group();
});

document.querySelector('#delete-group-popup button').addEventListener('click', () => {
  delete_group();
});

document.querySelector('#test').addEventListener('click', () => {
  renderTaskPage();
});


var tasks = [new Task("test", 1, true), new Task("test1", 2, false), new Task("test2", 0, false)];
var groups = [new Group("work", tasks)];

var data = {
  groups: groups,
  current: groups[0],
};
var groups = {};
var selected_group = null;

function load_from_cookies() {}

function toggle_visibility_by_id(id) {
  const popup = document.getElementById(id);
  popup.style.visibility = popup.style.visibility === "hidden" ? "visible" : "hidden";
}

function get_selected_by_id(id) {

}

function update_group_list() {
  const lists = document.getElementsByClassName('group-list');
  for (let i = 0; i < lists.length; i++) {
    while (lists[i].firstChild)
    lists[i].removeChild(lists[i].firstChild)
  }

  for (let i = 0; i < lists.length; i++) {
    for (const key in groups) {
      const new_option = document.createElement('option');
      new_option.value = key;
      new_option.text = key;

      lists[i].appendChild(new_option)
    }
  }

}

function create_group_popup() {
  toggle_visibility_by_id("create-group-popup");
  // toggle_visibility_by_id("overlay");
}

function delete_group_popup() {
  update_group_list();
  toggle_visibility_by_id("delete-group-popup");
  // toggle_visibility_by_id("overlay");
}

function select_group_popup() {
  update_group_list();
  toggle_visibility_by_id("select-group-popup");
  // toggle_visibility_by_id("overlay");

}
function create_group() {
  const input = document.getElementById("create-group-name");
  const group_name = input.value;
  input.value = "";

  if (groups[group_name]) {
    alert("Group Exists");
    return;
  } else {
    groups[group_name] = [];
  }
  toggle_visibility_by_id("create-group-popup");
  // toggle_visibility_by_id("overlay");
  console.log(groups)
  console.log(group_name)
}

function delete_group() {
  toggle_visibility_by_id("delete-group-popup");
  // toggle_visibility_by_id("overlay");
}

function select_group() {
  toggle_visibility_by_id("select-group-popup");
  // toggle_visibility_by_id("overlay");
  const selected = document.querySelector("#select-list").value;
  const curr_group_tag = document.querySelector(".current-group").firstElementChild;
  curr_group_tag.textContent = selected;
  selected_group = selected
}

function renderTaskPage() {
  const taskPage = document.querySelector(".taskpage");
  const tasks = data.current.getTasks();
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskElement = document.createElement("div", {"class":"task", "id":`${i}`});
    const statusElement = document.createElement("input", {"class":"status"});
    statusElement.type = 'checkbox';
    const urgencyElement = document.createElement("div", {"class":"urgency"});
    const contentElement = document.createElement("div", {"class":"content"});

    contentElement.textContent = task.getContent();
    urgencyElement.textContent = task.getUrgency();
    statusElement.checked = task.getStatus();

    taskElement.appendChild(statusElement);
    taskElement.appendChild(urgencyElement);
    taskElement.appendChild(contentElement);

    taskPage.appendChild(taskElement);
  }

}
