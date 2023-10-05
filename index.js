// Change top nav bar when scroll page
const changeNavBarWhenScroll = () => {
  const navBar = document.querySelector(".top-nav-bar");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navBar.classList.add("scroll-header");
  } else {
    navBar.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", changeNavBarWhenScroll);

// Handle load more button in portfolio
// Button will not display when no more images to be loaded
const totalImages = 16;
const imagesPerLoad = 4;
let displayedImages = 8;

const loadMoreBtn = document.querySelector(".load-more-btn");
const list = document.querySelector(".portfolio-list");

const checkDisplayButton = () => {
  if (displayedImages < totalImages) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }
};

const loadMoreImages = () => {
  const imagesToLoad = Math.min(totalImages - displayedImages, imagesPerLoad);

  const div = document.createElement("div");
  div.className = "portfolio-image-list";
  for (i = 0; i < imagesToLoad; i++) {
    const image = document.createElement("img");
    image.className = "portfolio-item";
    image.src = `./images/portfolio/p${displayedImages + 1}.jpg`;
    image.alt = `Picture ${displayedImages + 1}`;
    div.appendChild(image);
    displayedImages++;
  }

  list.appendChild(div);
  checkDisplayButton();
};

loadMoreBtn.addEventListener("click", loadMoreImages);
