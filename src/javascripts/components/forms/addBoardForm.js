import selectBoard from './selectBoard';

const addBoardForm = () => {
  document.querySelector('#board-container').innerHTML = '';
  document.querySelector('#add-board-btn').innerHTML = '';
  document.querySelector('#form-container').innerHTML += `
  <form id="submit-board-form" class="mb-4">
    <div div class="form-group">
      <label for="title">Board Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter Board Title" required>
    </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="image" placeholder="Image URL" required>
  </div>
  <div class="form-group">
    <label for="price">First Name</label>
    <input type="text" class="form-control" id="first-name"
    placeholder="First Name" required>
  </div>
  <div class="form-group" id="select-author">
    </div>
  <button type="submit" id="submit-board" class="btn btn-primary">Submit board</button>
</form>`;

  selectBoard();
};

export default addBoardForm;
