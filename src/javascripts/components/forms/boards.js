const showBoards = (array) => {
  document.querySelector('#add button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';

  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#board-container').innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${item.image}" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-book-btn--${item.firebaseKey}">Edit Book</button>
      <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete Book</button>
      </div>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '<h1 class="text-white">No Items</h1>';
};

export { showBoards, emptyBoards };