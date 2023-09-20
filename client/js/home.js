"use strict";

const modal = document.querySelector(".modal-container");
const openModalBtn = document.querySelector(".modal-open");
const closeModalBtn = document.querySelector(".modal-close");
const validation = new JustValidate("#email-form", {
	lockForm: true,
	validateBeforSubmitting: true,
});

validation
	.addField("#email", [
		{
			rule: "required",
			errorMessage: "이메일을 입력해주세요",
		},
		{
			rule: "email",
			errorMessage: "이메일이 올바르지 않습니다",
		},
	])
	.addField("#title", [
		{
			rule: "required",
			errorMessage: "제목을 입력하세요",
		},
		{
			rule: "maxLength",
			value: 100,
			errorMessage: "글자 수가 너무 많습니다",
		},
	])
	.addField("#body", [
		{
			rule: "required",
			errorMessage: "내용을 입력하세요",
		},
		{
			rule: "maxLength",
			value: 1000,
			errorMessage: "글자 수가 너무 많습니다",
		},
	])
	.onSuccess(async (e) => {
		const email = e.target["email"].value;
		const title = e.target["title"].value;
		const body = e.target["body"].value;
		try {
			const res = await axios.post("/", {
				email: email,
				title: title,
				body: body,
			});
			console.log(res.data.message);
		} catch (err) {
			console.log(err);
		}
	});

openModalBtn.addEventListener("pointerup", () => {
	modal.style.display = "block";
	document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("pointerup", () => {
	modal.style.display = "none";
	document.body.style.overflow = "auto";
});
