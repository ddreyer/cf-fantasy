package models

import (
	"database/sql"
	"fmt"
)

func CreateAthleteTables(DB *sql.DB) {
	fmt.Println(DB)
	query := `CREATE TABLE maleathletes (lastname VARCHAR(20), firstname VARCHAR(20))`
	if _, err := DB.Exec(query); err != nil {
		panic(err)
	}

}
