var Name = {
    printName : function() {
        if(localStorage.getItem('name')!=null) {
           var content = '<h2>' + localStorage.getItem('name') + '\'s To Do List</h2>';
           var name = document.querySelector('#name_box').innerHTML = content;
        }
    },

    setName : function(id) {
        if(event.keyCode == 13) {
            if(localStorage.getItem(id) === null) {
                var data = document.getElementById(id).value;
                localStorage.setItem(id, data);
            }
        }
    }
};

Name.printName();