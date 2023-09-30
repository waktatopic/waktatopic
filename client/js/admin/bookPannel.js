"use strict";

const listContainer = document.querySelector(".list-container");

createBookForm("post");
getBookList();

async function getBookList() {
	try {
		const res = await axios.get("/admin/pannel/book/list");
		const bookList = res.data.bookList;
		bookList.map((book) => {
			const listItem = document.createElement("div");
			listItem.className = "list-item";
			listItem.innerHTML = `
				<img src="${getDir("thumbnail", book.type, book.title)}" />
				<p>${book.name}</p>
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
	const prevForm = document.querySelector("#book-edit-form");
	if (prevForm) prevForm.remove();
	createBookForm("edit", book);
	new JustValidate("#book-edit-form", { lockForm: true, validateBeforSubmitting: true })
		.addField("#book-title", [{ rule: "required", message: "제목을 입력하세요" }])
		.addField("#book-file", [
			{ rule: "files", value: { files: { extensions: ["pdf"] } }, message: "pdf파일을 넣어주세요" },
		])
		.onSuccess(async (e) => {
			e.submitter.id === "book-put" ? putBookList(e) : deleteBookList(e);
		});
}

new JustValidate("#book-post-form", { lockForm: true, validateBeforSubmitting: true })
	.addField("#book-title", [{ rule: "required", message: "제목을 입력하세요" }])
	.addField("#book-file", [
		{ rule: "minFilesCount", value: 1, message: "파일을 넣어주세요" },
		{ rule: "maxFilesCount", value: 1, message: "파일을 하나만 넣어주세요" },
		{ rule: "files", value: { files: { extensions: ["pdf"] } }, message: "pdf파일을 넣어주세요" },
	])
	.onSuccess(async (e) => {
		postBookList(e);
	});

function getDir(form, type, title) {
	let ext;
	form === "pdf" ? (ext = "pdf") : (ext = "png");
	return `/src/${form}/${type}/${title}.${ext}`;
}

async function postBookList(e) {
	const formData = new FormData();
	formData.append("form", "pdf");
	formData.append("title", e.target["book-title"].value);
	formData.append("type", e.target["book-type"].value);
	formData.append("keyword", e.target["book-keyword"].value);
	formData.append("cafe", e.target["book-cafe"].value);
	formData.append("showTime", e.target["book-show-time"].value);
	formData.append("showDate", e.target["book-show-date"].value);
	formData.append("uploadDate", e.target["book-upload-date"].value);
	formData.append("files", e.target["book-file"].files[0]);
	try {
		const res = await axios.post("/admin/pannel/book/list", formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		console.log(res.data.message);
	} catch (error) {
		console.log(error.response.data.message);
	}
}

async function putBookList(e) {
	console.log("put");
}

async function deleteBookList(e) {
	console.log("delete");
}

async function createBookForm(method, book) {
	const bookForm = document.createElement("form");
	bookForm.id = method === "post" ? "book-post-form" : "book-edit-form";
	bookForm.innerHTML = `
	<div>
		<label>
			제목
			<input type="text" id="book-title" name="book-title" value="${book?.title || ""}" />
		</label>
	</div>
	<div>
		<label>
			타입
			<select id="book-type" name="book-type">
				<option value="weeklywak">주간왁물원</option>
				<option value="shonenwakdu">소년왁두</option>
				<option value="gamekinga">게임킹아</option>
				<option value="special">특집호</option>
			</select>
		</label>
	</div>
	<div>
		<label>
			키워드
			<input type="text" id="book-keyword" name="book-keyword" value="${book?.keyword.join() || ""}"/>
		</label>
	</div>
	<div>
		<label>
			카페 링크
			<input type="text" id="book-cafe" name="book-cafe" value="${book?.cafe || ""}"/>
		</label>
	</div>
	<div>
		<label>
			공개 날짜
			<input type="date" id="book-show-date" name="book-show-date" value="${book?.showDate || ""}"/>
		</label>
		<label>
			공개 시간
			<input type="time" id="book-show-time" name="book-show-time" value="${book?.showTime || ""}" />
		</label>
	</div>
	<div>
		<label>
			업로드 날짜
			<input type="date" id="book-upload-date" name="book-upload-date" value="${book?.uploadDate || ""}" />
		</label>
	</div>
	<div>
		<label>
			pdf파일
			<input type="file" id="book-file" name="book-file" />
		</label>
	</div>
	<div>
		${
			method === "post"
				? '<button id="book-post">업로드</button>'
				: '<button id="book-put">수정</button><button id="book-delete">삭제</button>'
		}
	</div>
`;
	document.body.append(bookForm);
	if (method === "edit") document.querySelector(`#book-edit-form option[value="${book.type}"]`).selected = true;
}
