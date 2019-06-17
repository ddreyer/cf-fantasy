package models

// Create temporary athlete tables for development
func CreateTempAthleteTables() {
	query := `DROP TABLE if exists teams`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `DROP TABLE if exists athletes`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE athletes (athleteId INT AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), sex VARCHAR(1), PRIMARY KEY (athleteId))`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `INSERT into athletes (firstname, lastname, sex) VALUES ('Josh', 'Bridges', 'm'), ('Tia', 'Toomey', 'f')`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
}

// This function will populate the real 2019 athlete tables from a csv file
// func CreateAthleteTables() {

// }
