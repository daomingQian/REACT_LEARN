/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 21:16:32
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-25 16:52:43
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
    <div>
      <div>
        <Checkbox checked={taskList.every(item => item.done)} onChange={() => {
          selectAllBox(doneTaskList.length !== taskList.length)
        }}/>
        <span>{`已完成${doneTaskList.length} / 全部${taskList.length}`}</span>
      </div>
      <Button type="primary"
        danger
        onClick={ () => deleteTargetTask(doneTaskList.map(item => item.id))}
      >清除已完成任务</Button>
    </div>
  )
}
