/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 17:31:48
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-25 14:44:59
 * @FilePath: \REACT_LEARN\src\components\BasicInfo\BasicInfo.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './BasicInfo.css'
import { Input } from 'antd';

export default function BasicInfo({task, handleTask, onChange}) {
    return (
        <div>
            <p className="red">Hallo World!   My baby   </p>
            <Input value={task}
                placeholder="请输入你的任务名称，按回车键确认！"
                allowClear
                onKeyUp={handleTask}
                onChange={onChange}/>
        </div>
    )
}
