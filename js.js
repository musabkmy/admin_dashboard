const projectsActions = document.querySelectorAll(".project-actions");
projectsActions.forEach((projectActions) => {
  const addFav = document.createElement("i");
  addFav.classList.add("fa-regular", "fa-star");
  const addWatch = document.createElement("i");
  addWatch.classList.add("fa-regular", "fa-eye");
  const share = document.createElement("i");
  share.classList.add("fa-regular", "fa-share-from-square");

  projectActions.appendChild(addFav);
  projectActions.appendChild(addWatch);
  projectActions.appendChild(share);
});
