var List = {
    setList : function(id) {
        if(event.keyCode == 13) {
            if(localStorage.getItem(id) === null) {
                var data = new Array(document.getElementById(id).value);
                localStorage.setItem(id, JSON.stringify(data));
            }
                else {
                var JsonLists = localStorage.getItem(id);
                var lists = JSON.parse(JsonLists);
                lists[lists.length] = document.getElementById(id).value;
                localStorage.setItem(id, JSON.stringify(lists));
            }
        }
    },
    printList : function() {
        if(localStorage.getItem('list') != null) {
            var JsonLists = localStorage.getItem('list');
            var lists = JSON.parse(JsonLists);
            var html = '';
            for(var key in lists) {
                if(lists[key] != null) {
                    html += '<a href="#" class="list-group-item list-group-item-action" id="button';
                    html += key;
                    html += '" onclick="List.remove(id)">';
                    html += lists[key];
                    html += '</a>';
                }
            }
            document.querySelector('#list-group').innerHTML = html;
        }
    },
    remove : function(id) {
        var data = document.getElementById(id).value;
        var jlist = localStorage.getItem('list');
        var lists = JSON.parse(jlist);
        var removeLoc = lists.indexOf(data);
        lists.splice(removeLoc, 1);
        localStorage.setItem('list', JSON.stringify(lists));
        this.printList();
    }
}
List.printList();