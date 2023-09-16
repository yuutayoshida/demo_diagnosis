# demo_diagnosis

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
│   ├── ejs
│   ├── js
│   └── scss
├── dev                // ローカル検証用ディレクトリ　　　　　　　　　
└── docs               // 公開ディレクトリ
```

### 2. Generate Static HTML file

#### Static HTML
```
$ gulp
```

#### Browser Sync
```
$ gulp sync
```

#### Task Runner （for Release）
```
$ gulp --type release
```
