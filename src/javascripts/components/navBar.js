const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Pinterest</a>
  <button class="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarNav" 
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse mr-auto" id="navbarNav">
    <button id="google-auth" class="btn btn-danger">SIGNOUT</button>
  </div>
</nav>
`;
};
export default navBar;
