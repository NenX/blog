### 使用 typescript 
####  初始化
1. 初始化项目 <code> npm init -y </code>
2. 添加 TypeScript ：<code> npm i typescript -D </code>
3. 添加 <code> node.d.ts </code>：<code> npm i @types/node -D </code>
4. 添加 <code> tsconfig.json </code>：<code> npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs </code>
4. 添加 <code> ts-node </code>：<code> npm i ts-node -D </code>
5. 添加 <code> nodemon </code>：<code> npm i nodemon -D </code><br/>
  <code>"serve": "nodemon --watch src/**/*.ts --exec ts-node src/index.ts"</code>

