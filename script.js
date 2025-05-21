let showModal = document.getElementById('showmodal')
let hideModal = document.getElementById('hidemodal')
let modal = document.getElementById('modal')

showModal.addEventListener("click", function(){
modal.style.display = "flex"
// document.body.classList.add("modal")
})

hideModal.addEventListener("click", function(){
    modal.style.display = "none"
})

modal.addEventListener("click", function(){
    modal.style.display = "none"
})


// Sticky Nav
const headerHero = document.querySelector(".header-heropage");
const flexHeader = document.querySelector(".flex-header1");
const navHeight = flexHeader.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) flexHeader.classList.add("sticky");
  else flexHeader.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(headerHero);