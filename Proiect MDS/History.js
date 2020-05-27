
var tableOfContents = function (content, target, options) {

	var contentWrap = document.querySelector(content);
	var toc = document.querySelector(target);
	var defaults = {
		levels: 'h2, h3',
		heading: 'Table of Contents',
		headingLevel: 'h2',
		listType: 'ul'
	};
	var settings = {};
	var headings;

	var merge = function (obj) {
		for (var key in defaults) {
			if (Object.prototype.hasOwnProperty.call(defaults, key)) {
				settings[key] = Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : defaults[key];
			}
		}
	};

	var createID = function (heading) {
		if (heading.id.length) return;
		heading.id = 'toc_' + heading.textContent.replace(/[^A-Za-z0-9]/g, '-');
	};


	var getIndent = function (count) {
		var html = '';
		for (var i = 0; i < count; i++) {
			html += '<' + settings.listType + '>';
		}
		return html;
	};

	var getOutdent = function (count) {
		var html = '';
		for (var i = 0; i < count; i++) {
			html += '</' + settings.listType + '></li>';
		}
		return html;
	};


	var getStartingHTML = function (diff, index) {

		if (diff > 0) {
			return getIndent(diff);
		}

		if (diff < 0) {
			return getOutdent(Math.abs(diff));
		}

		if (index && !diff) {
			return '</li>';
		}

		return '';

	};


	var injectTOC = function () {

		var level = headings[0].tagName.slice(1);
		var startingLevel = level;

		var len = headings.length - 1;

		toc.innerHTML =
			'<' + settings.headingLevel + '>' + settings.heading + '</' + settings.headingLevel + '>' +
			'<' + settings.listType + '>' +
				Array.prototype.map.call(headings, function (heading, index) {


					createID(heading);

					var currentLevel = heading.tagName.slice(1);
					var levelDifference = currentLevel - level;
					level = currentLevel;
					var html = getStartingHTML(levelDifference, index);

					html +=
						'<li>' +
							'<a id="col_a" href="#' + heading.id + '">' +
								heading.innerHTML.trim() +
							'</a>';

					if (index === len) {
						html += getOutdent(Math.abs(startingLevel - currentLevel));
					}

					return html;

				}).join('') +
			'</' + settings.listType + '>';
	};


	var init = function () {

		merge(options || {});

		headings = contentWrap.querySelectorAll(settings.levels);
		if (!headings.length) return;

		injectTOC();

	};

	init();

};
