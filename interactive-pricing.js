const sliding =document.querySelector(".sliding");
const slider =document.querySelector(".slider");
const progress=document.querySelector(".progress");
const page=document.querySelector(".page-view");
const boldCost=document.querySelector(".bold-cost");
const toggle=document.querySelector(".circle");
const toggleHome=document.querySelector(".on-off");
let time=document.querySelector(".time-frame");
let flexPlans=document.querySelector(".flex-plans")
let x=window.matchMedia("(min-width:1000px)");
// let mantrac=widow.matchMedia("(min-width:1100)") 
const thousand="K PAGEVIEWS";
const million="M PAGEVIEWS";
const views=[10,50,100,500,1];
const costs=[8.00,12.00,16.00,24.00,36.00,0.00]
let output=0;
sliding.value="60";
progress.style.width=`${sliding.value}%`;
console.log(sliding.value)
let slide=sliding.value;
let leftSide=true;

slider.style.left=`calc(${sliding.value-2*(sliding.value/20)}%)`;
console.log(slider.style.left)


sliding.addEventListener("input",()=>{

    sliding.step=20;
    slide=sliding.value
    progress.style.width=`${sliding.value}%`
    slider.style.left=`calc(${sliding.value-2*(sliding.value/20)}%)`;
    console.log(slider.style.left)
    media(x)
    if(sliding.value){
        console.log(sliding.value)
    }
    if(leftSide){
        pageView()
        console.log("month");
    }
    else{
        yearlyCost()
        console.log("year");
    }

})
const pageView=()=>{
    console.log(slide)
    if(slide=="20"){ 
        page.textContent=`${10+thousand}`;
        boldCost.textContent=`$${costs[0]}.00`
    }
    else if(slide=="40"){ 
        page.textContent=`${50+thousand}`;
        boldCost.textContent=`$${costs[1]}.00`;
    }
    else if(slide=="60"){ 
        page.textContent=`${100+thousand}`;
        boldCost.textContent=`$${costs[2]}.00`;
    }
    else if(slide=="80"){ 
        page.textContent=`${500+thousand}`;
        boldCost.textContent=`$${costs[3]}.00`
    }
    else if(slide=="100"){ 
        page.textContent=`${1+million}`;
        boldCost.textContent=`$${costs[4]}.00`;
        }
    else { 
        page.textContent="PAGEVIEWS >>>";
        boldCost.textContent=`$${costs[5]}.00`
    }
}

    const yearlyCost=()=>{
        if(slide=="20"){ 
    page.textContent=`${10+thousand}`;
    boldCost.textContent=`$${costs[0]-costs[0]*0.25}.00`
        }
        else if(slide=="40"){ 
            page.textContent=`${50+thousand}`;
            boldCost.textContent=`$${costs[1]-costs[1]*0.25}.00`;
        }
        else if(slide=="60"){ 
            page.textContent=`${100+thousand}`;
            boldCost.textContent=`$${costs[2]-costs[2]*0.25}.00`;
        }
        else if(slide=="80"){ 
            page.textContent=`${500+thousand}`;
            console.log("its 80")
            boldCost.textContent=`$${costs[3]-costs[3]*0.25}.00`
        }
        else if(slide=="100"){ 
            page.textContent=`${1+million}`;
            boldCost.textContent=`$${costs[4]-costs[4]*0.25}.00`;
            }
        else { 
            page.textContent="PAGEVIEWS >>>";
            boldCost.textContent=`$${costs[5]}.00`
        }
    }
console.log(toggleHome)
toggleHome.addEventListener("click",()=>{
    let tl=toggle.style.marginLeft;
    let tr=toggle.style.marginRight;
    if(tl=="22px"||tr=="2"){
        toggle.style.marginLeft="2px";
        toggle.style.marginRight="22px";
        console.log("9")
toggleHome.style.backgroundColor="hsl(221, 19%, 66%)";
    leftSide=true;
    time.textContent=" /month";
    pageView()
            }
          
    else{
        toggle.style.marginLeft="22px";
        toggle.style.marginRight="2px";
        toggleHome.style.backgroundColor="hsl(221, 19%, 66%)"
       leftSide=false
       console.log("10")
       time.textContent=" /year"
       yearlyCost()
    }
  
})



flexPlans.addEventListener("mouseover",()=>{

    toggleHome.style.cursor="pointer";
   toggleHome.style.backgroundColor="hsl(174, 86%, 45%)";
})

flexPlans.addEventListener("mouseleave",()=>{
   toggleHome.style.backgroundColor="hsl(221, 19%, 66%)";
})


function media(medi){
    console.log("im here")
    console.log(sliding.value)
if(medi.matches){
    console.log(medi)
    slider.style.marginLeft=`calc(${(-sliding.value/10)+10}px)`
    console.log("its working")
    console.log(slider.style.marginLeft)
}
// else if(mani.matches){
//     console.log(mani)
//     slider.style.marginLeft=`calc(${(-sliding.value/10)+10+sliding.value%3}px)`
//     console.log("its working well")
//     console.log(slider.style.marginLeft)
// }
else{
    slider.style.marginLeft=`calc(${(-sliding.value/10)+10}px)`
    console.log(sliding.value)
}
}

// function medi(media){
//     if(media.matches){
//         slider.style.margin="0";
//         console.log("Working")
//     }
//     else{
//         slider.style.marginLeft=`calc(${(-sliding.value/10)+10}px)`
//     }
// }

// let media=window.matchMedia("(min-width: 800px)");
// medi(media);
// media.addEventListener("click",medi)