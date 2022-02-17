require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('620488e36152d03030cff699').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((incomplete) => {
//     console.log(incomplete)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false })
    return count
}

deleteTaskAndCount('620488f42ab18c62686b7b93').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})