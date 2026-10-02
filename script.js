let note=document.querySelector("#note-screen");
let add=document.querySelector("#add");
let form=document.querySelector("#form-screen");
let save=document.querySelector("#submit");
let card_p=document.querySelector("#card-container");
let curr=0;
let n=0;

add.addEventListener("click",()=>{
    note.style.display="none";
    form.style.display="flex";
})
let down=document.querySelector("#down");

down.addEventListener("click",()=>{
    let nn;


    if(curr==0){
        nn=curr;
           

    }
    else if(curr==1){
           nn=n
    }
    else{
        nn=curr-1; 
    }
    curr=switch_card(curr,nn);
})
let up=document.querySelector("#up");
up.addEventListener("click",()=>{
    let nn;
    
    if(curr==0){
           nn=curr;
    }
    else if(curr==n){
        nn=1;
    }
    else{
        nn=curr+1; 
    }
    curr=switch_card(curr,nn);
})
save.addEventListener("click",()=>{

    n++;
    let title=document.querySelector("#title").value;
    
    let content=document.querySelector("#text").value;
    
   let newCard=document.createElement("div");
    newCard.id=`a${n}`;
    newCard.classList.add("card");
    
      let tital=document.createElement("h1");
        tital.textContent=title;

     newCard.append(tital);
      let con=document.createElement("h3");
      con.textContent=content;
      newCard.append(con);

            card_p.append(newCard);
       curr= switch_card(curr,n);

    form.style.display="none";
    note.style.display="flex";
})
const switch_card=function (cur, neew){
  document.querySelector(`#a${cur}`).style.display="none";
  document.querySelector(`#a${neew}`).style.display="flex";

  return neew;
     
}
