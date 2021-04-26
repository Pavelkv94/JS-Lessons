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


// let pr = new Promise((res, rej) => {
//     setTimeout(() => {
//         if (true) {
//             res({id: 1234, name: 'Eugene'}); // 1 arg
//         } else {
//             rej({id: '', name: ''}); // 1 arg
//         }
//     }, 1000);
// })
//
// pr.then(res => {
//     console.log('res ', res)
//     throw new Error('cjbdj');
//     // @ts-ignore
//     return {...res, age: 50};
// }, err => {
//     console.log('err ', err)
//     //throw 10;
//     //return {id: 1234, name: 'Eugene', age: 50};
// }).then(res2 => {
//     console.log('res2 ', res2)
// }, err2 => {
//     console.log('err2 ', err2);
// }).then(res => {}, err => {})
//
// let a = 10;
//
// let pr = new Promise((res, rej) => {
//     setTimeout(() => { // not setTimeout
//         if (true) {
//             res({id: 1234, name: 'Eugene' }); // 1 arg
//         } else {
//             rej({id: '', name: ''}); // 1 arg
//         }
//     }, 1000);
// })
//
// pr
//     .then(res => {
//         console.log('res ', res)
//         return res;
//     })
//     //@ts-ignore
//     .then(res2 => {
//         console.log('res2 ', res2)
//     })
//
// setTimeout(() => console.log(10), 5000);

// let s = 10;
//
// async function test() {
//     let param = await x// some async request
// }
//
// console.log(test().catch());
//
// console.log(s);


// just a plug
export default ()=>{};