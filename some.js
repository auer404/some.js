Array.prototype.someElement = function() {
            
            var random_index = Math.floor(Math.random() * this.length);
            return this[random_index];
            
        }
        
        Array.prototype.someElements = function(amount = false) {
            
            var max_amount = this.length;
            
            if (!amount || amount === true || isNaN(amount) || amount <= 0) {
                
                amount = Math.ceil(Math.random() * max_amount);
                
            } else {
                
                amount = Math.round(amount);
                
                if (amount > max_amount) {
                    
                    amount = max_amount;
                    
                }

            }
            
            var selected_amount = 0;
            
            var random_list = [];
            
            while (selected_amount < amount) {
                
                var random_elem = this.someElement();
                
                if (random_list.indexOf(random_elem) == -1) {
                    
                    random_list.push(random_elem);
                    
                    selected_amount++;
                    
                }
                
            }
            
            return random_list;
            
        }
        
        NodeList.prototype.someElement = Array.prototype.someElement;
        NodeList.prototype.someElements = Array.prototype.someElements;
        HTMLCollection.prototype.someElement = Array.prototype.someElement;
        HTMLCollection.prototype.someElements = Array.prototype.someElements;
        
        
        ///////////////////////
        
        
        Array.prototype.forSome = function(callback){
            
            this.someElements().forEach(callback);
            
        }
        
        NodeList.prototype.forSome = Array.prototype.forSome;
        HTMLCollection.prototype.forSome = Array.prototype.forSome;
        
        
        ///////////////////////

        
        HTMLElement.prototype.getSomeElement = function() {
            
            return this.querySelectorAll("*").someElement();
            
        }
        
        HTMLElement.prototype.getSomeElements = function(amount = false) {
            
            return this.querySelectorAll("*").someElements(amount);
            
        }
        
        document.getSomeElement = HTMLElement.prototype.getSomeElement;
        document.getSomeElements = HTMLElement.prototype.getSomeElements;
        
        ///////////////////////
        
        HTMLElement.prototype.querySelectorSome = function(selector = "*" , amount = false) {
            
            return this.querySelectorAll(selector).someElements(amount);
            
        }
        
        document.querySelectorSome = HTMLElement.prototype.querySelectorSome;
        
        ///////////////////////
        
        HTMLElement.prototype.getSomeElementsByTagName = function(tagname , amount = false) {
            
            return this.getElementsByTagName(tagname).someElements(amount);
            
        }
        
        HTMLElement.prototype.getSomeElementByTagName = function(tagname) {
            
            return this.getSomeElementsByTagName(tagname , 1)[0];
            
        }
        
        HTMLElement.prototype.getSomeElementsByClassName = function(classname , amount = false) {
            
            return this.getElementsByClassName(classname).someElements(amount);
            
        }
        
        HTMLElement.prototype.getSomeElementByClassName = function(classname) {
            
            return this.getSomeElementsByClassName(classname , 1)[0];
            
        }
        
        document.getSomeElementsByTagName = HTMLElement.prototype.getSomeElementsByTagName;
        document.getSomeElementByTagName = HTMLElement.prototype.getSomeElementByTagName;
        document.getSomeElementsByClassName = HTMLElement.prototype.getSomeElementsByClassName;
        document.getSomeElementByClassName = HTMLElement.prototype.getSomeElementByClassName;
