package main

import (
	_ "github.com/go-sql-driver/mysql"

	"github.com/ddreyer/cf-fantasy/server"

	"github.com/gin-gonic/gin"
)

func main() {
	models.InitDb()

	// temporarily create athlete tables
	models.CreateAthleteTables()

	router := gin.Default()

	api := router.Group("/api")
	api.GET("teams", models.GetTeams)
	router.Run()
}
