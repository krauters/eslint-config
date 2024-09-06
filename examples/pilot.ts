enum Starship {
	Enterprise = 'ENTERPRISE',
	MillenniumFalcon = 'MILLENNIUM_FALCON',
	RazorCrest = 'RAZOR_CREST',
	Serenity = 'SERENITY',
}

class Pilot {
	assignedStarship: Starship
	codename: string
	experience: number
	shipModel: string

	/**
	 * Constructs a new instance of a starship pilot.
	 * @param {string} codename - The pilot's unique codename.
	 * @param {number} experience - The number of missions completed.
	 * @param {string} shipModel - The model of the pilot's ship.
	 * @param {Starship} assignedStarship - The starship assigned to the pilot.
	 */
	constructor(codename: string, experience: number, shipModel: string, assignedStarship: Starship) {
		this.codename = codename
		this.experience = experience
		this.shipModel = shipModel
		this.assignedStarship = assignedStarship
	}

	/**
	 * Get the pilot's codename.
	 * @returns {string} - The pilot's codename.
	 */
	getCodename() {
		return this.codename
	}

	/**
	 * Set the pilot's codename.
	 * @param {string} codename - The new codename of the pilot.
	 */
	setCodename(codename: string) {
		this.codename = codename
	}
}

new Pilot('RebelOne', 102, 'YT-1300', Starship.MillenniumFalcon)
new Pilot('CaptainPicard', 1500, 'Constitution-class', Starship.Enterprise)
new Pilot('Browncoat', 47, 'Firefly-class', Starship.Serenity)
new Pilot('Mando', 55, 'ST-70', Starship.RazorCrest)
