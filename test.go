package main

import (
	"bytes"
	"os/exec"
	"testing"
)

func TestBrackets(t *testing.T) {

	tests := []struct {
		Input string
		Want  string
	}{
		{
			"()",
			"OK",
		},
		{
			")()",
			"Error",
		},
	}

	for _, test := range tests {
		output, err := getOutput("brackets.go", []string{test.Input})
		if err != nil {
			t.Errorf("Erreur lors de l'exécution de brackets.go : %s", err)
			return
		}
		// Vérifie le résultat obtenu
		if output[:len(output)-1] != test.Want {
			t.Errorf("Pour l'expression %s, résultat incorrect. Attendu: %s, Résultat: %s", test.Input, test.Want, output)
		}
	}
}

func getOutput(programName string, args []string) (string, error) {
	cmdArgs := append([]string{"run", programName}, args...)
	cmd := exec.Command("go", cmdArgs...)

	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()
	if err != nil {
		return "", err
	}

	return out.String(), nil
}
