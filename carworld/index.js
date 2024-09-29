function registerCar(){
    const car={
        id:regkey.value,
        Brand:regbrand.value,
        price:regprice.value
    }
    if(car.id=="" || car.Brand=="" || car.price==""){
        alert("You have not entered any alue")
    }
    else if(car.id in localStorage){
        alert("Carkey already exists")

    }
    else{
        localStorage.setItem(car.id,JSON.stringify(car))
        console.log(car);
    }
}



function findCar(){
    const enteredkey=findkey.value
    if(enteredkey in localStorage){
       let details=JSON.parse(localStorage.getItem(enteredkey))

       let data=`<div class="card mt-5" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">key:${details.id}</li>
    <li class="list-group-item">Brand:${details.Brand}</li>
    <li class="list-group-item">price:${details.price}</li>
  </ul>
</div>`

display.innerHTML=data;
    }
    else if(enteredkey===""){
        alert("Enter key")
    }
    else{
        alert("Enter a valid key")
    }
}

function deleteCar(){
    let delekey=deletebutton.value
    if(delekey in localStorage){
        let car=localStorage.removeItem(delekey)
        alert("Deleted successfully")
    }
    else{
        alert("Enter a valid key")
    }
}


function clearAll(){
    let car=localStorage.clear()
}