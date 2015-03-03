import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        editTodo: function() {
            this.set('isEditing', true);
        },
       acceptChanges: function() {
           //Removes isEditing status
           this.set('isEditing', false);
           //deletes empty todo, else saves w/ new title
           if(Ember.isEmpty(this.get('model.title'))) {
               this.send('removeTodo');
           } else {
               this.get('model').save();
           }
       },
       removeTodo: function() {
           var todo = this.get('model');
           todo.deleteRecord();
           todo.save();
       }
    }
});
