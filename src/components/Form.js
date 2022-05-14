import React from 'react'

function Form({addItem,input,handleChange}) {
  return (
    <div className="todoform" >
    <form action="" onSubmit={addItem}>
      <input
        type="text"
        placeholder="Enter task here"
        value={input}
        onChange={handleChange}
        className="todoinput"
      />
      <button className="btn todobtn">Submit</button>
    </form>
    </div>
  );
}

export default Form