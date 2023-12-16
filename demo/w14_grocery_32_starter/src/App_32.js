import React, { useEffect, useState } from "react";
import Alert_32 from "./components/Alert_32";
import List_32 from "./components/List_32"; // 確保引入正確的 List_32 組件


const getLocalStorage=()=>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem(list));
  }else{
    list=[];
  }
  return list ;
}

const setLocalStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
}

const defaultList = JSON.parse(localStorage.getItem('list')) || [];

const App_32 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(defaultList);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else if (name && isEditing) {
      const newItems = list.map((item) =>
        item.id === editID ? { id: item.id, title: name } : item
      );

      setList(newItems);
      setLocalStorage(newItems);
      setName('');
      setIsEditing(false);
      showAlert(true, 'value changed', 'success');
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };

      const newItems = [...list, newItem];
      setList(newItems);
      setLocalStorage(newItems);
      setName('');
      showAlert(true, 'value added', 'success');
    }
  };

  const removeItem = (id) => {
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
    setLocalStorage(newItems);
    showAlert(true, 'item removed', 'danger');
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
    setLocalStorage([]);
  }

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert_32 {...alert} removeAlert={() => showAlert(false)} />}
          <h3>Grocery Bud --韓凱旭</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              value={name}
              placeholder='e.g.eggs'
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List_32 items={list} removeItem={removeItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default App_32;
