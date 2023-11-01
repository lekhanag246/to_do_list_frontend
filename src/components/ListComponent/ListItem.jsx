import React, { useEffect, useRef, useState } from 'react'

const ListItem = ({ task, fetchDelete, fetchEdit }) => {

    const [taskData, setTaskData] = useState(task);
    const [editMode, setEditMode] = useState(false);
    const [checked, setChecked] = useState(taskData.completed);

    let cbRef = useRef();
    let pRef = useRef();

    useEffect(() => {
        if (task.completed === true) {
            cbRef.current.checked = true;
            disableChecked();
        }
    }, [])
    function handleEdit(done) {
        if (done) {
            let editedData = pRef.current.innerText;
            fetchEdit(task['_id'], { task: editedData });
        } else {
            pRef.current.innerText = taskData.task;
        }
        setEditMode(false);
    }

    function handleDelete() {
        fetchDelete(task['_id']);
    }

    function disableChecked() {
        pRef.current.className = `${pRef.current.className} completed-item`;
        cbRef.current.disabled = true;
    }

    function handleChecked() {
        //alert saying good job and well done !!!
        disableChecked();
        fetchEdit(task['_id'], { completed: true });
        setChecked(true);
    }

    return <li key={taskData["_id"]}>
        <article className='list-item'>
            <input className={"cb"} ref={cbRef} type="checkbox" name="" id="" onChange={handleChecked} />
            <div className='list-item-content'>
                <p className='list-item-p' htmlFor="" ref={pRef} contentEditable={editMode}>{taskData.task}</p>
            </div>
            {
                <div className='list-item-setting'>
                    {
                        !editMode ? <>
                            <button disabled={checked}
                                className={checked ? `edit-btn` : `edit-btn edit-btn-hover`}
                                onClick={() => { setEditMode(true) }}><i className="fa-solid fa-pen-to-square" /> </button>
                            <button className="edit-btn edit-btn-hover" onClick={handleDelete}><i className="fa-solid fa-trash" /> </button>
                        </> : <>
                            <button className="edit-btn" onClick={() => { handleEdit(true) }}> <i className="fa-solid fa-check" style={{ color: "#00ff00" }} /> </button>
                            <button className="edit-btn" onClick={() => { handleEdit(false) }}> <i className="fa-solid fa-x" style={{ color: "#ff0000" }} /> </button>
                        </>
                    }
                </div>
            }
        </article>
    </li>
};

export default ListItem