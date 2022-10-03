<template>

    <main>
        <div>
            
        </div>
    </main>
  
  
  
  </template>
    
  <script>

  export default {
    name: 'FormComponent',
    props: {
        client: Object
    },
    methods: {
  
      createClient() {
  
        axios.post(this.$emit('ajouter'), this.new_client)
            .then(response => {
              console.log("Le client vient d'être créé : ", response.data);
            })
            .catch(err => console.log(`Quelque chose s'est mal passé : ${err.message}`))
      }
    }
  }
  </script>
  
  <style scoped>
  
  form {
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
    
  form input{
    display: flex;
    flex-wrap: wrap;
    line-height: 2rem;
    justify-content: space-between;
    width: 50%;
    line-height: 2rem;
    border-radius: 5px;
  }
    </style>