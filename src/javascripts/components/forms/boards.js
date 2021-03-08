const showBoards = (boardsArray) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML = '';

  boardsArray.forEach((item) => {
    document.querySelector('#form-container').innerHTML += `
    <div class="card" style="width: 18rem; 
    id="board-card">
    <img class="card-img-top" src="${item.image}" ">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <a href="#" class="btn btn-primary stretched-link" id="show-pin-btn--${item.firebaseKey}">Show Board Pins</a>
      <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete Book</button>
      </div>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '<h1>No Items</h1>';
};

export { showBoards, emptyBoards };
