let colorEl =  document.getElementById("color-element")
const btnEl = document.getElementById("btn__el")
let containerEl =  document.getElementById("total__col--cont")
let colourPicker = document.getElementById("color--picker")
let checkedItemselect = document.querySelector("select").value
let checkedItem = document.querySelector("select")

checkedItem.addEventListener("click", function() {
  checkedItem = document.querySelector("select").value
  console.log(checkedItem)

})



btnEl.addEventListener("click", getApi)


fetch(`https://www.thecolorapi.com/id?hex=0047AB`)
    .then(responce => responce.json())
    .then(data => {
      
      
      colorEl.style.background = data.rgb.value
    
    })






function getApi() {
  containerEl.innerHTML = ""
  let pickedColour = colourPicker.value 
  pickedColour = pickedColour.substring(1);
  console.log(checkedItem)


  console.log(pickedColour)
    fetch( `https://www.thecolorapi.com/scheme?hex=${pickedColour}&mode=${checkedItem}`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
              containerEl.innerHTML += `
               <div class="color_box-contianer">
                   <div class="colour" style="background:${data.colors[i].hex.value}"></div>
                  <div class="colour__hex">${data.colors[i].hex.value}</div>
               </div>

              `
              console.log(pickedColour)
            }

          })

        }



         console.log(data.colors[0].hex.value)