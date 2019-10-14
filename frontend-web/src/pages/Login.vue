<template>
<div class="container">
    <div class="form">

        <h3>Entrar</h3>
        <div class="img-centro"></div>
        <q-input outlined label="username" :dense="dense"/>
       <q-input outlined label="password" :dense="dense"/>
        <button type="button" onclick="login()">Login</button>
        </div>
        </div>

</template>

<style lang="stylus" scoped>

.container{
  display:flex;
  justify-content :center;
  align-items:center;
}

.form {
  margin-top: 5%;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form input {
  font-family: "Roboto", sans-serif;
  background: #f2f2f2;
  width: 100%;
  margin-top: 5%;
  margin: 15px;
  padding: 15px;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  background:#F4853E;
  width: 100%;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background:#F4853E;

}

.img-centro {
  background-color: blue;
  background: url("https://i.imgur.com/sV8gZBV.png");
  background-size: 220px auto;
  width: 220px;
  height: 200px;
  box-sizing: border-box;
}

</style>
