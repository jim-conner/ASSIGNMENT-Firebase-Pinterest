const showPins = (pinsArray) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button><button class="btn btn-primary btn-lg mb-4" id="back-btn">Back to Boards</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML = '';

  pinsArray.forEach((pin) => {
    document.querySelector('#form-container').innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" alt="${pin.Title}"src="${pin.image}">
    <div class="card-body">
    <h5 class="card-title">${pin.Title}</h5>
    <p class="card-text">${pin.Description}</p>
    <button class="btn btn-primary" data-toggle="modal" data-target="#formModal" id="update-pin-btn--${pin.firebaseKey}">Update Pin</button>
    <button class="btn btn-danger" id="delete-pin-btn--${pin.firebaseKey}">Delete Pin</button>
    </div>
  </div>
  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <h1 class="text-white">No Items</h1>
  <button class="btn btn-primary" id="back-btn">Back To Boards</button>`;
};

export { showPins, emptyPins };
