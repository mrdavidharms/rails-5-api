 // Save all of the todo items under the `"todos"` namespace.
localStorage: new Backbone.LocalStorage('todos-backbone'),

// Set the rails-api backend endpoint for this specific model
url: 'http://localhost:3000/todos',
