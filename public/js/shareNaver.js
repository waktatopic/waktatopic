function share() {
	const url = encodeURI(encodeURIComponent(myform.url.value));
	const title = encodeURI(myform.title.value);
	const shareURL = `https://share.naver.com/web/shareView?url=${url}&title=${title}`;
	document.location = shareURL;
}
