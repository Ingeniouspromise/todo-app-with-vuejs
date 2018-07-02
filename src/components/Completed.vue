<template>
    <div id="todo-container" >
            <ul class="list-group" v-if="completedTodos.length > 0">
                <li v-for="todo in completedTodos" :key="todo.id" class="inline-list">
                    <div id="checkbox-div">
                    <input type="checkbox" v-model="todo.completed" @click="completeTodo(todo)">
                    </div>

                    <div id="todo-content">
                    <h4 :class="{'completedTodo': todo.completed}">{{todo.text}}</h4>
                    </div>

                  <div id="delete-div" @click="deleteTodo(todo)"> 
                    <button class="btn btn-danger sm-btn">Delete</button>
                    </div>

                </li>
            </ul>
            <h2 v-else class="array-check">There are no Todos here</h2>
        </div>

</template>

<script>

    export default{
        props:{
            todos:{
                type: Array,
                required: true
            },
            deleteTodo:{
                type: Function,
                required: true
            },
            completeTodo:{
                type: Function,
                required: true
            }
        },
        computed:{
                completedTodos(todo){
                    return this.todos.filter(completed =>{
                        return completed.completed
                    })
                }
        },

    data(){
    return{

    }
}
    }
</script>