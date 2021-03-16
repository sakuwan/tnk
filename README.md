# tnk

Tailwind, Nunjucks, and Koa scaffolding & boilerplate.
Currently used for my [landing page](https://wankowan.moe), but realistically just a blend of some preferred technologies to see how they mesh in more detail.

Honest result: Not really well, from a developer experience stand-point.

## Issues:

* The lack of HMR or any comfortable way to live edit with simplicity, any genuine implementation would be effort. Simply due to rollup, nunjucks, and tailwindcss not exactly meshing well together in this regard.

* Repetition isn't solved well, or at all, in some of the templating cases, such as lists & classes with tailwind, and embedding advanced tailwindcss functionality (apply, etc) in nunjucks.

* 11ty & Alpine.js or Svelte would no doubt be a clear superior approach to this, and are much more sensible.

* Aspects of rollup are fantastic; though the lack of some of webpack's lesser-used funtionality is painful, such as require.context and similar.

* In the end, the mini site will likely be replaced with Koa & Ember or the aforementioned 11ty & Alpine.js + tailwindcss.

## Author

* **wan** - *Creator* - [Profile](https://github.com/sakuwan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
