let currentBanner = 0;
const banners = document.querySelectorAll('.banner img');

function showBanner(index) {
  banners.forEach((banner, i) => {
    banner.classList.toggle('active', i === index);
  });
}

function nextBanner() {
  currentBanner = (currentBanner + 1) % banners.length;
  showBanner(currentBanner);
}

function prevBanner() {
  currentBanner = (currentBanner - 1 + banners.length) % banners.length;
  showBanner(currentBanner);
}

showBanner(currentBanner);
