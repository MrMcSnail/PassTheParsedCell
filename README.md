# Pass the Parsed Cell

Welcome to Project Phase 🎉

The purpose of this mini sprint is to give you some knowledge of how all the lovely content created is displayed to our students via the Learn to Code app.

## Learning Objectives

1. Learn how to parse markdown into json format to be stored in a database
2. Create some architecture to allow the json to be effectively rendered for a user
3. Gain insight into the inner workings of the Learn To Code platform

## Part 1 - We need some treats (content)

Write a short lesson on any topic of your choosing in markdown format. Your lesson will need to include the following styles.

- Headings
- Lists
- Bold text
- Italic text
- Code
- Code blocks
- Links

Here are a couple of resources to help you write in markdown.

1. [Markdown guide](https://www.markdownguide.org/basic-syntax)
2. [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Part 2 - Parsing Party

We want to be able to eventually display all our markdown data in an aesthetic way on the front end using JavaScript.
In order to do so, we want our data in a more relevant json format. Have a look at [this](https://marked.js.org/) library to do so.

_*`Note`*_ You will notice that the main functionality for marked.js is to convert markdown to html so you will need to delve a little into the docs to find the relevant markdown to json functionality 👀

## Part 3 - Party bag (database) to store our treats (json)

Now we have some parsed data, we need a way for it to persist so we can access the lesson whenever we like.
The lesson data should be stored in a postgres database and the json data itself can be stored in a [postgres json column](https://www.postgresql.org/docs/current/datatype-json.html).

You'll need to write a seed to populate the database with your lesson data.

## Part 4 - Serving up tasty treats

Next up is making an API to serve up your lesson data. Write an express server to serve up the data from your database.

## Part 5 - Consuming all the treats (data)

Now that your lesson data is available to the world it's time to write a front end for it. This should be done in React and you'll need to design some components that render your lesson in a readable manner.

The UI of these components is essential to the success of the app so we would like you to build your components using [Storybook](https://storybook.js.org/). Storybook is a library developers use to be able to build up their UI components in isolation.

Read [here](./atomic-design-storybook.md) for some more information about Storybook and Atomic Design.

Once you are happy with their design then use them in an App to see your lesson in all it's glory.

## Advanced party tricks

If you've got time add some additional features to your project to make it more flexible. Take a look at the following features:

- One lesson just isn't enough. Add the ability to have multiple lessons that follow on from each other in order.
- Manually running the seed process is very flaky. Automate this with [github actions](https://docs.github.com/en/actions) so your devs can focus on writing the content and everything will be updated automatically when they push their changes.
- Investigate some of the frameworks that are used in the l2c platform to make some of these features easier.
  - [Prisma](https://www.prisma.io/) - For additional database functionality
  - [Next.js](https://nextjs.org/) - To replace create react app and enable server side rendering
  - [Typescript](https://www.typescriptlang.org/) - Bring balance to the force and make sure all your data is of the correct format
