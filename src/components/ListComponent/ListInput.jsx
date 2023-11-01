import React, { useState } from 'react'

const ListInput = ({ fetchPost }) => {
  const [inputTask, setInputTask] = useState("");

  function handleClick(e) {
    e.preventDefault();
    fetchPost(inputTask);
    setInputTask("");
  }
  return (
    <form onSubmit={handleClick} className='add-task-form' autoComplete='on'>
      <div className='input-div'>
        <input className="add-task-inp" type="text" placeholder='add a task' value={inputTask} onChange={(e) => { setInputTask(e.target.value) }} />
        <i className="fa-solid fa-xmark  cancel-inp" onClick={() => { setInputTask("") }} />
      </div>
      <button className='add-task-btn' type='submit'><i className="fa-solid fa-plus fa-lg" style={{ "color": "#008000" }} /></button>
    </form>
  )
}

export default ListInput