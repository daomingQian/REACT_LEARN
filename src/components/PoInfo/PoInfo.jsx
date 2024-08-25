/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 18:16:07
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-25 19:03:33
 * @FilePath: \REACT_LEARN\src\components\PoInfo\PoInfo.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { List, Checkbox, Button } from 'antd';
import './PoInfo.scss'

export default function PoInfo({taskList, changeBox, deleteTargetTask}) {
  return (
    <List
      size="small"
      bordered
      dataSource={taskList}
      className='listBox'
      renderItem={(item) =>
        <List.Item className='taskItem'>
          <div>
            <Checkbox checked={item.done} onChange={() => changeBox(item)}/>
            <span className='task'>{item.task}</span>
          </div>
          <Button type="primary"
            danger
            className='deleteBtn'
            onClick={ () => deleteTargetTask([item.id])}
          >删除</Button>
        </List.Item>}
    />
  )
}
