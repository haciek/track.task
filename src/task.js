export class Task {
  constructor(content, urgency, status) {
    this.content = content;
    this.urgency = urgency;
    this.status = status;
  }
  getContent() { return this.content; }
  getUrgency() { return this.urgency; }
  getStatus() { return this.status; }

  setContent(content) { this.content = content; }
  setUrgency(urgency) { this.urgency = urgency; }
  setStatus(status) { this.status = status; }
}

