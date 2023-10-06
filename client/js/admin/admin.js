"use strict";

new JustValidate("#login-form", {
	lockForm: true,
	validateBeforSubmitting: true,
})
	.addField("#username", [
		{
			rule: "required",
			errorMessage: "아이디를 입력해주세요",
		},
	])
	.addField("#password", [
		{
			rule: "required",
			errorMessage: "비밀번호를 입력하세요",
		},
	])
	.onSuccess(async (e) => {
		const username = e.target["username"].value;
		const password = e.target["password"].value;
		try {
			const res = await axios.post("/admin/login", {
				username: username,
				password: password,
			});
			console.log(res.data.message);
			window.location.href = "/admin/dashboard";
		} catch (err) {
			console.log(err.response.data.message);
		}
	});
