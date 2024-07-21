const semak = document.querySelectorAll(".semak");
const oki = document.querySelectorAll(".oki");
const papanSkor = document.querySelector(".papan-skor");
const hit = document.querySelector("#hit");

let semakSebelumnya;
let selesai;
let skor;

function randomSemak(semak) {
  const t = Math.floor(Math.random() * semak.length);
  const tRandom = semak[t];
  if (tRandom == semakSebelumnya) {
    randomSemak(semak);
  }
  semakSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanOki() {
  const tRandom = randomSemak(semak);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanOki();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanOki();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove("muncul");
  hit.play();
  papanSkor.textContent = skor;
}

oki.forEach(t => {
  t.addEventListener("click", pukul);
});