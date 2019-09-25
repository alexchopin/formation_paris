<template>
  <div id="app">
		<section class="todoapp">
			<todo-header @save="pushTodo"></todo-header>
			<section class="main">
        <todo-toggle v-model="toggleAll"/>
				<ul class="todo-list">
					<li class="todo" v-for="todo in filteredTodos" v-bind:key="todo.id" v-bind:class="{ completed: todo.completed, editing: editingTodo && editingTodo.id === todo.id }">
						<div class="view">
							<input v-model="todo.completed" class="toggle" type="checkbox">
							<label @dblclick="editTodo(todo)">{{ todo.title }}</label>
							<button class="destroy" @click="deleteByID(todo.id)"></button>
						</div>
						<input class="edit" v-model="todo.title" type="text" @keyup.enter="saveEdit(todo)" @blur="saveEdit(todo)" @keyup.esc="cancelEdit(todo)"/>
					</li>
				</ul>
			</section>
			<footer class="footer">
				<todo-count :remaining="activeTodos.length"></todo-count>
				<todo-filters v-model="filter" :options="['all', 'active', 'completed']"></todo-filters>
				<button v-if="completedTodos.length" @click="todos = activeTodos" class="clear-completed">
					Clear completed
				</button>
			</footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
		</footer>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue'
import todoToggle from './components/todoToggle.vue'
import todoCount from './components/todoCount.vue'
import todoFilters from './components/todoFilters.vue'

export default {
  name: 'todomvc',
  components: {
    todoHeader,
    todoToggle,
    todoCount,
    todoFilters
  },
  data () {
    return {
      filter: 'all',
      editingTodo: null,
      todos: []
    }
  },
  computed: {
    toggleAll: {
      get () {
        return this.activeTodos.length === 0
      },
      set (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    },
    activeTodos: function () {
      return this.todos.filter(function (todo) {
        return !todo.completed
      })
    },
    completedTodos: function () {
      return this.todos.filter(function (todo) {
        return todo.completed
      })
    },
    filteredTodos: function () {
      if (this.filter === 'active') {
        return this.activeTodos
      } else if (this.filter === 'completed') {
        return this.completedTodos
      } else {
        return this.todos
      }
    }
  },
  methods: {
    pushTodo: function (todo) {
      this.todos.push(todo)
    },
    deleteByID: function (id) {
      this.todos = this.todos.filter(function (todo) {
        return todo.id !== id
      })
    },
    editTodo: function (todo) {
      this.editingTodo = Object.assign({}, todo)
    },
    saveEdit: function (todo) {
      if (!todo.title.length) {
        this.deleteByID(todo.id)
      }
      this.editingTodo = null
    },
    cancelEdit: function (todo) {
      todo.title = this.editingTodo.title
      this.editingTodo = null
    }
  }
}
</script>
