import selectBoard from './selectBoard';

const updatePinForm = (pinObject) => {
  // document.querySelector('#add-button').innerHTML = '';
  // document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML += `
  <form id="update-pin-form" class="mb-4">
    <div class="form-group">
      <label for="image">Image URL</label>
      <input type="url" class="form-control" id="pin-image" 
      placeholder="Image URL" value ="${pinObject.image}" required>
    </div>
    <div div class="form-group">
      <label for="title">Pin Title</label>
      <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" placeholder="Pin Title" 
      value="${pinObject.Title}"
      required>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" class="form-control" id="pin-description" 
        placeholder="Description" value="${pinObject.Description}" required>
    </div>
    <div class="form-group" id="select-board"></div>  
      <button type="submit" id="update-pin-btn--${pinObject.firebaseKey}" class="btn btn-primary">Update Pin</button>
  </form>`;

  selectBoard(pinObject);
};

export default updatePinForm;
