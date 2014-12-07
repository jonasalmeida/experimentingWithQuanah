[experimentingWithQuanah](https://jonasalmeida.github.io/experimentingWithQuanah)
=====

Experimenting with [Sean's QUANAH](https://qmachine.github.io/quanah/), live experiments [here](https://jonasalmeida.github.io/experimentingWithQuanah).

##1. lala
Create a function, lala,

		lala = function(v){
			return 2*v
		}

and apply it to 2, as in *4 = 2.Q(lala)*

		x = QUANAH.avar({val:2})
		x.Q(function(evt){
			this.val = lala(this.val); 
			return evt.exit()
		})
		console.log(x) // x.val should be 4

##2. lala after a while

Run lala again, but only after something that takes a couple of seconds

		x.Q(function (evt) {
    		setTimeout(function () {
        	x.val = lala(x.val);
        	console.log(x.val)  // do 4 x 2 = 8 ...
        	return evt.exit();
    	}, 2000); // ... in 2 seconds
    	return;
		});

		console.log(x.val)
		x.Q(function(evt){
    		this.val = lala(this.val+100); // while saying this right now 
    		return evt.exit()
		})
		console.log(x.val) // it worked, we get (8 +100) x 2 --> 216  :-) !!
								  //instead of ((4+100) x 2) x 2 which would have been 416

##3. For here on best go straight to the [real fun](https://github.com/jonasalmeida/experimentingWithQuanah/blob/gh-pages/experimentingWithQuanah.js)
...

##4. Time for K

Let's see how can one use Q to build a DSL at the intersetion of mathematical notation and coding styles to describe workflows that are both assynchronous and distributed. [Lambda calculus](http://en.wikipedia.org/wiki/Lambda_calculus) is probably the unavoidable reference in this exercise. JavaScript is a natural environment for the experiments below, not only because of its pervasive availability in the Web Browser but also because it treats functions as first class objects. The syntax adopted betrays more recent cross-compilation exploits by the more abstract notation of [CoffeeScript](http://en.wikipedia.org/wiki/CoffeeScript) (i.e. a notaion that can be automatically converted into JavaScript).

### K patterns of Q
Let's see how this might work, the basic idea is to use K to identify shortened patterns that use Quanah.

Starting with the obvious ...

	K=function(x){
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
So to multiply 9 by 2 one could do

	> K(9).Q(K(
		function(x){return 2*x}
	  ))
	
	> AVar {..., val: 18}

calling it a day, more tomorrow