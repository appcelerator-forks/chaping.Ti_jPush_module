$.win.open();
var push = require('com.yeshcp.jpush');
//push.resumePush();
push.setAliasAndTags('chelsea',['grade1','grade2'],function(e){
    alert('setAliasAndTags' + JSON.stringify(e));
});

setTimeout(function(){
    push.setAlias('',function(e){
        alert('setAlias' + JSON.stringify(e));
    });
},5000);

setTimeout(function(){
    push.setTags([],function(e){
        alert('setTags' + JSON.stringify(e));
    });
},10000);
