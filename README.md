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