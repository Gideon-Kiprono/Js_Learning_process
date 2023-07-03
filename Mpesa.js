let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer mZTEmujGAY9lIlH1KerPoLo6GmnK");

let anotherElement = document.createElement();
anotherElement.setAttribute("type", "submit");
anotherElement.setAttribute("value", "pay again");
document.getElementById("mpesaform").append("anotherElement");

function initiatePayment(phone, amount) {
  fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
    method: "POST",
    headers,
    body: JSON.stringify({
      BusinessShortCode: 174379,
      Password:
        "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwNjMwMDk0MTQ0",
      Timestamp: "20230630094144",
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: 174379,
      PhoneNumber: phone,
      CallBackURL: "https://mydomain.com/path",
      AccountReference: "CompanyXLTD",
      TransactionDesc: "Payment of X",
    }),
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

document.getElementById("mpesaform").addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = document.getElementById("amount").value;
  let phone = document.getElementById("phone").value;
  //console.log(typeof amount);

  //console.log(parseInt(amount));

  initiatePayment(parseInt(phone), parseInt(amount));
});
