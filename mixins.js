export default{
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
            }
    }
}