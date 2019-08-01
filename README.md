Basic implementation of firebase cloud function.  
This includes controller for calculator which has sum and multiply functions.  
I have exposed express api function as the only function. This act as entry point to all the APIs in the application.   
Currently this is deployed on [link](https://us-central1-fir-cloud-functions-220c9.cloudfunctions.net/api).  
Sum api is available at `api/sum?firstOperand=5&secondOperand=5`  
Multipl api is available at `api/multiply?firstOperand=5&secondOperand=5`  
Values of the operands can be changed in query param  
