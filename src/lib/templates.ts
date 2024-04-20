const calcProgram = `package main

func main() {
    println(42 + 2 * 56) // 154
    println(42 > 56)     // false
}
`;

const ifElseProgram = `package main

func main() {
    if 42 > 420 {
        println(42)
    } else {
        println(420)
    }
}
`;

const loopsProgram = `package main

func main() {
    n := 10
    for i := 0; i < n; i = i + 2 {
        println(i)
    }
    
    for i := 1 i < n; i = i + 2 {
        println(i)
    }
}
`;

const loopsProgramWithBreak = `package main

func main() {
    var i, j, k int
    for i < 5 {
        i++
        for j < 5 {
            j++
            if j == 4 {
                break
            } else {
                k++
            }
        }
        if i == 2 {
            break
        }
    }
    println(i + j + k) // 11
}
`;

const fibonacciLoopProgram = `package main

func main() {
    n := 10
    a, b := 0, 1
    for i := 0; i < n; i++ {
        println(a)
        temp := a
        a = b
        b = temp + b
    }

    println(a) // 55
}
`;

const factorialProgram = `package main

func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n - 1)
}

func main() {
    println(factorial(5)) // 120
}
`;

const fibonacciProgram = `package main

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

func main() {
    println(fibonacci(10)) // 55
}
`;

const concurrencyProgram = `package main

func main() {
    var wg WaitGroup
    wgAdd(wg, 2)

    go func() {
        println(1)
        wgDone(wg)
    }()

    go func() {
        println(2)
        wgDone(wg)
    }()

    wgWait(wg)
    println(3)
}
`;

const channelsProgram = `package main

const N int = 10

func sender(ch chan int, init int) {
    for i := init; i < N; i = i + 2 {
        ch <- i
    }
}()

func main() {
    ch := make(chan int)
    
    go sender(ch, 0)
    go sender(ch, 1)
    
    for i := 0; i < N; i++ {
        println(<-ch)
    }
}
`;

const concurrentCounterProgram = `package main

const FINAL_COUNT int = 15

func main() {
    ch := make(chan int)
    var wg WaitGroup

    for i := 0; i < FINAL_COUNT; i++ {
        wgAdd(wg, 1)
        go func() {
            count := <-ch 
            count++       
            wgDone(wg)
            ch <- count
        }()
    }
    
    ch <- 0

    wgWait(wg)                    
    println(<-ch) // 15
}
`;

const channelAsMutexProgram = `package main

var x int

func increment(wg WaitGroup, ch chan int) {
    ch <- 1
    x++
    <-ch
    wgDone(wg)
}

func main() {
    var wg WaitGroup
    ch := make(chan int, 1) // channel of size 1 acts as a mutex
    
    for i := 0; i < 1000; i++ {
        wgAdd(wg, 1)
        go increment(wg, ch)
    }
    
    wgWait(wg)
    println(x) // 1000
}
`;

const concurrentPrintProgram = `package main

func printNums(ch chan int, n int) {
    for i := 0; i < n; i++ {
        ch <- i
    }
}

func main() {
    ch := make(chan int, 1)
    go printNums(ch, 5)
    go printNums(ch, 3)
    
    for i := 0; i < 5 + 3; i++ {
        println(<-ch)
    }
}
`;

const sleepProgram = `package main

const NUM_SECS int = 5

func main() {
    go func() {
        for i := 0; i < NUM_SECS * 2; i++ {
            println(i)
            sleep(500)
        }
    }()

    for i := 0; i < NUM_SECS; i++ {
        println(i)
        sleep(1000)
    }
}
`;

const returnedClosureProgram = `package main

func makef(ch chan int, x int) func (int) int {
    z := 100
    f := func(y int) {
        ch <- x + y + z
    }
    return f
}

func main() {
    ch := make(chan int)
    go makef(ch, 3)(2)
    println(<-ch) // 105
}
`;

const sendOnClosedChannelProgram = `package main

const N1 int = 5
const N2 int = 3

func printNums(ch chan int, n int) {
    for i := 0; i < n; i++ {
        ch <- i
    }
    close(ch) // early close -> panic!
}

func main() {
    ch := make(chan int, 1)
    go printNums(ch, N1)
    go printNums(ch, N2)
    
    for i := 0; i < N1 + N2; i++ {
        println(<-ch)
    }
}
`;

const deadlockProgram = `package main

func main() {
    var wg WaitGroup

    wgAdd(wg, 1)
    wgWait(wg) // blocks here

    go func() {
        wgAdd(wg, 1)
        wgWait(wg) // blocks here
    }()

    go func() {
        wgAdd(wg, 1)
        wgWait(wg) // blocks here
    }()

    // deadlock! all goroutines are blocked
}
`;

export const templates: any = {
    'Calculator': calcProgram,
    'Conditionals': ifElseProgram,
    'Simple Loop': loopsProgram,
    'Loop with Break': loopsProgramWithBreak,
    'Iterative Fibonacci': fibonacciLoopProgram,
    'Recursive Fibonacci': fibonacciProgram,
    'Recursive Factorial': factorialProgram,
    'Basic Concurrency': concurrencyProgram,
    'Channels': channelsProgram,
    'Mutual Exclusion': concurrentCounterProgram,
    'Channel as Mutex': channelAsMutexProgram,
    'Sleep': sleepProgram,
    'Return Closure': returnedClosureProgram,
    'Channel Closing': sendOnClosedChannelProgram,
    'Deadlock': deadlockProgram,
};