<template>
 <div>
  <!--Como utiliza componentes é necessário utilizar o this e em seguida
  a propriedade-->
    <!-- <h1>{{ this.question }}
    </h1> -->

    <!--Se possuir aspas ou qualquer outra entidade html vindo da API ela irá
    transformar em texto através do v-html-->
    <h1 v-html="this.question"></h1>


      <input type="radio" name="options" value="true">
      <label>True</label><br>

      <input type="radio" name="options" value="false">
      <label>False</label><br><button class="send" type="button">Send</button>




  
 </div>

</template>

<script>



export default {
  name: 'App',

  //retorna o objeto com as propriedades de data
  data(){

    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined
    }

  },

  computed: {

    answers(){
      var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      // answers.push(this.correctAnswer);
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correctAnswer);

      return answers;
    }


  },

  created(){
    this.axios.get("https://opentdb.com/api.php?amount=1&category=18").then((response) => {
      this.question = response.data.results[0].question;
      this.incorrectAnswers = response.data.results[0].incorrect_answers;
      this.correctAnswer = response.data.results[0].correct_answer;
    console.log(response.data.results[0])
});
  }

}

//Api utilizada na aplicação
//https://opentdb.com/api.php?amount=1&category=18
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px auto;
  max-width: 960px;

  input[type=radio]{
    margin: 12px 4px;
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }
}

#app input[type=radio]{
    margin: 12px 4px;
  }
</style>
