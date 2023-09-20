"use strict";

import "/node_modules/axios/dist/axios.js";
import JustValidate from "/node_modules/just-validate/dist/just-validate.es.js";

const validation = new JustValidate("#login-form", {
	lockForm: true,
	validateBeforSubmitting: true,
});

validation
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
			const res = await axios.post("/admin", {
				username: username,
				password: password,
			});
			console.log(res.data.message);
		} catch (err) {
			console.log(err);
		}
	});
