package models

import (
	"net/http"

	"github.com/elgs/gosqljson"
	"github.com/gin-gonic/gin"
)

func CreateAthleteTables() {
	query := `DROP TABLE if exists maleAthletes`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE maleAthletes (lastname VARCHAR(20), firstname VARCHAR(20))`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `INSERT into maleAthletes (lastname, firstname) VALUES ('Bridges', 'Josh')`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `DROP TABLE if exists femaleAthletes`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE femaleAthletes (lastname VARCHAR(20), firstname VARCHAR(20))`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
}

func GetTeams(c *gin.Context) {
	_, data, err := gosqljson.QueryDbToArray(db, "lower", "SELECT * from players;")
	if err != nil {
		panic(err)
	}

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": data})
}
