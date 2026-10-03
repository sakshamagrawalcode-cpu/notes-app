let note=document.querySelector("#note-screen");
let add=document.querySelector("#add");
let form=document.querySelector("#form-screen");
let save=document.querySelector("#submit");
let down=document.querySelector("#down");
let up=document.querySelector("#up");
let card_p=document.querySelector("#card-container");
let curr=0;
add.addEventListener("click",()=>{
    note.style.display="none";
    form.style.display="flex";
})

down.addEventListener("click",()=>{
   curr++;
   switch_card();
})

up.addEventListener("click",()=>{
   curr--;
   switch_card();
})
save.addEventListener("click",()=>{
  
    let title=document.querySelector("#title").value;
    
    let content=document.querySelector("#text").value;
    
   let newCard=document.createElement("div");
   
    newCard.classList.add("card");
    
      let tital=document.createElement("h1");
        tital.textContent=title;

     newCard.append(tital);
      let con=document.createElement("h3");
      con.textContent=content;
      newCard.append(con);
    let a=JSON.parse(localStorage.getItem("arr")) || [];
    let n=a.length;
    curr=n;
    save_card(newCard);
    note.style.display="flex";
    form.style.display="none";



    
})
function save_card(newCard){

   let a=JSON.parse(localStorage.getItem("arr"))|| [];

    a.push(newCard.outerHTML);
   localStorage.setItem("arr",JSON.stringify(a))
   show_card();
}
function show_card(){
    if(localStorage.getItem("arr")!=null){
     let a=JSON.parse(localStorage.getItem("arr"));
     card_p.innerHTML=(a[curr]);
    }
   
         
}
function switch_card(){
    
     let a=JSON.parse(localStorage.getItem("arr"))|| [];
     JSON.parse(localStorage.getItem("arr"))
     let n=a.length;
     if(curr<0){
        if(n>0)curr=n-1;
        else curr=0;
     }
     if(curr>=n){
        curr=0;
     }
   show_card();
         
}
let a=JSON.parse(localStorage.getItem("arr"));
show_card();
