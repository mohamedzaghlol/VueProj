<template>
  <template>

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">List of users</div>
            <div class="panel-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.PersonName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.Grad }}</td>
                    <td>
                      <!-- <button @click="editPerson(user.id)">Edit</button> -->
                      <router-link :to="{ name: 'UpdatePerson', params: { id: user.id } }">
                        Edit
                      </router-link>
                      <router-link :to="{ name: 'PersonDetails', params: { id: user.id } }">
                        User Details
                      </router-link>
                      <!-- <button @click="showDetails(user.id)">Details</button> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <a href="CreatePerson.vue">Create Person</a>


    </div>

  </template>
  <div>
    <router-view></router-view>
    <component :is="activeComp"></component>
  </div>

</template>

<script>
import CreatePerson from './components/CreatePerson.vue';
import HelloWorld from './components/HelloWorld.vue'
import PersonDetails from './components/PersonDetails.vue';
import UpdatePerson from './components/UpdatePerson.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CreatePerson,
    PersonDetails,
    UpdatePerson
  },

  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios
        .get('https://localhost:7148/Person/GetAllPersons')
        .then(response => (this.users = response.data))
        .catch(error => console.log(error.message));
    },
    // editPerson(_personId) {
    //   this.$router.push({ name: 'UpdatePerson', params: { _personId } }); // Navigate to the UpdatePerson page
    // },
    // showDetails(_personId) {
    //   this.$router.push({ name: 'PersonDetails', params: { _personId } }); // Navigate to the PersonDetails page
    // },
  }
  ,
  mounted() {
    axios
      .get('https://localhost:7148/Person/GetAllPersons')
      .then(response => {
        this.results = response.data[1];
        console.log(this.results);
      })
      .catch(err => {
        throw err;
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
