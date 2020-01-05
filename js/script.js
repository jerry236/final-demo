$(document).ready(function() {
    // INITIALIZE FIREBASE
    firebase.initializeApp({
      apiKey: "AIzaSyCRofAkZKqCnOoAKUymp7fmB_2l42O0kWo",
      authDomain: "final-demo-1978a.firebaseapp.com",
      databaseURL: "https://final-demo-1978a.firebaseio.com",
      projectId: "final-demo-1978a",
      storageBucket: "final-demo-1978a.appspot.com",
      messagingSenderId: "167982603828",
      appId: "1:167982603828:web:825f6dca2581d76a337461",
      measurementId: "G-YNGSXT60LT"
    });
  
    // REFERENCE CHATROOM DOCUMENT
    let cartRef = firebase.firestore().collection("jerryCart");
    // REFERENCE CHATROOM MESSAGES
    //   let messagesRef = docRef.collection("messages");
  
    const $buy1Button = $("#buy1");
    const $buy2Button = $("#buy2");
    const $buy3Button = $("#buy3");
    const $buy4Button = $("#buy4");
    const $buy5Button = $("#buy5");
    const $buy6Button = $("#buy6");
    const $cartTable = $("#cart-table");
    const $cartTotalPrice = $("#cart-total");
    const $clearCartBtn = $("#clear-cart");
  
    $buy1Button.click(function() {
      cartRef.add({
        name: "Tomtoc 精選風格",
        price: 1180,
        timeStamp: Date.now()
      });
    });
  
    $buy2Button.click(function() {
      cartRef.add({
        name: "Tomtoc 時尚嚴選",
        price: 990,
        timeStamp: Date.now()
      });
    });
  
    $clearCartBtn.click(function() {
      $cartTotalPrice.html("0.00");
      $cartTable.html("");
    });
  
    cartRef.onSnapshot(function(querySnapshot) {
      let total = 0;
      querySnapshot.docs.map((doc, i) => {
        const eachCell = doc.data();
        let cellContent = `
              <tr>
                  <td>${i + 1}</td>
                  <td>${eachCell.name}</td>
                  <td>${eachCell.price}</td>
              </tr>
            `;
        total += eachCell.price;
  
        let totalContent = `$${total.toFixed(2)}`;
  
        $cartTotalPrice.html(totalContent);
        $cartTable.append(cellContent);
      });
    });
  });