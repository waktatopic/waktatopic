"use strict";

import axios from "axios";

const modal = document.querySelector(".modal-container");
const openModalBtn = document.querySelector(".modal-open");
const closeModalBtn = document.querySelector(".modal-close");
const emailForm = document.querySelector("#email-form");

openModalBtn.addEventListener("pointerup", () => {
	modal.style.display = "block";
	document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("pointerup", () => {
	modal.style.display = "none";
	document.body.style.overflow = "auto";
});

async function onEmailSend(e) {
	e.preventDefault();
	const email = e.target["email"].value;
	const title = e.target["title"].value;
	const body = e.target["body"].value;
	try {
		const res = await axios.post("http://localhost:1234/", {
			email,
			title,
			body,
		});
	} catch (error) {
		console.log(error);
	}
}

emailForm.addEventListener("submit", (e) => onEmailSend(e));
