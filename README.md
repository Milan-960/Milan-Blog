## How to use it

please read following link.

- [how to add blog post](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-blog.md)
- [how to custom resume](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-resume.md)

## How to deploy with vercel

so, you can deploy very easy with this [vercel guide](https://vercel.com/docs/concepts/git/monorepos#turborepo)

- blog build command

```bash
cd ../.. && npx turbo run build --scope=blog --include-dependencies --no-deps
```

- resume build command

```bash
cd ../.. && npx turbo run build --scope=resume --include-dependencies --no-deps
```

## How to add more packages

- scope packages

```bash
cd where-you-want
yarn add package-name
```

- global packages

```bash
yarn add package-name -W
```

- global dev packages

```bash
yarn add package-name -DW
```

## Trouble shootings

check [this wiki](https://github.com/hyesungoh/comet-land/wiki/Trouble-Shooting) please! it might be help

## Inspired

I inspired below blogs and resume.

- [Overreacted](https://overreacted.io/)
- [Yceffort](https://yceffort.kr/)
- [gatsby-starter-bee](https://gatsby-starter-bee.netlify.app/)
- [vallista-land](https://vallista.kr/)
- [hyunseob.github.io/resume](https://hyunseob.github.io/resume/)

## License

MIT
