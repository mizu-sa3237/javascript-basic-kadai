const heading = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
  setTimeout(() => {
    heading.textContent='ボタンをクリックしました';
  }, 2000);  
});


