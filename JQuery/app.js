const colorsArray = ['plum', 'orquid', 'violet', 'orquid', 'darkviolet', 'purple', 'orange', 'lightblue', 'orange', 'rosybrown', 'indigo', 'blueviolet', 'gold']
const friendsArray = ['John', 'Tania', 'Lorena', 'Katty', 'Daria', 'Ineka', 'Lesly', 'Mariana', 'Gabriela', 'Natalia']
let counter = 0

$(document).ready(function () {
    $('body').append('<button id="1">1. Click Me!</button>')
    $('#1').click(function () {
        alert('Welcome to my page, again!')
    })
    $('#submit').click(function () {
        const text = $('textarea').val()
        alert(text)
    })
    $('body').append('<div id="3">3. Color changing div</div>')
    $('#3').hover(function () {
        $(this).css('background-color', 'pink')
    }, function () {
        $(this).css('background-color', 'white')
    })
    $('body').append('<p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae et deserunt impedit eius totam, vitae possimus nostrum atque at! Libero iste nisi aperiam atque veniam omnis enim sequi dicta voluptatu Est, odio possimus aliquid quas voluptatum dolorem ? Officia, placeat dolorem quidem quos ut, corporis est deserunt maiores, vel velit reiciendis aperiam dolores asperiores.Assumenda, iure error autem similique magni ut.Porro cupiditate nihil minus enim eaque natus cumque ex, tempora nostrum, nulla sapiente hic voluptatum, non iusto totam! Iusto dolorem iste soluta minima at nostrum ex officiis odit cupiditate et.</p>')
    $('p').click(function () {
        const random = Math.floor(Math.random() * colorsArray.length)
        const color = colorsArray[random]
        $(this).css('color', color)
    })
    $('body').append('<div><button id="addName">5. Add Name</button></div><div id="span"></div>')
    $('#addName').click(function () {
        $('#span').append('<span>Valentina Bacherer</span>')
    })
    $('#add-friend').click(function () {
        if (counter < friendsArray.length) {
            const name = friendsArray[counter]
            $('ul').append('<li>' + name + '</li>')
            counter++
        }
    })
})