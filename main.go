package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

const (
	exitCodeOK int = iota
	exitCodeFailed
)

func main() {
	os.Exit(run(os.Args))
}

func run(args []string) int {
	r := gin.Default()
	r.Static("/", "./assets")
	err := r.Run(":8080")
	if err != nil {
		log.Println("Failed to start a web service", err)
		return exitCodeFailed
	}
	return exitCodeOK
}
