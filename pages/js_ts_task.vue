<template>
  <div class="pageContainer">
    <h1>Задачи JS TS</h1>
    <div class="task-container">
      <div class="task-column">
        <details class="taskItem">
          <summary class="btnAccordion">Уникальность всех строк и символов в строке</summary>
          <pre>
            const isUnique = (str:string) => {
              return str.split('').length === new Set(str).size;
            }
            console.log(isUnique('abcdef'))
          </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Разворачивание вложенных массивов</summary>
          <div class="taskItem__var-wrap">
            <div class="taskItem__var">
              <h5>Вариант 1</h5>
              <pre>
let test = (arr:any) => {
  let result = [];
  let arrSort = arr;
  while (arrSort.length){
    const elem = arrSort.pop();
    if(Array.isArray(elem)){
      arrSort.push(...elem);
    }else{
      result.unshift(elem);
    }
  }
  return result;
}
console.log(test([1,[[[[[[[0]]]]]]], [2,10, [3, 4], 5], 6,[7,9]]]))
              </pre>
            </div>
            <div class="taskItem__var">
              <h5>Вариант 2</h5>
              <pre>
const flatter = (arr:any) => {
  return arr.flat(Infinity)
}
console.log(flatter([[1,2,3],[4,[5]]]))
              </pre>

            </div>
          </div>

        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Удаление всех повторяющихся значений в строке</summary>
          <pre>
              const removeDupes = (str: string) => {
                let result:string = '';
                new Set(str).forEach((el)=>{
                  result = result + el;
                })
                return result;
              }
              console.log(removeDupes('abcdefe'))
            </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Какая строка встречается чаще всего</summary>
          <pre>
            const highestFrequency = (arr:any) => {
              const sortArr:any = {}
              let result:any = ''
              let num:number = 0;
              arr.forEach((el:string)=>{
                if(sortArr[el]){
                  ++sortArr[el]
                }else{
                  sortArr[el] = 1
                }
              })
              for(let item in sortArr){
                if(sortArr[item] > num){
                  num = sortArr[item];
                  result = item
                }
              }
              return result;
            }
            console.log(highestFrequency(['abc','cde','pre','bbb','bbb','abc','bbb','pre','pre','pre','pre']))
      </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Напишите функцию flattenObject(obj), которая принимает в качестве
            аргумента вложенный объект obj и возвращает новый объект,
            в котором все свойства объекта obj "разглажены"
            (преобразованы в одноуровневую структуру), с использованием точечной нотации
            для представления иерархии свойств.</summary>
          <pre>
            const ObjTest = {
              a:{
                b:2,
                c:{
                  c1:1,
                  c2:2
                },
                d:{
                  d1:1,
                  d2:2
                }
              },
              e:1,
              f:{
                f2:{
                  f1:3,
                  f2:2
                }
              }
            }
            const flattenObjectTest = (tempObj:any) => {
              const result = {};
              const resTest = [{tempObj,prefix:''}]
              while (resTest.length > 0){
                const { tempObj, prefix } = resTest.pop();
                for (let key in tempObj) {
                  const value = tempObj[key];
                  const newKey = prefix + key;
                  if (typeof value === 'object' && value !== null) {
                    resTest.push({ tempObj: value, prefix: newKey + '.' });
                  } else {
                    result[newKey] = value;
                  }
                }
              }
              return result;
            }
            console.log(flattenObjectTest(ObjTest))
          </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Преобразовать строку в объект, разделяя свойства по точке.</summary>
          <pre>
            const splitStringJson = ( val:string ) =>{
              let valSplit = val.split('.');
              return valSplit.reduceRight((nextOb:any,prevOb:any) => {
                return{[prevOb]:nextOb}
              })
            }
            console.log(splitStringJson('one.two.three.four.five'))
          </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Удалить дубликаты</summary>
          <pre>
            const array = [1,2,3,5,9,1,2,8];
            const removeDublicates = (arr) => {
              const result = {};
              arr.forEach((item)=>{
                if(!result[item]){
                  result[item] = item;
                }
              })
              return Object.values(result)
            }
            console.log(removeDublicates(array))
          </pre>
        </details>
      </div>
      <div class="task-column">
        <details class="taskItem">
          <summary class="btnAccordion">Повёрнута ли строка Анаграмма</summary>
          <pre>
        const isStringRotated = (str1:string,str2:string) => {
          if(str1.length !== str2.length){
            return false;
          }else{
            let result:boolean = false;
            let mapCollection1 = str1.toLowerCase().split('').sort();
            let mapCollection2 = str2.toLowerCase().split('').sort();
            for(let i=0;i<=mapCollection1.length;i++){
              if(mapCollection1[i] === mapCollection2[i]){
                result = true
              }else{
                result = false
                return false
              }
            }
            return result
          }
        }
        console.log(isStringRotated('javascript','tpIrcsavaj'))
      </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Фибоначи</summary>
          <pre>
        const fibonacci = (numberStart:number) => {
          let start:number = 0,
              next:number = 1,
              result:any = []
          for(let i:number = 1;i < numberStart;i++){
            let nextStep = start+next;
            start = next
            next = nextStep
            result.push(next);
          }
          return result;
        }
        console.log(fibonacci(10))
      </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Необходимо обработать массив таким образом, чтобы распределить людей по группам городов</summary>
          <pre>
        const people = [
          {
            name: 'Alex',
            city: 'Moscow',
          },
          {
            name: 'Ivan',
            city: 'Moscow',
          },
          {
            name: 'Joe',
            city: 'New York'
          },
          {
            name: 'Johan',
            city: 'Berlin'
          },
        ]
        const groupByCity = (array:any) => {
          const result:any = {};
          array.forEach((item:any) => {
            if(!result[item.city]){
              result[item.city] = [item.name]
            }else{
              result[item.city].push(item.name)
            }
          })
          return result;
        }
        console.log(groupByCity(people))
      </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Объединение интервалов в массиве</summary>
          <pre>
          const merge = (intervals:any) => {
            if(intervals < 2){
              return intervals;
            }
            intervals.sort((a:any,b:any) => a[0] - b[0]);
            let result = [intervals[0]];
            for(let interval of intervals){
              let recent = result[result.length - 1];
              if(recent[1] >= interval[0]){
                recent[1] = Math.max(recent[1],interval[1])
              }else{
                result.push(interval);
              }
            }
            return result;
          }
          console.log(merge([[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]));
      </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Палиндром, с учётом регистра, пробелов и знаков припинания</summary>
          <pre>
            const polydrome = (val:string) => {
              let val0_1 = val
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .replace(/[^\w\s]|_/g, "")
                  .split('');
              let val1_0 = val
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .replace(/[^\w\s]|_/g, "")
                  .split('')
                  .reverse();

              return val0_1.join('') === val1_0.join('');

            }
            console.log(polydrome('О, духи, от уборки микробу-то и худо'))
          </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">Очередь с 0(1) сложностью операций</summary>
          <pre>
class Queue {
  #storage = {}
  #last = 0;
  #first = 0;

  enqueue(item){
    // добавить элемент в конец очереди
    this.#storage[this.#last] = item;
    this.#last++;
  }

  dequeue(){
    // удалить первый  элемент из очереди
    if(this.size === 0){
      return;
    }
    const value = this.#storage[this.#first];
    delete this.#storage[this.#first];
    this.#first++
    return value;
  }
  print(){
    console.log(this.#storage)
  }

  get size(){
    // возвращает размер списка
    return this.#last - this.#first
  }
}
const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(42)
queue.print()
queue.dequeue()
queue.print()
            </pre>
        </details>
        <details class="taskItem">
          <summary class="btnAccordion">
            напишите код функций котрая выведет значения переданного ей
            односвязного списка в обратном порядке (4,3,2,1)
          </summary>
          <div class="taskItem__var-wrap">
            <div class="taskItem__var">
              <h5>Вариант 1</h5>
              <pre>
                const someList = {
  value:1,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:11,
        next:{
          value:19,
          next:null
        }
      }
    }
  }
}
(function (){
  const result:any = [];
  const reversePrint2 = (node:any) => {
    if(node.next !== null){
      reversePrint2(node.next)
    }
    result.push(node.value);
  }
  reversePrint2(someList)
  console.log('reversePrint2', result)
})()
              </pre>
            </div>
            <div class="taskItem__var">
              <h5>Вариант 2</h5>
              <pre>
