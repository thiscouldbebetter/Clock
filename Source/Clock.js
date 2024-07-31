
class Clock
{
	draw()
	{
		var now = new Date();
		var timeAndZoneAsString = now.toTimeString();
		var timeAndZoneParts = timeAndZoneAsString.split(" ");
		var timeAsString = timeAndZoneParts[0];
		var zoneParts = timeAndZoneParts.slice(1);
		var zoneAsString =
			zoneParts.slice(1).join(" ") + " " + zoneParts[0];
		var dateAsString =
		[
			("" + now.getFullYear() ),
			("" + ( now.getMonth() + 1 ) ).padStart(2, "0"),
			("" + now.getDay() ).padStart(2, "0")
		].join("/");
		var dateParts = dateAsString.split("/");

		var dateAndTimeAndZoneAsHtml =
			"<h2>" + dateAsString + "</h2>"
			+ "<h1>" + timeAsString + "</h1>"
			+ "<h4>" + zoneAsString + "</h4>";

		this.domElement.innerHTML = dateAndTimeAndZoneAsHtml;

		var d = document;
		var timeAndDateAndZoneAsString =
		[
			timeAsString,
			dateAsString,
			zoneAsString
		].join(" ");
		d.title = timeAndDateAndZoneAsString;
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
