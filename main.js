let toggleNavStatus=false;

let toggleNav = function() {
	let getSideBar=document.querySelector(".nav-side-bar");
	let getSideBarUl=document.querySelector(".nav-side-bar ul");
	let getSideBarTitle=document.querySelector(".nav-side-bar  span");
	let getSideBarLinks=document.querySelectorAll(".nav-side-bar a");

	if(toggleNavStatus===false)
	{
		getSideBarUl.style.visibility="visible";
		getSideBar.style.width="272px";
		getSideBarTitle.opacity="0.5";

		let n=getSideBarLinks.length;
		for (let i = 0; i <n; i++) {
			getSideBarLinks[i].style.opacity="1";
		}
		toggleNavStatus=true;
	}
	else if(toggleNavStatus===true)
	{
		getSideBar.style.width="50px";
		getSideBarTitle.opacity="0";

		let n=getSideBarLinks.length;
		for (let i = 0; i <n; i++) {
			getSideBarLinks[i].style.opacity="0";
		}
		getSideBarUl.style.visibility="hidden";
		toggleNavStatus=false;
	}
}