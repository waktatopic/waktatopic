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
				<img src="/src/thumbnail/${book.type}/${book.title}.png" />
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
}

async function postBookList(e) {
	const formData = new FormData();
	formData.append("form", "pdf");
	formData.append("title", e.target["book-title"].value);
	formData.append(
		"type",
		e.target["book-type"].value === "주간왁물원"
			? "weeklywak"
			: e.target["book-type"].value === "소년왁두"
			? "shonenwakdu"
			: e.target["book-type"].value === "게임킹아"
			? "gamekinga"
			: "special"
	);
	formData.append("keyword", e.target["book-keyword"].value);
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
	const formData = new FormData();
	formData.append("form", "pdf");
	formData.append("title", e.target["book-title"].value);
	formData.append(
		"type",
		e.target["book-type"].value === "주간왁물원"
			? "weeklywak"
			: e.target["book-type"].value === "소년왁두"
			? "shonenwakdu"
			: e.target["book-type"].value === "게임킹아"
			? "gamekinga"
			: "special"
	);
	formData.append("keyword", e.target["book-keyword"].value);
	formData.append("showTime", e.target["book-show-time"].value);
	formData.append("showDate", e.target["book-show-date"].value);
	formData.append("uploadDate", e.target["book-upload-date"].value);
	e.target["book-file"].files[0] && formData.append("files", e.target["book-file"].files[0]);
	try {
		const res = await axios.put("/admin/pannel/book/list", formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		console.log(res.data.message);
	} catch (error) {
		console.log(error.response.data.message);
	}
}

async function deleteBookList(e) {
	const title = e.target["book-title"].value;
	const type =
		e.target["book-type"].value === "주간왁물원"
			? "weeklywak"
			: e.target["book-type"].value === "소년왁두"
			? "shonenwakdu"
			: e.target["book-type"].value === "게임킹아"
			? "gamekinga"
			: "special";
	try {
		const res = await axios.delete("/admin/pannel/book/list", { data: { type: type, title: title } });
		console.log(res.data.message);
	} catch (error) {
		console.log(error.response.data.message);
	}
}

async function createBookForm(method, book) {
	const bookForm = document.createElement("form");
	bookForm.id = method === "post" ? "book-post-form" : "book-edit-form";
	bookForm.innerHTML = `
	<div>
		<label>
			제목
			<input type="text" id="book-title" name="book-title" value="${book?.title || ""}" ${
		method === "edit" ? "readonly" : ""
	}/>
		</label>
	</div>
	<div>
	${
		method === "edit"
			? `
	<div>
		<label>
				타입
				<input type="text" id="book-type" name="book-type" value="${
					book.type === "weeklywak"
						? "주간왁물원"
						: book.type === "shonenwakdu"
						? "소년왁두"
						: book.type === "gamekinga"
						? "게임킹아"
						: "특집호"
				}" readonly />
		</label>
	</div>
			`
			: `
	<label>
		타입
		<select id="book-type" name="book-type">
			<option value="주간왁물원">주간왁물원</option>
			<option value="소년왁두">소년왁두</option>
			<option value="게임킹아">게임킹아</option>
			<option value="특집호">특집호</option>
		</select>
	</label>`
	}
	</div>
	<div>
		<label>
			키워드
			<input type="text" id="book-keyword" name="book-keyword" value="${book?.keyword.join() || ""}"/>
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
	new JustValidate(`#${bookForm.id}`, { lockForm: true, validateBeforSubmitting: true })
		.addField("#book-title", [{ rule: "required", errorMessage: "제목을 입력하세요" }])
		.addField(
			"#book-file",
			method === "post"
				? [
						{ rule: "minFilesCount", value: 1, errorMessage: "파일을 넣어주세요" },
						{ rule: "maxFilesCount", value: 1, errorMessage: "파일을 하나만 넣어주세요" },
						{
							rule: "files",
							value: { files: { extensions: ["pdf"] } },
							errorMessage: "pdf파일을 넣어주세요",
						},
				  ]
				: [{ rule: "files", value: { files: { extensions: ["pdf"] } }, errorMessage: "pdf파일을 넣어주세요" }]
		)
		.onSuccess(async (e) => {
			method === "post" ? postBookList(e) : e.submitter.id === "book-put" ? putBookList(e) : deleteBookList(e);
		});
}
