window.addEventListener('load',() =>{
	const form = document.querySelector("#new-task-form")
	const input = document.querySelector("#new-task-input")
	const list_el = document.querySelector("#tasks")

	var button = document.querySelector('#submit-new-task')
	button.onclick = function() {

		const task = input.value;

		console.log(input.value)

		if (!task) {
			alert("Please fill out the task");
			return;
		}

		const task_el = document.createElement("div");
		task_el.classList.add("task");

		const task_content_el = document.createElement("input");
		task_content_el.classList.add("text")
		task_content_el.setAttribute('size','40')
		task_content_el.setAttribute('value',task);
		task_content_el.setAttribute('readonly','')

		const task_content_el_2 = document.createElement("button");
		task_content_el_2.classList.add("cancel")
		task_content_el_2.setAttribute('id','cancel-task')
		task_content_el_2.innerHTML= '<i class="fa fa-times" aria-hidden="true"></i>';
	
		task_el.appendChild(task_content_el);
		task_el.appendChild(task_content_el_2);
		list_el.appendChild(task_el);

		input.value=""

		task_content_el_2.addEventListener("click", () =>{
			list_el.removeChild(task_el);
		})
	}




	

	




})