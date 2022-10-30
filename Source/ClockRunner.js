
class ClockRunner
{
	constructor()
	{
		var platform = new PlatformDom("divClock");
		platform.initialize();
		this.clock = new Clock();
		this.clock.initialize(platform);
	}

	static Instance()
	{
		if (ClockRunner._instance == null)
		{
			ClockRunner._instance =
				new ClockRunner();
		}

		return ClockRunner._instance;
	}
}
