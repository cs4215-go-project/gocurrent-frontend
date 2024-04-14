const calcProgram = `package main

func main() {
    println(42 + 2 * 56) // 154
    println(42 > 56)     // false
}
`;

const ifElseProgram = `package main

func main() {
    if 42 > 56 {
        println(42)
    } else {
        println(56)
    }
}
`;

const loopsProgram = `package main

func main() {
    n := 10
    for i := 0; i < n; i++ {
        println(i)
    }
}
`;

const loopsProgramWithBreak = `package main

func main() {
    var i int = 0
    var j int = 0
    var k int = 0
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

const factorialProgram = `package main

func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n - 1)
}

func main() {
    println(factorial(5))
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

func main() {
    ch := make(chan int)
    
    go func() {
        for i := 0; i < 5; i++ {
            ch <- i
        }
        close(ch)
    }()

    for i := 0; i < 5; i++ {
        println(<-ch)
    }
}
`;

const concurrentCounterProgram = `package main

func main() {
    ch := make(chan int)
    var wg WaitGroup

    for i := 0; i < 15; i++ {
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

func main() {
    go func() {
        sleep(1000)
        println(100)
    }()
    sleep(5000)
    println(10)
}
`;

const sendOnClosedChannelProgram = `package main

func printNums(ch chan int, n int) {
    for i := 0; i < n; i++ {
        ch <- i
    }
    close(ch) // early close -> panic!
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

const deadlockProgram = `package main

func main() {
    ch := make(chan int)
    ch <- 42
    println(<-ch)
}
`;

export const templates: any = {
    'Calculator': calcProgram,
    'Conditionals': ifElseProgram,
    'Loop': loopsProgram,
    'Loop with Break': loopsProgramWithBreak,
    'Functions': factorialProgram,
    'Basic Concurrency': concurrencyProgram,
    'Channels': channelsProgram,
    'Concurrent Print': concurrentPrintProgram,
    'Concurrent Counter': concurrentCounterProgram,
    'Sleep': sleepProgram,
    'Channel Closing': sendOnClosedChannelProgram,
    'Deadlock': deadlockProgram,
};