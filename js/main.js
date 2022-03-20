const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
    animation:350,
    chosenClass:"sortable-chosen",
    dragClass:"sortable-drag",

    store:{
        //lets store the order in localstorage
        set:(sortable)=>{
            const order = sortable.toArray()
            localStorage.setItem(sortable.options.group.name, order.join('|'))
        },
        get:(sortable)=>{
            const order = localStorage.getItem(sortable.options.group.name);
            return order ? order.split('|') :[]
        }
    }
});
$(document).ready(function(){
    $('#myCheck').click(function(){
        if($(this).prop("checked")== true){
            $('#text').show();
        }
        else if($(this).prop("checked")==false){
            $('#text').hide();  
        }
    });
    $('#myCheck1').click(function(){
        if($(this).prop("checked")== true){
            $('#text1').show();
        }
        else if($(this).prop("checked")==false){
            $('#text1').hide();  
        }
    });
    $('#myCheck2').click(function(){
        if($(this).prop("checked")== true){
            $('#text2').show();
        }
        else if($(this).prop("checked")==false){
            $('#text2').hide();  
        }
    });
});