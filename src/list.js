import React from 'react';
//import ReactDOM from 'react-dom';


const Todo=props=>(
    <ul>{
        props.list.map(item=><li>{item}</li>)

    }
    </ul>
);

export default Todo;