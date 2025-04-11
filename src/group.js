// import { Task } from "./task.js";

export class Group {
  constructor(label, tasks) {
    this.label = label;
    this.tasks = tasks;
  }

  getLabel() { return this.label; }
  getTasks() { return this.tasks; }

  setLabel(label) { this.label = label; }
  setTasks(tasks) { this.tasks = tasks; }

  addTask(task) { this.tasks.push(task); }
  deleteTask(task) { 
    const i = this.tasks.indexOf(task);
    if (i !== -1) 
      this.tasks.splice(i, 1);
  }

  getTaskByIndex(i) { return this.tasks[i]; }
  getTasksByUrgency(urgency) { 
    const tasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.getUrgency() === urgency)
        tasks.push(task);
    }
    return tasks;
  }

  getTasksByStatus(status) { 
    const tasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.getStatus() === status)
        tasks.push(task);
    }
    return tasks;
  }

}
