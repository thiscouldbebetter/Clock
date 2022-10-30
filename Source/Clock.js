
class Clock
{
	draw()
	{
		var now = new Date();
		var nowAsString = now.toString();
		var htmlSoFar = nowAsString;
		this.domElement.innerHTML = htmlSoFar;

		var d = document;
		d.title = now.toTimeString();
	}

	initialize(platform)
	{
		this.platformAddTo(platform);
		this.draw();

		this.timer = setInterval
		(
			this.updateForTimerTick.bind(this),
			1000 // millisecondsPerTick
		);
	}

	updateForTimerTick()
	{
		this.draw();
	}

	// Platformable.

	platformAddTo(platformDom)
	{
		var d = document;
		var domElement = d.createElement("div");
		platformDom.domElementAdd(domElement);
		this.domElement = domElement;
	}
}
