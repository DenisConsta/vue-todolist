
const { createApp } = Vue;

createApp({
  data(){
    return{

      errorString: '',
      inputText: '',
      tasks: [
        {
          text: 'Compra pomodori',
          done: false,
          quantity: 5
        },
        {
          text: 'Stirare',
          done: true,
          quantity: 1
        },
        {
          text: 'Finire di leggere il libro',
          done: false,
          quantity: 1
        }

      ]

    }
  },
  methods:{
    
    removeTask(i) {
      this.errorString = '';
      if (this.tasks[i].done) this.tasks.splice(i, 1); 
      else this.errorString = 'Attenzione, bisogna completare il task prima di eliminarlo';
    },
    addTask() {
      this.errorString = '';
      if (this.inputText.length >= 5) {
        const pos = this.isPresent(this.inputText);

        if (pos !== -1) this.tasks[pos].quantity++;
        else this.tasks.push({ text: this.inputText, done: false, quantity: 1 });
      
        this.inputText = '';
      }
      else {
        this.errorString = 'Minimo 5 caratteri'
      }
    },
    isPresent(value) {
      let out = -1;
      for (let i=0; i<this.tasks.length; i++) {
        if (this.tasks[i].text === value) out = i; 
      }
      return out;
    }
  }
}).mount('#app');