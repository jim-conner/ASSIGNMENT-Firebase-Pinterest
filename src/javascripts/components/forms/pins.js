const showPins = (pinsArray) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML = '';

  pinsArray.forEach((item) => {
    document.querySelector('#form-container').innerHTML += `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.Description}</p>
    <a href="#" class="btn btn-primary stretched-link" id="show-pin-btn--${item.firebaseKey}">Go To Pins</a>
    <button class="btn btn-danger" id="delete-pin-btn--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>
  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <h1 class="text-white">No Items</h1><button class="btn btn-primary" id="back-btn">Back To Boards</button>`;
};

export { showPins, emptyPins };
