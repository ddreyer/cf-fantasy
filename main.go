package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"

	"cf-fantasy/server"
)

var DB *sql.DB

func main() {
	var err error
	DB, err = sql.Open("mysql", "root@/cfDB")
	if err != nil {
		panic(err)
	}
	defer DB.Close()
	fmt.Print(DB)
	// temporarily create athlete tables
	models.CreateAthleteTables(DB)
}
