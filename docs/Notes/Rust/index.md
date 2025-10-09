---
layout: doc
---

# [Rust](https://rustwiki.org/docs/) 自理解笔记,有许多错误的可能

Rust是一门静态类型编程语言，但是它的类型系统是基于动态类型的，因此它的类型检查是动态的，但是它的类型推断是静态的，因此它的类型推断是静态的，因此它的类型推断是静态的

## 错误处理
Result 与 painc!宏都是Rust的错误处理机制
```Rust
fn main() {
    let f = File::open("hello.txt");
    let f = match f {
        Ok(file) => file,
        Err(error) => { //这是Result的错误处理 可以恢复的
            //这是painc!的错误处理 不可恢复的
            panic!("There was a problem opening the file: {:?}", error);
        },
    };
}
```

## 生命周期
Rust中生命周期只要是用于防止悬垂引用的问题
```Rust

```

## Trait
是定义接口的 想让什么结构体实现什么接口就实现什么trait
```Rust
trait Summary {
    fn summarize(&self) -> String;
}

struct Tweet {
    username: String,
    content: String
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}
```

## Test
Rust中Test是单元测试 这就是一个简单的测试
```Rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

## 异步与多线程的区别
举个例子 GUI程序每一帧都在刷新 但如果需要网络请求怎么办 总不能等待网络请求 而不更新UI吧
### 多线程
如果使用多线程解决上面的问题 那么就需要开启一个新的线程来执行网络请求 请求完毕再把数据返回给主线程更新UI 这样需要开启两个线程

多线程就是开启多个子线程 每个任务放进一个线程 执行这样如果执行耗时操作 那么CPU就会等待这个耗时操作 从而浪费性能
### 异步
如果使用异步解决上面的问题只需要一个线程就够了 只需要把网络请求添加进任务队列里 这样网络请求等待的时候 线程还是能更新UI 请求完毕通过通道把数据传出来就可以了

异步是把任务放进一个任务队列 遇到耗时任务CPU不会等待这个任务 会去看任务队列是否还有任务有就去执行 从而不浪费性能 更高效的利用CPU

## 并发

## 通道

## 安全

## 标准库