const router = require('koa-router')()
const todo = require('../controllers/todolist.js')
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/todos', async (ctx, next) => {
  ctx.body = await todo.getTodolist();
})

router.get('/addTodo', async (ctx, next) => {
    console.log(ctx)
    ctx.body = await todo.createTodo(ctx)
})

module.exports = router
