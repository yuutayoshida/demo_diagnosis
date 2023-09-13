# flarune_shindan

## Getting Started

### Environment
- nodejs v14.15.0

### install node package module

```
$ npm install
```

## Documentation
### 1. Directory Structure

```
├── README.md
├── _build
│   ├── node_modules
│   ├── gulpfile.js
│   └── package.json
├── _src                         // 編集ファイル格納ディレクトリ
│   ├── js
│   └── scss
└── deploy               // 書き出しディレクトリ
```

### 2. Generate Static HTML file

#### Static HTML
```
$ gulp
```

#### Task Runner （for Release）
```
$ gulp --type release
```
