# React プロジェクトの始め方

## 前提

- Node v18.1
- NPM v8.8
- React v18

## プロジェクトを作成する

    npx create-react-app --template=redux-typescript example-app
    cd example-app
    npm start

TypeScript が必要なかったら、`--template` オプションは省略する。

## Material UI を導入する

    npm install @mui/material @emotion/react @emotion/styled

## React Hook Form を導入する

スキーマビルダーとして `yup` も一緒に導入する。

    npm install react-hook-form yup @hookform/resolvers
