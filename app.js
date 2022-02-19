//Number 1
// class Logo {
//     constructor(url) {
//       this.top = 0;
//       this.left = 0;
//       this.width = 200;
//       this.imgUrl = url;
//       this.html = null;
//     }
  
//     init() {
//         let img = document.createElement('img');
//         img.setAttribute('src', this.imgUrl)
//         this.html = img;
//         this.render()
//         body.style.background ='black';

//     }
    
//     render() {
//         body.appendChild(this.html);
//         this.html.style.position = 'fixed';
//         this.html.style.left = `${this.left}px`;
//         this.html.style.top = `${this.top}px`;
//         this.html.style.width = `${this.width}px`;
//     }

  
//     moveUp() {
//         this.top = this.top - 20;
//         this.render();
//     }
//     moveDown() {
//         this.top = this.top + 20;
//         this.render();
//     }
//     moveLeft() {
//         this.left = this.left - 20;
//         this.render();
//     }
//     moveRight() {
//         this.left = this.left + 20;
//         this.render();
//     }
//   }
  
//   const imgUrl = 'https://bit.ly/2tcDito';
//   var mfLogotip = new Logo(imgUrl);
//   console.log(mfLogotip);
  
//   mfLogotip.init();
  
//   mfLogotip.moveRight();
//   mfLogotip.moveRight();
//   mfLogotip.moveRight();
//   mfLogotip.moveRight();
//   mfLogotip.moveDown();
//   mfLogotip.moveDown();
//   mfLogotip.moveDown();
//   mfLogotip.moveDown();



//Number 2
// let body = document.querySelector('body');

// class Circle{
//     constructor(width,height,color){
//         this.width = width;
//         this.height = height;
//         this.color = color;

//     }
//     createCircle(){
//         return  `
//         <div style="
//         width:${this.width}px;
//         height:${this.height}px;
//         background-color:${this.color};
//         border-radius: 50%
//         "></div>`
//     }
//     render(){
//         document.body.innerHTML += this.createCircle()
//     }
// }

// let circle = new Circle(100,100,'red');
// circle.render();

//Number 3


// class Calculator{
//     constructor(num1,num2){
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//     sum(){
//         return this.num1 + this.num2;
//     }
//     mul(){
//         return this.num1 * this.num2;
//     }
// }

// let calculator = new Calculator(Number(prompt('Введите первое число')),Number(prompt('Введите первое число')));

// console.log(calculator.sum(),calculator.mul())


//Number 4**


// class Dropdown {
//     constructor(selector,options){
//         this.$el = document.querySelector(selector);
//         this.items = options.items
//         this.$el.querySelector('.dropdown__label').innerText = this.items[0].label

//         this.$el.addEventListener('click',event =>{
//            if(event.target.classList.contains('dropdown__label')){
//                if(this.$el.classList.contains('open')){
//                    this.close()
//                }else{
//                    this.open()
//                }
//            } else if(event.target.tagName.toLowerCase() === 'li'){
//             this.select(event.target.dataset.id)
//            }
//         })

//         const itemsHTML = this.items.map(i => {
//             return `<li data-id="${i.id}" >${i.label}</li>`
//         }).join(' ')
//         this.$el.querySelector('.dropdown__menu').innerHTML = ('afterbegin', itemsHTML);

//     }


//     select(id){
//         const item = this.items.find(i =>i.id === id)
//         this.$el.querySelector('.dropdown__label').innerText = item.label
//         this.close()
//     }
//     open(){
//         this.$el.classList.add('open')
//     }
//     close(){
//         this.$el.classList.remove('open')
//     }

// }

// const dropdown = new Dropdown('#dropdown',{
//     items: [
//         {label: 'Москва', id:'msk'},
//         {label:'Санкт-Петербург',id: 'spb'},
//         {label:'Новосибирск',id: 'nsk'},
//         {label:'Краснодар',id: 'krdr'}
//     ]
// })