<template>
    <div id="todo-app">
        <h1>Todo App</h1>

        <form action="" @submit.prevent="addTodo" class="inline-form">
        <input type="text" v-model="input" class="form-control input-box" >
        <button @submit.prevent="addTodo" class="btn btn-primary btn-radius">ADD</button>
        </form>
       <div id="tools"> 
           <div id="all">
             <button  class="btn btn-sm" @click="completeAll">COMPLETE ALL</button>
           </div>
           <div id="delete">
               <button class="btn btn-info btn-sm" @click="deleteCompleted"> DELETE COMPLETED</button>
          
               <button class="btn btn-danger btn-sm" @click="deleteAll"> DELETE ALL</button>
           </div>
       </div>

    <div id="cover"> 

       <component :is="components"  :todos="todos" :deleteTodo="deleteTodo" :completeTodo="completeTodo"></component>

         </div> 
    
     <div id="routes"> 

               <button class="btn" @click="switchToAll" :class="{'activeComp': components == 'all-todo'}"> ALL</button>
          
            
               <button class="btn " @click="switchToActive" :class="{'activeComp': components == 'active-todo'}"> ACTIVE</button>
           
          
               <button class="btn " @click="switchToCompleted" :class="{'activeComp': components == 'completed-todo'}"> COMPLETED</button>
           </div>
       

    </div>
</template>

<script> 
 
import AlltodoVue from './Alltodo.vue';
import CompletedVue from './Completed.vue';
import ActivetodoVue from './Activetodo.vue';
export default {
    components:{
        'all-todo': AlltodoVue,
        'completed-todo': CompletedVue,
        'active-todo': ActivetodoVue
    },
    data(){
        return{
          input:"",
          todoId:0,
          todos:[],
          components :'all-todo'
          
        }
        
    },
    methods:{
        addTodo(){
            if(this.input != ""){
                    this.todos.push({
                        text : this.input,
                        id: this.todoId++,
                        completed:false
                    });
                    this.input = ""
            }
        },
        completeTodo(todo){
            todo.completed = !todo.completed
        },
        deleteTodo(todo){
                var  deleted = this.todos.filter((filtered)=>{
                      return filtered.id != todo.id
                  })
                
                this.todos = deleted
            },
        completeAll(){
            const markAll = this.todos.every(todo => todo.completed)
            this.todos.map(todo=>{
                todo.completed =!markAll
            })
        },
        deleteAll(){
            this.todos = []
        },
        deleteCompleted(){
            var delCompleted = this.todos.filter(todo=>{
                return todo.completed === false
            })
            console.log(delCompleted)
            this.todos = delCompleted
        },
        switchToAll(){
            this.components = 'all-todo'
        },
         switchToActive(){
            this.components = 'active-todo'
        },
         switchToCompleted(){
            this.components = 'completed-todo'
        }

    }
}
</script>

<style >
#cover{
    text-align: center;
    width: 90%;
    margin: 0 auto;
   
    border-radius: 3px;
    box-shadow: 3px 3px 8px lightgray, -3px -1px 8px lightgray, 0px 3px 8px lightgray;
    margin-bottom: 20px
}
#todo-app{
    width:60%;
    margin: 0 auto
}
.inline-form{
    display: inline-flex;
    width: 90%
}
.input-box{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}
.btn-radius{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}
.inline-list{
    display: inline-flex;
    vertical-align: middle
   
}
input[type='checkbox']{
    width:20px;
    height: 20px;
}

#todo-container{
    width: 100%;
    margin: 0 auto;
    margin-top: 15px
}
ul{
    width: 100%;
    padding: 5px;
}
li{
    width: 100%;
    list-style-type: none;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgb(223, 220, 220)
}
#checkbox-div{
    float: left;
    width:7%;
    padding-top: 7px
}
#delete-div{
    float: right;
    width: 10%;
    padding-top: 3px;
}
#todo-content{
    width:83%
}
.completedTodo{
    text-decoration: line-through;
    color: gray
}
#tools{
    display: inline-flex;
    width: 90%;
    margin-top: 15px;

}
#tools button{
    margin-left: 10px;
}
#delete {
    float: right;
    width: 50%;
    text-align: right;
}
#all{
    width:50%;
    text-align: left;
    
}

#routes{
    padding: 3px;
    width: 90%;
  
    margin: 0 auto
}

#routes button{
margin-left: 5px;
}

.activeComp{
    background-color: rgb(8, 131, 212);
    color: white
}
.activeComp:hover{
    color: white
}
.activeComp:active{
    color: white
}
.array-check{
    padding: 20px;
    color: lightgray
}
</style>
