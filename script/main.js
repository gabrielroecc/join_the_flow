const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.onload = function () {
	// Inicializa o contador
	var count = document.querySelector(".count-value");
	var progress = 0;
	// Executa uma função a cada 100ms
	setInterval(function () {
		// Atualiza o progresso
		progress += 1;
		count.textContent = progress;
		// Verifica se o carregamento está concluído
		if (progress >= 100) {
			// Oculta a tela de carregamento
			document.getElementById("loader-wrapper").classList.add("active");
		}
	}, 20);
};

let timeline1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_1",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline1.to(".content_section_1", {
	y: -200,
	opacity: 0,
});

let timeline2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_1",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline2.to(".a2", {
	y: -800,
	rotate: -70,
});

let timeline3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_1",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline3.to(".a3", {
	y: -1100,
	rotate: 70,
	scale: 0.7,
});

let timeline4 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_1",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline4.to(".astronaut", {
	y: -700,
	rotate: 20,
});

let timeline5 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_1",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline5.to(".a1", {
	y: -700,
	rotate: -80,
});

let timeline6 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_1",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});

let timeline7 = gsap.timeline({
	scrollTrigger: {
		trigger: ".spacer",
		start: "19.5% top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline7.to(".rocket", {
	y: -800,
});

let timeline8 = gsap.timeline({
	scrollTrigger: {
		trigger: ".spacer",
		start: "19.5% top",
		end: "bottom top",
		scrub: true,
		markers: false,
	},
});
timeline8
	.to(".content_section_2", {
		y: -1000,
		opacity: 1,
	})
	.to(".content_section_2", {
		y: -1300,
		opacity: 0,
	});

let timeline9 = gsap.timeline({
	scrollTrigger: {
		trigger: ".spacer_2",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: true,
	},
});
timeline9.to(".content_section_3", {
	y: -3000,
});
let timeline10 = gsap.timeline({
	scrollTrigger: {
		trigger: ".spacer_2",
		start: "top top",
		end: "bottom top",
		scrub: true,
		markers: true,
	},
});
timeline10.to(".rocket", {
	y: -3000,
});
