<template>
<div class="container">
    <div class="form">

        <h3>Login</h3>
        <div class="img-centro"></div>
        <q-input outlined label="username" :dense="dense" v-model="username" />
       <q-input outlined label="password" :dense="dense" v-model="password" />
        <button type="button" onclick="login()">Login</button>
        </div>
        </div>

</template>

<style lang="stylus" scoped>

.container{
  display:flex;
  justify-content :center;
  align-items:center;
  flex-direction: column;
}

.form {
  margin-top: 5%;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form q-input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background:#F4853E;
  width: 100%;
  border: 0;
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
  width: 250px;
  height: 250px;
  border: 17px solid #f4853e;
  box-sizing: border-box;
}

</style>
