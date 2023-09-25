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
				goGo(book);
			});
			listContainer.append(listItem);
		});
	} catch (error) {
		console.log(error.response.data.message);
	}
}

function goGo(book) {
	console.log(book);
}

function getDir(form, type, title) {
	let ext;
	form === "pdf" ? (ext = "pdf") : (ext = "jpg");
	return `/${form}/${type}/${title}.${ext}`;
}
