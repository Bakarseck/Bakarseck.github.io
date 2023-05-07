package main

import "fmt"

func gcd(a, b int) int {
	if a%b == 0 {
		return b
	}
	return gcd(b, a%b)
}

func ConvertBase(n, base int) string {
	if base > 10 && n > 10 {
		if n < base {
			return string(n - 10 + 'A')
		}
	} else if n > 10 {
		return string(n + '0')
	} 
	if base > 10 && n > 10 {
		return ConvertBase(n/base, base) + string(n%16 - 10 + 'A')
	}
	return ConvertBase(n/base, base) + string(n%base + '0')
}

/*
	long S(n,k){return--n?k*S(n,k)+S(n,k-1):k==1;}main(n,k){scanf("%d%d",&n,&k);printf("%ld",S(n,k));}
*/

func main() {
	a := ConvertBase(255, 16)
	fmt.Println(a)

	b := gcd(2, 0)
	fmt.Println(b)
}
