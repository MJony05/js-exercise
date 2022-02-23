let login = prompt("Loginni kiriting: ").toLowerCase();
let password;
if (login == "admin") {
  password = prompt("admin parolni kiriting;").toLowerCase();
  if (password == "admin") {
    alert("Tabriklasmi siz tizimga admin bolib kirdiz");
  } else {
    alert("Admin parolni xato kiritdiz");
  }
} else if (login == "user") {
  password = prompt("user parolni kiriting;").toLowerCase();
  if (password == "user") {
    alert("Tabriklaymiz siz tizimga oddiy user bolib kirdiz");
  } else {
    alert("user parolni xato kiritdiz");
  }
} else {
  alert("Login xato kiritildi!!!");
}
