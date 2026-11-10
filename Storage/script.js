localStorage.length;  // 8 (Datos en el localStorage)
localStorage.setItem("username", "ManzDev"); // Guardamos

const username = localStorage.getItem("username");  // Recuperamos
//localStorage.removeItem("username");  // Eliminamos

console.log(username);  // "ManzDev"
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}=${value}`);
}
