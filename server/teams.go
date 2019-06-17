package models

import (
	"fmt"
	"net/http"

	"github.com/elgs/gosqljson"
	"github.com/gin-gonic/gin"
)

// Create temporary team tables for development
func CreateTempTeamTables() {
	query := `DROP TABLE if exists teams`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `CREATE TABLE teams (athleteId INT, owner VARCHAR(20), pickNumber INT, used BOOLEAN, FOREIGN KEY (athleteId) REFERENCES athletes(athleteId))`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
	query = `INSERT into teams (athleteId, owner, pickNumber, used) VALUES (1, 'Dylan', 1, false), (2, 'Dylan', 2, true)`
	if _, err := db.Exec(query); err != nil {
		panic(err)
	}
}

func GetTeams(c *gin.Context) {
	data := make(map[string][][]string)
	for _, user := range []string{"Dylan", "Matti", "Kevin"} {

		queryStr := fmt.Sprintf("SELECT t.pickNumber, a.firstname, a.lastname, t.used from teams t INNER JOIN athletes a on t.athleteId = a.athleteId where t.owner='%s' order by t.pickNumber;", user)
		_, newData, err := gosqljson.QueryDbToArray(db, "lower", queryStr)
		fmt.Println(newData)
		if err != nil {
			panic(err)
		}
		data[user] = newData
	}

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": data})
}
