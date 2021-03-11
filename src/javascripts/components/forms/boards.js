const showBoards = (boardsArray) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add a Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML = '';

  boardsArray.forEach((board) => {
    document.querySelector('#form-container').innerHTML += `
    <div class="card" style="width: 18rem; 
    id="board-card">
    <div class="card-body">
    <img class="card-img-top" src="${board.image}">
      <h5 class="card-title">${board.first_name} ${board.last_name}</h5>
      <button class="btn btn-primary" id="show-pin-btn--${board.firebaseKey}">Go to Pins</button>
      <button class="btn btn-danger" id="delete-board-btn--${board.firebaseKey}">Delete Board</button>
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
