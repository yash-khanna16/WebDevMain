import React from 'react'


const Todoitem = ({item, upShow, downShow, updateCheckBox}) => {
    const updateCheckboxHandler = (ev)=>{
        let class_name = ev.target.className;
        let id = ev.target.parentElement.id;
        // console.log(class_name);

        if(class_name === 'checkbox'){
            updateCheckBox(id);
        }

    }
    let strikeOrNot = item.checked ? 'line-through':'';
    console.log(strikeOrNot);
    return (
        <div id={item.id} onClick={updateCheckboxHandler}>
            <input className="checkbox" type="checkbox"/>
            <span style={{'textDecoration':{strikeOrNot}}}>{item.name}</span>
            {upShow && <button className="upArrow">↑</button>}
            {downShow && <button className="downArrow">↓</button>}
            <button className="deleteItem">X</button>
        </div>
    )
}

export default Todoitem
