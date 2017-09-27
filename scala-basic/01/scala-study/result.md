**初級**
```
scala> 8727 * 9874
res2: Int = 86170398
```

**中級**
```
scala>  def fizzBuzz(n: Int) {
     |    if (n % 15 == 0) {
     |      println("FizzBuzz")
     |    } else if (n % 3 == 0) {
     |      println("Fizz")
     |    } else if (n % 5 == 0) {
     |      println("Buzz")
     |    } else {
     |      println(n)
     |    }
     |  }
fizzBuzz: (n: Int)Unit

scala> (1 to 100).foreach(fizzBuzz)
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
```

**上級**
```
scala> def printCount(n: Int): Unit = {
     |   println(n)
     |   printCount(n + 1)
     | }
printCount: (n: Int)Unit

scala> printCount(0)
1
2
3
4
5
== 省略 ==
```