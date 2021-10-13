'use strict'

const Paragraph = () =>{
    return React.createElement(
    'p',
    {},
   ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam, inventore mollitia maxime voluptates porro eaque! Officiis, eos dolor numquam natus aliquid iusto fugit suscipit saepe necessitatibus veritatis nostrum nihil!',
    )
}

const addContainer = document.getElementById('app');

ReactDOM.render(Paragraph(),addContainer);