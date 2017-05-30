function add () {
	var MyTask = document.getElementById('MyTask');
	var div = document.createElement('div');
	var inputH = document.getElementById('inputH').value;
	var inputC = document.getElementById('inputC').value;

	div.className = "task";

	var head = document.createElement('div');
	head.className = "h";
	head.append(inputH);

	var close = document.createElement('div');
	close.className = 'close';
	
	var p = document.createElement('p');
	p.innerHTML = "&#10006;";
	close.append(p);
	div.append(close);
	
	div.append(head);

	var content = document.createElement('div');
	content.className = "contents";
	content.append(inputC);
	div.append(content);

	console.log(div);

	if (inputH === "" || inputC === "" ) {
		console.log('Error');
	}else{
		MyTask.append(div);
		clear();
		remove();
	}

}	

function clear(){
	var inputH = document.getElementById('inputH').value = "";
	var inputC = document.getElementById('inputC').value = "";
}

function remove	(){
	$('.close').on('click',function(){
		$('.task').css('display','none');
	})
}	


