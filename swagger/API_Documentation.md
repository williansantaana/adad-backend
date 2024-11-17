# ADAD Backend API
Backend API documentation for the Distributed Data Storage project 

 Student: Willian Santa Ana
 Student number: 122042
 GitHub: https://github.com/williansantaana/adad-backend.git

## GET http://localhost:3000/books
**Summary**: Get books with pagination
**Description**: This endpoint retrieves a paginated list of books.

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |



### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "books": [
    {
      "_id": 1,
      "title": "Unlocking Android",
      "isbn": "1933988673",
      "pageCount": 416,
      "publishedDate": "2009-04-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
      "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
      "status": "PUBLISH",
      "authors": [
        "W. Frank Ableson",
        "Charlie Collins",
        "Robi Sen"
      ],
      "categories": [
        "Open Source",
        "Mobile"
      ]
    },
    {
      "_id": 2,
      "title": "Android in Action, Second Edition",
      "isbn": "1935182722",
      "pageCount": 592,
      "publishedDate": "2011-01-14T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
      "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      "longDescription": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      "status": "PUBLISH",
      "authors": [
        "W. Frank Ableson",
        "Robi Sen"
      ],
      "categories": [
        "Java"
      ]
    },
    {
      "_id": 3,
      "title": "Specification by Example",
      "isbn": "1617290084",
      "pageCount": 0,
      "publishedDate": "2011-06-03T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
      "status": "PUBLISH",
      "authors": [
        "Gojko Adzic"
      ],
      "categories": [
        "Software Engineering"
      ]
    },
    {
      "_id": 4,
      "title": "Flex 3 in Action",
      "isbn": "1933988746",
      "pageCount": 576,
      "publishedDate": "2009-02-02T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
      "longDescription": "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
      "status": "PUBLISH",
      "authors": [
        "Tariq Ahmed with Jon Hirschi",
        "Faisal Abid"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 5,
      "title": "Flex 4 in Action",
      "isbn": "1935182420",
      "pageCount": 600,
      "publishedDate": "2010-11-15T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
      "longDescription": "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you'll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 \"Halo\" versions. Spark components are easier to customize, which makes skinning and theme design much faster  A new \"network monitor\" allows you to see the data communications between a Flex application and a backend server, which helps when trying to debug applications that are communicating to another system/service  Numerous productivity boosting features that speed up the process of creating applications  A faster compiler to take your human-written source code and convert it into a machine-readable format  Built-in support for unit testing allows you to improve the quality of your software, and reduce the time spent in testing",
      "status": "PUBLISH",
      "authors": [
        "Tariq Ahmed",
        "Dan Orlando",
        "John C. Bland II",
        "Joel Hooks"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 6,
      "title": "Collective Intelligence in Action",
      "isbn": "1933988312",
      "pageCount": 425,
      "publishedDate": "2008-10-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
      "longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.    Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.    This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.    Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.",
      "status": "PUBLISH",
      "authors": [
        "Satnam Alag"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 7,
      "title": "Zend Framework in Action",
      "isbn": "1933988320",
      "pageCount": 432,
      "publishedDate": "2008-12-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
      "shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
      "longDescription": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.     For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.    Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.  This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.  ",
      "status": "PUBLISH",
      "authors": [
        "Rob Allen",
        "Nick Lo",
        "Steven Brown"
      ],
      "categories": [
        "Web Development"
      ]
    },
    {
      "_id": 8,
      "title": "Flex on Java",
      "isbn": "1933988797",
      "pageCount": 265,
      "publishedDate": "2010-10-15T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
      "shortDescription": "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
      "longDescription": "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
      "status": "PUBLISH",
      "authors": [
        "Bernerd Allmon",
        "Jeremy Anderson"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 9,
      "title": "Griffon in Action",
      "isbn": "1935182234",
      "pageCount": 375,
      "publishedDate": "2012-06-04T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
      "shortDescription": "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
      "longDescription": "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
      "status": "PUBLISH",
      "authors": [
        "Andres Almiray",
        "Danno Ferrin",
        "",
        "James Shingler"
      ],
      "categories": [
        "Java"
      ]
    },
    {
      "_id": 11,
      "title": "Flexible Rails",
      "isbn": "1933988509",
      "pageCount": 592,
      "publishedDate": "2008-01-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
      "shortDescription": "\"Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.\"",
      "longDescription": "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.",
      "status": "PUBLISH",
      "authors": [
        "Peter Armstrong"
      ],
      "categories": [
        "Web Development"
      ]
    }
  ],
  "pagination": {
    "totalRecords": 40,
    "totalPages": 4,
    "currentPage": 1
  }
}
```

## POST http://localhost:3000/books
**Summary**: Create a New Book
**Description**: This endpoint creates one or more new books with the provided details.


### Request Body
The body of the request must be in JSON format and including a single object or an array with the following fields:

| Field             | Type       | Description                                    |
|--------------------|------------|------------------------------------------------|
| `title`           | `string`   | The title of the book.                         |
| `isbn`            | `string`   | The ISBN number of the book.                   |
| `pageCount`       | `number`   | The number of pages in the book.               |
| `publishedDate`   | `object`   | An object containing the `date` field (ISO 8601). |
| `thumbnailUrl`    | `string`   | The URL of the book's thumbnail.               |
| `longDescription` | `string`   | A detailed description of the book.            |
| `status`          | `string`   | The status of the book (`PUBLISH` or other).   |
| `authors`         | `array`    | A list of authors of the book.                 |
| `categories`      | `array`    | A list of categories for the book.             |

### Parameters:
- **body** (body): N/A

### Response:
```json
{
  "message": "Book added successfully",
  "insertedIds": "673a61ae37a69a63b35b42c5"
}
```

## GET http://localhost:3000/users
**Summary**: Get users with pagination
**Description**: This endpoint retrieves a paginated list of users.

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of users to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "users": [
    {
      "_id": 1,
      "first_name": "Nadège",
      "last_name": "Storror",
      "year_of_birth": 2015,
      "job": "Accounting Assistant IV",
      "reviews": [
        {
          "book_id": 2,
          "score": 3,
          "recommendation": true,
          "review_date": "1653163712000"
        },
        {
          "book_id": 25,
          "score": 4,
          "recommendation": false,
          "review_date": "1717718933000"
        },
        {
          "book_id": 25,
          "score": 4,
          "recommendation": false,
          "review_date": "1632347207000"
        },
        {
          "book_id": 33,
          "score": 2,
          "recommendation": false,
          "review_date": "1663746778000"
        },
        {
          "book_id": 13,
          "score": 2,
          "recommendation": false,
          "review_date": "1645737451000"
        },
        {
          "book_id": 5,
          "score": 1,
          "recommendation": false,
          "review_date": "1610517569000"
        },
        {
          "book_id": 37,
          "score": 3,
          "recommendation": false,
          "review_date": "1673505211000"
        }
      ]
    },
    {
      "_id": 2,
      "first_name": "Ophélie",
      "last_name": "Kas",
      "year_of_birth": 2010,
      "job": "Help Desk Operator",
      "reviews": []
    },
    {
      "_id": 3,
      "first_name": "Danièle",
      "last_name": "Gascard",
      "year_of_birth": 1999,
      "job": "Recruiter",
      "reviews": [
        {
          "book_id": 18,
          "score": 2,
          "recommendation": false,
          "review_date": "1653094255000"
        },
        {
          "book_id": 16,
          "score": 2,
          "recommendation": true,
          "review_date": "1684816884000"
        },
        {
          "book_id": 33,
          "score": 5,
          "recommendation": true,
          "review_date": "1586584290000"
        }
      ]
    },
    {
      "_id": 4,
      "first_name": "Thérèse",
      "last_name": "Wagstaffe",
      "year_of_birth": 2004,
      "job": "Media Manager II",
      "reviews": [
        {
          "book_id": 34,
          "score": 3,
          "recommendation": true,
          "review_date": "1725910983000"
        },
        {
          "book_id": 25,
          "score": 1,
          "recommendation": true,
          "review_date": "1674927958000"
        },
        {
          "book_id": 7,
          "score": 5,
          "recommendation": true,
          "review_date": "1630663962000"
        },
        {
          "book_id": 3,
          "score": 3,
          "recommendation": true,
          "review_date": "1610862580000"
        },
        {
          "book_id": 23,
          "score": 2,
          "recommendation": false,
          "review_date": "1646489246000"
        },
        {
          "book_id": 7,
          "score": 2,
          "recommendation": true,
          "review_date": "1614285389000"
        }
      ]
    },
    {
      "_id": 5,
      "first_name": "Björn",
      "last_name": "Skim",
      "year_of_birth": 2007,
      "job": "Database Administrator III",
      "reviews": [
        {
          "book_id": 11,
          "score": 2,
          "recommendation": true,
          "review_date": "1626048892000"
        },
        {
          "book_id": 35,
          "score": 3,
          "recommendation": true,
          "review_date": "1720314688000"
        },
        {
          "book_id": 36,
          "score": 2,
          "recommendation": false,
          "review_date": "1632011851000"
        },
        {
          "book_id": 34,
          "score": 5,
          "recommendation": false,
          "review_date": "1636421706000"
        },
        {
          "book_id": 37,
          "score": 2,
          "recommendation": false,
          "review_date": "1649661615000"
        }
      ]
    },
    {
      "_id": 6,
      "first_name": "Kù",
      "last_name": "Swindall",
      "year_of_birth": 2002,
      "job": "Environmental Specialist",
      "reviews": [
        {
          "book_id": 30,
          "score": 5,
          "recommendation": true,
          "review_date": "1639627983000"
        },
        {
          "book_id": 28,
          "score": 2,
          "recommendation": true,
          "review_date": "1696992952000"
        },
        {
          "book_id": 23,
          "score": 3,
          "recommendation": false,
          "review_date": "1603546037000"
        }
      ]
    },
    {
      "_id": 7,
      "first_name": "Annotée",
      "last_name": "Dearn",
      "year_of_birth": 2007,
      "job": "Business Systems Development Analyst",
      "reviews": [
        {
          "book_id": 40,
          "score": 4,
          "recommendation": false,
          "review_date": "1600108874000"
        },
        {
          "book_id": 8,
          "score": 4,
          "recommendation": false,
          "review_date": "1629417857000"
        }
      ]
    },
    {
      "_id": 8,
      "first_name": "Maïwenn",
      "last_name": "Taillant",
      "year_of_birth": 1998,
      "job": "Analog Circuit Design manager",
      "reviews": [
        {
          "book_id": 30,
          "score": 5,
          "recommendation": false,
          "review_date": "1642712502000"
        },
        {
          "book_id": 17,
          "score": 2,
          "recommendation": false,
          "review_date": "1590991362000"
        },
        {
          "book_id": 3,
          "score": 5,
          "recommendation": false,
          "review_date": "1720420466000"
        },
        {
          "book_id": 10,
          "score": 3,
          "recommendation": false,
          "review_date": "1678579766000"
        }
      ]
    },
    {
      "_id": 9,
      "first_name": "Simplifiés",
      "last_name": "Dessaur",
      "year_of_birth": 1999,
      "job": "Nurse Practicioner",
      "reviews": []
    },
    {
      "_id": 10,
      "first_name": "Sélène",
      "last_name": "Blodgett",
      "year_of_birth": 2011,
      "job": "Account Executive",
      "reviews": [
        {
          "book_id": 15,
          "score": 1,
          "recommendation": true,
          "review_date": "1711624031000"
        },
        {
          "book_id": 22,
          "score": 1,
          "recommendation": true,
          "review_date": "1663799739000"
        },
        {
          "book_id": 31,
          "score": 4,
          "recommendation": false,
          "review_date": "1597350736000"
        },
        {
          "book_id": 9,
          "score": 1,
          "recommendation": true,
          "review_date": "1603525882000"
        },
        {
          "book_id": 15,
          "score": 4,
          "recommendation": true,
          "review_date": "1657954113000"
        },
        {
          "book_id": 19,
          "score": 2,
          "recommendation": true,
          "review_date": "1614512606000"
        },
        {
          "book_id": 32,
          "score": 4,
          "recommendation": true,
          "review_date": "1612394904000"
        },
        {
          "book_id": 28,
          "score": 2,
          "recommendation": true,
          "review_date": "1687469756000"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1002,
    "totalPages": 101,
    "currentPage": 1
  }
}
```

## POST http://localhost:3000/users
**Summary**: Create a New User
**Description**: This endpoint creates one or more new users with the provided details.


### Request Body
The body of the request must be in JSON format and include the following fields:

| Field          | Type     | Description                          |
|-----------------|----------|--------------------------------------|
| `first_name`   | `string` | The first name of the user.          |
| `last_name`    | `string` | The last name of the user.           |
| `year_of_birth`| `number` | The year of birth of the user.       |
| `job`          | `string` | The occupation of the user.          |
| `reviews`      | `array`  | A list of reviews related to the user. |



### Parameters:
- **body** (body): N/A

### Response:
```json
{
  "message": "User added successfully",
  "insertedIds": "673a61ae37a69a63b35b42c6"
}
```

## GET http://localhost:3000/books/6739b68fe4c4f7929dbbf31b
**Summary**: Get a book by ID
**Description**: This endpoint retrieves the details of a book by its unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the book.    |

### Parameters:

### Response: Error
```json
{
  "message": "Book with id: 6739b68fe4c4f7929dbbf31b not found"
}
```

## GET http://localhost:3000/users/6739b5bce4c4f7929dbbf31a
**Summary**: Get a user by ID
**Description**: This endpoint retrieves the details of a user by its unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the user.    |

### Parameters:

### Response: Error
```json
{
  "message": "User with id: 6739b5bce4c4f7929dbbf31a not found"
}
```

## DELETE http://localhost:3000/books/39
**Summary**: Delete a Book by ID
**Description**: This endpoint deletes a book record by its unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the book.    |

### Parameters:

### Response:
```json
{
  "message": "Book with id 39 deleted with success"
}
```

## DELETE http://localhost:3000/users/700
**Summary**: Delete a user by ID
**Description**: This endpoint deletes a user record by its unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the user.    |

### Parameters:

### Response:
```json
{
  "message": "User with id 700 deleted successfully"
}
```

## PUT http://localhost:3000/books/6739b82ae4c4f7929dbbf31d
**Summary**: Update a Book by ID
**Description**: This endpoint updates the details of an existing book by its unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the book.    |

&nbsp;

### Request Body
The body of the request must be in JSON format and include the following fields:

| Field             | Type       | Description                                    |
|--------------------|------------|------------------------------------------------|
| `title`           | `string`   | The title of the book.                         |
| `isbn`            | `string`   | The ISBN number of the book.                   |
| `pageCount`       | `number`   | The number of pages in the book.               |
| `publishedDate`   | `object`   | An object containing the `date` field (ISO 8601). |
| `thumbnailUrl`    | `string`   | The URL of the book's thumbnail.               |
| `longDescription` | `string`   | A detailed description of the book.            |
| `status`          | `string`   | The status of the book (`PUBLISH` or other).   |
| `authors`         | `array`    | A list of authors of the book.                 |
| `categories`      | `array`    | A list of categories for the book.             |

### Parameters:
- **body** (body): N/A

### Response:
```json
{
  "message": "Book with id 6739b82ae4c4f7929dbbf31d updated with success"
}
```

## PUT http://localhost:3000/users/6739b824e4c4f7929dbbf31c
**Summary**: Update a User by ID
**Description**: This endpoint updates the details of an existing user by their unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the user.    |

&nbsp;

### Request Body
The body of the request must be in JSON format and include the following fields:

| Field          | Type     | Description                              |
|-----------------|----------|------------------------------------------|
| `first_name`   | `string` | The first name of the user.              |
| `last_name`    | `string` | The last name of the user.               |
| `year_of_birth`| `number` | The year of birth of the user.           |
| `job`          | `string` | The job title of the user.               |
| `reviews`      | `array`  | A list of reviews associated with the user. |

### Parameters:
- **body** (body): N/A

### Response:
```json
{
  "message": "User with id 6739b824e4c4f7929dbbf31c updated successfully"
}
```

## GET http://localhost:3000/books/top/3
**Summary**: Retrieve Top Books by Average Score
**Description**: This endpoint retrieves a paginated list of books with the highest average scores. The number of books returned is determined by the `count` parameter.

### Path Parameters

| Parameter | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| `count`   | `number` | The number of top books to retrieve.         |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **page** (query): N/A

### Response:
```json
{
  "books": [
    {
      "_id": 23,
      "title": "Hibernate in Action (Chinese Edition)",
      "isbn": null,
      "pageCount": 400,
      "publishedDate": "1999-06-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
      "shortDescription": null,
      "longDescription": null,
      "status": "PUBLISH",
      "authors": [
        "Christian Bauer",
        "Gavin King"
      ],
      "categories": [
        "Java"
      ],
      "averageScore": 3.216494845360825
    },
    {
      "_id": 14,
      "title": "Coffeehouse",
      "isbn": "1884777384",
      "pageCount": 316,
      "publishedDate": "1997-07-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
      "shortDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
      "longDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web. The purpose is to capture the zeitgeist of the web's creative community, and to give readers a chance to enjoy some of the best and most notable original works that have appeared in this form. It showcases over forty individual web writers, among them Joseph Squier, Martha Conway, Jason Snell, David Alexander, Carl Steadman and Walter Miller. The intent is to show the variety and vitality of the web's blossoming literary \"scene,\" and to capture the unique and highly iconoclastic \"personality\" of the web community.",
      "status": "PUBLISH",
      "authors": [
        "Levi Asher",
        "Christian Crumlish"
      ],
      "categories": [
        "Miscellaneous"
      ],
      "averageScore": 3.185185185185185
    },
    {
      "_id": 28,
      "title": "Hibernate Search in Action",
      "isbn": "1933988649",
      "pageCount": 488,
      "publishedDate": "2008-12-21T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
      "shortDescription": "\"A great resource for true database independent full text search.\" --Aaron Walker, base2Services",
      "longDescription": "Good search capability is one of the primary demands of a business application. Engines like Lucene provide a great starting point, but with complex applications it can be tricky to implement. It's tough to keep the index up to date, deal with the mismatch between the index structure and the domain model, handle querying conflicts, and so on.    Hibernate Search is an enterprise search tool based on Hibernate Core and Apache Lucene. It provides full text search capabilities for Hibernate-based applications without the infrastructural code required by other search engines. With this free, open-source technology, you can quickly add high-powered search features in an intelligent, maintainable way.    Hibernate Search in Action is a practical, example-oriented guide for Java developers with some background in Hibernate Core. As the first book to cover Hibernate Search, it guides you through every step to set up full text search functionality in your Java applications. The book also introduces core search techniques and reviews the relevant parts of Lucene, in particular the query capabilities.    Hibernate Search in Action also provides a pragmatic, how-to exploration of more advanced topics such as Search clustering. For anyone using Hibernate or JBoss Seam, this book is the definitive guide on how to add or enhance search features in their applications.",
      "status": "PUBLISH",
      "authors": [
        "Emmanuel Bernard",
        "John Griffin"
      ],
      "categories": [
        "Java"
      ],
      "averageScore": 3.1724137931034484
    }
  ],
  "pagination": {
    "totalRecords": 36,
    "totalPages": 12,
    "currentPage": 1
  }
}
```

## GET http://localhost:3000/books/ratings/asc
**Summary**: Retrieve Books Sorted by Total Number of Reviews
**Description**: This endpoint retrieves a paginated list of books sorted by the total number of reviews in either ascending or descending order, based on the `order` parameter.

### Path Parameters

| Parameter | Type     | Description                                           |
|-----------|----------|-------------------------------------------------------|
| `order`   | `string` | The sort order for the total number of reviews. Valid values are `asc` (ascending) and `desc` (descending). |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "books": [
    {
      "_id": 21,
      "title": "3D User Interfaces with Java 3D",
      "authors": [
        "Jon Barrilleaux"
      ],
      "pageCount": 520,
      "publishedDate": "2000-08-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
      "totalReviews": 75
    },
    {
      "_id": 16,
      "title": "Brownfield Application Development in .NET",
      "authors": [
        "Kyle Baley",
        "Donald Belcham"
      ],
      "pageCount": 550,
      "publishedDate": "2010-04-16T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
      "totalReviews": 77
    },
    {
      "_id": 8,
      "title": "Flex on Java",
      "authors": [
        "Bernerd Allmon",
        "Jeremy Anderson"
      ],
      "pageCount": 265,
      "publishedDate": "2010-10-15T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
      "totalReviews": 79
    },
    {
      "_id": 31,
      "title": "Building Secure and Reliable Network Applications",
      "authors": [
        "Kenneth P. Birman"
      ],
      "pageCount": 591,
      "publishedDate": "1996-01-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
      "totalReviews": 82
    },
    {
      "_id": 26,
      "title": "iBATIS in Action",
      "authors": [
        "Clinton Begin",
        "Brandon Goodin",
        "Larry Meadors"
      ],
      "pageCount": 384,
      "publishedDate": "2007-01-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
      "totalReviews": 83
    },
    {
      "_id": 29,
      "title": "jQuery in Action",
      "authors": [
        "Bear Bibeault",
        "Yehuda Katz"
      ],
      "pageCount": 376,
      "publishedDate": "2008-01-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
      "totalReviews": 84
    },
    {
      "_id": 11,
      "title": "Flexible Rails",
      "authors": [
        "Peter Armstrong"
      ],
      "pageCount": 592,
      "publishedDate": "2008-01-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
      "totalReviews": 86
    },
    {
      "_id": 28,
      "title": "Hibernate Search in Action",
      "authors": [
        "Emmanuel Bernard",
        "John Griffin"
      ],
      "pageCount": 488,
      "publishedDate": "2008-12-21T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
      "totalReviews": 87
    },
    {
      "_id": 20,
      "title": "Taming Jaguar",
      "authors": [
        "Michael J. Barlotta",
        "Jason R. Weiss"
      ],
      "pageCount": 362,
      "publishedDate": "2000-07-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
      "totalReviews": 87
    },
    {
      "_id": 33,
      "title": "The Well-Grounded Rubyist",
      "authors": [
        "David A. Black"
      ],
      "pageCount": 520,
      "publishedDate": "2009-04-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg",
      "totalReviews": 87
    }
  ],
  "pagination": {
    "totalRecords": 36,
    "totalPages": 4,
    "currentPage": 1
  }
}
```

## GET http://localhost:3000/books/five-star
**Summary**: Retrieve Books with the Most 5-Star Reviews
**Description**: Retrieve a paginated list of books with the Most 5-Star Reviews


### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |


### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "books": [],
  "pagination": {
    "totalRecords": 0,
    "totalPages": 0,
    "currentPage": 1
  }
}
```

## GET http://localhost:3000/books/year/2022
**Summary**: Retrieve Books Reviewed in a Specific Year
**Description**: This endpoint retrieves a paginated list of books that were reviewed in the specified year.

### Path Parameters

| Parameter | Type     | Description                              |
|-----------|----------|------------------------------------------|
| `year`    | `number` | The year for which to retrieve reviewed books. |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "books": [
    {
      "_id": 3,
      "title": "Specification by Example",
      "isbn": "1617290084",
      "pageCount": 0,
      "publishedDate": "2011-06-03T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
      "shortDescription": null,
      "longDescription": null,
      "status": "PUBLISH",
      "authors": [
        "Gojko Adzic"
      ],
      "categories": [
        "Software Engineering"
      ]
    },
    {
      "_id": 24,
      "title": "Java Persistence with Hibernate",
      "isbn": "1932394885",
      "pageCount": 880,
      "publishedDate": "2006-11-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
      "shortDescription": "\"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book.\" --JavaLobby",
      "longDescription": "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.    Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.    In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.",
      "status": "PUBLISH",
      "authors": [
        "Christian Bauer",
        "Gavin King"
      ],
      "categories": [
        "Java"
      ]
    },
    {
      "_id": 6,
      "title": "Collective Intelligence in Action",
      "isbn": "1933988312",
      "pageCount": 425,
      "publishedDate": "2008-10-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
      "shortDescription": null,
      "longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.    Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.    This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.    Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.",
      "status": "PUBLISH",
      "authors": [
        "Satnam Alag"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 25,
      "title": "JSTL in Action",
      "isbn": "1930110529",
      "pageCount": 480,
      "publishedDate": "2002-07-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
      "shortDescription": null,
      "longDescription": "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language. JSTL is a standard from the Java Community Process, and its expression language will become part of JSP 2.0.    JSTL in Action shows you how to write rich, dynamic web pages without programming. From simple loops to tricky XML processing, every feature of JSTL is covered and exercised in numerous useful examples. Whether you are a novice page author or an experienced Java programmer, this book shows you easy ways to create powerful web sites.    To help readers who don't already have a JSP container run the examples in the book, there's a free companion download here. This bundle contains a ready-to-run JSP container, a JSTL implementation, and all the book's examples.",
      "status": "PUBLISH",
      "authors": [
        "Shawn Bayern"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 18,
      "title": "Distributed Application Development with PowerBuilder 6.0",
      "isbn": "1884777686",
      "pageCount": 504,
      "publishedDate": "1998-06-01T07:00:00.000Z",
      "thumbnailUrl": null,
      "shortDescription": null,
      "longDescription": "Distributed Application Development with PowerBuilder 6.0 is a vital source for the PowerBuilder programmer; it provides the sort of detailed coverage of Distributed PowerBuilder that you can find nowwhere else.    The book opens with a discussion of distributed computing in general, as well as its design principles and technologies. Then Distributed PowerBuilder is examined in detail. By building a simple application step by step, the author discusses all of the concepts and components needed for building a PowerBuilder application and shows how to make the application available over a network.    Finally, the author explores how PowerBuilder can be used in distributed solutions both with and without using DPB.    Distributed Application Development with PowerBuilder 6.0 is for any PowerBuilder developer looking for information on distributed computing options with the PowerBuilder environment. IS managers, system architects, and developers using many different technologies can learn how PowerBuilder can be used as all or part of the solution for building distributed applications.    The main topic of this book is Distributed PowerBuilder (DPB). It covers the basics of building a DPB application and walks through each new feature with examples including the Shared object, DataWindow synchronization, Server Push and Web.PB. It also explains distributed computing technologies and design principles so that your application can be built to handle the stresses of a distributed environment.  ",
      "status": "PUBLISH",
      "authors": [
        "Michael J. Barlotta"
      ],
      "categories": [
        "PowerBuilder"
      ]
    },
    {
      "_id": 35,
      "title": "Website Owner's Manual",
      "isbn": "1933988452",
      "pageCount": 296,
      "publishedDate": "2009-10-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/boag.jpg",
      "shortDescription": "Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.",
      "longDescription": "Just because you're responsible for your organization's web presence doesn't mean you know how to build a website. The job of planning, launching, and managing a site often falls to people who have little or no experience in web design or development. Website Owner's Manual is a book for the thousands of marketers, IT managers, project leaders, and business owners who need to put a website in place and keep it running with a minimum of trouble.    Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.",
      "status": "PUBLISH",
      "authors": [
        "Paul A. Boag"
      ],
      "categories": [
        "Internet"
      ]
    },
    {
      "_id": 31,
      "title": "Building Secure and Reliable Network Applications",
      "isbn": "1884777295",
      "pageCount": 591,
      "publishedDate": "1996-01-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
      "shortDescription": "\"... tackles the difficult problem of building reliable distributed computing systems in a way that not only presents the principles but also describes proven practical solutions.\" --John Warne, BNR Europe",
      "longDescription": "As the \"network is the computer\" slogan becomes reality so reliability and security of networked applications become more important. Not only are hospitals, air traffic control systems, and telephone networks becoming more networked, but business applications are increasingly based on the open world of the Internet. Stability in the face of minor accidents, software or hardware failures, or outright attack has become vital. This book provides a structured approach to the technologies currently available for building reliable solutions to these problems.    Building Secure and Reliable Network Applications reviews the most important network technologies from a security and reliability perspective and discusses the most effective solutions with an eye towards their application to real-world systems. Any computing professional who works with networked software will find this book valuable in understanding security and reliability vulnerabilities and how to address them.",
      "status": "PUBLISH",
      "authors": [
        "Kenneth P. Birman"
      ],
      "categories": [
        "Networking",
        "Theory"
      ]
    },
    {
      "_id": 40,
      "title": "Visual Object Oriented Programming",
      "isbn": "131723979",
      "pageCount": 280,
      "publishedDate": "1995-02-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg",
      "shortDescription": null,
      "longDescription": "This first book on the union of two rapidly growing approaches to programming--visual programming and object technology--provides a window on a subject of increasing commercial importance. It is an introduction and reference for cutting-edge developers, and for researchers, students, and enthusiasts interested in the design of visual OOP languages and environments.  Visual Object-Oriented Programming includes chapters on both emerging research and on a few classic systems, that together can help those who design visual object-oriented programming systems avoid some known pitfalls. The book contains an experience report on the use of available visual programming languages in a commercial setting, and chapters, by some of the leaders of this cutting-edge subject, covering systems such as Prograph, VIPR, PURSUIT, ThingLab II, Vampire, Forms/3, Self's environment, Vista, SPE, and Cerno.",
      "status": "PUBLISH",
      "authors": [
        "Margaret M. Burnett",
        "Adele Goldberg",
        "",
        "Ted G. Lewis"
      ],
      "categories": [
        "Programming"
      ]
    },
    {
      "_id": 2,
      "title": "Android in Action, Second Edition",
      "isbn": "1935182722",
      "pageCount": 592,
      "publishedDate": "2011-01-14T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
      "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      "longDescription": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      "status": "PUBLISH",
      "authors": [
        "W. Frank Ableson",
        "Robi Sen"
      ],
      "categories": [
        "Java"
      ]
    },
    {
      "_id": 32,
      "title": "Ruby for Rails",
      "isbn": "1932394699",
      "pageCount": 532,
      "publishedDate": "2006-05-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
      "shortDescription": "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.",
      "longDescription": "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You   ll gain confidence working with objects and classes and learn how to leverage Ruby   s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.    Newcomers to Ruby will find a Rails-oriented Ruby introduction that   s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.    Ruby for Rails: the Ruby guide for Rails developers!",
      "status": "PUBLISH",
      "authors": [
        "David A. Black"
      ],
      "categories": [
        "Web Development"
      ]
    }
  ],
  "pagination": {
    "totalRecords": 0,
    "totalPages": 0,
    "currentPage": 1
  }
}
```

## GET http://localhost:3000/books/comments
**Summary**: Retrieve Books with Comments
**Description**: This endpoint retrieves a paginated list of books that have comments associated with them.

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "books": [
    {
      "_id": 23,
      "title": "Hibernate in Action (Chinese Edition)",
      "pageCount": 400,
      "publishedDate": "1999-06-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
      "status": "PUBLISH",
      "authors": [
        "Christian Bauer",
        "Gavin King"
      ],
      "categories": [
        "Java"
      ],
      "totalComments": 42
    },
    {
      "_id": 40,
      "title": "Visual Object Oriented Programming",
      "isbn": "131723979",
      "pageCount": 280,
      "publishedDate": "1995-02-01T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg",
      "longDescription": "This first book on the union of two rapidly growing approaches to programming--visual programming and object technology--provides a window on a subject of increasing commercial importance. It is an introduction and reference for cutting-edge developers, and for researchers, students, and enthusiasts interested in the design of visual OOP languages and environments.  Visual Object-Oriented Programming includes chapters on both emerging research and on a few classic systems, that together can help those who design visual object-oriented programming systems avoid some known pitfalls. The book contains an experience report on the use of available visual programming languages in a commercial setting, and chapters, by some of the leaders of this cutting-edge subject, covering systems such as Prograph, VIPR, PURSUIT, ThingLab II, Vampire, Forms/3, Self's environment, Vista, SPE, and Cerno.",
      "status": "PUBLISH",
      "authors": [
        "Margaret M. Burnett",
        "Adele Goldberg",
        "",
        "Ted G. Lewis"
      ],
      "categories": [
        "Programming"
      ],
      "totalComments": 37
    },
    {
      "_id": 4,
      "title": "Flex 3 in Action",
      "isbn": "1933988746",
      "pageCount": 576,
      "publishedDate": "2009-02-02T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
      "longDescription": "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
      "status": "PUBLISH",
      "authors": [
        "Tariq Ahmed with Jon Hirschi",
        "Faisal Abid"
      ],
      "categories": [
        "Internet"
      ],
      "totalComments": 35
    },
    {
      "_id": 27,
      "title": "Designing Hard Software",
      "isbn": "133046192",
      "pageCount": 350,
      "publishedDate": "1997-02-01T08:00:00.000Z",
      "shortDescription": "\"This book is well written ... The author does not fear to be controversial. In doing so, he writes a coherent book.\" --Dr. Frank J. van der Linden, Phillips Research Laboratories",
      "longDescription": "Have you ever heard, \"I can't define a good design but I know one when I see it\"  Designing Hard Software discusses ways to develop software system designs that have the same tangibility and visibility as designs for hard objects like buildings or computer hardware. It emphasizes steps called \"essential tasks\" which result in software specifications that show how each requirement, including robustness and extensibility, will be satisfied. All software developers and managers seeking to develop \"hard\" software will benefit from these ideas.    There are six essential tasks necessary for a good design:    User (run-time) requirements  Development sponsor (build-time) requirements  Domain information  Behavior identification and allocation  Behavior description  Software system architecture  Designing Hard Software goes beyond the standard software development methodologies such as those by Booch, Rumbaugh, Yourdon, and others, by providing techniques for a complete system architecture as well as explicit measures of the goodness of design. So, \"you define a good design.\"",
      "status": "PUBLISH",
      "authors": [
        "Douglas W. Bennett"
      ],
      "categories": [
        "Object-Oriented Programming",
        "S"
      ],
      "totalComments": 32
    },
    {
      "_id": 30,
      "title": "jQuery in Action, Second Edition",
      "isbn": "1935182323",
      "pageCount": 488,
      "publishedDate": "2010-06-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg",
      "shortDescription": "jQuery in Action, Second Edition is a fast-paced introduction to jQuery that will take your JavaScript programming to the next level. An in-depth rewrite of the bestselling first edition, this edition provides deep and practical coverage of the latest jQuery and jQuery UI releases. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. This comprehensive guide also teaches you how jQuery interacts with other tools and frameworks and how to build jQuery plugins. ",
      "longDescription": "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique \"chaining\" model lets you perform multiple operations on a page element in succession. And with version 1.4, there's even more to love about jQuery, including new effects and events, usability improvements, and more testing options.    jQuery in Action, Second Edition is a fast-paced introduction and guide. Building on the bestselling first edition, it adds new examples, more labs, and deeper explanations of important features. You   ll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
      "status": "PUBLISH",
      "authors": [
        "Bear Bibeault",
        "Yehuda Katz"
      ],
      "categories": [
        "Java"
      ],
      "totalComments": 31
    },
    {
      "_id": 18,
      "title": "Distributed Application Development with PowerBuilder 6.0",
      "isbn": "1884777686",
      "pageCount": 504,
      "publishedDate": "1998-06-01T07:00:00.000Z",
      "longDescription": "Distributed Application Development with PowerBuilder 6.0 is a vital source for the PowerBuilder programmer; it provides the sort of detailed coverage of Distributed PowerBuilder that you can find nowwhere else.    The book opens with a discussion of distributed computing in general, as well as its design principles and technologies. Then Distributed PowerBuilder is examined in detail. By building a simple application step by step, the author discusses all of the concepts and components needed for building a PowerBuilder application and shows how to make the application available over a network.    Finally, the author explores how PowerBuilder can be used in distributed solutions both with and without using DPB.    Distributed Application Development with PowerBuilder 6.0 is for any PowerBuilder developer looking for information on distributed computing options with the PowerBuilder environment. IS managers, system architects, and developers using many different technologies can learn how PowerBuilder can be used as all or part of the solution for building distributed applications.    The main topic of this book is Distributed PowerBuilder (DPB). It covers the basics of building a DPB application and walks through each new feature with examples including the Shared object, DataWindow synchronization, Server Push and Web.PB. It also explains distributed computing technologies and design principles so that your application can be built to handle the stresses of a distributed environment.  ",
      "status": "PUBLISH",
      "authors": [
        "Michael J. Barlotta"
      ],
      "categories": [
        "PowerBuilder"
      ],
      "totalComments": 31
    },
    {
      "_id": 19,
      "title": "Jaguar Development with PowerBuilder 7",
      "isbn": "1884777864",
      "pageCount": 550,
      "publishedDate": "1999-08-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta2.jpg",
      "shortDescription": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.",
      "longDescription": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.    Jaguar Development with PowerBuilder 7 focuses on getting you up to speed on Jaguar and PowerBuilder, and it is packed with code samples to guide you every step of the way. It covers each step involved in application development, from setting up the development environment to deploying a production application.    Even a PowerBuilder developer with no experience in distributed technologies or Jaguar CTS will learn what it takes to build an application. Jaguar Development with PowerBuilder 7 covers:    Developing Component-centric Applications  Building Jaguar CTS Components/Clients  CORBA  Adaptive SQL Anywhere  Adaptive Server Enterprise  and lots more!",
      "status": "PUBLISH",
      "authors": [
        "Michael Barlotta"
      ],
      "categories": [
        "PowerBuilder",
        "Client-Server"
      ],
      "totalComments": 29
    },
    {
      "_id": 25,
      "title": "JSTL in Action",
      "isbn": "1930110529",
      "pageCount": 480,
      "publishedDate": "2002-07-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
      "longDescription": "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language. JSTL is a standard from the Java Community Process, and its expression language will become part of JSP 2.0.    JSTL in Action shows you how to write rich, dynamic web pages without programming. From simple loops to tricky XML processing, every feature of JSTL is covered and exercised in numerous useful examples. Whether you are a novice page author or an experienced Java programmer, this book shows you easy ways to create powerful web sites.    To help readers who don't already have a JSP container run the examples in the book, there's a free companion download here. This bundle contains a ready-to-run JSP container, a JSTL implementation, and all the book's examples.",
      "status": "PUBLISH",
      "authors": [
        "Shawn Bayern"
      ],
      "categories": [
        "Internet"
      ],
      "totalComments": 28
    },
    {
      "_id": 5,
      "title": "Flex 4 in Action",
      "isbn": "1935182420",
      "pageCount": 600,
      "publishedDate": "2010-11-15T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
      "longDescription": "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you'll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 \"Halo\" versions. Spark components are easier to customize, which makes skinning and theme design much faster  A new \"network monitor\" allows you to see the data communications between a Flex application and a backend server, which helps when trying to debug applications that are communicating to another system/service  Numerous productivity boosting features that speed up the process of creating applications  A faster compiler to take your human-written source code and convert it into a machine-readable format  Built-in support for unit testing allows you to improve the quality of your software, and reduce the time spent in testing",
      "status": "PUBLISH",
      "authors": [
        "Tariq Ahmed",
        "Dan Orlando",
        "John C. Bland II",
        "Joel Hooks"
      ],
      "categories": [
        "Internet"
      ],
      "totalComments": 28
    },
    {
      "_id": 13,
      "title": "Hello! Flex 4",
      "isbn": "1933988762",
      "pageCount": 258,
      "publishedDate": "2009-11-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
      "shortDescription": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
      "longDescription": "With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.    We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.    You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.",
      "status": "PUBLISH",
      "authors": [
        "Peter Armstrong"
      ],
      "categories": [
        "Internet"
      ],
      "totalComments": 27
    }
  ],
  "pagination": {
    "totalRecords": 36,
    "totalPages": 4,
    "currentPage": 1
  }
}
```

## GET http://localhost:3000/books/job
**Summary**: Retrieve Total Reviews by Job
**Description**: This endpoint retrieves the total number of reviews grouped by the job of the reviewers.

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **limit** (query): N/A
- **page** (query): N/A

### Response:
```json
{
  "reviewsByJob": [
    {
      "totalReviews": 65,
      "job": "Assistant Media Planner"
    },
    {
      "totalReviews": 26,
      "job": "Senior Editor"
    },
    {
      "totalReviews": 12,
      "job": "Software Test Engineer III"
    },
    {
      "totalReviews": 28,
      "job": "Technical Writer"
    },
    {
      "totalReviews": 40,
      "job": "Graphic Designer"
    },
    {
      "totalReviews": 19,
      "job": "Account Representative II"
    },
    {
      "totalReviews": 22,
      "job": "Mechanical Systems Engineer"
    },
    {
      "totalReviews": 43,
      "job": "Media Manager I"
    },
    {
      "totalReviews": 8,
      "job": "Human Resources Assistant II"
    },
    {
      "totalReviews": 34,
      "job": "Actuary"
    }
  ],
  "pagination": {
    "totalRecords": 175,
    "totalPages": 18,
    "currentPage": 2
  }
}
```

## GET http://localhost:3000/books/filter
**Summary**: Retrieve Filtered Books
**Description**: This endpoint retrieves a list of books filtered by price, category, and/or author based on the query parameters provided.

### Query Parameters

| Parameter  | Type     | Description                                       |
|------------|----------|---------------------------------------------------|
| `author`   | `string` | Filter books by the specified author.             |
| `category` | `string` | Filter books by the specified category.           |
| `price`    | `number` | Filter books by a maximum price.                  |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **author** (query): N/A
- **category** (query): N/A

### Response:
```json
{
  "books": [
    {
      "_id": 3,
      "title": "Specification by Example",
      "isbn": "1617290084",
      "pageCount": 0,
      "publishedDate": "2011-06-03T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
      "status": "PUBLISH",
      "authors": [
        "Gojko Adzic"
      ],
      "categories": [
        "Software Engineering"
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

## POST http://localhost:3000/comments
**Summary**: Create a New Comment
**Description**: This endpoint creates a new comment for a specific book and user.

## Request Body
The body of the request must be in JSON format and include the following fields:

| Field      | Type     | Description                                     |
|------------|----------|-------------------------------------------------|
| `user_id`  | `string` | The unique identifier of the user making the comment. |
| `book_id`  | `string` | The unique identifier of the book being commented on. |
| `comment`  | `string` | The content of the comment.                     |

### Parameters:
- **body** (body): N/A

### Response: Error
```json
{
  "message": "The parameters book_id, user_id and comment is required"
}
```

## DELETE http://localhost:3000/comments/27
**Summary**: Delete a Comment by ID
**Description**: This endpoint deletes a specific comment using its unique identifier (`id`).

### Path Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| `id`      | `string` | The unique identifier of the comment. |

### Parameters:

### Response:
```json
{
  "message": "Comment removed successfully"
}
```

## POST http://localhost:3000/bookstores/1/books
**Summary**: Add Books to a Bookstore
**Description**: This endpoint allows adding multiple books to a specific bookstore using the bookstore's unique identifier.

### Path Parameters

| Parameter | Type     | Description                                |
|-----------|----------|--------------------------------------------|
| `id`      | `string` | The unique identifier of the bookstore.    |

&nbsp;

### Request Body
The body of the request must be in JSON format and include an array of book objects, where each object has the following fields:

| Field             | Type       | Description                                    |
|--------------------|------------|------------------------------------------------|
| `_id`             | `string`   | The unique identifier of the book.             |
| `title`           | `string`   | The title of the book.                         |
| `isbn`            | `string`   | The ISBN number of the book.                   |
| `pageCount`       | `number`   | The number of pages in the book.               |
| `publishedDate`   | `object`   | An object containing the `date` field (ISO 8601). |
| `thumbnailUrl`    | `string`   | The URL of the book's thumbnail.               |
| `status`          | `string`   | The status of the book (`PUBLISH` or other).   |
| `authors`         | `array`    | A list of authors of the book.                 |
| `categories`      | `array`    | A list of categories for the book.             |

### Parameters:
- **body** (body): N/A

### Response: Error
```json
{
  "message": "The list of books is required and must be a non-empty array"
}
```

## GET http://localhost:3000/bookstores/1/books
**Summary**: Retrieve Books from a Bookstore
**Description**: This endpoint retrieves a list of books available in a specific bookstore identified by its unique `id`.

### Path Parameters

| Parameter | Type     | Description                                |
|-----------|----------|--------------------------------------------|
| `id`      | `string` | The unique identifier of the bookstore.    |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:

### Response:
```json
{
  "books": [
    {
      "quantity": 1,
      "book_id": 1,
      "title": "Unlocking Android",
      "isbn": "1933988673",
      "authors": [
        "W. Frank Ableson",
        "Charlie Collins",
        "Robi Sen"
      ],
      "categories": [
        "Open Source",
        "Mobile"
      ],
      "pageCount": 416,
      "publishedDate": "2009-04-01T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
      "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  "
    },
    {
      "quantity": 1,
      "book_id": 2,
      "title": "Android in Action, Second Edition",
      "isbn": "1935182722",
      "authors": [
        "W. Frank Ableson",
        "Robi Sen"
      ],
      "categories": [
        "Java"
      ],
      "pageCount": 592,
      "publishedDate": "2011-01-14T08:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
      "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      "longDescription": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. "
    },
    {
      "quantity": 1,
      "book_id": 3,
      "title": "Specification by Example",
      "isbn": "1617290084",
      "authors": [
        "Gojko Adzic"
      ],
      "categories": [
        "Software Engineering"
      ],
      "pageCount": 0,
      "publishedDate": "2011-06-03T07:00:00.000Z",
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg"
    }
  ],
  "pagination": {
    "totalRecords": 3,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

## GET http://localhost:3000/bookstores/near
**Summary**: Retrieve Bookstores Near a Location
**Description**: This endpoint retrieves a list of bookstores near a specific geographic location, based on provided coordinates.

### Query Parameters

| Parameter     | Type     | Description                                            |
|---------------|----------|--------------------------------------------------------|
| `latitude`    | `number` | The latitude of the location.                          |
| `longitude`   | `number` | The longitude of the location.                         |
| `maxDistance` | `number` | (Optional) The maximum distance (in meters) to search within. Default: `5000` (5 km). |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **latitude** (query): N/A
- **longitude** (query): N/A
- **maxDistance** (query): N/A

### Response:
```json
{
  "bookstores": [
    {
      "_id": 1,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14421890064127,
          38.7105419551935
        ]
      },
      "properties": {
        "OBJECTID": 1,
        "COD_SIG": "506",
        "INF_NOME": "Livraria Loreto",
        "INF_MORADA": "Rua do Loreto, 15",
        "FREGUESIA": "Misericórdia",
        "INF_TELEFONE": "+351 210 998 295",
        "INF_DESCRICAO": "Esta sala de cinema, aberta desde 1904, conheceu ao longo dos anos diversas designações - Salão Ideal, Cinema Ideal, Cine Camões e Cine Paraíso. O sspaço sofreu uma grande remodelação nos anos 50, mas conservou todo o charme de um ¿cinema de bairro¿, com o seu foyer, balcão e plateia. Em agosto de 2014 reabriu como Cinema Ideal, depois de um profundo trabalho de renovação e recuperação, de arquitetura e de equipamento de projeção de imagem e som. ",
        "INF_FONTE": "-",
        "INF_ACTIVO": 1,
        "GlobalID": "45afe625-02d7-4712-b6b8-7aa0c2116ed6"
      }
    },
    {
      "_id": 2,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14217296415889,
          38.7155597377788
        ]
      },
      "properties": {
        "OBJECTID": 2,
        "COD_SIG": "507",
        "INF_NOME": "Livraria Júnior",
        "INF_MORADA": "Praça dos Restauradores, Palácio da Foz",
        "FREGUESIA": "Santa Maria Maior",
        "INF_TELEFONE": "+351 213 462 157 | +351 213 476 129",
        "INF_DESCRICAO": "A Cinemateca Júnior, instalada no Palácio Foz, é um serviço da Cinemateca Portuguesa-Museu do Cinema direcionado para os espectadores infantis e juvenis.",
        "INF_FONTE": "http://www.cinemateca.pt/",
        "INF_ACTIVO": 1,
        "GlobalID": "1d3ca135-5a24-478c-95f4-dd2dc87a65c9"
      }
    },
    {
      "_id": 3,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14632734020411,
          38.7202915388439
        ]
      },
      "properties": {
        "OBJECTID": 3,
        "COD_SIG": "508",
        "INF_NOME": "Livraria São Jorge",
        "INF_MORADA": "Avenida da Liberdade, 175",
        "FREGUESIA": "Santo António",
        "INF_TELEFONE": "+351 213 103 400",
        "INF_DESCRICAO": "Um dos mais emblemáticos cinemas de Lisboa, construído, no final dos anos 40 do séc. XX, por iniciativa da Sociedade Anglo-Portuguesa de Cinemas, com projeto do arq. Fernando Silva, foi inaugurado em 1950. A sua inovação e arrojo valeram-lhe a atribuição por unanimidade do Prémio Municipal de Arquitectura desse ano. Considerado  uma ''obra moderna'', afastando-se do modelo nacionalista então em vigor, adotou novas técnicas construtivas, das quais se destaca o betão, que permitiram novas soluções estruturais e decorativas. Em 2000 o imóvel veio à posse camarária. Após uma intervenção na fachada e remodelação no interior, reabriu em novembro de 2001. Desde essa data funciona com uma atividade regular de exibição de filmes (comerciais e antestreias), para além de acolher Festivais e outros eventos de grande visibilidade.\n",
        "INF_FONTE": "http://cinemasaojorge.pt/",
        "INF_ACTIVO": 1,
        "GlobalID": "1bf79faf-5d97-48b3-b085-fa4446c435a2"
      }
    },
    {
      "_id": 4,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14875439274829,
          38.7208771016563
        ]
      },
      "properties": {
        "OBJECTID": 4,
        "COD_SIG": "509",
        "INF_NOME": "Livraria Portuguesa ",
        "INF_MORADA": "Rua Barata Salgueiro, 39 R/C",
        "FREGUESIA": "Santo António",
        "INF_TELEFONE": "+ 351 213 596 200",
        "INF_DESCRICAO": "Em 1948 foi criada a Cinemateca Nacional, hoje Cinemateca Portuguesa-Museu do Cinema, com o objetivo de preservar e difundir a Sétima Arte (Cinema Português em particular).\n\nInstalada num palacete do séc.XIX, dispõe de 2 salas de cinema: sala Dr.Félix Ribeiro e sala Luís de Pina.",
        "INF_FONTE": "-",
        "INF_ACTIVO": 1,
        "GlobalID": "3414bf94-62ac-43c7-a846-0d5e41251e89"
      }
    },
    {
      "_id": 15,
      "type": "Feature",
      "name": "Feira do Livro",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -9.153159916192822,
              38.72566029242208
            ],
            [
              -9.148918806361243,
              38.72763334507979
            ],
            [
              -9.153938101483018,
              38.7329754910801
            ],
            [
              -9.158062483521066,
              38.72997058310953
            ],
            [
              -9.153159916192822,
              38.72566029242208
            ]
          ]
        ]
      },
      "properties": {
        "OBJECTID": 15,
        "COD_SIG": "",
        "INF_NOME": "",
        "INF_MORADA": "",
        "FREGUESIA": "",
        "INF_TELEFONE": "",
        "INF_EMAIL": "",
        "INF_SITE": "",
        "INF_DESCRICAO": "",
        "INF_FONTE": "",
        "INF_ACTIVO": 1,
        "GlobalID": ""
      }
    },
    {
      "_id": 5,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.1621026515977,
          38.7236706345087
        ]
      },
      "properties": {
        "OBJECTID": 5,
        "COD_SIG": "510",
        "INF_NOME": "Livraria Amoreiras",
        "INF_MORADA": "Avenida Engenheiro Duarte Pacheco Lote 7 2º Loja 2052",
        "FREGUESIA": "Campo de Ourique",
        "INF_TELEFONE": "16996",
        "INF_DESCRICAO": "Possui 7 salas\n",
        "INF_FONTE": "http://cinemas.nos.pt/",
        "INF_ACTIVO": 1,
        "GlobalID": "1af99162-1626-4f83-9342-f891e2b442bc"
      }
    },
    {
      "_id": 7,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14579320378632,
          38.7335261917306
        ]
      },
      "properties": {
        "OBJECTID": 7,
        "COD_SIG": "512",
        "INF_NOME": "Livraria Monumental",
        "INF_MORADA": "Av. Praia da Vitória, 72  (Edifício Monumental)",
        "FREGUESIA": "Avenidas Novas",
        "INF_TELEFONE": "+351 213 142 223",
        "INF_DESCRICAO": "Dispõe de quatro salas de cinema com capacidade, no total, para mais de 800 espectadores. O Cine-Teatro é uma imponente sala de exibição cinematográfica de Lisboa com os seus 378 lugares.\n",
        "INF_FONTE": "www.medeiafilmes.com",
        "INF_ACTIVO": 1,
        "GlobalID": "d96aaf73-b46e-46e8-89ac-8d2328d6f08d"
      }
    },
    {
      "_id": 6,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.15340798563761,
          38.7333439219981
        ]
      },
      "properties": {
        "OBJECTID": 6,
        "COD_SIG": "511",
        "INF_NOME": "Livraria - El Corte Inglés",
        "INF_MORADA": "Avenida António Augusto de Aguiar, 31",
        "FREGUESIA": "Avenidas Novas",
        "INF_TELEFONE": "+351 213 801 4 00",
        "INF_DESCRICAO": "Situadas no El Corte Inglês. Possui 14 salas com um total de 2698 lugares.\n",
        "INF_FONTE": "www.ucicinemas.pt",
        "INF_ACTIVO": 1,
        "GlobalID": "13511a16-ad5e-4b53-9b25-355ab130ee40"
      }
    },
    {
      "_id": 8,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14718277671252,
          38.7356900304196
        ]
      },
      "properties": {
        "OBJECTID": 8,
        "COD_SIG": "513",
        "INF_NOME": "Livraria Nimas",
        "INF_MORADA": "Avenida Cinco de Outubro, 42B",
        "FREGUESIA": "Avenidas Novas",
        "INF_TELEFONE": "+351 213 574 362",
        "INF_DESCRICAO": "Ao longo de várias décadas, esta sala, foi o palco de alguns dos mais significativos acontecimentos culturais da cidade, nomeadamente na área do Cinema.",
        "INF_FONTE": "http://medeiafilmes.com",
        "INF_ACTIVO": 1,
        "GlobalID": "0bc17fd8-e56c-4dfc-9542-4cadf79767e1"
      }
    },
    {
      "_id": 9,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.14449387516613,
          38.7423214179747
        ]
      },
      "properties": {
        "OBJECTID": 9,
        "COD_SIG": "514",
        "INF_NOME": "Livraria City Campo Pequeno",
        "INF_MORADA": "Centro Comercial Campo Pequeno ",
        "FREGUESIA": "Avenidas Novas",
        "INF_TELEFONE": "21 798 14 20",
        "INF_DESCRICAO": "Possui oito salas, com um total de 1176 lugares.\n",
        "INF_FONTE": "www.cinemacity.pt",
        "INF_ACTIVO": 1,
        "GlobalID": "a88d4e22-33be-4fdd-8b1e-1c8695afd7d7"
      }
    }
  ],
  "pagination": {
    "totalRecords": 12,
    "totalPages": 2,
    "currentPage": 1
  }
}
```

## POST http://localhost:3000/bookstores/near-route
**Summary**: Retrieve Bookstores Near a Route
**Description**: This endpoint retrieves a list of bookstores located near a specified route. The route is defined as an array of geographic points (latitude and longitude), and the search radius is defined by `maxDistance`.

### Request Body
The body of the request must be in JSON format and include the following fields:

| Field         | Type     | Description                                                              |
|---------------|----------|--------------------------------------------------------------------------|
| `route`       | `array`  | An array of geographic points defining the route. Each point must include `latitude` and `longitude`. |
| `maxDistance` | `number` | (Optional) The maximum distance (in meters) to search from the route. Default: `5000` (5 km). |

&nbsp;

### Query Parameters

| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------------|
| `limit`   | `number` | The maximum number of books to return per page. Default: `10`. |
| `page`    | `number` | The page number to retrieve. Default: `1`.  |

### Parameters:
- **body** (body): N/A

### Response: Error
```json
{
  "message": "The route is required and must be an array of coordinates"
}
```

## GET http://localhost:3000/bookstores/near-count
**Summary**: Retrieve the Count of Bookstores Near a Location
**Description**: This endpoint retrieves the total number of bookstores located within a specified distance from a given geographic location.

### Query Parameters

| Parameter     | Type     | Description                                            |
|---------------|----------|--------------------------------------------------------|
| `latitude`    | `number` | The latitude of the location.                          |
| `longitude`   | `number` | The longitude of the location.                         |
| `maxDistance` | `number` | (Optional) The maximum distance (in meters) to search within. Default: `5000` (5 km). |


### Parameters:
- **latitude** (query): N/A
- **longitude** (query): N/A
- **maxDistance** (query): N/A

### Response:
```json
{
  "totalBookstores": 12
}
```

## GET http://localhost:3000/bookstores/fair/inside
**Summary**: Check if a User is Inside the Book Fair
**Description**: This endpoint checks if a user is located within the defined boundaries of the book fair based on their geographic coordinates.

### Query Parameters

| Parameter  | Type     | Description                                  |
|------------|----------|----------------------------------------------|
| `latitude` | `number` | The latitude of the user's current location. |
| `longitude`| `number` | The longitude of the user's current location. |

### Parameters:
- **latitude** (query): N/A
- **longitude** (query): N/A

### Response:
```json
{
  "inside": false,
  "message": "The user is outside the Book Fair."
}
```