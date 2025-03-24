const container = document.querySelector('.container'),
user_result = document.querySelector('.user_result img'),
capu_result = document.querySelector('.capu_result img'),
resultat = document.querySelector('.resultat'),
option_img = document.querySelectorAll('.option_img');


/* console.log(container,user_result,capu_result,resultat,option_img)*/

for(let i = 0 ; i < option_img.length ; i++){
    option_img[i].addEventListener('click',(e) =>{

        option_img[i].classList.add('active');

        for(let j = 0 ; j < option_img.length ; j++){
            option_img[i] !== option_img[j] && option_img[j].classList.remove('active');
        }

        container.classList.add('start');


       let time = setTimeout(()=>{
            container.classList.remove('start');



            let imgsrc = e.target.src;
        console.log(imgsrc)

            user_result.src = imgsrc ;


            let randomNumber = Math.floor(Math.random() * 3);
            let capuImages = ["img/hand-paper.png","img/hand-scissors.png","img/hand-fist.png"]
            capu_result.src = capuImages[randomNumber];
            


            let capuValue = ["P" , "S" , "R"][randomNumber];

            let userValue = ["P" , "S" , "R"][i];

            let outcomes = {
                RR: "Draw",
                RP: "Capu",
                RS: "User",

                PP: "Draw",
                PR: "User",
                PS: "Capu",

                SS: "Draw",
                SR: "Capu",
                SP: "User",
                
            };

            let outComeValue = outcomes[userValue + capuValue];

            resultat.textContent = userValue === capuValue ? "Match Draw" : `${outComeValue} Won !!`;
       },2500)



        
    })
}

