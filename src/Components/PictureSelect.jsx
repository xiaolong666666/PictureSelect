import React, { useState, useEffect } from 'react';

const PictureSelect = ({ pictures, value, onChange }) => {

    const [isChecked, setChecked] = useState(false)
    const flag = value.length === pictures.length

    useEffect(()=>{
        if (flag){
            setChecked(true)
        }else{
            setChecked(false)
        }
    },[flag])

    const changeSelect = (e) => {
        if(value.includes(e)){
            value.splice(value.findIndex(i=>e===i),1)
        }else{
            value.push(e)
        }
        onChange(value.slice())
    }

    const changeAll = () => {
        if(isChecked){
            setChecked(false)
            onChange([])
        }else{
            setChecked(true)
            const ids = []
            pictures.map(item=>{
                ids.push(item.id)
                return item
            })
            onChange(ids)
        }
    }
    
    const picList = pictures.map(item=>{
        return <label className="wrapper" htmlFor={item.id} key={item.id}>
                <input
                    className='select'
                    type="checkbox"
                    id={item.id}
                    checked={value.includes(item.id)}
                    onChange={()=>changeSelect(item.id)}
                />
                <img src={item.url} alt=""/>
                <p>{item.name}.jpg</p>  
            </label>
    })

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    defaultChecked={isChecked}
                    onChange={changeAll}
                />已选中{value.length}个文件
            </div>
            {
                picList
            }
        </div>
    );
};

export default PictureSelect;