# DApp

<p align="center">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/littlechameleon/DApp?style=flat-square">
</p>

- ## 项目简介

        使用node.js实现一个简单的区块链系统

- ## 技术栈

        Koa2框架

- ## 实现功能

        区块和区块链的创建、添加交易、打包区块、工作量证明算法、挖矿奖励、日志记录

- ## 使用方法

    ```shell
    npm install
    npm run dev
    ```

- ## 接口

        - /mine                 //将目前的交易打包到新的区块
        - /transactions/new     //添加新的交易
        - /chain                //获取当前区块链