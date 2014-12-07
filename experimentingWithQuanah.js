console.log('experimentingWithQuanah.js')

// lala
console.log('1. lala of 2')
lala = function(v){
    return 2*v
}
// create the variable
x = QUANAH.avar(2)
console.log('<-- created x')
i = 0;
console.log('at '+i+'/10 secs, x.val = '+x.val)
t = setInterval(function(){i++;console.log('at '+i+'/10 secs, x.val = '+x.val)},100) // start logging x.val every 1/10 seconds
setTimeout(function(){clearInterval(t)},500) // for 500 ms


// 4 = 2.Q(lala)
x.Q(function(evt){ this.val = lala(this.val); return evt.exit()})

console.log('<-- doubled x ('+x.val+')')


//console.log('2. lala of 2 after a while')

//x.Q(function(evt){ var xx; this.val = lala(this.val); setTimeout(''+xx+'asdads;evt.exit,2000)})
//console.log(x.val)


x.Q(function (evt) {
    setTimeout(function () {
        x.val = lala(x.val);
        console.log('<-- doubled again ('+x.val+')')
        return evt.exit();
    }, 300);
    return;
});
console.log('<-- promised to double it again in 2 mins x ('+x.val+')')
//console.log(x.val)
x.Q(function(evt){ this.val = lala(this.val+100); return evt.exit()})
console.log('<-- added 100 and doubled it, which one ? :-) ('+x.val+')')
console.log('current x:',x)
//console.log(x.val)
//console.log(x)

////// TIME FOR K /////

K1=function(x){
    if(typeof(x)=="function"){ //this is about a function
        var fun=x;
        //console.log('fun:',x) // <-- uncomment to see what function is being scoped
        return function(evt){ 
            this.val = fun(this.val)
            return evt.exit()
        }
    }
    else{ // this is about a variable
        return QUANAH.avar(x)
    }
}