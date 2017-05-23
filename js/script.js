function add () {
	var MyTask = document.getElementById('MyTask');
	var div1 = document.createElement('div');
	var inputH = document.getElementById('inputH').value;
	var inputC = document.getElementById('inputC').value;

	div1.className = "taska";

	var head = document.createElement('div');
	head.className = "h";
	head.append(inputH);
	div1.append(head);


	var cont = document.createElement('div');
	cont.className = "cont";
	cont.append(inputC);
	div1.append(cont);

	if (inputH === "" || inputC === "" ) {
		console.log('error');
	}else{
		MyTask.append(div1);
		clear();
	}
}	

function clear(){
	var inputH = document.getElementById('inputH').value = "";
	var inputC = document.getElementById('inputC').value = "";
}		