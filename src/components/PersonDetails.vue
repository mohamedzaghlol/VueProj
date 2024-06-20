<template>
    <div>
      <h2>Person Details</h2>
      <div v-if="person">
        <p><strong>Name:</strong> {{ person.name }}</p>
        <p><strong>Email:</strong> {{ person.email }}</p>
        <p><strong>Phone:</strong> {{ person.phone }}</p>
        <p><strong>Grad:</strong> {{ person.grad }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        person: null
      };
    },
    mounted() {
      axios.get('https://localhost:7148/Person/GetPersonById/{{$route.params.id}}')
        .then(response => {
          this.person = response.data;
        })
        .catch(error => {
          // Handle error
          alert(error)

        });
    }
  };
  </script>