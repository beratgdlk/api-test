// Kullanıcı verilerini çekmek için asenkron bir fonksiyon tanımlıyoruz
async function fetchUsers() {
    try {
      // Veriyi çekmek için fetch fonksiyonunu kullanıyoruz ve yanıtı bekliyoruz
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
      // Yanıtı JSON formatına dönüştürüyoruz
      const users = await response.json();
  
      // Kullanıcı verilerini konsola yazdırıyoruz
      console.log(users);
  
      // Kullanıcı verilerini döndürüyoruz
      return users;
    } catch (error) {
      // Hata oluşursa, hatayı konsola yazdırıyoruz
      console.error("Hata:", error);
    }
  }
  
  // Kullanıcıları render etmek için bir fonksiyon tanımlıyoruz
  const renderUsers = (users) => {
    // HTML'deki "card-container" id'li elementi alıyoruz
    const cardContainer = document.getElementById("card-container");
  
    // Kullanıcıları döngüye alarak her biri için bir kart oluşturuyoruz
    const userCards = users.map((user) => {
      // Kart için yeni bir div oluşturuyoruz
      const card = document.createElement("div");
      card.classList.add("user-card"); // Kart div'ine "user-card" sınıfını ekliyoruz
  
      // Kullanıcı adını göstermek için bir div oluşturuyoruz
      const userName = document.createElement("div");
      userName.classList.add("user-name"); // "user-name" sınıfını ekliyoruz
      userName.textContent = user.title; // Kullanıcının başlığını textContent ile ekliyoruz (user.name yerine user.title)
  
      // Kullanıcı yaşını göstermek için bir div oluşturuyoruz
      const userAge = document.createElement("div");
      const age = Math.floor(Math.random() * 50) + 20; // 20 ile 69 yaş arasında rastgele bir yaş oluşturuyoruz
      userAge.classList.add("user-age"); // "user-age" sınıfını ekliyoruz
      userAge.textContent = `Age: ${age}`; // Yaşı textContent ile ekliyoruz
  
      // Kart div'ine kullanıcı adını ve yaşını ekliyoruz
      card.appendChild(userName);
      card.appendChild(userAge);
  
      // Kartı ve yaşı döndürüyoruz
      return {card, age};
    });
  
    // Oluşturulan kartları cardContainer'a ekliyoruz
    userCards.forEach(({card}) => cardContainer.appendChild(card));
    userCards.forEach(({card, age}) => {
      if (age > 35) {
        // Eğer yaş 35'ten büyükse, karta "old-user" sınıfını ekliyoruz
        card.classList.add("old-user");
      }
    });
  };
  
  // fetchUsers fonksiyonundan elde edilen kullanıcı verileriyle renderUsers fonksiyonunu çağırıyoruz
  fetchUsers().then((users) => renderUsers(users));
  