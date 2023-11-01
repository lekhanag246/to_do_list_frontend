import React from 'react';
import ListItem from './ListItem';

const ListItems = ({tasks ,fetchDelete,fetchEdit}) => {
  
  return (
    <ul className='list-items'>
        {
          tasks.map((task)=>{
            return (<ListItem task={task} key={task["_id"]} fetchDelete={fetchDelete} fetchEdit={fetchEdit}/>);
          })
        } 
    </ul>
  )
}

export default ListItems