// import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML += `
  <form id="submit-pin-form" class="mb-4">
    <div div class="form-group">
      <label for="title">Pin Title</label>
      <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" placeholder="Pin Title" required>
    </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="pin-image" placeholder="Image URL" required>
  </div>
  <div class="form-group">
  <label for="image">Image URL</label>
  <input type="text" class="form-control" id="pin-description" placeholder="Description" required>
</div>
  <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pin</button>
</form>`;

// selectPin();
};

export default addPinForm;
