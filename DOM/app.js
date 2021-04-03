const colorsArray = ['plum', 'orquid', 'violet', 'orquid', 'darkviolet', 'purple', 'orange', 'lightblue', 'orange', 'rosybrown', 'indigo', 'blueviolet', 'gold']
const friendsArray = ['John', 'Tania', 'Lorena', 'Katty', 'Daria', 'Ineka', 'Lesly', 'Mariana', 'Gabriela', 'Natalia']
let counter = 0

const btn = document.createElement('button')
const btnTxt = document.createTextNode('1. Click Me!')
btn.appendChild(btnTxt)
btn.style.padding = '0.8rem'

const div1 = document.createElement('div')
const div2 = document.createElement('div')
const btnBox = document.createElement('button')
const btnBoxTxt = document.createTextNode('2. Submit')
btnBox.appendChild(btnBoxTxt)
btnBox.style.padding = '0.8rem'
const textArea = document.createElement('textarea')
div2.appendChild(textArea)
div1.append(div2)
div1.appendChild(btnBox)
const p = document.createElement('p')
const pText = document.createTextNode('4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et deserunt impedit eius totam, vitae possimus nostrum atque at! Libero iste nisi aperiam atque veniam omnis enim sequi dicta voluptatu Est, odio possimus aliquid quas voluptatum dolorem ? Officia, placeat dolorem quidem quos ut, corporis est deserunt maiores, vel velit reiciendis aperiam dolores asperiores.Assumenda, iure error autem similique magni ut. Porro cupiditate nihil minus enim eaque natus cumque ex, tempora nostrum, nulla sapiente hic voluptatum, non iusto totam! Iusto dolorem iste soluta minima at nostrum ex officiis odit cupiditate et.')
p.appendChild(pText)
const div3 = document.createElement('div')
div3.id = 'span'
const div4 = document.createElement('div')
const btnSpan = document.createElement('button')
btnSpan.innerText = '5. Add Name'
div4.appendChild(div3)
div4.appendChild(btnSpan)


const handleClick = () => {
    alert('Welcome to my page!')
}
const handleClickBox = () => {
    const message = document.querySelector('textarea').value
    console.log(message);
    alert(message)
}
const handleMouseOver = (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = 'purple'
}
const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'white'
}
const handleColorChange = (e) => {
    const random = Math.floor(Math.random() * colorsArray.length)
    const color = colorsArray[random]
    e.target.style.color = color
}

const addSpanName = () => {
    const span = document.createElement('span')
    span.innerText = 'Valentina Bacherer'
    document.querySelector('#span').appendChild(span)
}
const addFriend = () => {
    if (counter < friendsArray.length) {
        const friends = document.querySelector('ul')
        const li = document.createElement('li')
        li.innerText = friendsArray[counter]
        friends.appendChild(li)
        counter++
    }
}

window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(btn)
    btn.addEventListener('click', handleClick)
    document.body.appendChild(div1)
    btnBox.addEventListener('click', handleClickBox)
    document.getElementById('3').addEventListener('mouseover', handleMouseOver)
    document.getElementById('3').addEventListener('mouseleave', handleMouseLeave)
    document.body.appendChild(p)
    document.querySelector('p').addEventListener('click', handleColorChange)
    document.body.appendChild(div4)
    btnSpan.addEventListener('click', addSpanName)
    document.querySelector('#add-friend').addEventListener('click', addFriend)
})

