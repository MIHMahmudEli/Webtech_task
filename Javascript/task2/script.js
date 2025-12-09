var images = [
  "https://wallpaperaccess.com/full/1721414.jpg",
  "https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/16:9/w_2560%2Cc_limit/Secrets%2520of%2520Louvre%25201.jpg",
  "https://wallpapercave.com/wp/wp4088744.jpg"
];

var currentIndex = 0;

var bannerImage = document.getElementById('bannerImage');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  bannerImage.src = images[index];
}

showImage(currentIndex);

prevBtn.onclick = function() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
};

nextBtn.onclick = function() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
};

setInterval(function() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}, 3000);
