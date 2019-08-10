const db = require('../config/db.js'), 
      todoModel = '../schema/list.js'; // 引入todolist的表结构
const TodolistDb = db.Todolist; // 引入数据库

const Todolist = TodolistDb.import(todoModel); 

const getTodolist = async function (){ 
  const todolist = await Todolist.findAll({ // 查找全部的todolist
    attributes: ['id','content','complate'] // 只需返回这三个字段的结果即可
  });

  return todolist // 返回数据
}

const createTodolist = async function(data){ // 给某个用户创建一条todolist
  await Todolist.create({
    content: data.content,
    status: data.status 
  })
  return true
}

const removeTodolist = async function (id, userId) {
  const result = await Todolist.destroy({
    where: {
      id
    }
  })
  return result === 1 // 如果成功删除了记录，返回1，否则返回0
}

const updateTodolist = async function (id, userId, status) {
  const result = await Todolist.update(
    {
      status
    },
    {
      where: {
        id
      }
    }
  )
  return result[0] === 1 // 返回一个数组，更新成功的条目为1否则为0。由于只更新一个条目，所以只返回一个元素
}

module.exports = {
  getTodolist,
  createTodolist,
  removeTodolist,
  updateTodolist
}