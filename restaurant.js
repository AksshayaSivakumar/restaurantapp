const myForm = document.getElementById('my-form');
const numberInput = document.getElementById('tableNo');
const dishInput = document.getElementById('dish');
const priceInput = document.getElementById('price');


myForm.addEventListener('submit', onSubmit);
  
function onSubmit(e)
{
  e.preventDefault();
 
    const TableNo=numberInput.value
    const Dish=dishInput.value
    const Price=priceInput.value
    
    let obj={
      TableNo,
      Dish,
      Price
    }

    
   axios.post("https://crudcrud.com/api/c89f885b6bcf48a4b83c6509cf63f683/order",obj)
      .then((response)=>{
   
   console.log(response);
 
 //document.getElementById('my-form').reset();
  })
  showonscreen(obj);

}

  axios.get("https://crudcrud.com/api/c89f885b6bcf48a4b83c6509cf63f683/order")
    .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++)
        {
            showonscreen(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error);
    })

    function showonscreen(obj)
    {
    
  const parentElem =document.getElementById('users')
  const childElem=document.createElement('li')
  childElem.textContent=obj.TableNo+' - '+ obj.Dish +' - '+ obj.Price
  
  const deleteBtn=document.createElement('input')
  deleteBtn.type='button'
  deleteBtn.value='delete '

  deleteBtn.onclick=()=>{
    axios.delete("https://crudcrud.com/api/c89f885b6bcf48a4b83c6509cf63f683/order/652d39c22e0fb203e853f3a4",obj)
      .then((response)=>{
   //axios.showonscreen(response.data);
   console.log(response);
   }) 
     .catch((error)=>{
        console.log(error);
    })
    parentElem.removeChild(childElem)

  }
  childElem.appendChild(deleteBtn)
  parentElem.appendChild(childElem)
  
}