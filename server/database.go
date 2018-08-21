package models

import (
	"database/sql"
)

func CreateAthleteTables(DB *sql.DB) {
	query := `DROP TABLE if exists maleAthletes`
	if _, err := DB.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE maleAthletes (lastname VARCHAR(20), firstname VARCHAR(20))`
	if _, err := DB.Exec(query); err != nil {
		panic(err)
	}
	query = `INSERT into maleAthletes (lastname, firstname) VALUES ('Bridges', 'Josh')`
	if _, err := DB.Exec(query); err != nil {
		panic(err)
	}
	query = `DROP TABLE if exists femaleAthletes`
	if _, err := DB.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE femaleAthletes (lastname VARCHAR(20), firstname VARCHAR(20))`
	if _, err := DB.Exec(query); err != nil {
		panic(err)
	}
}