const someList = {
  value:1,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:11,
        next:{
          value:19,
          next:null
        }
      }
    }
  }
}
const reversePrint = (obj:any) => {
  const result = [];
  let tempObj:any = obj;
  let stop = true;
  while (stop){
    let [key, value] = Object.entries(tempObj)
    result.push(key[1])
    if(value[1].next === null){
      stop = false
      result.push(value[1].value)
    }
    tempObj = value[1]
  }
  return result;
}

              </pre>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
const string = 'Welkom to this';

const turning = (val) => {
  const result = []
  let tempArr = val.split(' ');
  tempArr.forEach((item)=>{
    let tempVal = item.split('').reverse()
   result.push(tempVal.join(''))
  })
  return result.join(' ')
}
//console.log(turning(string))

let firstObj = { name: "Hello"}
let secondObj = firstObj;
//console.log(secondObj.name,firstObj.name);
firstObj = {name: 'Bye'};
//console.log(secondObj.name,firstObj.name);
// провал

// var array = [10, 20, 30, 40];
// for(let i = 0; i< array.length;i++){
//   setTimeout(function (){
//     console.log('temI',i)
//   },3000)
// }

var f = function (){
  console.log(1);
}
var execute = function(f:any) {
  setTimeout(f,1000)
}
execute(f);
f = function () {
  console.log(2)
};





</script>
<style scoped lang="scss">
.taskItem{
  padding: 20px 0;
  border-bottom: solid 2px #000;

  pre{
    margin-top: 20px;
    color: cadetblue;
    font-family: monospace;
    font-size: 18px;
  }
  &__var{
    width: 50%;
    h5{
      padding: 10px 0 0 0;
    }
    &:first-of-type{
      h5{
        padding: 10px 0 0 15px;
      }
    }
  }

  &__var-wrap{
    display: flex;
    align-items: flex-start;
  }
}
.task-column{
  width: 49%;
}
.btnAccordion{
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  font-size: 16px;
}
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
.task-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>