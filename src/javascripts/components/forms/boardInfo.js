const boardInfo = (boardObject) => {
  document.querySelector('#form-container').innerHTML += `
  <h1>${boardObject}</h1>`;
};

export default boardInfo;
