package main

import (
	"flag"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

const (
	exitCodeOK int = iota
	exitCodeFailed
)

var (
	addr = flag.String("addr", ":8080", "a port of this service")
)

func init() {
	flag.Parse()
}

func main() {
	os.Exit(run(os.Args))
}

func run(args []string) int {
	r := gin.Default()
	r.Static("/", "./assets")
	err := r.Run(*addr)
	if err != nil {
		log.Println("Failed to start a web service", err)
		return exitCodeFailed
	}
	return exitCodeOK
}
