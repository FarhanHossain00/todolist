import React from 'react'

function List({items, deleteItem,editItem}) {

  const result = items.map((items) => {
    return (
      <div className="list">
        <div className="text">
          <input
            id={items.key}
            name={items.key}
            value={items.value}
            onChange={(e) => editItem(e.target.value, items.key)}
          />
          <div className="underline"></div>
        </div>
        <div className="action">
          {/* edit btn */}
          <label htmlFor={items.key} className="btn editbtn">
            Edit
          </label>

          {/* deletebtn */}
          <button
            className="btn deletebtn"
            onClick={() => {
              deleteItem(items.key);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  });
  return <div className="todolist">{result.length===0?(<h3 className='nodata'>no task to show</h3>):result}</div>;
}

export default List