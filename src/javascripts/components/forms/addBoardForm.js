// import selectBoard from './selectBoard';

const addBoardForm = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-board-btn').innerHTML = '';
  document.querySelector('#board-container').innerHTML += `
  <form id="submit-board-form" class="mb-4">
    <div div class="form-group">
      <label for="title">Board Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter Board Title" required>
    </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="board-image" placeholder="Image URL" required>
  </div>
  <div class="form-group">
    <label for="First Name">First Name</label>
    <input type="text" class="form-control" id="first-name"
    placeholder="First Name" required>
  </div>
  <div class="form-group">
  <label for="Last Name">First Name</label>
  <input type="text" class="form-control" id="last-name"
  placeholder="Last Name" required>
</div>
  <div class="form-group" id="select-author">
    </div>
  <button type="submit" id="submit-board" class="btn btn-primary">Submit board</button>
</form>`;

  // selectBoard(); does this go here?
};

export default addBoardForm;
