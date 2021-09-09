const form1 = document.querySelector("#searchForm");

form1.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form1.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  deleteImages();
  makeImages(res.data);
  form1.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const deleteImages = () => {
  const images = document.body.getElementsByTagName("img");
  const len = images.length;

  for (let i = 0; i < len; i++) {
    images[0].parentNode.removeChild(images[0]);
  }
};
