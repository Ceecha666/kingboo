let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".others-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function direct() {
  let num = "62895417271155";
  let pesan1 = document.getElementById("pesan1").value;
  let pesan2 = document.getElementById("pesan2").value;
  let pesan3 = document.getElementById("pesan3").value;
  let pesan4 = document.getElementById("pesan4").value;
  let pesan5 = document.getElementById("pesan5").value;
  let pesan6 = document.getElementById("pesan6").value;
  let pesan7 = document.getElementById("pesan7").value;
  let pesan8 = document.getElementById("pesan8").value;
  let pesan9 = document.getElementById("pesan9").value;

  var win = window.open(
    `https://api.whatsapp.com/send?phone=${num}&text=
  *DAFTARPAUDQ* %0a%0a
  *NAMA ANAK* : ${pesan1} %0a
  *UMUR* : ${pesan4} %0a
  *TTL* : ${pesan8},${pesan9} %0a
  *JENIS KELAMIN* : ${pesan7} %0a
  *NAMA ORANG TUA* : ${pesan2} %0a
  *ALAMAT* : ${pesan3} %0a
  *NO WA AKTIF* : ${pesan5} %0a
  *JENIS PENDIDIKAN* : ${pesan6} %0a
  %0a
  Silahkan segera lengkapi document persyaratan`,
    "_blank"
  );
}
