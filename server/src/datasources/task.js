const data = require('./data');

class TaskAPI {
  getTasks(listId) {
    return data.find(list => list.id === listId).tasks;
  }
}

module.exports = TaskAPI;
