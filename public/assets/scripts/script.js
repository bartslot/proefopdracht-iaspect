//API URL
const api = 'https://jsonplaceholder.typicode.com/photos';

// Fetch the JSON data
fetchImageData();

function fetchImageData() {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      // Process the JSON data and generate images
      console.log(data);
      generateImages(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Generate images from JSON data

function generateImages(data) {
  const targetImages = document.getElementsByClassName('target-image');

  for (let i = 0; i < targetImages.length; i++) {
    const targetImage = targetImages[i];
    const imageId = parseInt(targetImage.id.split('-')[2]);

    if (imageId) {
      const foundImage = data.find(image => image.id === imageId);

      if (foundImage) {
        targetImage.src = foundImage.thumbnailUrl;
        targetImage.alt = foundImage.title;

      }
    }
  }
}

console.log(api);