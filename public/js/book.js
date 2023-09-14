const option = {
	pdf: "/pdf/test.pdf",
	template: {
		html: "/library/3d-flip-book/3d-flip-book/templates/default-book-view.html",
		styles: ["/library/3d-flip-book/3d-flip-book/css/black-book-view.css"],
		links: [
			{
				rel: "stylesheet",
				href: "/library/3d-flip-book/3d-flip-book/css/font-awesome.min.css",
			},
		],
		script: "/library/3d-flip-book/3d-flip-book/js/default-book-view.js",
		sounds: {
			startFlip: "/library/3d-flip-book/3d-flip-book/sounds/start-flip.mp3",
			endFlip: "/library/3d-flip-book/3d-flip-book/sounds/end-flip.mp3",
		},
	},
	ready: function (scene) {
		$(".fab.toc").on("pointerdown", () => {
			scene.ctrl.cmdToc();
		});
	},
};

$(".solid-container").FlipBook(option);
