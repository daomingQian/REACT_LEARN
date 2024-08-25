/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 21:16:32
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-25 18:38:00
 * @FilePath: \REACT_LEARN\src\components\LogList\LogList.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Checkbox, Button } from 'antd';
import { useEffect } from 'react';
import './LogList.scss'

export default function LogList({taskList, selectAllBox, deleteTargetTask}) {
  let doneTaskList = taskList.filter(item => item.done);
  useEffect( () => {
    doneTaskList = taskList.filter(item => item.done);
  })
  return (
    <div className='logWrap'>
      <div>
        <Checkbox checked={taskList.length && taskList.every(item => item.done)} onChange={() => {
          selectAllBox(doneTaskList.length !== taskList.length)
        }}/>
        <span className='logWrap-tip'>{`已完成${doneTaskList.length} / 全部${taskList.length}`}</span>
      </div>
      {taskList.length ? <Button type="primary"
        danger
        onClick={ () => deleteTargetTask(doneTaskList.map(item => item.id))}
      >清除已完成任务</Button> : ''}
    </div>
  )
}
