package models

import (
	"database/sql"
)

var db *sql.DB

func InitDb() {
	var err error
	db, err = sql.Open("mysql", "root@/cfDb")
	if err != nil {
		panic(err)
	}
}
