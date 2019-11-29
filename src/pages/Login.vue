<template>
  <div class="container">

    <q-ajax-bar ref="bar" position="top" color="grey" size="5px" skip-hijack />
    <div class="img"></div>

    <div class="form">
      <h3>Fazer login</h3>

      <q-input class="qinput" label="E-mail" v-model="email" />

      <q-input class="qinput" :type="isPwd ? 'password' : 'text'" label="Senha" v-model="password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn outline color="primary" label="Login" @click="logar()" />
    </div>
  </div>
</template>

</<script>
import { store } from "../store/index";

import User from "../boot/login";
export default {
   data () {
    return {
      token: "",
      isPwd: true,
      errors: [],
      email: null,
      password: null,
      }},
  methods: {

    checkForm: function (e) {
      if (this.email && this.password) {
        return true;
      }
      this.errors = [];

      if(!this.email){
        this.errors.push('O e-mail é obrigatório.')
      }
      if (!this.password) {
        this.errors.push('A senha é obrigatória.');
      }

      e.preventDefault();
    },

    logar(){
  const bar = this.$refs.bar;

      bar.start();
     const vm = this
      const login = {
        email: this.email,
        password: this.password
      };



      User.logar(login)
        .then(response => {
        console.log(response);
          const token = response.data.token;
            User.check(token).then(user => {

              let userPerm = null;

            if(user) {
              if(user.data.roles[0]){
                userPerm = user.data.roles[0].id;
              }
              if(userPerm == 1 || userPerm ==2) {
                console.log(user.data)
                this.$store.commit("Session/updateId", user.data.id);
             this.$store.commit("Session/updateNome", user.data.nome);
             this.$store.commit("Session/updateEmail", user.data.email);
             this.$store.commit("Session/updatePermission", userPerm);
              localStorage.setItem('userToken', token);
              vm.$router.push('/home');
               bar.stop();
            }            else      vm.$q.notify('Você não possui permissões para acessar ao sistema!')
               bar.stop();


            }
         })
        })
        .catch(e => {
               bar.stop();

               vm.$q.notify({message:'Verifique suas credencias e tente novamente!'})

        });
               bar.stop();

    }
  },
  computed: {
    ...mapState({ token: state => state.Session.token }),

     emailC: {
      get() {
        return this.emailC;
      },
      set(value) {
        this.$store.commit("Session/setEmail", value);
      }
    },
     tokenC: {
      get() {
        return this.tokenC;
      },
      set(value) {
        this.$store.commit("Session/setToken", value);
      }
    },
  },

}
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F4853E;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  width: 30%;
  padding: 0px 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2%;
  height: 55vh;
  width: 23%;
  justify-content: center;
  align-items: center;
}

.form h3 {
  margin-top: -20px;
  font-weight: bold;
  font-size: 16pt;
}

.form input {
  font-family: 'Roboto', sans-serif;
  background: #f2f2f2;
  width: 100%;
  margin-top: 1%;
  margin: 15px;
  padding: 15px;
  font-size: 14px;
}

.qinput {
  margin: 5% 0;
  width: 90%;
}

.form button {
  margin-top: 12%;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  background: #F4853E;
  width: 100%;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  width: 90%;
}

.form button:hover, .form button:active, .form button:focus {
  background: #F4853E;
}

.img {
  position: absolute;
  top: 1%;
  left: 1%;
  background-color: blue;
  background: url('https://i.imgur.com/Z7FIWJQ.png');
  background-size: 220px auto;
  width: 250px;
  height: 250px;
  border: 17px solid #f4853e;
  box-sizing: border-box;
}
</style>
