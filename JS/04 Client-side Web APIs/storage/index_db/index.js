// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

let db;

window.onload = () => {
  let req = window.indexedDB.open('notes', 1);

  req.onerror = () => {
    console.log('db failed to open');
  };

  req.onsuccess = () => {
    db = req.result;
    
    displayData();
  };

  req.onupgradeneeded = (e) => {
    let res = e.target.result;
    let store = res.createObjectStore(
      'notes', 
      {
        keyPath: 'id', 
        autoIncrement: true
      })
    ;
    store.createIndex('title', 'title', { unique: false });
    store.createIndex('body', 'body', { unique: false });

    console.log('db setup complete');
  };

  form.onsubmit = addData;

  function addData(e) {
    e.preventDefault();

    let newItem = { title: titleInput.value, body: bodyInput.value };
    let trans = db.transaction(['notes'], 'readwrite');
    let store = trans.objectStore('notes');

    let req = store.add(newItem);

    req.onsuccess = () => {
      titleInput.value = '';
      bodyInput.value = '';
    };

    trans.oncomplete = () => {
      console.log('db modification finished');

      displayData();
    };

    trans.onerror = () => {
      console.log('transaction not opened due to error');
    };
  }

  function displayData() {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    let store = db.transaction('notes').objectStore('notes');

    store.openCursor().onsuccess = (e) => {
      let cursor = e.target.result;

      if (cursor) {
        let listItem = document.createElement('li');
        let h3 = document.createElement('h3');
        let para = document.createElement('p');

        listItem.appendChild(h3);
        listItem.appendChild(para);
        list.appendChild(listItem);

        h3.textContent = cursor.value.title;
        para.textContent = cursor.value.body;

        listItem.setAttribute('data-note-id', cursor.value.id);

        let deleteBtn = document.createElement('button');
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';

        deleteBtn.onclick = deleteItem;

        cursor.continue();
      } else {
        if (!list.firstChild) {
          let listItem = document.createElement('li');
          listItem.textContent = 'No notes stored';
          list.appendChild(listItem);
        }

        console.log('notes all displayed');
      }
    }
  }

  function deleteItem(e) {
    let noteID = Number(e.target.parentNode.getAttribute('data-note-id'));

    let trans = db.transaction(['notes'], 'readwrite');
    let store = trans.objectStore('notes');
    let req = store.delete(noteID);

    trans.oncomplete = () => {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      console.log(`Note ${noteID} deleted.`);

      if (!list.firstChild) {
        let item = document.createElement('li');
        item.textContent = 'No notes stored';
        list.appendChild(item);
      }
    };
  }
};

