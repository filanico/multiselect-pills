function makePill(text, value) {
  let node = document.createElement("div");
  let hidden = document.createElement("input");
  hidden.setAttribute("type", "hidden");
  hidden.setAttribute("value", value);
  node.classList.add("pill");
  node.textContent = text;
  node.append(hidden);
return node;
}

function getPillsX(){
	let arr = [...document.querySelectorAll(".pill")].map( p => p.offsetWidth);
	arr = arr.length > 0 ? arr : [0];
	return arr.reduce((all,w) => all + w);
}
function getLastPill(){
	return document.querySelector('.pill:last-child');
 }
window.onload = () => {
  [...document.querySelectorAll(".multiselect")].forEach(function (input) {
    let container = document.createElement("div");
let typing = false;
    container.classList.add("container");
    input.parentNode.append(container);
    container.append(input);
    input.addEventListener("keyup", (e) => {
	let pillsX =  getPillsX();
    	if(e.keyCode == 13){
		let input = e.target;
      		let pill = makePill(e.target.value, e.target.value.trim().toLowerCase());
		pill.style.marginLeft = pillsX + 'px';
      		container.append(pill);
		input.value = '';
      		input.style.paddingLeft = pillsX + pill.offsetWidth + "px";
    	} else if (e.keyCode == 8 && (!typing || input.value.length==0)){
		let pill = getLastPill();
		pill.remove();
		input.style.paddingLeft = getPillsX() + "px";
	} else {
		typing = true;
	}
    });
  });
};
