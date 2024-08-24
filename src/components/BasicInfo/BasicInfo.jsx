/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 17:31:48
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-24 22:16:06
 * @FilePath: \REACT_LEARN\src\components\BasicInfo\BasicInfo.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './BasicInfo.css'
import { Input } from 'antd'

export default function BasicInfo() {
    const confirm = function() {
        const num = 1;
        if(num === 1) {
            [].map((item, index) => {
                return item.name;
            })
            console.log('num: ', num);
        }
    }

    const cancel = function() {
        console.log('取消');
    }
    return (
        <div>
            <p className="red">Hallo World!   My baby   </p>
            <Input >确认</Input>
        </div>
    )
}
