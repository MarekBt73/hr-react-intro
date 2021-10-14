'use strict'

const Paragraph = () => {
    return <p className = 'paragrafh'
    id = "paragraph" > Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero enim ex, ea quas placeat laborum at quasi repellat quisquam reprehenderit a tenetur quos repudiandae accusantium minus obcaecati veniam amet alias. </p>

}

const addContainer = document.getElementById('app');

ReactDOM.render(<Paragraph/>, addContainer);