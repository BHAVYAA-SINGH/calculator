let calculation= localStorage.getItem('calculation') || '';

        if(calculation!==''){
            document.querySelector('.screen').innerHTML=`${calculation}`;
        }

        function updateCalculation(string){
            calculation+=string;
            document.querySelector('.screen').innerHTML=`${calculation}`;
            
        }

        function calculate(){
            calculation=eval(calculation);
            document.querySelector('.screen').innerHTML=`${calculation}`;
            localStorage.setItem('calculation',calculation);
        }

        function clean(){
            calculation='';
            localStorage.setItem('calculation',calculation);
            document.querySelector('.screen').innerHTML=`${calculation}`;
        }
