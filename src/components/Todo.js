
import React, {useState}  from 'react';
import Form from './Form';
import List from './List';
console.log("1");
function Todo() {
 // state for input box
    const [input, setInput] = useState("");

// state for items
const [Item, setItem] = useState([]);
// current item
const [CrItem, setCrItem] = useState({
    key:'',
    value:''
})


    // handle text input
    const handleChange= e=>{
    setInput(e.target.value);

        // set current item state
        setCrItem({
          value: e.target.value.trim(),
          key: Date.now() + Math.floor(Math.random() * 1000) + ""
        });
    }



    // handle form submit
    const addItem= e=>{
        e.preventDefault();

        //add current item  to all item
        if(!input || /^\s*$/.test(input)){
          alert("task can't be empty")
        }else{
         const tempitem = [...Item, CrItem];
         setItem(tempitem);
         setInput("");

        }
        // clear curren 
        setCrItem({
            key:'',
            value:''
        })
    }




    // delete item
    const deleteItem=(key)=>{
        // filter items which doesn't match the key value
      const  filteredItems= Item.filter(item=>item.key!==key );
    // set filtered items to as main item
      setItem(filteredItems)
    }


// edit item directly
  const editItem = (text, key) => {
    if (!text || /^\s*$/.test(text)) {
      deleteItem(key);
    }
      setItem(prev => prev.map(item => 
      (item.key === key ? {key:item.key,value:text} : item)));
  };


  return (
    <div className="container">
      <Form addItem={addItem} input={input} handleChange={handleChange} />
      <List deleteItem={deleteItem} editItem={editItem} items={Item} />
    </div>
  );
  }

export default Todo 
