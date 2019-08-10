const todolist = require('../models/todolist.js');

const getTodolist = async function (ctx){  // 获取全部todolist
  const result = await todolist.getTodolist();
  return {
      success: true,
      data: result
  }
}

const createTodo = async function (ctx){ // 给某个用户创建一条todolist
  const data = ctx.request.body
  console.log(data);
  const success = await todolist.createTodolist(data);
  return {
      success: true
  }
}

const removeTodolist = async function (ctx){ // 删除一条todolist
  const id = ctx.params.id;
  const success = await todolist.removeTolist(id);

  ctx.body = {
      success
  }
}

const updateTodolist = async function (ctx) {
    const id = ctx.params.id
    let status = ctx.params.status
    status === '0' ?status = true : status = false;
    const success = await todolist.updateTodolist(id, status);
    ctx.body = {
        success
    }
}

module.exports = {
  getTodolist,
  createTodo,
  removeTodolist,
  updateTodolist
}