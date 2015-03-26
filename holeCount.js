
<script type="text/javascript">

var holes ={
0:1, 4:1, 6:1, 8:2, 9:1,
A:1, B:2, D:1, O:1, P:1, Q:1, R:1,
a:1, b:1, d:1, e:1, g:2, o:1, p:1, q:1
};

    
    

function holeCount(str){
    var total=0;
     var chars=str.split('');
     chars.forEach(function(letter){
        total += holes[letter] || 0;
    })

    return total;

}
</script?
