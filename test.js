var Mock = require('mockjs')
// var data = Mock.mock({
//     'list|1-4':[{
//         'id|+1':2,
//         'name':'@WORD',
//         'first':'@FIRST'
//     }]
// })
var data = Mock.mock({
    'name|1-8':'zhou',
    'name2|4':'jun'
})

console.log(data)