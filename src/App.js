/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 11:32:49
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-25 16:34:37
 * @FilePath: \REACT_LEARN\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './App.css';
import BasicInfo from './components/BasicInfo/BasicInfo';
import PoInfo from './components/PoInfo/PoInfo'
import LogList from './components/LogList/LogList'
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([
    {id: 1, task: '弑神令', done: true},
    {id: 2, task: '战斗战胜佛', done: false}
  ]);


  // 输入框值改变
  function onChange(event) {
    setTask(event.target.value);
  }

  // 按回车 处理输入的任务
  function handleTask(event) {
    if(event.key === 'Enter') {
      console.log(task);
      insetOneTask();
      setTask('')
    }
  }

  // 新增一个新任务
  function insetOneTask() {
    const newTask = {id: new Date().getTime(), task: task, done: false};
    const newTaskList = [newTask, ...taskList];
    setTaskList(newTaskList);
  }

  // box框值改变
  function changeBox(taskItem) {
    const newTaskList = taskList.map(item => {
      if(item.id === taskItem.id) {
        item.done = !item.done;
      }
      return item;
    })
    setTaskList(newTaskList);
  }

  function selectAllBox(flag) {
    const newTaskList = taskList.map(item => {
      item.done = flag;
      return item;
    })

    setTaskList(newTaskList)
  }

  // 删除目标任务们
  function deleteTargetTask(taskIdList) {
    const taskIdMap = taskIdList.reduce((map, taskId) => {
      map[taskId] = true;
      return map;
    }, {})
    const newTaskList = taskList.filter(item => !taskIdMap[item.id]);
    setTaskList(newTaskList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='wrap'>
          <BasicInfo task={task} handleTask={handleTask} onChange={onChange}></BasicInfo>
          <PoInfo taskList={taskList} changeBox={changeBox} deleteTargetTask={deleteTargetTask}></PoInfo>
          <LogList taskList={taskList} selectAllBox={selectAllBox} deleteTargetTask={deleteTargetTask}></LogList>
        </div>
      </header>
    </div>
  );
}
