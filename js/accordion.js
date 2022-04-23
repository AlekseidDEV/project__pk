// const element = document.querySelectorAll('div')

// console.dir(element)

// element.forEach((element)=> {  //метод перебора (имеет три значения: сами элементы, индекс, нодлист на каждый элемент)
// console.log(element)
// })


// for (let i = 0; i < element.length; i++){  //цикл для вывода всех элементов массива
//     console.log(element[i]);
// }

const contents = document.querySelectorAll('.program-line__content')



contents.forEach((elem) =>{
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')
    //  title.onclick = () =>{
    //      console.log(title)

    // }
  title.addEventListener('click', () =>{
    descr.classList.toggle('active');
  })

})





