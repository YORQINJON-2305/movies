const elList = document.querySelector(".movies-collection");
const  elTempleteItem = document.querySelector(".movies-temp").content;
const moviesFragment = document.createDocumentFragment();

for (const move of kinolar) {
    const templeteClone = elTempleteItem.cloneNode(true);

    templeteClone.querySelector(".movies-year").textContent = move.year;
    templeteClone.querySelector(".movies-title").textContent = move.title;
    templeteClone.querySelector(".casts-info").textContent = move.cast.join(", ");
    templeteClone.querySelector(".genras-info").textContent = move.genres.join(", ");

    moviesFragment.appendChild(templeteClone);
};


elList.appendChild(moviesFragment);

