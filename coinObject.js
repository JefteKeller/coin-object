const mainContent = document.createElement("main");

const mainHeader = document.createElement("header");
const mainTitle = document.createElement("h1");
mainTitle.textContent = "Object Coin";

mainHeader.appendChild(mainTitle);
mainContent.appendChild(mainHeader);

const resultSection = document.createElement("section");
resultSection.id = "result";

const resultTextSection = document.createElement("section");
resultTextSection.id = "resultText";
resultTextSection.classList.add("resultContentSection");

const resultTextTitle = document.createElement("h2");
resultTextTitle.textContent = "Results in Text";
resultTextTitle.classList.add("resultTitle");
resultTextSection.appendChild(resultTextTitle);

const resultImgSection = document.createElement("section");
resultImgSection.id = "resultImg";
resultImgSection.classList.add("resultContentSection");

const resultImgTitle = document.createElement("h2");
resultImgTitle.textContent = "Results in Images";
resultImgTitle.classList.add("resultTitle");
resultImgSection.appendChild(resultImgTitle);

const coin = {
	state: 0,
	flip: function () {
		this.state = Math.round(Math.random() * 1);
	},
	toString: function () {
		if (this.state === 0) {
			return "Heads";
		} else {
			return "Tails";
		}
	},
	toHTML: function () {
		const image = document.createElement("img");
		if (this.state === 0) {
			image.src = "./images/coinHeads.png";
			image.alt = "Heads";
			image.classList.add("coinImg");
		} else {
			image.src = "./images/coinTails.png";
			image.alt = "Tails";
			image.classList.add("coinImg");
		}
		return image;
	},
};

function display20Flips() {
	const results = [];

	for (let i = 0; i < 20; i++) {
		const resultParagraph = document.createElement("p");
		coin.flip();
		resultParagraph.textContent = coin.toString();
		resultTextSection.appendChild(resultParagraph);
		results.push(coin.toString());
	}

	return results;
}
display20Flips();

function display20Images() {
	const results = [];
	const resultDiv = document.createElement("div");
	resultDiv.id = "resultImgBox";

	for (let i = 0; i < 20; i++) {
		coin.flip();
		resultDiv.appendChild(coin.toHTML());
		resultImgSection.appendChild(resultDiv);
		results.push(coin.toString());
	}

	return results;
}
display20Images();

resultSection.appendChild(resultTextSection);
resultSection.appendChild(resultImgSection);

mainContent.appendChild(resultSection);
document.body.appendChild(mainContent);
