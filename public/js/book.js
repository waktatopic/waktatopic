const urlPath = window.location.pathname.split("/");
const type = urlPath[2];
const title = urlPath[3];

const option = {
	pdf: `/pdf/${type}/${title}.pdf`,
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
	propertiesCallback: function (props) {
		props.renderWhileFlipping = true;
		props.preloadPages = 100;
		props.pagesForPredicting = 100;
		return props;
	},
	ready: function (scene) {
		$(".fab.toc").on("pointerup", () => {
			scene.ctrl.cmdToc();
		});
	},
};

$(".solid-container").FlipBook(option);
