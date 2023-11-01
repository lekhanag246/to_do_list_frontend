import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../../config/axiosInstance';

import ListInput from './ListInput';
import ListItems from './ListItems';
import ListTitle from './ListTitle';
import { Loader2 } from '../Loader/Loader';
import todoListContext from '../../config/Auth';

const ListBox = () => {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true);

  const { setAlert, token } = useContext(todoListContext);
  // console.log(token)
  async function fetchData(initialMsg) {
    try {
      let { data } = await axiosInstance.get('/tasks', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }); //response.data status message count tasks 
      setLoading(false)
      let { status, message, tasks } = data
      setTasks([...tasks]);
      if (initialMsg)
        setAlert({ status, message: initialMsg })
    } catch (error) {
      if (error.response) { //if error related to backend or network
        // status ,message
        let { status, message } = error.response.data;
        setAlert({ status, message })

      }
      //else error related to code 

    }
  }

  async function fetchPost(inputTask) {
    try {
      let { data } = await axiosInstance.post('/task', { task: inputTask }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      let { status, message } = data
      setAlert({ status, message })
      fetchData();
    } catch (error) {
      if (error.response) { //if error related to backend or network
        // status ,message
        let { status, message } = error.response.data;
        setAlert({ status, message })
      }
    }
  }

  async function fetchDelete(id) {
    try {
      let { data } = await axiosInstance.delete(`/task/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      let { status, message } = data
      setAlert({ status, message })
      fetchData();
    } catch (error) {
      if (error.response) {
        let { status, message } = error.response.data;
        setAlert({ status, message })

      }
      // console.log("error deleting", error.message)
    }
  }
  async function fetchEdit(id, updateTask) {
    try {
      let { data } = await axiosInstance.patch(`/task/${id}`, { updateTask: updateTask }, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      let { status, message } = data
      setAlert({ status, message })
      fetchData();
    } catch (error) {
      if (error.response) {
        let { status, message } = error.response.data;
        setAlert({ status, message })

      }
      // console.log("error updatings", error.message)
    }
  }

  useEffect(() => {
    fetchData("Finished setting up the tasks page. ");
  }, [])

  return loading ? <Loader2 /> :
    <div className='list-box'>
      <ListTitle />
      <ListInput fetchPost={fetchPost} />
      <ListItems tasks={tasks} fetchDelete={fetchDelete} fetchEdit={fetchEdit} />
    </div>
}

export default ListBox