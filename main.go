package main

import (
	"database/sql"
	"net/http"

	_ "github.com/go-sql-driver/mysql"

	"github.com/ddreyer/cf-fantasy/server"

	"github.com/gin-gonic/gin"
)

var DB *sql.DB

func main() {
	var err error
	DB, err = sql.Open("mysql", "root@/cfDb")
	if err != nil {
		panic(err)
	}
	defer DB.Close()

	// temporarily create athlete tables
	models.CreateAthleteTables(DB)

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello world")
	})
	router.Run()
}
