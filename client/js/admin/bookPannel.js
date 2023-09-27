"use strict";

const listContainer = document.querySelector(".list-container");

getBookList();

async function getBookList() {
	try {
		const res = await axios.get("/admin/pannel/book/list");
		const bookList = res.data.bookList;
		bookList.map((book) => {
			const listItem = document.createElement("div");
			listItem.innerHTML = `
			<div class="list-item">
				<img src="${getDir("thumbnail", book.type, book.title)}" />
				<p>${book.type} ${book.title}</p>
			</div>
			`;
			listItem.addEventListener("pointerup", () => {
				onBookClick(book);
			});
			listContainer.append(listItem);
		});
	} catch (error) {
		console.log(error.response.data.message);
	}
}

function onBookClick(book) {
	console.log(book);
}

new JustValidate("#book-post-form", {
	lockForm: true,
	validateBeforSubmitting: true,
})
	.addField("#book-file", [
		{
			rule: "minFilesCount",
			value: 1,
			message: "파일을 넣어주세요",
		},
		{
			rule: "maxFilesCount",
			value: 1,
			message: "파일을 하나만 넣어주세요",
		},
		{
			rule: "files",
			value: {
				files: {
					extensions: ["pdf"],
				},
			},
			message: "pdf파일을 넣어주세요",
		},
	])
	.onSuccess(async (e) => {
		const formData = new FormData();
		formData.append("file", e.target["book-file"].files[0]);
		try {
			const res = await axios.post("/admin/pannel/book/list", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(res.data.message);
		} catch (error) {
			console.log(err.response.data.message);
		}
	});

function getDir(form, type, title) {
	let ext;
	form === "pdf" ? (ext = "pdf") : (ext = "jpg");
	return `/${form}/${type}/${title}.${ext}`;
}
