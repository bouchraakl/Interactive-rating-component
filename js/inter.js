let nums = document.querySelectorAll(".nums");
let btn = document.querySelector('button');
let pop = document.querySelector('.pop')
let body = document.querySelector('body');
let num = document.querySelector('.numm');

let current;
for (let index = 0; index < nums.length; index++) {
  nums[index].addEventListener("click", function () {
    nums.forEach((x) => {
      x.classList.remove("color");
      x.classList.add("off");
    });
    nums[index].classList.toggle("off");
    nums[index].classList.toggle("color");
    current = index + 1;
  });
}

btn.addEventListener('click',function(){
pop.remove();
body.insertAdjacentHTML('afterbegin',`
<section class="pop poptwo">
<picture>
<img class='imgtwo' src="./images/illustration-thank-you.svg" alt="thanks">
</picture>
<p class="headertwo">You selected <span class"numm">${current}</span> out of 5</p>
<p class="discp discptwo"> We appreciate you taking the time to give a rating. If you ever need more support,don't hesitate to get in touch</p>
</section>
`)
})