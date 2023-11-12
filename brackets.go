package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args[1:]

	if len(args) != 1 {
		return
	}
	b, p, c := 0, 0, 0
	Brackets(args, p, b, c)
}

// The function checks if the brackets in a given string are balanced and prints "OK" if they are, or
// "Error" if they are not.
func Brackets(args []string, p int, b int, c int) bool {
	for _, v := range args[0] {
		if v == '(' {
			p++
		}
		if v == ')' {
			p--
		}
		if v == '[' {
			if p != 0 {
				fmt.Println("Error")
				return true
			}
			b++
		}
		if v == ']' {
			b--
		}
		if v == '{' {
			if p != 0 || b != 0 {
				fmt.Println("Error")
				return true
			}
			c++
		}
		if v == '}' {
			c--
		}
	}

	if b != 0 || c != 0 || p != 0 {
		fmt.Println("Error")
	} else {
		fmt.Println("OK")
	}
	return false
}
