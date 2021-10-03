async function getCats() {
    let cats;
    try {
      let data = await fetch("https://cataas.com/api/cats", {
        method: "GET"
      });
      cats = await data.json();
    } catch (error) {
      console.log(error);
    }
    return cats;
  }
  
  async function displayCats() {
    let cats = await getCats();
  
    // console.log(cats);

    // getImg=(()=> {
    //    let img = "https://cataas.com/cat"
    //     return img;
    // })

    let catList = document.querySelector(".user-list");
    catList.innerHTML = "";
    
    cats.forEach((cats) => {
      catList.innerHTML += `<div class="user-container">
      <img src = "https://cataas.com/cat" />
      <div>  
      <h2>${cats.tags}</h2> 
      <button onclick = "getUrl(${cats.id})" class="url-button" >URL</button>
      </div>
      </div>`;
    });
  }
  displayCats();
  
//   async function getUrl(id) {
//     let url = 'https://cataas.com/cat';
    
//     let data = await fetch("https://614eac00b4f6d30017b482d8.mockapi.io/users/" + id, {
//       method: "PUT",
//       body: JSON.stringify({
//         image: url,
//       }),
//       headers: {
//         "Content-Type" : "application/json"
//       }
//     }
//    );
//     displayUsers();  
    
//   }
//    async function getImg(id) {
//     let catAvatar = "https://cataas.com/cat";
    
//     let data = await fetch("https://cataas.com/api/cats/" , {
//       method: "POST",
//       body: JSON.stringify({
//         avatar: catAvatar
//       }),
//       headers: {
//         "Content-Type" : "application/json"
//       }
//     }
//    );
//     displayUsers();  
    
//   }