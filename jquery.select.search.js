
    (function($){

    	$.fn.tmp = function(searchBox) {
    		var self = this;
        	var elements = this.children();
        	var matched = [];

        searchBox.on('keyup', function() {

        		matched = [];
        	   if (! searchBox.val()) {
        	   		self.empty();
        	   		self.append(elements);
        	   		
        	   }	

            elements.each(function(i, elem) {
            
                if (elem.value.toLowerCase().match(searchBox.val())) {
            		matched.push(elem);        
                }
            });

            self.empty();
            $.each(matched, function(i, elem) {
            	self.append('<option>' + elem.value + '</option>');		
            })	
        });
    }
}(jQuery));


                     
                
                     
                  
                     
                     
    
        
        