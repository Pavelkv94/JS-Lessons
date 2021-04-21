console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

let pr = new Promise((res, rej) => {
    setTimeout(() => {
        if (true) {
            res({ id: 1, name: "diana" })
        }
        else {
            rej({ a: 1, f: 0 })
        }

    }, 2000)

})
//todo .then(res=>{},err=>{})
// pr.then(res => {
//     console.log('res', res)
//     //throw new Error() --//* если появляется ошибка, она попадает в новый промис в качетсве rej
//     //@ts-ignore
//     return ({...res, gena: true}) //* если есть Return в колбэке, то создается новый ЗАРЕЗОЛВЕННЫЙ промис c аргументом res, к которому дальше по цепочке можжет применятся then или любой другой метод
// }, err => {
//     console.log(err)
//     return ("errror")
// }).then(res2=>{console.log("res2", res2)})

//todo .catch - то же самое что и err=>{}
//* обычный then(res=>{}).catch(err=>{})
pr.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


//* когда цепочка прервется на появившейся ошибке в любом месте
pr.then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

//todo .finally() - для добавления side-effects
pr.then(res => {
    console.log(res)
    return res
    //@ts-ignore
}).finally((a) => {
    console.log("finaly-", a)
}).then(res2 => { console.log(res2) })

// just a plug
export default () => { };