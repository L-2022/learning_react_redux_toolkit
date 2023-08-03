// import "../App";
// import { useState, useEffect } from "react";

// function Timer({ start, getTimeAll }) {

//     const [carrentSecond, setCarrentSecond] = useState(0);
//     const [carrentMinutes, setCarrentMinutes] = useState(0);
//     const [carrentHours, setCarrentHours] = useState(0);

//     const calcSeconds = (Second) => {
//         if (Second > 59) {
//           setCarrentSecond(0);
//         }
//         if (carrentMinutes > 59) {
//           setCarrentMinutes(0);
//         }
//         if (carrentHours > 59) {
//           setCarrentHours(0);
//         }
//       };
//       const addZero = (value, quontiti = 10) => {
//         return value < quontiti ? "0" + value : value;
//       };

//     useEffect(() => {
//         if (start) {
//           setTimeout(() => setCarrentSecond(carrentSecond + 1), 1000); // ms
//           setTimeout(() => setCarrentMinutes(carrentMinutes + 1), 60000);
//           setTimeout(() => setCarrentHours(carrentHours + 1), 6000000);
//           setTimeout(() => calcSeconds(carrentSecond), 1000); // ms
//           setTimeout(() => getTimeAll(carrentSecond, carrentHours, carrentMinutes), 1000); // ms
//         }
//       });

//   return (
//     <div>
//       <h1>+ {time} +</h1>
//     </div>
//   );
// }

// export default Timer;

// import { useState, useEffect } from "react";
// const CounterState = () => {
//     const [count, setCount] = useState(0)

//     return (
//       <>
//         <p>Значение счетчика: {count}.</p>
//         <button onClick={() => setCount(0)}>Сбросить</button>
//         <button onClick={() => setCount((prevVal) => prevVal + 1)}>
//           Увеличить (+)
//         </button>
//         <button onClick={() => setCount((prevVal) => prevVal - 1)}>
//           Уменьшить (-)
//         </button>
//       </>
//     )
//   }

// function quickSort(arr) {
//     if (arr.length < 2) return arr;

//     const middle = arr[~~(arr.length / 2)];

//     let left = [];
//     let right = [];

//     for (const i of arr) {
//       if (i < middle) {
//         left.push(i);
//       } else if (i > middle) {
//         right.push(i);
//       }
//     }

//     left = quickSort(left);
//     right = quickSort(right);

//     return [...left, middle, ...right];
//   }

//   console.log(quickSort([1,89,2,3,4, 5489,5,6]))

// const hasDuplicates = function (num) {
//     //loop the list, our O(n) op
//     for (let i = 0; i < nums.length; i++) {
//         const thisNum = nums[i];
//         //loop the list again, the O(n^2) op
//         for (let j = 0; j < nums.length; j++) {
//             //make sure we're not checking same number
//             if (j !== i) {
//                 const otherNum = nums[j];
//                 //if there's an equal value, return
//                 if (otherNum === thisNum) return true;
//                 // if (nums[j] === nums[i]) return true;
//             }
//         }
//     }
//     //if we're here, no dups
//     return false;
// }
// const nums = [1, 2, 3, 4, 5, 5];
// // ;//true
// console.log(hasDuplicates(nums))

// const genUUID = () =>
//   ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
//     (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
//   )

// console.log(genUUID())
// 3b472cc4-8370-4469-8c12-428e7da35063

// const bin = {
//   value: 10,
//   left: {
//     value: 10,
//     right: {
//       value: 4,
//     },
//     right: {
//       value: 5,
//       left: {
//         value: 10,
//         right: {
//           value: 4,
//         },
//         right: {
//           value: 5,
//         },
//       },
//     },
//   },
//   right: {
//     value: 5,
//     left: {
//       value: 0,
//       right: {
//         value: 4,
//       },
//       right: {
//         value: 5,
//         left: {
//           value: 11,
//           right: {
//             value: 4,
//           },
//           right: {
//             value: 5,
//           },
//         },
//       },
//     },
//   },
// };
// let count = 0;
// function sumTree(tree) {
//   if (tree.left) {
//     count += tree.value;
//     sumTree(tree.left);
//   }
//   if (tree.right) {
//     count += tree.value;
//     sumTree(tree.right);
//   }
//   return count;
// }
// console.log(sumTree(bin));
// console.log(bin);
//// анаграми
// const isAnagram = (str, str2) => {
//   const reverse = str2.split("").reverse().join("  ");
//   console.log(str2.split(""));
//   console.log(str2.split("").reverse());
//   console.log(str2.split("").reverse().join(""));
//   return str === reverse;
// };

// console.log(isAnagram("qwer", "rewq"));

// {/*<div className="listTimer">
// {listTimers.map((el, index) => (
//   <p>
//     {index} : {el}
//      <button onClick={deleteTimer(key)}>Delete</button>
//   </p>
// ))}
// </div>*/}

// import { useState, useEffect } from "react";

// const App = () => {
//   const [timerStart, setTimerStart] = useState(Date.now());
//   const [carrentSecond, setCarrentSecond] = useState(0);
//   const [carrentMinutes, setCarrentMinutes] = useState(0);
//   const [carrentHours, setCarrentHours] = useState(0);
//   const [start, setStart]  = useState(false);
//   // let date = new Date();
//   // let time =
//   //   date.getHours() +
//   //   ":" +
//   //   date.getMinutes() +
//   //   ":" +
//   //   (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());

//   const calcSeconds = (timerStart) => {
//     const Second = ((Date.now() - timerStart) / 1000).toFixed(0);
//     if (Second > 59) {
//       setTimerStart(Date.now());
//       setCarrentMinutes(carrentMinutes + 1);

//       if (carrentMinutes > 59) {
//         setCarrentHours(carrentHours + 1);
//         setCarrentMinutes(0);
//       } else {
//         setCarrentMinutes(carrentMinutes + 1);
//       }
//     } else {
//       setCarrentSecond(Second);
//     }
//   };

//   const addZero = (value, quontiti = 10) => {
//     return value < quontiti ? "0" + value : value;
//   };

//   const startTimer = () => {
//     setTimerStart(Date.now())
//     setStart(true)
//   }
//   const stopTimer = () => {
//     setTimerStart(Date.now())
//     setStart(false)
//   }
//   const nextTimer = () => {
//     setTimerStart(Date.now())
//     setStart(false)
//   }

//   useEffect(() => {
//     if (start) {
//     setTimeout(() => calcSeconds(timerStart), 1000);}

//   });

//   return (
//     <div>
//       <p>
//         {addZero(carrentHours)}:{addZero(carrentMinutes)}:{addZero(carrentSecond)}
//       </p>
//       <button onClick={startTimer}>Strt Timer</button>
//        <button className="background-color: #112d49" onClick={stopTimer}>Stop Timer</button>
//        <button className="background-color: #112d49" onClick={nextTimer}>next Timer</button>

//     </div>
//   );
// };

// export default App;
