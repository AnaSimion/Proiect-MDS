
const list = document.querySelector('#route-list ul');

// delete route
list.addEventListener('click',function(e) {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
//add routes
const addForm = document.forms['add-route'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
  


//create elements

const li = document.createElement('li');
const routeName = document.createElement('span');
const deleteBtn = document.createElement('span');

//add content

deleteBtn.textContent = 'X';
routeName.textContent = value;

//add claasses
routeName.classList.add('name');
deleteBtn.classList.add('delete');


//create whole object
li.appendChild(routeName);
li.appendChild(deleteBtn);
list.appendChild(li);


});


//filter 

const searchBar = document.forms['search-routes'].querySelector('input');
searchBar.addEventListener('keyup', function(e)  {
  const term = e.target.value.toLowerCase();
  const routes = list.getElementsByTagName('li');
  Array.from(routes).forEach(function(route)  {
    const title = route.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
        route.style.display = 'block';
    } else {
        route.style.display = 'none';
    }
  });
});


fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ff7cf22794891a2ad512d0e6434f5284')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))


  
var animation2 = document.getElementById('animation2');
animation2.animate([
  { transform: 'scale(1) rotate(40deg)',  opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(30deg)', opacity: .5, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 1 },
  ], {
    
    duration: 6000, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 0, //milliseconds
    iterations: 1, //or a number
  });

 