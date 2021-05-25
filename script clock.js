function load() {
  //am selectat elementul clock
  const clock = document.getElementById("clock");
  // in interiorul ceasului se va scrie un text
  const now = new Date(); //am creat un nou obiect Date dupa care am luat functiile pentru h,m,s
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.innerText = hours + ":" + minutes + ":" + seconds; //am facut afișarea in interiorul ceasului
  setInterval(load, 1000); // prin intermediul acestei funcții timpul se actualizeaza la fiecare secunda
}
window.onload = load;
