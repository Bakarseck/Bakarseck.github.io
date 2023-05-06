package main

import "fmt"

func ConvertBase(n, base int) string {
	if n < base {
		return string(n + '0')
	}
	return ConvertBase(n/base, base) + string(n%base + '0')
}

/*
	long S(n,k){return--n?k*S(n,k)+S(n,k-1):k==1;}main(n,k){scanf("%d%d",&n,&k);printf("%ld",S(n,k));}
*/

func main() {
	fmt.Println(ConvertBase(7, 7))
}