# ts-leetcode

> 在面试中算法是很重要的一项，算法做不出来甚至有可能被拒之门外。本项目旨在于一起刷题，建议使用 `typescript` 刷题，已经配置好了调试 ts 的相关配置。

## 当前进度

<!--START_TABLE-->
| 文件夹 | 文件数量 |
| --- | --- |
| qhy |       50 |
| szm |       18 |
| tyx |        6 |

<!--END_TABLE-->

## 食用方式

clone 本项目

```shell
git clone git@github.com:YouthCampCoders/ts-leetcode.git
```

安装依赖

```shell
pnpm install
```

建议在根目录下创建一个属于自己文件夹，例如创建 `qhy` 文件夹，之后做完题以后把自己做过的题移动到自己的目录下目录就行。

## 调试方式

在 vscode 中打断点，再点击调试小箭头，开始愉快调试~

![image.png](https://s2.loli.net/2023/02/10/F1iTcmIGezv9KJM.png)

![image.png](https://s2.loli.net/2023/02/10/pSRe5olqvjyV9T6.png)

## 运行方式

如何运行代码，例如我们写好了一道题，自己填入了测试例子：

<img width="745" alt="image" src="https://user-images.githubusercontent.com/79465534/219562271-9bf07956-08d8-4a8e-be29-954564e10f06.png">

如果是 js 文件，直接在控制台输入 `node xxx` 即可，但是这是 ts 文件。
根据笔者的经验，可以通过 `ts-node`、`tsx`、`deno` 来运行。

`ts-node` 和 `tsx` 都是 `npm` 包，直接

```shell
npm install ts-node -g
npm install tsx -g
```

即可，然后 `ts-node xxx` or `tsx xxx` 即可运行。

deno 是一个新的 JavaScript 运行时，安装方式见官网，安装好以后 `deno run xxx` 即可。

## 插件(option)

可以在 vscode 中安装 leetcode 官方插件，具体配置自行搜索，可以帮助我们自动生成题目模板。

## 算法学习资料

- [LABULADONG 的算法网站](https://labuladong.gitee.io/algo/)
- [代码随想录](https://programmercarl.com/)
- [CodeTop](https://codetop.cc/)
