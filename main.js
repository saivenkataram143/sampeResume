function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("applicaton/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
     if(xhr.readyState===4 && xhr.status=="200")
     {
       callback(xhr.responseText);
     }
   }
    xhr.send(null);
}

  loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_carrer(data.carrer);
  fun_education(data.education);
  fun_acheive(data.acheivements);
  fun_technical(data.technical);
});

var d2=document.getElementById("child2");


function fun_carrer(car){
  var head=document.createElement("h2");
  head.textContent="Carrer Objective";
  d2.appendChild(head);
  var he=document.createElement("hr");
  d2.appendChild(he);
  var li=document.createElement("p");
  li.textContent=car.info;
  d2.appendChild(li);

}

function fun_education(edu){
  var head=document.createElement("h2");
  head.textContent="Education Qualification";
d2.appendChild(head);
  var he=document.createElement("hr");
  d2.appendChild(he);
  var list=document.createElement("ul");
  d2.appendChild(list);
for(var i=0;i<edu.length;i++)
 {
   var listItem=document.createElement("li");
   listItem.textContent=edu[i].degree;
   list.appendChild(listItem);

   var listItem=document.createElement("p");
   listItem.textContent=edu[i].Institute;
   list.appendChild(listItem);

   var listItem=document.createElement("p");
   listItem.textContent=edu[i].data;
   list.appendChild(listItem);
 }
}
function fun_acheive(ach){
  var head=document.createElement("header");
  head.textContent="Acheivements";
  d2.appendChild(head);
  var he=document.createElement("hr");
  d2.appendChild(he);
  var list=document.createElement("ul");
  d2.appendChild(list);
for(var i=0;i<ach.length;i++)
 {
   var listItem=document.createElement("li");
   listItem.innerHTML=ach[i].name;
   list.appendChild(listItem);
 }
}
function fun_technical(tech){
  var head=document.createElement("header");
  head.textContent="Technical";
  d2.appendChild(head);
  var he=document.createElement("h3");
  d2.appendChild(he);
  var list=document.createElement("ul");
  d2.appendChild(list);
for(var i=0;i<tech.length;i++)
 {
   var listItem=document.createElement("li");
   listItem.textContent=tech[i].name;
   list.appendChild(listItem);
 }
}
function fun_skills(skills){
  var head=document.createElement("h2");
    head.textContent="skills";
  d2.appendChild(he);
var h2=document.createElement("hr");
  d2.appendChild(h2);
var table=document.createElement("table");
d2.appendChild(table);
 for(var i=0;i<skills.length;i++)
{
tr="<tr><td>"+skills[i].name+"</td><td>"+skills[i].data+"</tr>";
}
table.innerHTML=tr;
table.border="1";
}
