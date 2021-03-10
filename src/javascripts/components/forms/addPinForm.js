// import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#board-container').innerHTML = '';
  document.querySelector('#add-board-btn').innerHTML = '';
  document.querySelector('#form-container').innerHTML += `
  <form id="submit-pin-form" class="mb-4">
    <div div class="form-group">
      <label for="title">Pin Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
    </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="image" placeholder="Image URL" required>
  </div>
  <button type="submit" id="submit-pin" class="btn btn-primary">Submit Book</button>
</form>`;

// selectPin();
};

export default addPinForm;
