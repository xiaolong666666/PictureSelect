import React,  {useState, useEffect} from 'react'

function PictureSelect({pictures, value, onChange}) {
    const [isChecked, setChecked] = useState(false);
    
    useEffect(() => {
       
        if (value.length == pictures.length) {
            setChecked(true);
        }else{
            setChecked(false);
        }
    }, pictures);

    function everyChange(i) {
        console.log(i)
        if (value.includes(i)){
            value.splice(
                value.findIndex(e => e===i),
                1
            );
        } else {
            value.push(i);
        }
        onChange(value.slice());
    }

    function allChoose() {
        if (isChecked) {
            setChecked(false);
            onChange([]);
        } else {
            setChecked(true);
            let ids = [];
            pictures.map(e=>ids.push(e.id));
            onChange(ids);
        }
    }
    return (
        <div>
            <div>
                <label htmlFor="all" style={{cursor: 'pointer'}}>全选</label>
                <input type="checkbox" 
                    id="all"
                    checked={isChecked}
                    onChange={()=>{
                        allChoose();
                    }}
                />
                <span>已选择：{value.length}个</span>
                <br/>
                </div>
                {
                   
                    pictures.map((el, idx) => {
                       
                     return  <label htmlFor={idx}>
                            <input type="checkbox"
                                id={idx}
                                checked={value.includes(el.id)}
                                key={idx}
                                onChange={() => everyChange(el.id)}
                            />
                        
                            <img src={el.url} key={el.id} style={{cursor: 'pointer'}} alt=""/>
                        </label>
                    })}
        </div>
    )
};
export default PictureSelect;




  