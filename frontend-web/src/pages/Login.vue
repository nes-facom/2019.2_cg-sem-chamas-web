<template>
<div class="container">
    <div class="form">

        <h3>Entrar {{email}} </h3>

        <div class="img-centro"></div>
        <q-input class="qinput" filled  label="E-mail" v-model="email" :dense="dense"/>

       <q-input class="qinput"  filled label="Password" v-model="password" :dense="dense"/>
        <button type="button" @click="logar()">Login</button>

        </div>
        </div>

</template>

</<script>
import User from "../boot/login";
export default {
   data () {
    return {
      email: "",
      password: "",
      token: ""
      }},
  methods: {
    logar(){
      const vm = this



      User.logar(this.email, this.password)
        .then(response => {
          console.log(response);
          ($router.push('/'))

        })
        .catch(e => {
          console.log(e)
        });

    }
  },

}
</script>

<style lang="stylus" scoped>

.container{
  display:flex;
  justify-content :center;
  align-items:center;
}

.form {
  margin-top: 5%;
  background: #FFFFFF;
  width: 30%;
  padding: 30px 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form h3
{
  margin:1%
  padding:10px;
}

.form input {
  font-family: "Roboto", sans-serif;
  background: #f2f2f2;
  width: 100%;
  margin-top: 1%;
  margin: 15px;
  padding: 15px;
  font-size: 14px;
}

.qinput{
  margin: 2% 0;
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
  margin: 120px;
}

</style>
