import Image from "next/image";
import styles from "../../app/blog/[path]/post.module.css";

type EntryData = {
  id: number;
  title: string;
  path: string;
  links?: string[];
  images: string[];
  imageAlt: string[];
  imageCaption: string[];
  article: any;
  question: boolean;
  date: string;
};

const entriesArray: EntryData[] = [
  {
    id: 1,
    title: "Should Web Developers Learn Wordpress?",
    path: "should-web-developers-learn-wordpress",
    links: [],
    images: ["/assets/blogimages/wordpressScreenshot.jpg"],
    imageAlt: ["screenshot_of_wordpress_website"],
    imageCaption: [
      "A screenshot from my WordPress starter website. I only changed the text, everything else was pre-coded",
    ],
    article: (
      <div>
        <p>
          As someone who loves building websites from scratch, I originally
          turned my nose up at{" "}
          <a href="https://wordpress.com/" target="_blank">
            WordPress
          </a>
          . Unlike a huge chunk of developers, I absolutely love working with
          styles/CSS (warts and all) and figuring out how to turn a design into
          a webpage. Using a Content Management System (CMS) like WordPress or
          Squarespace never appealed to me, and further, I actually am not a fan
          of UI libraries, such as Bootstrap. I want the freedom to customise,
          morph and modify everything like some mad scientist in a derelict
          castle. Styling within a CMS or UI library however, is more
          restrictive, meaning you have to somewhat pace your creativity.
        </p>
        <br />
        <p>
          However, there was one thing I completely (and foolishly) overlooked.
          If I create websites from scratch for clients, how will they maintain
          it? Furthermore, if they want to quickly, say, move a button or change
          the background-colour, how can they do that if there's no
          user-friendly interface?
        </p>
        <br />
        <p>
          It was only then that the penny dropped as to why so many freelance
          Web Developers use WordPress. So if you can't beat them, join them.
          And if you can't join them, pretend you're one of them until they
          forget that you aren't one of them (I say as a career-changer).
        </p>
        <br />
        <p>
          So, either conventionally or unconventionally, I downloaded{" "}
          <a href="https://localwp.com/" target="_blank">
            Local WP
          </a>{" "}
          - a WordPress development tool. By doing this rather than using
          WordPress itself, I've actually automated even more tasks, such as
          layouts, plugin management and writing code. Besides, I wanted to
          explore the more expedient option in order to see its benefits in all
          its glory. And In summary, I can't deny it is a huge time-saver.
        </p>
        <br />
        <p>
          The layout is already done with in-built responsiveness, so the
          website retains its style on desktop, tablet and mobile devices. The
          backend boilerplate is already done via PHP and includes a MySQL
          database. Not only that, but it runs on an nginx web server, meaning
          that it can be easily scaled - without the Amazon-Web-Service wolf
          knocking on your door. To achieve all of this from scratch, it would
          take a lot of time, effort and probably a lot of swearing
          (language-dependent). And like anything in business, when you save
          time, you save money.
        </p>
        <br />
        <p>
          It all makes sense now. Why when you go on freelance websites such as,{" "}
          <a href="https://www.fiverr.com/" target="_blank">
            Fiverr
          </a>{" "}
          or{" "}
          <a href="https://www.upwork.com/" target="_blank">
            Upwork
          </a>
          , you will see a wealth of WordPress website developers; and lack of
          anything different.
        </p>
        <br />
        <p>
          Nevertheless, I can't help but feel like the WordPress experience so
          far is quite uninspiring. Moving elements on a page through its UI
          feels very restrictive, compared to just coding it with CSS. When you
          perform the latter, it is like a playground and you can do whatever
          you like (such as CSS animations, probably my favorite CSS feature).
          When you code from scratch, you are faced with numerous challenges.
          And with every challenge, there is that sweet dopamine reward of
          solving it - something that I'm sure you are robbed of with WordPress.
        </p>
        <br />
        <p>
          Moreover, you start to develop a sixth sense for when a website is
          created through WordPress or any CMS for that matter. If the
          recognisable icon in the tab hasn't been replaced and isn't a dead
          giveaway, there's a general vibe to it and cookie-cutter structure.
          You open the landing page and say, 'ah, here we go again'.
        </p>
        <br />
        <p>
          I always like to say, my favourite websites are those that feel like
          they are breathing. Classic examples of this are 3D websites -
          something I'll discuss in next week's post. With CMS websites, it
          feels to me quite clinical and unimaginative.
        </p>
        <br />
        <p>
          There is nothing wrong with this of course. Most startups or
          entrepreneur aren't interested in investing in a unique website; they
          just want something live asap so that they can start making sales.
        </p>
        <br />
        <p>
          But does this mean I'll abandon this short-lived WordPress journey?
          No. It seems to be where the demand is quite frankly. Also it presents
          the opportunity to learn PHP. That passion though for crafting
          websites from scratch will always be with me. And who knows, maybe
          further down the line I'll have a Damascus conversion and preach that
          no sane Web Developer should avoid the divine power of WordPress. At
          this point though, it doesn't seem likely.
        </p>
        <br />
        <p>So for now, I'll remain a heretic.</p>
      </div>
    ),
    question: true,
    date: "13/05/2024",
  },
  {
    id: 2,
    title: "3D Websites, Three.js and Blender",
    path: "3d-websites-threejs-and-blender",
    links: [],
    images: ["/assets/sharkexplorer.jpg"],
    imageAlt: ["screenshot_of_my_threejs_project"],
    imageCaption: ["A screenshot from my own Three.js project: Shark Explorer"],
    article: (
      <div>
        <p>
          Don't ask me how it happened, but one day I suddenly became interested
          in 3D websites. I've seen a lot of them and my jaw has been dislocated
          ever since from how many times it keeps dropping.
        </p>
        <br />
        <p>
          If you are unaware of what I mean by a 3D website, I strongly
          recommend you check out{" "}
          <a href="https://threejs.org/" target="_blank">
            Three.js
          </a>
          . If you browse the library, you'll find various use cases for such
          websites. For instance, you have immersive experiences for music
          festivals, vibrant storytelling for children and even choosing your
          seat for a piano concerto inside a virtual concert hall. Probably one
          of the most famous examples of Three.js is the portfolio website of
          developer{" "}
          <a href="https://bruno-simon.com/" target="_blank">
            Bruno Simon{" "}
          </a>
          . I've spent too long playing with it myself.
        </p>
        <br />
        <p>So you may be wondering, what exactly is Three.js?</p>
        <br />
        <p>
          Three.js is a JavaScript library that allows developers to create 3D
          experiences within the browser. It is in itself a skill to be learned
          as there are important concepts to master such as the Web Graphic
          Library (WebGL) API. This makes the initial 3D rendering possible. In
          fact you can create a 3D website with WebGL alone, but Three.js makes
          the process a tad bit easier. In addition you can have a moveable
          'camera' per se, which can move on either the x-, y- or z-axis, and
          assumes the role of the user perspective. This creates the illusion
          that you're immersed in the virtual space. Texture mapping also comes
          into play and is also a skill in itself - just to add even more
          complexity - along with lighting and animation (if you want any
          movement from your primitives/shapes).{" "}
        </p>
        <br />
        <p>
          Bring all of this together and you've got yourself a 3D web app. Like
          everything though, it's not without its caveats.
        </p>
        <br />
        <p>
          Rendering a 3D model with a moveable camera on a freaking webpage is
          gonna be costly in terms of memory. When you create such a project,
          you're are doing it under the presumption that every user will have an
          operating system that will be able to run it. If you, however, view
          any of those Three.js projects on an old, poor performing laptop, you
          may have inadvertently created a furnace hotter than the surface of
          the sun.
        </p>
        <br />
        <p>Still, they are undeniably cool.</p>
        <br />
        <p>
          When I discovered Three.js and{" "}
          <a href="https://shark-explorer.netlify.app/" target="_blank">
            made my own 3D web experience
          </a>
          , I kept toying with the idea of exploring it further. I knew as soon
          as I would, I would fall down a rabbit hole so deep, that the only way
          out was to go forwards. Well, I fell down said rabbit hole and upon
          such research, a tool kept being mentioned: Blender.
        </p>
        <br />
        <p>
          Blender is a desktop tool used primarily for 3D modelling. It's often
          mentioned by Three.js developers, because you can import 3D models you
          created from Blender into your JavaScript project. Because of this, I
          read multiple times that if you take the time to learn Blender,
          Three.js becomes easier to use and thus aids the developer through the
          3D website journey. I was hesistant for a while as I didn't want to
          learn yet another tool, but my curiosity got the better of me and I
          decided to give it a try. Reading other people's experiences, I
          decided to start with a tutorial, as the Blender tool is incredibly
          overwhelming on first view.
        </p>
        <br />
        <p>
          It was only then that I found the Blender Guru. He has more than two
          decades of experience with the tool and posted in particular{" "}
          <a
            href="https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=1"
            target="_blank"
          >
            a series of videos on how to 3D model donuts for complete beginners{" "}
          </a>
          . As a complete beginner, I can say with confidence that this tutorial
          is probably the best I've ever experienced. It's well-paced,
          descriptive and the instructor has a great sense of humour. Moreover,
          the guy has his own discord for users to troubleshoot their problems
          for other users to answer, so there are options if you get stuck.
        </p>
        <br />
        <p>
          I can't deny though that creating even just the desired donut with
          icing is undeniably challenging. Using the tool can be frustrating and
          you find yourself consistently asking: "what the hell am I doing with
          my life?" Despite all of this, and although I'm not quite finished
          with it myself, I can say that the process so far has been really
          rewarding.
        </p>
        <br />
        <div className={styles.imageCon2}>
          <Image
            src="/assets/blogimages/donut2.png"
            alt="donut_blender_screenshot"
            style={{ filter: "grayscale(0)" }}
            width="850"
            height="850"
          />
        </div>
        <p>
          Above is my own creation, thanks to this Blender tutorial. It's two
          donuts in a marble bowl on some woodchips. I call it, "Two donuts in a
          Marble Bowl on some Woodchips". One thing I noticed is that you need a
          powerful operating system to consistently render Blender models. My
          laptop was just about good enough, but to be able to render more
          complex designs, I'd need both a more powerful graphics card and a
          more powerful CPU.{" "}
        </p>
        <br />
        <p>
          Also worth noting, the Blender instructor consistently reminds you:
          the tutorial itself isn't just to teach you how to make a bunch of
          donuts in Blender; it's a way to introduce beginners to key Blender
          concepts, which you can takeaway and build stuff yourself. Looking
          back, there is a lot to take in and I doubt I'll be a master anytime
          soon. Nevertheless, I feel like I have what I need to start
          experimenting myself with the tool.
        </p>
        <br />
        <p>
          So where would this path take you if you were to pursue it? In my case
          it would improve my ability to develope more complicated 3D websites,
          and, as a pure coincidence, would also teach me 3D modelling skills.
        </p>
        <br />
        <p>
          However, it is no surprise that 3D Web Developers aren't really in
          high demand. It's quite a niche area, and it would be costly for a
          company to invest in such a design. Still, they are not unicorn
          positions and I've seen one or two positions here or there. The main
          problem is that said positions favour seniors who have more than 5
          years' experience crafting 3D websites. And in all fairness it's not
          really a position where you want a Junior having complete control, as
          a lot can go wrong (even more so than with a regular website).
        </p>
        <br />
        <p>
          Nevertheless, considering the aforementioned rarity of such
          experience, any applicant who fits this profile is, in fact, truly a
          unicorn. In other words, they would be paid handsomely.
        </p>
        <br />
        <p>So give me five years and then we'll see if I make it happen.</p>
        <br />
        <p>But for now, it's purely a hobby project.</p>
      </div>
    ),
    question: false,
    date: "20/05/2024",
  },
  {
    id: 3,
    title: "Learn a New Skill or Strengthen my Current One?",
    path: "learn-a-new-skill-or-strengthen-my-current-one",
    links: [],
    images: ["/assets/blogimages/jobRequirements.jpg"],
    imageAlt: ["screenshot_fullstack_dev_job"],
    imageCaption: [
      "A genuine job ad I saw for a Fullstack Developer position. Note how many frameworks and backend languages it expects the candidate to know",
    ],
    article: (
      <div>
        <p>
          We hear it all the time. The biggest mistake Junior Developers make,
          is to try to learn everything at once. Specifically, don't learn a new
          coding language, before becoming an expert in your own. But these days
          companies are becoming more demanding of skills, so is this really
          realistic?
        </p>
        <br />
        <p>
          I couldn't have been more guilty of this myself. And to be honest, I
          may still be guilty. After I finished my Fullstack bootcamp, I was
          like the hyperactive, disobedient labrador at the crufts competition.
          I saw so many distractions, so many avenues, so many paths; I wanted
          to try it all. For instance, I said to myself I should learn PHP,
          considering that it makes up 70% of the web ({" "}
          <a href="./should-web-developers-learn-wordpress" target="_blank">
            though I later realised this is partly because of WordPress{" "}
          </a>
          ); but then I said, I should also learn a low-level language like C so
          that I can get a firm grasp on all languages; and if I'm learning C,
          why not also C++ or C# considering they're used in video games. And so
          on, and so on and so forth.
        </p>
        <br />
        <p>
          Unfortunately, and luckily, I came to my senses and never started with
          either of them. However, I am learning Java but taking it slow. Also
          you'll see from my last article that{" "}
          <a href="./3d-websites-threejs-and-blender" target="_blank">
            I want to get more invested in Three.js and 3D modelling{" "}
          </a>
          . I have also dabbled a bit with mobile apps using React Native, just
          because I wanted to see how easy it was as a React Developer to
          transition to (conclusion: not super easy but not super hard). In
          addition, I have also become acquainted with other JavaScript
          frameworks that weren't React, such as Vue and then Nuxt (and of
          course Next - which is what this website is running on). But I think
          that's it...but can't say for sure.
        </p>
        <br />
        <p>
          Nevertheless, you look at what is required for some developer roles
          and it tells a different story.
        </p>
        <br />
        <p>
          Look, for example,{" "}
          <a href="#">at the screenshot at the top of the article </a>. This is
          a genuine job ad for a Fullstack Developer. It's unclear if this is
          for a junior, mid or senior role. However, even for a senior role, it
          seems very unrealistic.
        </p>
        <br />
        <p>
          The majority of senior developers would have chosen a path in which
          they can narrow their expertise and become true experts of their
          field, whether it's a Frontend React/JavaScript Developer or Backend
          .NET/C# Developer. However, for this role, the applicant needs to have
          knowledge of three frontend frameworks: React, jQuery and Angular.
          They also need to know four backend languages: C#, Java, Python and
          Node.js. Be familiar with two different databases: MongoDB and MySQL,
          along with the Apache web server and have UI/UX expertise with the
          Figma design tool. To top it all off, they need to have experience in
          medical devices, whatever that means - maybe they want you to design a
          defibrillator software with a super colourful user interface, complete
          with animations.
        </p>
        <br />
        <p>
          Admittedly, you are also told that the majority of job ads are really
          wishlists. In other words, they don't expect the candidate to possess
          all of the requirements. However, given the hellish environment of
          finding a job in the tech world at the moment (something I may write
          about in a future post, as a lot can be said, and I feel a lot of
          applicants are in much need of validation - which is severely
          lacking), companies can become extremely fussy.
        </p>
        <br />
        <p>
          There is also the unspoken belief amongst some companies that AI will
          takeover developers' jobs. In reality{" "}
          <a
            href="https://medium.com/the-business-of-ai/ai-wont-replace-programmers-eddf52c1839b"
            target="_blank"
          >
            this won't happen{" "}
          </a>{" "}
          and if a company replaced its developers with an AI tool, be sure to
          watch their immediate downfall with some popcorn.
        </p>
        <br />
        <p>
          So what should you do? Put simply: a little from column A, a little
          from column B.
        </p>
        <br />
        <p>
          One thing I noticed from learning another skill is that it can teach
          you some things about the other. Learning Java actually taught me a
          lot about JavaScript - a language I am more than familiar with - and
          exposed me more to the concept of compiling and Object Oriented
          Programming (OOP). I learnt that with JavaScript I took a lot for
          granted, such as in-built array methods, which you have to import if
          using Java; and one reason why JavaScript itself is used for websites,
          is because it doesn't need to compile, unlike Java. Finally, as an OOP
          language, Java has a lot of similarities with C# as well as some
          similarities with PHP and C++. So it's kinda like learning four for
          the price of one.
        </p>
        <br />
        <p>
          This gave me, therefore, a more general understanding of coding
          languages in general. And at the same time, I know Java itself is a
          whole universe of learning, and it's far better to take time to
          understand its fundamentals than to speed-run it and move on to the
          next language.
        </p>
        <br />
        <p>
          So like with everything, learning is effort and time-consuming. There
          are no shortcuts, despite what the snake-oil salespeople say.
        </p>
        <br />
        <p>
          And if you see such a job ad, which requires a whole volume of skills,
          pay it no notice. It's a sign of unrealistic expectations which may
          extend when you join their company. Later you'd find yourself trapped
          in a hellish nightmare amongst colleagues who have no idea what they
          are doing.
        </p>
        <br />
        <p>
          Besides, it's more than likely that if you did have all the skills
          they demanded, they would probably reject your application, for being
          overqualified.
        </p>
        <br />
        <p>Something that genuinely happened to me.</p>
        <br />
        <p>
          Hence, keep learning but at your own pace. Not for the unrealistic
          expectations of companies, but for your own personal development.
        </p>
        <br />
      </div>
    ),
    question: false,
    date: "27/05/2024",
  },
  {
    id: 4,
    title: "gov.uk - How to Build a Government Website",
    path: "gov-uk-how-to-build-a-government-website",
    links: [],
    images: ["/assets/blogimages/govuk.jpg"],
    imageAlt: ["screenshot_govuk"],
    imageCaption: [
      "gov.uk has an impressive performance score for a website that receives millions of users per month",
    ],
    article: (
      <div>
        <p>
          First off, let it be said, as a British person, I am no great patriot
          of the United Kingdom. If I was, I wouldn't be living in Berlin,
          Germany.
        </p>
        <br />
        <p>
          Even so, credit where credit is due, and{" "}
          <a href="https://www.gov.uk/" target="_blank">
            gov.uk{" "}
          </a>{" "}
          - the UK government's website - is a masterclass of how to digitalise
          government services. And living in Germany, a country constantly
          grappling with digitalisation, the contrast is stark.
        </p>
        <br />
        <p>
          As you can see above, its homepage achieves an all-round 100
          Lighthouse score. If you are unaware of what Lighthouse is, it is a{" "}
          <a
            href="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk"
            target="_blank"
          >
            google chrome extension{" "}
          </a>{" "}
          that measures the performance of websites, based on: performance,
          accessibility, best practices and SEO. I've only seen this score on
          one other website, one that is quite "cough" familiar.
        </p>
        <br />
        <div className={styles.imageCon2}>
          <Image
            src="/assets/blogimages/darrellperformance.jpg"
            alt="screenshot_darrellroberts"
            style={{ filter: "grayscale(0)" }}
            width="850"
            height="850"
          />
        </div>
        <p>
          Just for clarity, a lower Lighthouse score is not the be all or end
          all, and is unrealistic for websites that require a lot of JavaScript.
          You can imagine as well, for websites that are scaled to withstand
          millions of visitors and need to fulfill multiple functions, it
          becomes harder to maintain a high performance score, as other issues
          such as bugs take higher priority.
        </p>
        <br />
        <p>
          All the more impressive then that gov.uk can achieve this score,
          considering that it is the A-Z for millions of Brits needing to, for
          instance: renew their passport, do their tax return or, currently,
          register to vote in the general election.
        </p>
        <br />
        <p>
          What surprised me most of all, is that it has its own User Interface
          framework, named simply:{" "}
          <a href="https://design-system.service.gov.uk/" target="_blank">
            gov.uk Frontend
          </a>
          . I'm not sure why to be honest this is in the public domain, and you
          can even access it through a GitHub repository, which includes
          instructions on how to get started. You can even contribute towards it
          as if it's an open-source project. Are they trying to encourage users
          to create their own imitation UK government website? But I digress.
          Within this framework it points to a JavaScript templating language:
          <a href="https://mozilla.github.io/nunjucks/" target="_blank">
            {" "}
            Nunjucks
          </a>
          .
        </p>
        <br />
        <p>
          The benefit of using a templating language is that, due to its
          effectiveness in reducing code duplication and boilerplate, it can
          lead to strong website performance and faster response times. Another
          benefit is that it allows for greater reusability, particularly in the
          case of internationlisation and localisation (i18n), which mostly
          concerns translating a website into another language. It'll come as no
          surprise then that sections of the gov.uk website are available in
          more than 60 languages, along with English and Welsh.
        </p>
        <br />
        <p>
          Moreover, in its own style guide it makes a point of{" "}
          <a
            href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/"
            target="_blank"
          >
            accessibility{" "}
          </a>
          . Within this, it cites the four pillars of Web accessibility:
          Perceivable, Operable, Understandable and Robust; the principles of
          universal design; and how it measures and tests its own accessibility.
          To cite its own statistic, 1 in 5 people in the UK have a disability,
          therefore this is an important thing to consider when designing a
          website. From my own experience, too many times have I come across a
          website that breaks the Web Content Accessibility Guidelines (WCAG),
          by using, for example, the wrong font colour on a conflicting
          background. The fact that it not only recognises this, but makes a
          point of routinely testing its own accessibility, is admirable.
        </p>
        <br />
        <p>
          For me, gov.uk is the perfect example of how to digitalise essential
          government services. And it does this with a very no nonsense approach
          which is accessible to anyone.
        </p>
        <br />
        <p>
          So, like I said, I'm no fan of the UK but it's this love of
          digitalisation that sometimes makes me homesick.
        </p>
        <br />
      </div>
    ),
    question: false,
    date: "03/06/2024",
  },
  {
    id: 5,
    title: "Six Best Youtubers for self-taught or Junior Developers",
    path: "six-best-youtubers-for-self-taught-or-junior-developers",
    links: [],
    images: ["/assets/blogimages/youtubers.jpg"],
    imageAlt: ["youtubers_screenshot"],
    imageCaption: [
      "The six youtube channels from left to right: freecodecamp, Fireship, Theo, The Prime Time, Kevin Powell and Dev Mentor Dave",
    ],
    article: (
      <div>
        <p>
          I won't lie. I've caught myself watching some of these youtubers late
          at night. Curiosity always got the better of me, and if I see a video
          on say a new CSS feature or updates on the latest coding drama, I
          can't help but watch it.{" "}
        </p>
        <br />
        <p>
          It was not long after I entered the coding world that I became
          addicted to the following youtubers. They've aided me well so far in
          this journey and the thought had just occured to me that I should
          spread their recognition. If you are a self-taught developer, Youtube
          becomes your library. And if you are a Junior Developer unable to find
          a job, Youtube becomes your mentor.
        </p>
        <br />
        <p>
          {" "}
          There is so much free information on the internet and it is a reminder
          that there really should be no paywalls on education.
        </p>
        <br />
        <p>
          {" "}
          So in the spirit of learning, see below for some of the best coding
          youtubers I've come across, particularly for: tutorials, coding news,
          frontend, backend, CSS and just general advice.
        </p>
        <br />

        <h2>Tutorials: freecodecamp</h2>
        <p>
          {" "}
          Freecodecamp isn't really much of a secret amongst developers. It is a
          pretty famous channel for coding tutorials, ranging from frontend and
          backend roadmaps, AI courses, data science and even mathematics. If
          you want to choose a more specific path, they also have tutorials for
          specifics languages, including (but not exclusive to ) C#, C++, Python
          and JavaScript.
        </p>
        <br />
        <p>
          One important thing to note however, is that you get the most out of a
          tutorial by being active yourself. Otherwise you fall into the common
          trap of tutorial hell. This is where you just blindly follow the
          tutorial and when you finish, you start another one. Then when you are
          forced to apply your knowledge, you find that you can't recall
          anything.
        </p>
        <br />
        <p>
          To avoid this, be sure to not only code along with the tutorial but to
          add your own flair to it and be sure to test your own ideas. For
          example, rather than waiting for the next step of the tutorial, pause
          the video and guess yourself what you need to do. Furthermore,
          experiment with other options to make your own project unique. You'll
          find that you'll encounter your own errors, but with each error you
          solve yourself, you learn much more effectively, rather than being
          told how to solve it.
        </p>
        <br />
        <p>
          {" "}
          Anyway one of my favourite roadmaps of freecodecamp is{" "}
          <a
            href="https://www.youtube.com/watch?v=6nz8GXjxiHg&t=2998s"
            target="_blank"
          >
            {" "}
            how to get a developer job{" "}
          </a>
          . Granted, after watching the video, you won't be guaranteed a job but
          its main message I found to be inspiring. That being: make sure that
          you are always learning, and by doing so, you are already on the right
          path.{" "}
        </p>
        <br />

        <h2>Coding News and Quick Overviews: Fireship </h2>
        <p>
          Fireship is a great channel for keeping up with the latest coding news
          and gossip. Every few weeks or so, the channel releases what it calls
          'Code Reports'. Together with the youtuber's very deadpan humour it
          makes for not only an informative watch but also an entertaining one.
        </p>
        <br />
        <p>
          In addition Fireship seems to understand that everyone is in a rush
          and has a unique style to his videos. You may notice that he cuts out
          all the pointless chitchat and gets straight to the point. This is no
          more demonstrated by his 100 second videos, whereby he explains either
          a coding language, platform or tool in less than 100 seconds. It's
          done very skillfully and you can tell that he puts in a lot of effort
          into editing his videos to make this possible.
        </p>
        <br />
        <p>
          It is for these reasons why I have found his channel invaluable for
          quick overviews of different approaches, such as{" "}
          <a
            href="https://www.youtube.com/watch?v=FQPlEnKav48&t=524s"
            target="_blank"
          >
            {" "}
            building the same web app in ten different languages{" "}
          </a>
          .
        </p>
        <br />
        <h2> Frontend: Theo</h2>
        <p>
          Theo is a San Francisco-based former Twitch frontend Engineer. That
          alone should tell you he knows his stuff.
        </p>
        <br />
        <p>
          {" "}
          If however you need more convincing, you'll find that from his video
          library he constantly engages with the current frontend discourse, and
          also speaks openly about his feelings towards Rust - a much beloved
          backend language. He is a strong advocate for TypeScript and using
          NextJS properly, to the point that he'll draw diagrams in his videos
          explaining how it works under the hood.
        </p>
        <br />
        <p>
          Therefore, he'll spend time explaining the why and the how on top of
          giving his opinion.
        </p>
        <br />
        <p>
          My favourite video of his is where he goes through a
          <a href="https://www.youtube.com/watch?v=uqII0AOW1NM" target="_blank">
            {" "}
            Frontend interview with Dan Abramov{" "}
          </a>
          . Abramov is one of the engineers from the React core team. Hence it's
          really interesting and humbling to see how a true expert navigates
          these types of interviews.
        </p>
        <br />

        <h2> Backend: The Prime Time</h2>
        <p>
          The Prime Time or Primeagen is quite an interesting character. If you
          are really struggling to get a job in tech and ever need motivation to
          keep going, his story will truly inspire you.
        </p>
        <br />
        <p>
          In one video he is completely open about his past: he had a tough
          upbringing, failed at school and became consumed by his addictions.
          After multiple failed attempts at college, he decided once and for all
          to give it his absolute best, pushing himself to his limit where he
          would study every evening. It was only then that he found he succeeded
          and never looked back.
        </p>
        <br />
        <p>
          He realised at that moment, although talent will get you far, hard
          work will win everytime. And therein lies his philosophy.
        </p>
        <br />
        <p>
          Soon thereafter he graduated from college and got a career at Netflix
          as a Backend Engineer, probably one of the most sought after jobs in
          the tech industry.{" "}
        </p>
        <br />
        <p>
          {" "}
          With such an insane backstory, Primeagen is a very devoted developer
          and preaches to others that you will only improve at coding if you put
          in the hours of hard work. In other words, there are no shortcuts.{" "}
        </p>
        <br />
        <p>
          Although not his original channel, I found The Prime Time channel very
          helpful in terms of sharpening my coding knowledge. Within it are
          snippets from his live streams, where he engaged with other coding
          challenges and is very open when he makes mistakes.
        </p>
        <br />
        <p>
          {" "}
          For instance, in this{" "}
          <a
            href="https://www.youtube.com/watch?v=flzlEmyxMs8&t=528s"
            target="_blank"
          >
            {" "}
            you don't know JavaScript{" "}
          </a>{" "}
          video, you follow his thought process which has improved my own
          perception of how JavaScript works under the hood.
        </p>
        <br />

        <h2> CSS: Kevin Powell</h2>
        <p>Kevin Powell is everything CSS.</p>
        <br />
        <p>
          {" "}
          Although he does dabble with other subject areas like HTML and
          JavaScript, CSS is his expertise. I often find myself watching his
          videos to either optimise my own CSS code, or find out any useful
          features I wasn't aware of.
        </p>
        <br />
        <p>
          In particular he helped me in some cases reduce the need for long
          media queries, with properties such as clamp(). With it, it seems
          almost like magic the way your font size can grow or shrink depending
          on the viewport, without the need to specify either a maximum or
          minimum width media query.
        </p>
        <br />
        <p>
          {" "}
          Kevin not only has his finger on the pulse for new CSS updates, but he
          also points out features which developers aren't even aware of.
        </p>
        <br />
        <p>
          {" "}
          For example, he has a video on the{" "}
          <a
            href="https://www.youtube.com/watch?v=opHu7HvFM60&t=21s"
            target="_blank"
          >
            {" "}
            most common unused CSS features{" "}
          </a>{" "}
          which in itself seems endless and I still need to study it in detail.
        </p>
        <br />

        <h2> General advice: Dev Mentor Dave</h2>
        <p>
          With the tech world in a whirlwind at the moment, whereby it is hell
          on earth being a Junior Developer in need of a job, Dave is on a
          mission.
        </p>
        <br />
        <p>
          He wants to help Junior Developers around the world land their first
          job, one video at a time. Hence his name: Dev Mentor Dave.
        </p>
        <br />
        <p>
          However, as this is a monumental responsibility for anyone, he is also
          very much grounded and realistic. He gives general advice for: job
          searching, what companies are looking for, how to increase your
          chances ect. At the same time, he admits that it is a hellish
          landscape and it just might not be possible for some people. For
          example, his main advice is that if you are thinking of changing
          careers, you should learn whilst you are still working because most
          companies at the moment just aren't interested in hiring Junior
          Developers.
        </p>
        <br />
        <p>
          Despite this realistic yet daunting outcome, it doesn't mean that Dave
          is not trying his utmost best to help others. Along with his
          down-to-earth insights such as{" "}
          <a href="https://www.youtube.com/watch?v=qL-nEolj4ZM" target="_blank">
            {" "}
            the struggle of finding a mentor{" "}
          </a>
          , he is also producing weekly livestreams for a group project he is
          leading. In this project he hopes to give as many Junior Developers as
          possible the opportunity to learn about code reviews and open source
          contributions. He is always looking to spread the word for
          contributors so if you are interested, visit his channel for more
          details.
        </p>
        <br />
        <hr></hr>
        <br />
        <p>
          So those are the six youtubers I have found helpful in my own coding
          journey. I hope at the very least you can learn something from them as
          well.
        </p>
      </div>
    ),
    question: false,
    date: "10/06/2024",
  },
  {
    id: 6,
    title: "When not to use AI",
    path: "when-not-to-use-ai",
    links: [],
    images: ["/assets/blogimages/chatgpt.jpg"],
    imageAlt: ["chatgpt_screenshot"],
    imageCaption: [
      "A screenshot from Virej's youtube video of gaslighting AI into 2 + 2 = 5",
    ],
    article: (
      <div>
        <p>
          I'm sure I had a similar reaction to many when I first used ChatGPT.
          Amazement.
        </p>
        <br />
        <p>
          All the possibilities flashed before my eyes. I thought you could use
          it to code anything, learn anything you wanted and it even gave me an
          idea of using it to create a virtual tandem parter{" "}
          <a href="https://www.tandem-gpt.com/" target="_blank">
            (before discovering someone beat me to it){" "}
          </a>
          .
        </p>
        <br />
        <p>
          {" "}
          It also gave me the feeling of redundancy. I thought, if this ChatGPT
          could code anything then surely the rumours are true: AI will take our
          jobs.
        </p>
        <br />
        <p>
          {" "}
          Subsequently, I began using it for my own coding problems and soon
          developed horrible habits. For instance, if I wanted to create a
          function, rather than figuring out how to do it, I would just prompt
          the AI. For clarity, I did this more to see how they would approach
          the problem, rather than for it to code for me. Nevertheless, it
          wasn't a good thing to practice. The more I used it, however, the more
          I noticed its foibles.
        </p>
        <br />
        <p>
          {" "}
          When I would use its suggestion, it often introduce new bugs into my
          codebase. This then became a new problem to solve. Solving this bug
          was not entirely straight forward either, as the AI may use a coding
          pattern or inbuilt function I was unaware of, meaning I had to spend
          time studying this when I could have exerted energy on just the
          initial task itself.{" "}
        </p>
        <br />
        <p>
          I guess you could make the argument that I need to learn how to prompt
          properly, but even so, I would say why not just spend that same effort
          on solving the original problem? When you solve this problem yourself,
          you are thinking with you own working knowledge and by doing so, you
          can explain every step you took and why you did it. With an AI
          solution, your explanation usually consists of only, 'it works' but
          not understanding why it works. As a result, when it breaks you
          struggle to know how to fix it before feeding it again into the AI
          language model, digging yourself deeper. In addition, if you need to
          optimise the code, you most likely hit a brick wall, as how can you
          simplify something you never truly understood?
        </p>
        <br />
        <p>
          Also I think the problem lies in not how you prompt the AI, but also
          when you use it. If you use AI for a subject or topic you are not too
          familiar with, it can be a dangerous thing, as you are unaware of when
          it makes a mistake. And it makes plenty. Furthermore, if you are
          somewhat disagreeable, you can gaslight it to say whatever you want.
          For example, when one user convinced it to{" "}
          <a href="https://www.youtube.com/watch?v=3wlvNfTNgB8" target="_blank">
            {" "}
            believe 2 + 2 = 5{" "}
          </a>
          . Or in other words, when a user became Big Brother from Nineteen
          Eighty-Four.
        </p>
        <br />
        <p>
          {" "}
          If you are aware of the topic at hand, then you will probably notice
          whenever it makes a mistake or if something sounds implausible. For
          instance, I noticed myself when I would ask it for JavaScript
          solutions, it would sometimes for whatever reason omit essential
          keywords, such as "await" from asynchronous API calls. You correct it,
          receive an apology and then a part of you thinks: people say that AI
          will takeover coding jobs? Which I have said before, is a{" "}
          <a
            href="https://www.youtube.com/watch?v=XKkoVpupYdw"
            target="_target"
          >
            long debunked myth used to generate clicks and buzz{" "}
          </a>
          , mostly by CEOs who don't have a clue and jump on the bandwagon.
        </p>
        <br />
        <p>
          Despite this, AI can be good to give overviews. Much like Wikipedia,
          if prompted, it can give you a quick snapshot of any topic which is
          good if you're not sure whether to learn a new technology. Personally,
          I use{" "}
          <a href="https://gemini.google.com/app?hl=de" target="_blank">
            Google Gemini{" "}
          </a>{" "}
          because it often gives you its sources, similar to a university essay,
          so you can investigate it further, as well as fact check what it
          states. So, similar to how you would use Wikipedia, use it with a
          pinch of salt and don't treat it as gospel.
        </p>
        <br />
        <p>
          AI language models are undoubtedly a powerful tool that can improve
          your workflow and save you time. But using it as a substitute for
          learning should set off alarm bells. To master a subject, you need to
          struggle, get stuck, become frustrated, only then to connect the dots
          and find the solution, progressing forward.
        </p>
        <br />
        <p>
          To paraphrase the late president John F. Kennedy, all problems are
          made by humans, therefore can only be solved by humans.
        </p>
      </div>
    ),
    question: false,
    date: "17/06/2024",
  },
  {
    id: 7,
    title: "Difference between Web and Mobile App Development",
    path: "difference-between-web-and-mobile-app-development",
    links: [],
    images: ["/assets/blogimages/mobileapp.jpg"],
    imageAlt: ["mobileapp_screenshot"],
    imageCaption: [
      "A screenshot of me creating a simple mobile app on the Flutter framework",
    ],
    article: (
      <div>
        <p>
          Those who haven't either developed a website or mobile application
          would be forgiven for thinking they're the same. It's easy to think
          they're not so different and surely one feeds into the other?
        </p>
        <br />
        <p>
          {" "}
          The easiest way to answer this, is to look at tech roles in most
          companies. Usually, they don't just employ mobile app developers, but
          specifically Android and iOS developers. Thereby, drawing a
          distinction between the two. And for their website, they might use
          either a team of web developers; combination of a Frontend, Backend
          developer along with a UI/UX designer; or might even just freestyle it
          with either a Fullstack developer or a third-party Web agency.
          Nevertheless, it's incredibly rare that you'd have the employee who
          develops the website, also overseeing the company's mobile app
          developement on Google Play and the Apple Store.
        </p>
        <br />
        <p> But why are they so different?</p>
        <br />
        <p>
          {" "}
          First off, a website application runs on the browser's engine, whether
          it's Chrome, Safari, Firefox, or any other (RIP Windows Explorer).
          It's irrelevant what Operating System (OS) the user has because the
          web application only exists, broadly speaking, within the browser. A
          mobile application, on the other hand, runs on the actual OS, or in
          other words, mobile device. With this, there are two very distinct
          options: Android or iOS. This alone has far-reaching implications.
        </p>
        <br />
        <p>
          For instance, although there are countless frameworks and templating
          languages you can use to develop websites, every dynamic website with
          colour always contain the following: HTML, CSS and JavaScript.
          Although different browsers may use different engines to deploy this
          code, such as the V8 engine on Chrome and WebKit on Safari, the same
          website will run the same on either engine, with the exception of
          freshly-released features. To which, you would use{" "}
          <a href="https://caniuse.com/" target="_blank">
            {" "}
            caniuse{" "}
          </a>{" "}
          to ensure complete compatibility. In this case the developer only has
          to slightly alter their code if such an incompatibility existed (for
          example, "--webkit" for new CSS features). Therefore, when making a
          website, you can easily implement the one codebase philosophy, as
          ordained from the{" "}
          <a href="https://12factor.net/" target="_blank">
            {" "}
            Twelve Factor App{" "}
          </a>
          . Translating this website into a mobile application however, is a
          different beast entirely.
        </p>
        <br />
        <p>
          A mobile application is in other words a type of software that runs on
          a mobile device. Whether you want to run this software on an Android
          or an iOS device, is a question you should immediately ask yourself.
          And if you want to run it on both, you have your work cut out for you.
          There's a reason why companies employ both an Android Developer and an
          iOS Developer, because, unlike with a web application, a mobile
          application or software runs on the OS's engine rather than the
          browser's. And as Android and iOS devices are very much different in
          terms of how they are developed, the mobile software needs to be
          compatible with the OS it runs on.
        </p>
        <br />
        <p>
          Initially, this meant two completely difference codebases. For
          example, Android applications mostly run on Kotlin, a programming
          language that is compatible with Java. Software on iOS devices
          however, run on Swift which is an evolution of Objective C. This is
          why if you write an Android application, it can't run on an iOS
          device. But since the last five to ten years, other approaches have
          been invented.{" "}
        </p>
        <br />
        <p>
          For instance, there's the React Native framework, which allows the
          developer to code a JSX-style application for both Android and iOS.
          More recently, Flutter also took to the scene as another
          cross-platform alternative developed by Google. Written in Dart, it is
          quite an unknown language but shares similarities to other
          object-oriented languages such as Java and C#. It also has the
          type-safety you'd find in TypeScript to catch bugs early in the
          process. Hence, these alternatives help employ the one codebase
          philosophy in order to run a mobile app on both Android and iOS.
        </p>
        <br />
        <p>
          Nevertheless, no matter which approach you use for iOS, you still need
          to use{" "}
          <a href="https://developer.apple.com/xcode/" target="_blank">
            Xcode
          </a>{" "}
          if you ever want to publish your application. Xcode is a development
          environment that helps package you code for production and send it to
          the Apple App Store. In true Apple style, you can only run Xcode on
          Apple devices. Because, you know, it's Apple. This is bad news if you
          do not code on a MacOS like myself.
        </p>
        <br />
        <p>
          Nevertheless, once you dive into mobile app development, you'll find
          it is quite a different world to making a website.
        </p>
        <br />
        <p>
          One advantage of developing a mobile application is that you have
          access to numerous native features, such as: GPS, file upload,
          gyroscope detection, accelerometer, the device's camera and more. So
          you have plenty in your arsenal to let you imagination run wild. With
          these features however, you also have to consider the security
          implications for which both Google Play and the Apple Store will hold
          your feet to the fire should you make a mistake. Much like SEO for
          websites, you also have your{" "}
          <a
            href="https://www.searchenginejournal.com/app-store-optimization-how-to-guide/241967/"
            target="_blank"
          >
            App Store Optimization
          </a>{" "}
          score, which determines where you mobile app will rank on the search
          results. One crucifying rank factor are the ratings, which of course
          do not exist for websites. And if you get a few one star ratings, you
          will have a mountain to climb to escape the ensuing persecution from
          the crawl bots.
        </p>
        <br />
        <p>
          All in all, if you are thinking of developing a mobile application,
          there is nothing stopping you. Know only that it is a completely
          different developer experience from making a website.
        </p>
        <br />
        <p>
          There is something special about opening your own mobile app on your
          own mobile, which you can't recreate when making a website. You just
          have to ask yourself after all the torment, will it be worth it?
        </p>
      </div>
    ),
    question: false,
    date: "24/06/2024",
  },
  {
    id: 8,
    title: "The Ethics of Scraper Bots",
    path: "the-ethics-of-scraper-bots",
    links: [],
    images: ["/assets/blogimages/scraped.jpg"],
    imageAlt: ["scraped_screenshot"],
    imageCaption: [
      "A screenshot of information I scraped from the Giraffe wikipedia page",
    ],
    article: (
      <div>
        <p>
          I became interested in scraper bots when I heard of the catastrophic
          mistake developers of the Rabbit r1 made with their code.
        </p>
        <br />
        <p>
          If you are unaware, youtuber Fireship, a channel I've spoken praise of
          before,{" "}
          <a href="https://www.youtube.com/watch?v=lkbV8oP-F44" target="_blank">
            {" "}
            gives a great summary{" "}
          </a>
          . Long story short, the codebase of the Rabbit r1, an AI-assisted
          device that mimics the capabilities of an Android, was exposed as
          hardcoding its API keys for multiple services, such as ElevenLabs,
          Azure, Google Maps and Yelp. API keys are essentially passwords you
          need to access these databases, and if you've exposed them, it means
          anyone can access this data and do whatever they want with it -
          create, edit or delete it. Hence you want to protect and hide your API
          key at all cost so that yours and the users' data is not compromised.
        </p>
        <br />
        <p>
          It's a big no no and it's one of the first things you are taught not
          to do when creating an application. One issue of hardcoding your API
          keys and uploading your code to GitHub is that there are numerous
          scraper bots waiting to take advantage of these keys. But what are
          scraper bots?
        </p>
        <br />
        <p>
          {" "}
          They are automated programs, similar to web crawlers, designated to
          trawl websites and collect specific data. Such data can include
          product prices, news headlines, or social media content. However, this
          also means scraper bots can be programmed to collect sensitive
          information, such as API keys. GitHub is of course the perfect target,
          considering the sheer volume of published codebases that are made
          public.{" "}
        </p>
        <br />
        <p>
          Data theft is ever prevalent on the internet, and scraper bots are
          just one of the methods criminals will use to harvest sensitive
          information. Therefore, any such data should be treated with the
          utmost care and the developer should take all the steps necessary to
          encrypt and protect this information.
        </p>
        <br />
        <p>
          Though not all scraper bots are used entirely for malicious reasons.
          For example, price comparison websites use them to compare flights,
          hotels and car rental prices. So it is a way of automating data
          collection for a database.
        </p>
        <br />
        <p>
          In addition creating a scraper script is no secret. For instance,{" "}
          <a
            href="https://www.freecodecamp.org/news/web-scraping-in-javascript-with-puppeteer/"
            target="_blank"
          >
            {" "}
            you can easily create a basic one with Node.js
          </a>
          . Of course it's strongly advised that you only scrape from websites
          that allow it, and use this script within ethical and legal limits. I
          had a go and you can see what information I was easily able to scrape
          from the <a href="#top">Giraffe wikipedia website</a>. Should I feel
          the need to build a Giraffe database, I'm all set.
        </p>
        <br />
        <p>
          But when you discover the power of scraper bots, the question of
          plagiarism arises. OpenAI, for example, uses its own GPTBot to scrape
          other websites in order to collect the vast amount of data it needs.
          This data is then used to train the AI without credit to the authors.
          I mentioned in{" "}
          <a href="/blog/when-not-to-use-ai" target="_blank">
            one of my earlier articles
          </a>{" "}
          that some AI models provide their sources but this practice is not
          universal.
        </p>
        <br />
        <p>
          With AI there's also the problem of "giraffing". This is the problem
          whereby the AI is trained on tonnes of labelled photos, scraped from
          the internet. However, due to the quantity of Giraffe images, the AI
          is falsely trained that{" "}
          <a
            href="https://www.tumblr.com/picdescbot/182455666385/how-math-can-be-racist-giraffing"
            target="_blank"
          >
            {" "}
            Giraffes are everywhere{" "}
          </a>
          . If the AI was sentient, for instance, it might think that it would
          be near impossible to walk down Oxford Street in London without
          bumping into a Giraffe. This somewhat highlights the limits of
          scraping for data collection and how the internet is not a valid
          representation of the real world.
        </p>
        <br />
        <p>
          Scraper bots are not necessarily a force for evil, but are a reminder
          that the internet can be a dangerous place. Knowing how they work and
          how to develope one, can further assist you in protecting your own
          data.
        </p>
        <br />
        <p>
          They can be a helpful time-saver when automating data collection,
          though it's important to recognise what type of data you are scraping
          and which sources you are taking it from. This is to not only show
          that you are more ethical than AI, but also because you may have
          inadvertently scraped a website full of Giraffe pictures.
        </p>
      </div>
    ),
    question: false,
    date: "01/07/2024",
  },
  {
    id: 9,
    title: "Choosing your Integrated Development Environment",
    path: "choosing-your-integrated-development-environment",
    links: [],
    images: ["/assets/blogimages/ide.jpg"],
    imageAlt: ["ide_screenshot"],
    imageCaption: [
      "The visual difference between coding on a text editor and coding on an IDE",
    ],
    article: (
      <div>
        <p>
          When I first tried coding, I was unaware of what an Integrated
          Development Environment was.
        </p>
        <br />
        <p>
          All I knew was the text editor: notepad, which I used at the time to
          write HTML. I was learning it on Codeacademy but had no idea where I
          should write code for my own project, so chose notepad for lack of
          knowing any better. In reality this was horrible choice, as my code
          soon became messy. It was hard to tell some elements apart, as well as
          where to indent the child elements within its parent. Due to notepad's
          black and white design, it was also just hard to read. Initially, this
          threw me off coding because writing it within this desaturated virtual
          window, I found uninspiring and whenever I tried to read it, it gave
          me a headache. It was only many years later, when I took coding more
          seriously that I discovered the power of Integrated Development
          Environments or IDEs.
        </p>
        <br />
        <p>
          IDEs are essentially software designed for programmers to write code
          efficiently and in a read-friendly manner. They are as numerous as
          they come and some have specific functions, such as to develope mobile
          apps on Android Studio; whilst others might have a more generalist
          purpose like Visual Studio Code. Unlike notepad, IDEs go way beyond
          providing the benefit of readability.
        </p>
        <br />
        <p>
          For instance, on top of providing a text editor, IDEs also have
          compiling functionalities, which allow developers to compile their
          code into machine-readable languages. This is particularly optimal for
          languages that require compiling, such as Java. There are also code
          completion shortcuts, which give developers ways to optimise their
          process and to skip the boredom of repeatedly writing boiler plate
          code. It's also common for an IDE to include debugging capabilities.
        </p>
        <br />
        <p>
          This allows the developer to run their code step by step and introduce
          breakpoints, whereby they can pause the program at a specific point in
          their code. If there is a bug, this proves invaluable for when the
          developer wants to watch the value of a particular variable. For
          example, if this variable changes state when the program executes a
          specific line of code, you have your first clue as to what went wrong.
        </p>
        <br />
        <p>
          IDEs also often support extensions, in a similar manner to browsers,
          which allow the user to install further features. For example, a
          common one for Visual Studio Code is{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            target="_blank"
          >
            Prettier{" "}
          </a>
          , which automatically formats you code to make it more digestible to
          the reader.
        </p>
        <br />
        <p>
          Talking of Visual Studio Code, it's quite an interesting IDE. It is
          one of the more popular choices as it has approximately 14 million
          monthly users, and its user interface is actually written mostly in
          TypeScript - much like this website. This handles the rendering of the
          user interface and app's logic. For low-level tasks such as
          interacting with the operating system and creating windows, Visual
          Studio Code uses Electron,{" "}
          <a href="https://www.electronjs.org/" target="_blank">
            a framework for building desktop applications{" "}
          </a>
          . Conversely, this is written mostly in C++. Electron itself is quite
          influential as it has been used not just for VS code, but also by
          other IDEs, such as Atom. All of which are open-source, therefore the
          community help drive its features. However, it's worth noting that
          Atom discontinued development and updates as of 2022.
        </p>
        <br />
        <p>
          You also have the Xcode IDE exclusively for Apple devices,{" "}
          <a
            href="/blog/difference-between-web-and-mobile-app-development"
            target="_blank"
          >
            which I've discussed briefly before in one of my other articles{" "}
          </a>
          . It supports languages used for Apple products and iOS app
          development, such as Swift, C++ and Objective-C. There are also IDEs
          specific for certain languages, such as PhpStorm for PHP developers.
          As it's PHP-focused, it supports CMS tools such as WordPress. There is
          also Netbeans, first released in 1997, which supports various
          languages but is commonly used by Java Developers and has a powerful
          FTP client feature. For a more extensive exploration of other IDEs,{" "}
          <a
            href="https://www.techrepublic.com/article/best-ide-software/"
            target="_blank"
          >
            this article details some of the best{" "}
          </a>
          .{" "}
        </p>
        <br />
        <p>
          {" "}
          Ultimately, when choosing your IDE, it all comes down to preference
          and practicability. If you wanted to make an iOS app for example, and
          the IDE you just downloaded was Android Studio, then you are in
          trouble. Thankfully, the majority of IDEs are free.
        </p>
        <br />
        <p>
          It is nevertheless important you choose one that facilitates your
          workflow and makes you love coding. Otherwise, you'll fall into the
          trap I once did of becoming jaded of programming, simply because your
          IDE - or text editor in my case - provided a terrible developer
          experience.
        </p>
      </div>
    ),
    question: false,
    date: "08/07/2024",
  },
  {
    id: 10,
    title: "Google Web Vitals - Measuring your Frontend Performance",
    path: "google-web-vitals-measuring-your-frontend-performance",
    links: [],
    images: ["/assets/blogimages/darrelllcp.jpg"],
    imageAlt: ["ide_screenshot"],
    imageCaption: [
      "A screenshot of me using the Performance tool to determine the Largest Contentful Paint",
    ],
    article: (
      <div>
        <p>
          When you build a website or web app, there are so many factors to
          consider that it can be hard to know how you can actually measure its
          success. For example, is success measured by the users' feedback, how
          many features it has or its volume of traffic? This is just a handful
          of ways of how you can get feedback and neither really tells the
          developer if the code itself needs improving.
        </p>
        <br />
        <p>
          You could have a web app with numerous features and a jaw-dropping
          design, but its codebase could be completely cluttered with
          unnecessary JavaScript code, leading to a longer than usual loading
          time. In which case it would actually have a knock-on effect on the
          user experience as well as its SEO performance, causing a lower
          ranking on the Search Engine Results Page. So how do you test this?
        </p>
        <br />
        <p>
          Enter{" "}
          <a
            href="https://web.dev/articles/vitals#core-web-vitals"
            target="_blank"
          >
            Google Web Vitals{" "}
          </a>
          . These are a set of metrics provided by Google to offer guidance to
          the developer on how to measure the user experience. For example, its
          three core metrics are: Largest Contentful Paint (LCP), Interaction to
          Next Paint (INP) and Cumulative Layout Shift (CLS). Let's break these
          down.
        </p>
        <br />
        <p>
          LCP is the render time of the largest node on the landing page. It
          often corresponds to an img, h1 or div HTML element. When you perform
          this test, it will tell you which element on your page is the LCP -
          for example, <a href="#top">in the screenshot above </a>, you can see
          it's the image element on my homepage. In order to do this yourself,
          just open the Chrome developer tools, go to Performance and click on
          the Start Profiling button (an icon in the shape of a circle with an
          arrow on the end of it). So why is LCP important?
        </p>
        <br />
        <p>
          As this measures your landing page's largest node, it essentially is
          analysing the loading time of the element that will take the longest
          to render. Therefore, it is a good indication of the general loading
          time of your website, as it measures the biggest offender, on the HTML
          page, for slow loading times so to speak. Google states that a good
          loading time for LCP is below 2.5 seconds. Anything that takes longer
          than this but is faster than 4 seconds, needs improvement. And a LCP
          that takes longer than 4 seconds to render, corresponds to bad
          performance. Again if you look at the screenshot of my website, you'll
          see that the loading time of the LCP is 0.155 seconds (154.6ms). So I
          don't need to worry.
        </p>
        <br />
        <p>
          Excessive JavaScript code can be one of the culprits of long LCP
          loading times. If the app uses Client-side rendering, the JavaScript
          code needs to be executed first before any HTML element is rendered.
          This is why conditional rendering and asynchronous fetching are
          important. When you fetch data from a database on a webpage, this
          process, if not handled correctly, can delay or even stop the
          rendering of the HTML elements.
        </p>
        <br />
        <p>
          Then you have INP, which is a metric that analyses a page's
          responsiveness to a user's interaction. Think of when a user clicks a
          dropdown menu or clicks on a button that executes a function. It
          measures the time between the user initiating the interaction, and the
          page responding. Testing it is a bit more complicated. Again on the
          performance tab of Chrome Developer Tools, you click on record and
          execute the interaction you want to test. Here is a{" "}
          <a
            href="https://www.debugbear.com/blog/inp-chrome-devtools"
            target="_blank"
          >
            {" "}
            more detailed explanation of the process{" "}
          </a>
          .
        </p>
        <br />
        <p>
          Similarly, Google sets guidelines for how long this metric should be.
          It is more strict in this case as a response of longer than 500ms is
          consider poor, and anything above 200ms needs improvement.
        </p>
        <br />
        <p>
          Lastly, we have CLS which essentially measures the shifting of HTML
          elements between page loads. This can get quite complex if explained
          in detail, but I'm sure we've all experienced a poor performing CLS
          score. Think of a time when you've been on a webpage and have been
          bombarded with popup adverts. When you click on the cross icon to
          close the popup, the elements shift and you have inadvertently click
          on "Confirm", "OK" or "I agree to give you one million dollars". This
          of course is the worst case scenario but you still have shifting
          elements on trustworthy webpages.
        </p>
        <br />
        <p>
          {" "}
          For example, when you are at the checkout of an ecommerce website, if
          you remove items from your basket you might see elements shift to
          compensate for the change in state, such as reduction in price and
          quantity. So it is inheritly not a bad thing, but a bad CLS score is
          definitely something to avoid. Though how is CLS measured?
        </p>
        <br />
        <p>
          It comes down to two factors, which are known as the{" "}
          <a
            href="https://www.debugbear.com/docs/metrics/cumulative-layout-shift"
            target="_blank"
          >
            impact fraction and distance fraction{" "}
          </a>
          . This measures how much of the screen is impacted from the shift of
          elements, as well as how far an element has moved. For instance, in my
          popup ad example, it would consider when the user clicks the cross,
          how much of the user's viewport is affected, along with what
          percentage of pixels did the cross and "Confirm" button move. As these
          both are percentages multiplied together, it generates a score between
          0 and 0.99. Google states that a score of anything over 25% is
          considered poor.
        </p>
        <br />
        <p>
          Although LCP, INP and CLS are considered the core metrics to measure
          Frontend performance, there are others, such as First Paint, which
          measures how long it takes the first pixels to render, as well as the
          DOMContentLoaded Event, which measures the point when a browser can
          initiate Client-side rendering. But these are considered to be not so
          crucial. Another useful tool is the Chrome extension Lighthouse, which
          I've mentioned in a{" "}
          <a
            href="/blog/gov-uk-how-to-build-a-government-website"
            target="_blank"
          >
            previous blog post{" "}
          </a>
          . It essentially measures all of the metrics I've mentioned, along
          with others, and even gives recommendations on how to improve your
          performance score.
        </p>
        <br />
        <p>
          However, one thing Apple users are probably screaming about at this
          point, is what about other browsers such as Safari? Google Web Vitals
          are metrics Google use to rank the performance of web pages and
          determine their SEO-ranking. As a result, the metrics are
          automatically viewable on Chrome browsers. Though you won't find the
          same layout on other browsers, as these are Google-defined metrics.
          Nevertheless, Safari does have its own dev-tools for performance
          insights and you can also install extensions such as{" "}
          <a
            href="https://apps.apple.com/de/app/vita-web-vitals-for-safari/id1593529295"
            target="_blank"
          >
            Vita{" "}
          </a>
          , to measure specific metrics. Failing that, I would just say,
          download Chrome and stop moaning.
        </p>
        <br />
        <p>
          And so, that is how you measure your Web app performance. Of course a
          poor performance according to these Web Vital metrics, does not mean
          you should destroy you website with fire. You might actually find a
          lot of websites, particularly large ones, often do not have optimal
          metrics. Nevertheless, it is still something to aim for and provides a
          way to optimise you performance in order to reap the rewards on the
          Search Engine Results Page.
        </p>
      </div>
    ),
    question: false,
    date: "15/07/2024",
  },
  {
    id: 11,
    title: "How Culture Shapes Website Design",
    path: "how-culture-shapes-website-design",
    links: [],
    images: ["/assets/blogimages/culture.jpg"],
    imageAlt: ["Bic camera_screenshot"],
    imageCaption: [
      "A screenshot of the japanese ecommerce website, Bic Camera",
    ],
    article: (
      <div>
        <p>
          When designing a website, the developer or business owner will have a
          target audience in mind and structure their website accordingly.
          However, as this business grows and starts to branch out into
          different markets, they may start to serve different clientele. The
          target audience may be the same, but their culture will likely differ
          due to the fact they reside in a different country.
        </p>
        <br />
        <p>
          With this in mind, I started to think whether websites across the
          world truly differ in their design. And with this thought I decided to
          investigate, until I had to claw myself desperately out of this rabbit
          hole, as the topic is as deep as the Mariana Trench.
        </p>
        <br />
        <p>
          So this is by no means a comprehensive list and I have left out entire
          continents for the interest of brevity. There is still a lot more to
          explore but I wanted to give just a flavour to those not aware of how
          different cultures interpret good website design.
        </p>
        <br />
        <h2> Europe versus USA </h2>
        <p>
          Rather than dissect European and American websites seperately, I felt
          it would be more interesting to compare them. Also, as you'll see
          frequently in this article, I will often generalise whole continents
          because I frankly don't have the capacity to examine each country,
          despite the fact they all have their own unique traits. Therefore, I
          am already committing a mortal sin by referring to certain websites as
          "European", even though in my own mind, I'm not sure how such a
          distinction exists, due to its multitude of countries, languages and
          culture. But I digress.
        </p>
        <br />
        <p>
          Firstly, perhaps as English is often the lingua franca of not just
          American websites but also many European ones, there are a lot of
          similarities between the two. For example, in terms of its website
          copy, both cultures may utilize more directness in their calls to
          action and, particularly in the case of ecommerce websites, be
          optimised towards conversions. This often means fewer clicks to a
          conversion such as the one-click purchase feature you see in Amazon.
          In addition there is a strong social media integration to strengthen
          engagement as well as customer service. Yet here is where the
          similarities start to dwindle.
        </p>
        <br />
        <p>
          According to Seattle-based web design agency Visualwebz, websites
          produced in the USA have a stronger focus on personalisation, to{" "}
          <a
            href="https://seattlewebsitedesign.medium.com/the-differences-between-website-design-in-the-usa-and-in-europe-f7096bb44b79"
            target="_blank"
          >
            {" "}
            reinforce individualism{" "}
          </a>
          . If you think of powerhouses such as Amazon or Expedia, they offer
          the user various ways to refine or personalise their search via
          numerous filters. Visualwebz continues that UK websites on the other
          hand tend to utilise a more simplistic approach, which actually backs
          up what I wrote about in an earlier blog post about the{" "}
          <a
            href="/blog/gov-uk-how-to-build-a-government-website"
            target="_blank"
          >
            {" "}
            UK's government website{" "}
          </a>
          . French websites, apparently, tend to employ larger media assets to
          garner attention, one example being{" "}
          <a href="https://www.ysl.com" target="__blank">
            {" "}
            the fashion brand Saint Laurent
          </a>
          , and Scandinavian websites are hyper focused on simplicity and
          practicability. Perhaps this is no evident than from the furniture
          store{" "}
          <a href="https://www.nordicnest.se/" target="_blank">
            Nordic Nest{" "}
          </a>
          .
        </p>
        <br />
        <p>
          But website design becomes more interesting when we look elsewhere in
          the world.
        </p>
        <br />
        <h2>Africa</h2>
        <p>
          Similar to discussing European websites, to write about website trends
          in Africa is again a gross generalisation. The cultural and linguistic
          diversity in even just parts of this continent are mind-blowing, and
          in interest of writing just a few short paragraphs about it, rather
          than an entire thesis, I will have to oversimplify. Nevertheless, as
          Africa is one of the largest continents, most of which is vast and
          sparsely populated, in many communities its internet speed is not the
          fastest compared to the rest of the world (but to be honest, is
          probably faster than what you get in Berlin). As a result, one of the
          main challenges is developing a website that can load seemlessly on a
          slow internet connection. It is for this reason that you see a heavy
          use of{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
            target="_blank"
          >
            {" "}
            Progressive Web Apps{" "}
          </a>{" "}
          or PWAs.{" "}
        </p>
        <br />
        <p>
          PWAs initialise image compression and run on minimal code in order to
          reduce potential lag on its initial load. They can also store assets
          such as text and images locally on the user's device, so that the app
          can run even when offline. Some examples of this are the Kenya news
          website{" "}
          <a href="https://mpasho.co.ke/" target="_blank">
            Mpasho
          </a>{" "}
          or the ecommerce pan-African Jumia, specifically the{" "}
          <a href="https://www.jumia.com.ng/" target="_blank">
            {" "}
            Nigerian domain{" "}
          </a>
          . Interestingly, both of these websites show an abundance of image
          assets and if anything, minimal text usage.
        </p>
        <br />
        <h2> Middle East </h2>
        <p>
          {" "}
          For middle-eastern countries, I will be focusing on websites designed
          for arabic users. Therefore, the first distinction of these websites
          would be obvious that they would follow a right-to-left structure,
          contrary to the West's left-to-right reading style. And this
          difference has all the influence on the structure of the website.
        </p>
        <br />
        <p>
          For example, when you open a popup window, the familiar cross icon to
          close it is on the top-left as oppose to the top-right. This also goes
          for button placement for accepting cookies and of course where the
          text is aligned (default aligned to the right as opposed to the left
          side). You will see this with{" "}
          <a href="https://shahid.mbc.net/ar" target="_blank">
            Shahid{" "}
          </a>
          , a Saudi Arabian streaming service, as well as with{" "}
          <a href="https://www.shafaq.com/ar" target="_blank">
            Shafaq
          </a>
          , an Iraqi news website.{" "}
        </p>
        <br />
        <p>
          Although such an experience may be jarring for someone like me, it's
          most likely more familiar to an arabic user than a western website.
        </p>
        <br />
        <h2> Asia </h2>
        <p>
          Like every continent mentioned here, Asia itself could constitute its
          own article. For example,{" "}
          <a
            href="https://insync.media/learning/worldly-web-design"
            target="_blank"
          >
            {" "}
            according to web design agency InSync{" "}
          </a>
          , in general: chinese websites love using bright colours and imagery,
          Japanese web designers favour animations, and Indian websites tend to
          make use of illustrations for information sharing. One trait they all
          share however, the agency explains, is that web designers in Asia keep
          spacing between elements to a minimal, as opposed to their European or
          American counterparts.
        </p>
        <br />
        <p>
          Japanese website design itself can get quite interesting. For
          instance, due to its culture of "Anshin", which refers to the
          reassurance of no surprises in the user experience,{" "}
          <a href="https://www.youtube.com/watch?v=vi8pyS076a8" target="_blank">
            Japanese websites tend to show as much information on their websites
            as possible{" "}
          </a>
          . One reason for this is that Japanese users feel more reassured when
          they have all the product details at hand before making a decision.
          This is evident with ecommerce websites such as{" "}
          <a href="https://www.rakuten.co.jp/" target="_blank">
            Raktuen{" "}
          </a>{" "}
          and{" "}
          <a href="https://www.biccamera.com/bc/main/" target="_blank">
            Bic camera{" "}
          </a>
          . Interestingly, such a focus would usually be discouraged for
          American or European websites, so as not to overload the user.
        </p>
        <br />
        <hr />
        <br />
        <p>
          In order to showcase examples, I have completely rammed this article
          with links. But to add just one more and completely penalise this
          article's SEO ranking,{" "}
          <a
            href="https://www.embacy.io/stories/web-design-in-different-countries"
            target="_blank"
          >
            {" "}
            here you can see a nice collage of websites across the world{" "}
          </a>
          .
        </p>
        <br />
        <p>
          In summary I have barely scratched the surface when it comes to how
          culture can influence website design, but I hope the examples I gave
          offered at least a slither of inspiration. It's easy to forget that
          what you may consider normal for a website structure, may be deemed by
          others to be unusual if not disorientating.
        </p>
      </div>
    ),
    question: false,
    date: "22/07/2024",
  },
  {
    id: 12,
    title: "The Importance of Testing",
    path: "the-importance-of-testing",
    links: [],
    images: ["/assets/blogimages/crash.jpg"],
    imageAlt: ["Crowdstrike crash"],
    imageCaption: [
      "The error screen users, who were affected by the Crowdstrike crash, would receive.\nSource: https://www.thestack.technology/crowdstrike-outage-blue-screen-of-death/",
    ],
    article: (
      <div>
        <p>Testing in general is considered a core pillar of best practices.</p>
        <br />
        <p>
          Whether it's involved in production lines to test the strength of
          material, screening movie previews to a test audience or running
          pre-production code, the value of testing in all disciplines has a
          common benefit. Its purpose is to identify every possible fault before
          the product is finalised.
        </p>
        <br />
        <p>
          This way, it minimises the potential of something going wrong when the
          product is live, prioritising the prevention of the worst case
          scenario. By doing this, it will not only save the company a lot of
          money but also in some cases potential lawsuits and the reputational
          damage that can come with it.
        </p>
        <br />
        <p>
          But does every company employ a testing-philosophy? Unfortunately not.
          You need to look just at the Titan submersible implosion last year,
          which was the result of little testing and not listening to the
          experts. And recently, you can also argue that the Crowdstrike
          disaster,{" "}
          <a href="https://www.youtube.com/watch?v=H9RSeDUdkCA" target="_blank">
            {" "}
            which caused roughly 8.5 million Microsoft devices around the world
            to crash
          </a>
          , occurred due to poor testing. So why do some companies avoid it?
        </p>
        <br />
        <p>
          Ultimately, testing requires more time and extends the production
          timeline, which means it cost more money. Also at first when you have
          tested a product, the financial benefits seem non-existent if not even
          counterproductive. Companies often look for short-term gains in
          profitability and when inspecting their finances, it would seem that
          cutting the testing process would save them a tonne of money and their
          return would skyrocket. What they don't realise however is that an
          untested product can cause them not only to drop in profits but even
          to become bankrupt. Unfortunately, the person making these decisions
          aren't often involved in the production itself, meaning that they can
          be ignorant of how valuable testing is. It is unfortunate as well that
          if a company does not test its product and something go wrong when it
          is live, upper management will blame the production team, when it is
          really their fault for refusing to finance the testing process.
          However, in the context of coding, how do you test your product?
        </p>
        <br />
        <p>
          There are{" "}
          <a
            href="https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing"
            target="_blank"
          >
            quite a handful of tests you can implement{" "}
          </a>
          , but generally it's considered that the three main ones are: Unit
          Testing, Integration Testing and End-to-End Testing.
        </p>
        <br />
        <h2>Unit Testing</h2>
        <p>
          This is the most low level testing you can implement. Its purpose is
          to test specific methods or functions. Of course you'll have different
          frameworks for different coding languages but I like to use
          <a href="https://jestjs.io/" target="_blank">
            {" "}
            Jest for JavaScript Unit Testing{" "}
          </a>
          . You can run it in a simple .js file or download modified npm
          packages if you wanted to, say, run it within a React app.
        </p>
        <br />
        <h2>Integration Testing</h2>
        <p>
          This tests the interaction between different components and is
          considered the middle-stage of testing - inbetween Unit and End-to-End
          testing. Initially, it ensures that the frontend can communicate
          effectively with the backend, for tasks such as data-fetching from the
          API to the UI, while it can also examine the response times of such
          methods. Its greatest value is testing features that won't break when
          pushed to production. Jest can also be used in this regard for
          JavaScript apps.
        </p>
        <br />
        <h2>End-to-End Testing</h2>
        <p>
          For me this is the most interesting type of testing and actually quite
          mindblowing (then again, I'm easily impressed). Its purpose is to
          mimic the behaviour of a user by completing tasks such as logging into
          a webpage, filling out and submitting a form and even making online
          payments. I'm a fan of the{" "}
          <a href="https://www.cypress.io/" target="_blank">
            {" "}
            Cypress framework{" "}
          </a>{" "}
          for end-to-end testing. Again for JavaScript, you also have relevant
          npm packages to run on your desired framework. It probably sounds sad
          but it is quite fun just writing these tests and watching the tool do
          its work.
        </p>
        <br />
        <p>
          Although what are the best approaches to implementing this type of
          testing?
        </p>
        <br />
        <p>
          According to the{" "}
          <a
            href="https://circleci.com/blog/test-driven-development-tdd/"
            target="_blank"
          >
            {" "}
            pillars of Test Driven Development{" "}
          </a>{" "}
          , essentially you start by writing the test to fail. For example, when
          unit testing a function that always returns a string value, you can
          first write a test to always expect an integer - and thus, the test
          will fail. This essentially sets the baseline and confirms that the
          testing framework is set up correctly.
        </p>
        <br />
        <p>
          Then once you have written enough failing tests, you can be more
          adventurous. This time you write just enough code to pass the test, so
          in the same example, you can write a test for the function to always
          expect a string value - to which, the test will pass. Obviously these
          are just basic examples but it's good to start small. Through this
          method, if your tests fail, it is a lot easier to pinpoint where it
          went wrong as oppose to using a much more convoluted test. The latter
          would have more potential outcomes and thus, if it fails, it is harder
          to know at first where it went wrong.
        </p>
        <br />
        <p>
          Pass this stage, when satisfied you have written enough fail-safes,
          you can then refactor the code to make it as efficient as possible,
          and to ensure it abides by the linting and design rules of the
          codebase. For instance, if your function runs on 10 lines of code, can
          it run on 5 lines instead and also pass the aforementioned tests.
        </p>
        <br />
        <p>You then repeat this process for every feature.</p>
        <br />
        <p>
          From the offset, this sounds like a long process and it is more
          understandable why some companies may discourage such practices.
          Nevertheless, by working towards this methodology you have potentially
          inadvertedly fixed numerous bugs that can occur after the code is
          pushed to production. In addition testing should have a more catch-all
          focus so that it can be executed for future functions and features.
          For example, it's common to integrate it into your Continous
          Integration/Continous Delivery workflow, particularly for open-source
          projects, so that before a developer submits a Pull Request (PR), they
          are required to run the provided tests. This provides a further level
          of protection before the PR is inspected in a code review.
        </p>
        <br />
        <p>
          Testing in coding, like in other practices, is essential for producing
          a quality assured product. Though it extends the production timeline,
          it also saves an insurmountable amount of time developers would have
          to spend in order to fix the bugs that were not otherwise caught in
          the pre-production phase.
        </p>
      </div>
    ),
    question: false,
    date: "29/07/2024",
  },
  {
    id: 13,
    title: "Finding A Job in Tech: A Modern Day Dante's Inferno",
    path: "finding-a-job-in-tech-a-modern-day-dante-inferno",
    links: [],
    images: ["/assets/blogimages/dante.jpg"],
    imageAlt: ["Screenshot of job application"],
    imageCaption: [
      "One of the Junior Developer jobs advertised on LinkedIn which is actually an unpaid internship. Note it requires SaSS and API integration experience. The tone of the position says it all.",
    ],
    article: (
      <div>
        <p>
          It's no secret that the job market in tech is in turmoil at the
          moment.{" "}
        </p>
        <br />
        <p>
          Last week I received a rejection from a company for a developer job in
          Berlin. They told me that they had to shift through more than 500
          applications. We've all had to face rejections in our job search, but
          when you hear that a company shifted through more than 500
          applications for a local job role, it makes you wonder how deep the
          problem lies.
        </p>
        <br />
        <p>
          When you're applying for a job locally, it can be difficult to know
          whether the competitive environment you are competing against is
          localised, or more a global phenomenon. However, it's clear that this
          is not a Berlin issue. For example, software company Cambium
          Applicable Innovation, based in southern Israel,{" "}
          <a
            href="https://www.calcalistech.com/ctechnews/article/o4b1x3bqu"
            target="_blank"
          >
            {" "}
            advertised an entry-level job role for 72 hours and received over
            700 applications{" "}
          </a>
          . So why are there so many applicants?
        </p>
        <br />
        <p>
          It can be broken down into two: a surplus of candidates and lack of
          available jobs.
        </p>
        <br />
        <p>
          One obvious reason for the surplus of candidates is the success of
          coding bootcamps. The concept for coding bootcamps started around 2011
          in response to the growing demand for software developers, and
          longevity of obtaining a Computer Science degree. However, in recent
          years coding bootcamps have exploded in popularity due to the
          increased demand of developers during the Covid pandemic. As it
          stands, according to Forbes,{" "}
          <a
            href="https://www.forbes.com/advisor/education/bootcamps/coding-bootcamp-statistics/"
            target="_blank"
          >
            {" "}
            the coding bootcamp market is projected to grow to almost one
            billion dollars by 2030{" "}
          </a>
          .
        </p>
        <br />
        <p>
          It's hard not to see the attraction of bootcamps. They promise an
          exciting career change into an industry known for its high salaries
          within a space of just a few months. It's no wonder then that,
          reportedly, in the USA alone{" "}
          <a
            href="https://www.bestcolleges.com/news/rise-and-fall-of-coding-bootcamps/"
            target="_blank"
          >
            {" "}
            60,000 students graduated from coding bootcamps in 2023{" "}
          </a>
          . But if jobs are plentiful, why are these same students struggling in
          the job market? The fact is, the job market isn't what it used to be.
        </p>
        <br />
        <p>
          It's really no secret that there have been tech layoffs recently.
          According to Tech Target, between 2022 and 2024:{" "}
          <a
            href="https://www.techtarget.com/whatis/feature/Tech-sector-layoffs-explained-What-you-need-to-know"
            target="_blank"
          >
            there have been more than 500,000 tech layoffs worldwide{" "}
          </a>
          , which is a colosal figure. One reason for this is the overhiring
          practices of companies during the pandemic. As they saw an increase in
          online users during Covid, it led to a greater demand in online
          services. With this greater demand, came more feature request and thus
          a higher demand for developers.
        </p>
        <br />
        <p>
          However, now that we are no longer under Covid restrictions, the
          demand has fallen sharply and with it, the revenue. Thus, those same
          jobs that were needed during Covid became redundant.
        </p>
        <br />
        <p>
          {" "}
          Of course another more popular reason is the rise of AI, but this is
          more of a headline grabber than the actual truth. Despite what the
          tech-illiterate CEOs will say, an AI app cannot replace a developer,{" "}
          <a href="/blog/when-not-to-use-ai" target="_blank">
            {" "}
            as I've said in another article{" "}
          </a>
          . Also, according to Bloomberg, tech giants such as Amazon and
          Microsoft are failing to show investors the{" "}
          <a
            href="https://www.bloomberg.com/news/articles/2024-08-02/big-tech-fails-to-convince-wall-street-that-ai-is-paying-off?embedded-checkout=true"
            target="_blank"
          >
            {" "}
            profitability of AI{" "}
          </a>
          . Nevertheless, what perplexed me after I finished a coding bootcamp,
          was its repeated claim of the vast treasure of junior tech jobs, as
          when I entered this landscape I felt completely fooled.
        </p>
        <br />
        <p>
          A common theme with junior jobs that applies to all disciplines is
          that you need experience to get experience. It was something I knew a
          long time ago when I was a graduate. At that time I didn't realise
          that getting a master degree in history was seen by companies as
          useful as spelling my own name - which a lot of companies get wrong by
          the way but I never complain. In fact currently around{" "}
          <a href="https://www.youtube.com/watch?v=HWXmfrXNwqw" target="_blank">
            {" "}
            63% of all entry jobs require 3 years of experience
          </a>
          . A junior job is very much a doublethink of being experienced enough
          to be inexperienced. But companies have their reasons.
        </p>
        <br />
        <p>
          For instance, it ultimately comes down to trust and whether they can
          view you as a loyal employee. Of course you can take measures to ease
          their anxiety such as working on your own projects, contributing to
          open source or volunteering at an organisation (all of which I do).
          But, as youtuber Dev Mentor Dave says,{" "}
          <a href="https://www.youtube.com/watch?v=z5ynawkrCos" target="_blank">
            {" "}
            they want to also make sure that you won't leave the company within
            one year of joining{" "}
          </a>
          . It's therefore easier to trust a candidate who already has a few
          years tech experience at a company, as they have both shown loyalty
          and ability to code responsibly.
        </p>
        <br />
        <p>
          There is also the trending use of 'ghost jobs'. 'Ghost jobs' are job
          positions published by a company in which they have no interest in
          filling. This could be either because they already have an internal
          candidate in mind, or if they simply just want to be seen as by
          investors to be a growing company with endless opportunities. It's
          also a possibility that there isn't even an open position and they're
          just waiting for their unicorn candidate, who possesses knowledge of
          an{" "}
          <a
            href="/blog/learn-a-new-skill-or-strengthen-my-current-one"
            target="_blank"
          >
            infinite number of coding languages{" "}
          </a>
          .
        </p>
        <br />
        <p>
          Yet this isn't the only reason why a candidate might be rejected and
          to be frank, it becomes a lot more impersonal and robotic.
        </p>
        <br />
        <p>
          The rise of Applicant Tracking Software (ATS) is the main reason why
          an applicant doesn't even reach the first interview. ATS is an
          automated tool that can scan multiple CVs and rank them according to
          the company's preferences. These preferences can range from desired
          skills and experience to location and even more questionable
          preferences, such as personality type. It seems like an impersonal
          approach to processing CVs, however when you read at the start of this
          article that some positions received more than 500 applications, how
          else can a team filter through such a large volume of potential
          candidates.
        </p>
        <br />
        <p>
          Even so, it completely detaches the human experience of applying for a
          job which was so previously prevalent.
        </p>
        <br />
        <p>
          There's been a lot of doom and gloom in this article but don't be
          afraid. I think it's better to validate an applicant's feelings that
          the job market is indeed in turmoil, rather than gaslight them that
          there are hundreds of jobs and they just need to work harder.
        </p>
        <br />
        <p>
          If you need motivation, watch this Primeagen's video (former Netflix
          engineer) where he{" "}
          <a
            href="https://www.youtube.com/watch?v=7d-W26mqajg&t=560s"
            target="_blank"
          >
            {" "}
            discusses the plight of Junior Engineers and how there is hope{" "}
          </a>
          .
        </p>
        <br />
      </div>
    ),
    question: false,
    date: "05/08/2024",
  },
  {
    id: 14,
    title: "Should I Create a Website, Mobile App or Software?",
    path: "should-i-create-a-website-mobile-app-or-software",
    links: [],
    images: ["/assets/blogimages/mygame.jpg"],
    imageAlt: ["Screenshot of my game executable file"],
    imageCaption: ["The executable file of a game I made with Java code"],
    article: (
      <div>
        <p>
          One of the benefits of coding is that it is so vast and you can create
          anything. For example, you can develope: your own international store
          on a website; a mobile app that utilizes the user's camera and
          geo-location; or even you own desktop computer game. The only limit is
          your imagination - and the technical limits of your equipment
          (especially for computer games).
        </p>
        <br />
        <p>
          Whatever you create, they should all serve a purpose: solving a
          problem. Empathy programming is a phrase you hear often, and refers to
          understanding the perspective of the end-user. You think of their
          needs and requirements, and link it to how you can help them. A user
          may think they need all kinds of products for their business idea, but
          really only one type would suffice.
        </p>
        <br />
        <p>
          For instance, a user who requires an ecommerce website may also want a
          mobile app, whereby their users can also order on the store. In
          addition they may also want a system install in their physical stores,
          which enables customers to order from the device that utilises a
          software you coded (such as in McDonalds). Yet, particularly when
          starting out, only one type of product will do the trick.
        </p>
        <br />
        <p>
          But what are the main differences between developing a website, mobile
          app and software?
        </p>
        <br />
        <h2> Website </h2>
        <p>
          One constant with a website or web app is that they always communicate
          with a server. This is via the Hypertext Transfer Protocol (HTTP) and
          is the basis of how data is communicated on the World Wide Web. The
          method is achieved through a Request-Response cycle and is fundamental
          to understand if you want to create your own website. Your browser,
          also known as the client, sends a HTTP request to the server. The
          server processes this request and sends a response with the requested
          data. However, when a user types in your URL, the Request-Response
          cycle is just one part of the process.
        </p>
        <br />
        <p>
          First the browser searches the Domain Name System (DNS) for the given
          address and finds its associated Internet Protocol (IP) address. This
          is why one of the first things you need to establish when making a
          website is your domain name, and acquiring this property on, for
          example,{" "}
          <a href="https://www.godaddy.com" target="_blank">
            GoDaddy{" "}
          </a>
          . After the IP address has been found, the browser then establishes a
          Transmission Control Protocol (TCP) connection with the web server.{" "}
        </p>
        <br />
        <p>
          Once this is established the Request-Response cycle begins and in the
          case of just typing in a web URL, the user is sending a GET request to
          the server to retrieve all the information needed to read the webpage.
          It's through this TCP connection that the server is able to send back
          this information in a response. Once retrieved, the browser renders
          this information via one of multiple methods such as Client-side
          rendering, which prioritises the loading of JavaScript, or Server-side
          rendering, which prioritises the loading of HTML content. Every
          request is independent of the next, therefore neither the server nor
          the client stores this information by default. This is why caching can
          be important as you can save copies of web page resources to improve
          the performance of loading times. Also what is now commonplace is HTTP
          Secure protocols (i.e. https). With this, the data sent via the TCP
          connection is encrypted making is harder to breach.
        </p>
        <br />
        <p>
          From the beginning this can all sound complicated but its important to
          understand when you connect the Frontend and Backend of a web app. The
          majority of the latter are Fullstack because you need a functional
          Backend to have usable features, and you need a flowing Frontend to
          have a user-friendly user interface. And on the topic of user
          interfaces, you also need to consider responsiveness.
        </p>
        <br />
        <p>
          One problem you won't necessarily have with mobile apps or software,
          is how your application will look on different screen sizes. For
          websites however, users will view it on a plethora of viewports
          ranging from super narrow 300px mobile devices, to gigantic 4000px
          projector screens. Luckily, you have a lot of tools at your disposal
          as well as various approaches. For example, you have{" "}
          <a
            href="https://theandreflores.medium.com/mobile-first-vs-desktop-first-design-8eeb3875cced"
            target="_blank"
          >
            mobile-first and desktop-first design{" "}
          </a>
          . This essentially asks whether you to prioritise mobile or desktop
          screen sizes. Generally, the former is preferred. For a website, you
          also have to consider browser compatibility.
        </p>
        <br />
        <p>
          When new features are released on either JavaScript, HTML or CSS (the
          three amigos of website development), not all browsers are able to
          render them as they use different engines. Google Chrome uses the V8
          engine to render website assets, whereas Safari uses Webkit. A key
          tool that you can use however is{" "}
          <a href="https://caniuse.com/" target="_blank">
            {" "}
            caniuse{" "}
          </a>
          . This is able to tell you whether the latest CSS scroll animation,
          for example, is compatible with Chrome, Safari, Firefox and other
          browsers.
        </p>
        <br />
        <p>
          Finally, hosting your website is also an unavoidable step you must
          follow in website development. When you have created your web app, you
          will have a list of HTML, CSS and JavaScript files along with
          potential media assets such as images, videos or audio tracks that
          will have to be stored somewhere. This is where hosting comes in, as
          it provides a virtual storage space for this files, where the server
          can access them and send to the client. Although you can theoretically
          self-host, it's not recommended unless you have the resources and the
          technical knowledge to achieve it. You need either a physical or
          virtual private server (VPS) to begin with, along with the technical
          expertise of server administration and networking.
        </p>
        <br />
        <p>
          It's much more common to use a third-party hosting service and there
          are loads to choose from. For example, if you use a JavaScript
          framework, its common to deploy these apps on Netlify, Vercel or
          Render (though more common for Backend apps). There are also an
          endless supply of Amazon Web Services, each with their own traits and
          specialty. In fact AWS services have such a penetration in the hosting
          space that the aforementioned tools Netlify, Vercel and Render, use
          AWS themselves. They are really just AWS services in disguise.
        </p>
        <br />
        <p>
          There's a lot to unpack with web development and I could go on,
          showing my natural bias towards it, but how does developing a mobile
          app differ?
        </p>
        <br />
        <h2> Mobile App </h2>
        <p>
          The difference between developing a mobile and web app is{" "}
          <a
            href="/blog/difference-between-web-and-mobile-app-development"
            target="_blank"
          >
            {" "}
            something I have already spoken about{" "}
          </a>
          . Nevertheless, how it differs in reference to the HTTP Protocol,
          responsiveness and browser compatibility is not something I have
          discussed.
        </p>
        <br />
        <p>
          As I've said before, a mobile app is essentially a piece of software
          that exists on your mobile device. Depending on how this app
          functions, it does not inherently need the internet to function. For
          instance, you can have (and easily make if you are so inclined) a
          calculator app on your phone which functions perfectly well without
          WiFi. This of course is in direct contrast to a web app, and, although
          you can make provisions for certain web pages to function on offline
          mode with caching and cookies, there's only so far you can go and do
          without a TCP connection.
        </p>
        <br />
        <p>
          Moreover, as a mobile app either exists within the Android or iOS
          universe, you only have to worry about one rendering engine, as
          opposed to many. This also means when you publish your app, you
          essentially only have the choice of two services: Google Play and the
          Apple Store. They in this instance take on the role of hosting your
          files. Though this of course is not without its challenges, as both
          publishers have strict guidelines and hurdles to jump over, so you'll
          spend a lot of time making sure your app complies with their
          regulation.
        </p>
        <br />
        <p>
          One secret weapon of mobile apps however, are its native features. For
          instance, most smartphones have a camera, microphone, GPS,
          accelerometer, gyroscope, magnetometer, proximity sensor, touchscreen
          and more. With this hardware, you can create all sorts of things which
          is a lot more difficult with a computer or laptop.
        </p>
        <br />
        <p>
          Although how does developing software in general offer a different
          experience?
        </p>
        <br />
        <h2> Software </h2>
        <p>
          Despite the variety and different approaches to developing a website
          or mobile app, nothing is more vague nor vast than software
          development.
        </p>
        <br />
        <p>
          Software comes in all different shape and sizes, from something small
          such as a digital stopwatch to something huge such as an Air Traffic
          Control system. Unlike with websites, which will always consist of the
          same languages (give or take PHP), or mobile apps which consist either
          of Kotlin or Swift code at its core, software can vary largely from
          the language it's written in. To name a few, you have: operating
          systems such as Windows and Linux which use C and C++; Large Language
          Models (LLM), which are the core of AI software, written in Python;
          extremely powerful gaming engines, such as Unity written in C#; supply
          chain management software with Java; and many more. With these
          examples, it really gives the impression that anything is possible. Or
          in other words, to every problem, there's a software that can solve
          it.
        </p>
        <br />
        <p>
          As software is an application that needs to be installed, its files
          generally exist within its own directory. Although this means there's
          no need either for a hosting service, you still need to find some sort
          of means of turning you code into what's called an executable or .exe
          for short. The latter may sound familiar as when you start a software
          application on your device, you often look for the .exe file. Of
          course whatever operating system you are using, you want to make sure
          that you packaged your code into a compatible or OS-native executable,
          otherwise it won't run.
        </p>
        <br />
        <p>
          One example of this is{" "}
          <a href="https://launch4j.sourceforge.net/" target="_blank">
            {" "}
            Launch4J{" "}
          </a>{" "}
          for Java applications. This tool essentially bundles the Java Runtime
          Environment (JRE) into a Windows native .exe file. On launch the Java
          Virtual Machine is initiated and loads the main Java class, and
          executes the application. In essence you could view this as deploying
          your code, as you would for a website app.
        </p>
        <br />
        <p>
          Perhaps one of the main differences between a say desktop software
          application and website is the styling. Whereas on a website you can
          easily play with CSS, as the stylesheet is linked in the HTML file,
          this isn't an option on a, say, C++ application. For the latter you
          employ different approaches such as utilising the Windows API
          functions, if you app exists on this OS, or you can employ external UI
          frameworks or Widgets to modify your user interface.
        </p>
        <br />
        <hr />
        <br />
        <p>
          Ultimately, developing a website, mobile app or piece of software will
          offer very different and unique developer experiences.
        </p>
        <br />
        <p>
          On the other hand, whatever you learn from one project can always be
          transferred to the next project. This is because the core principles
          of coding and solving a problem will always remain the same.
        </p>
      </div>
    ),
    question: false,
    date: "12/08/2024",
  },
  {
    id: 15,
    title: "What are the signs of an interesting project?",
    path: "what-are-the-signs-of-an-interesting-project",
    links: [],
    images: ["/assets/blogimages/book.jpg"],
    imageAlt: ["Screenshot of 3D on my book club website"],
    imageCaption: [
      "The 3D feature I implemented on my own Fullstack web application",
    ],
    article: (
      <div>
        <p>
          Like many professions, developers need a portfolio to showcase their
          work. Word of mouth alone isn't enough to convince either clients or
          companies that you're the right fit for the job.
        </p>
        <br />
        <p>
          And so, in this portfolio you'd expect at least a handful of projects
          that show the applied knowledge of their skills. Of course this will
          vary depending of their discipline.
        </p>
        <br />
        <p>
          For example, a backend developer may showcase projects pertaining to
          RESTful APIs, database management or microservices that scale an app.
          Therefore you'd expect to see the use of Node.js or Python for
          server-side code, SQL or NoSQL for database queries, or AWS for
          serverless applications. In addition these projects could also be
          logic for a software application or even a video game. In such a case
          you may see the practical use of Java, C++ or C#.
        </p>
        <br />
        <p>
          In essence the backend developer is trying to show not only that they
          have a firm grasp on data structures and algorithms, but that they can
          use them for practical use cases.{" "}
        </p>
        <br />
        <p>
          On the other hand, a frontend developer would present very different
          applications. As frontend is more considered with the client-side and
          user interfaces, there's a heightened importance on responsiveness and
          the user experience.
        </p>
        <br />
        <p>
          For instance, it could be the design, layout and user journey of an
          ecommerce website, the presentation of a mobile app or interactivity
          of a social media project. Frontend developers usually make use of the
          three amigos of web development: HTML, CSS and JavaScript. These
          present different challenges to say creating an API with Python.
        </p>
        <br />
        <p>
          A frontend developer wants to show that they can make consistent,
          responsive user interfaces, which conform to the accessibility
          standards.
        </p>
        <br />
        <p>
          However, you may notice that either a purely backend project or purely
          frontend project, is not much without the other. You can't have an
          ecommerce website, for example, without a backend. Nor can you have a
          database that is accessible to the average user without a user
          interface. Therefore, if you have a Fullstack project, you show the
          power of both. So in my ecommerce example, an ecommerce website
          whereby the developer has made both the user interface with, say,
          React; as well as a backend that can process clients' request and
          store the product information in a database with say Express; would be
          an example of a Fullstack project.
        </p>
        <br />
        <p>
          Showing a Fullstack project is a lot more impressive as it shows that
          you can navigate with both Frontend and Backend technology, along with
          the ability to work directly with databases. But what makes a great
          Fullstack project?
        </p>
        <br />
        <p>
          First off, let's talk about which projects not to do. And speak of the
          devil. A common project you may see amongst Fullstack Developers is a
          to-do app. It's a common one developers do at coding bootcamps as an
          introduction to JavaScript, Node.js and how to link the Frontend to
          the Backend. Problem is, because so many developers make one, it's not
          particularly interesting to see one in a portfolio. This also means
          that the challenges it presents are usually generic. Thus, not that
          impressive nor that interesting to conquer. Lastly, to-do apps these
          days are so well-developed that it is incredibly hard to create a
          better one. Just look at{" "}
          <a href="https://www.notion.so/" target="_blank">
            {" "}
            Notion{" "}
          </a>
          .
        </p>
        <br />
        <p>
          So the idea is to make a project that will catch the reader's eye and
          make them want to investigate. A good way to start is essentially to
          solve a problem, which really is the{" "}
          <a
            href="/blog/should-i-create-a-website-mobile-app-or-software"
            target="_blank"
          >
            {" "}
            main purpose of coding{" "}
          </a>
          . Ask around your friend groups or family and see if they have a
          blocker or issue with a task that may inconvenience them. Of course
          this can be anything and that's the point, as it's likely they'll have
          a unique problem which requires a unique solution - and thus your
          project is born. Often people need reminders, which can be translated
          into apps with timers, or struggle to manage large quantities of data,
          which can be stored in a database. I could give examples but that kind
          of defeats the purpose of creating a one of a kind project. I can
          however tell you what I did.
        </p>
        <br />
        <p>
          As a keen book reader, or I'll be honest, book snob, I am member of a
          book club. We'd read a book, score it, record it and choose the next.
          Originally, these scores only existed on a Whatsapp group and it was
          not long until it became incredibly difficult to figure out who scored
          what on a particular book. So then I noticed the problem and found the
          solution was to store the scores or data into a Mongo Database. I
          needed to create a server application to do this, so I made an Express
          app which could communicate with MongoDB. But then I wanted myself and
          the members to be able to directly submit their scores into this
          database, which meant creating a list of CRUD operations. The members
          of this book club aren't developers, therefore I needed to make a user
          interface, which I did with the Next framework, and voila - our
          Fullstack, book club website was born.{" "}
        </p>
        <br />
        <p>
          We now use this website for our book scores and every member has their
          own account login and profile page.
        </p>
        <br />
        <p>
          Yet I didn't create the website and abandon it, as you shouldn't do
          either with your projects. This is why it's also good to create a
          project that either you or someone else will use regularly. It should
          be an ongoing work-in-progress that needs updating, refactoring and
          new features. I achieve this by asking the book club members to always
          let me know if they have any ideas for new features. By doing this, it
          challenges me to think on my feet. If I implemented just my own ideas,
          there is a certain bias as I may only work on features I know,
          subconsciously, I can implement. For instance, one of the book club
          members wanted to know if it was possible for me to display the books
          as 3D models.{" "}
          <a href="/blog/3d-websites-threejs-and-blender" target="_blank">
            {" "}
            Although I worked with 3D projects before{" "}
          </a>
          , doing it within a Fullstack application that ran on Next, definitely
          felt like a big challenge. Not only would I need to integrate it
          already with the existing codebase, but I would need to consider how I
          could implement it within the Next infrastructure. Suffice it to say,{" "}
          <a
            href="https://bookclub-brothers.vercel.app/books/library/3d"
            target="_blank"
          >
            {" "}
            I was able to create it{" "}
          </a>{" "}
          and it was a great feeling, mostly because I was able to bring another
          person's vision to life.
        </p>
        <br />
        <p>
          But my example is just one of numerous ways you can create a Fullstack
          application and the sky is the limit. By making it idiosyncratic and
          unique to your situation, it will be naturally interesting and
          non-generic.
        </p>
        <br />
        <p>
          Essentially, it should be something that reignites your passion in
          coding.{" "}
          <a
            href="/blog/finding-a-job-in-tech-a-modern-day-dante-inferno"
            target="_blank"
          >
            {" "}
            The job market is especially turbulent at the moment{" "}
          </a>{" "}
          and rejections can kill your ambition.
        </p>
        <br />
        <p>
          Therefore, having a project that you love working on will be your
          guiding light.
        </p>
      </div>
    ),
    question: false,
    date: "19/08/2024",
  },
  {
    id: 16,
    title: "How to handle rejections?",
    path: "how-to-handle-rejections",
    links: [],
    images: ["/assets/blogimages/firstname.jpg"],
    imageAlt: ["Screenshot of a job rejection"],
    imageCaption: [
      "A genuine rejection I got from a company after a series of interviews and technical exercises. Not sure who this {{first_name} candidate is, but it's not how you spell my name",
    ],
    article: (
      <div>
        <p>
          To state the obvious, rejections are a part of life. If you have
          seldom experienced them, you probably are not very daring.
        </p>
        <br />
        <p>
          As I mentioned in a previous post,{" "}
          <a
            href="/blog/finding-a-job-in-tech-a-modern-day-dante-inferno"
            target="_blank"
          >
            getting a job in the tech industry is a nightmare at the moment{" "}
          </a>
          . So much so, that candidates don't just get a rejection here or
          there, but multiple rejections in a week if not a day. And to rub salt
          in the wound, most companies outright refuse to give feedback, leaving
          the candidate to second-guess what they did wrong.
        </p>
        <br />
        <p>
          The rejection itself is most likely a template. In some cases I find
          these template rejections disrespectful, especially if you have
          undergone four or five stages of interviews. Or in other words have
          spent four to six weeks in the interview process only to be met with
          something written years ago. If they're incapable of changing your
          name, <a href="#">such as here</a>, it adds further insult to injury.
          Unfortunately, it is the case that there is no standard practice of
          interviewing. The company can do whatever they choose and they're not
          even obligated to reply to you. This is quite frustrating for the
          candidate, particularly if they are freelance, as time is money. There
          are of course websites such as{" "}
          <a href="https://www.glassdoor.com" target="_blank">
            Glassdoor
          </a>
          , which try to give the power back to the candidate, but this seems
          somewhat ineffective. For example, not all companies are registered on
          this platform and it's been known that some companies will force its
          employees, specifically HR, to write positive reviews.
        </p>
        <br />
        <p>
          So, if you are somewhat powerless in this nightmare system, what can
          you do about it?
        </p>
        <br />
        <p>
          When you get a rejection, its only power is how it affects you. If you
          for instance got an offer for your dream job and at the same time, got
          a rejection from another company; I'm willing to bet you couldn't care
          less. However, if you had sent out hundreds of applications, finally
          got an interview, got to the last stage and the interviewer says:
          "You've really impressed us, we'll probably make you an offer". Only
          for you to get that email: "Thank you for your time but it's a no".
          Your world may crumble beneath your feet and panic attacks become a
          part of your sleeping routine.
        </p>
        <br />
        <p>
          I noticed with myself that the response from a company could literally
          regulate my mood. I get invited to an interview, I'm on cloud nine; I
          get a rejection after the interview with no feedback and I want to
          bury myself underneath the Earth's core. So what can you do about it?
        </p>
        <br />
        <p>
          First of all, regardless of everything, do something that both you
          enjoy and involves other people every week. The idea is that you have
          something to take your mind off it, as, for example, with sport, you
          physically have to live in the moment to say receive a football, swing
          a squash racket or climb a wall. This allows your subconscious to work
          on anything that's troubling you and you may find you have a new
          perspective afterwards.
        </p>
        <br />
        <p>
          Second, work on a coding project you love. Many of us have coding
          projects we are really passionate about but may not have the time to
          work on. The worst thing about rejections is that it can kill your
          motivation to keep going. The best antidote to this is to return to
          your passion project and to just reignite that fire inside you. You
          may also find you'll have created some cool new features and then by
          your next interview, you'll have something to show off. Win win. It's
          also good to look at your older projects and remind yourself how far
          you've come. You may, for example, be able to code a function that you
          originally wrote in ten lines of code to five lines of code.
        </p>
        <br />
        <p>
          It is also good to ask for feedback but this has become a cliche at
          this point. As I alluded to earlier, many companies aren't interested
          in giving valuable feedback to rejected candidates, so it will often
          feel pointless. Nevertheless, despite the numerous companies unwilling
          to give me feedback, I had one or two that have been nice enough to
          provide me detailed feedback about my performance and it has proven to
          be incredibly valuable. This feedback made me a much better developer
          and I am eternally grateful for it. So always worth a shot.
        </p>
        <br />
        <p>
          In addition I would say before you have the initial interview or
          interviews, tell as few people as possible. This also goes without
          saying if you are currently employed (otherwise colleagues can gossip
          and you lose your job), but I say it mostly for your piece of mind. If
          you told ten people you have an interview and you received a rejection
          from said interview, you now have ten people who will naturally ask
          how it went. You'll then have to relive that rejection ten times when
          you tell them. Of course if you got a rejection, you may find it
          lethargic to talk about it. But by not saying you had an interview in
          the first place, you have control over whether you want to talk about
          it or not. Otherwise they'll ask and it can get awkrawd if you don't
          want to talk about it.
        </p>
        <br />
        <p>
          It's also worth noting that companies themselves struggle to interview
          candidates to their satisfaction. There is no one size fits all but
          Theo, a former Senior Frontend Engineer at Twitch,{" "}
          <a href="https://www.youtube.com/watch?v=H2OjewTu_fY" target="_blank">
            {" "}
            gave some good suggestions
          </a>
          . To some companies it's whether you can solve{" "}
          <a href="https://leetcode.com/" target="_blank">
            Leetcode problems
          </a>
          , to others it's whether you can recite all the technical quirks of
          your chosen language, and to any others it may be a take home task
          with an unspecified time limit.
        </p>
        <br />
        <p>
          Ultimately, it's always important to know that a rejection has as much
          power as you give it, and it doesn't define who you are. It can
          sometimes be impossible to show your true strengths in an interview,
          particularly if your interviewer interrupts you as you speak, or mocks
          you for being too technical.
        </p>
        <br />
        <p>
          And at the end of the day, after a rejection you can only get a new
          job by sending a new application to another company. So at some point
          you will need to get back on that horse and try again. It's always
          good to reflect and think of what you will change next time in the
          interview process, but it is not something to dwell on.
        </p>
        <br />
        <p>
          Your mental wellbeing should be the number one priority, which only
          you can champion.
        </p>
        <br />
      </div>
    ),
    question: false,
    date: "26/08/2024",
  },
  {
    id: 17,
    title: "Cybersecurity Basics for Web Applications",
    path: "cybersecurity-basics-for-web-applications",
    links: [],
    images: ["/assets/blogimages/cyber.jpg"],
    imageAlt: ["Screenshot of the use of Content Security Policy"],
    imageCaption: [
      "A rudimentary example of using the Content Security Policy",
    ],
    article: (
      <div>
        <p>
          Cybersecurity is a huge topic which you can carve your own career
          from.
        </p>
        <br />
        <p>
          {" "}
          For example, many big companies have their own cybersecurity experts
          to protect against many forms of attacks, such as: phishing, malware,
          ransomware, Denial-of-Service (DoS) attacks and SQL injection.{" "}
        </p>
        <br />
        <p>
          {" "}
          Of course there are also social engineering attacks for which may
          render the cyber security expert helpless. For example, this relates
          to copying work passes posted publicly on LinkedIn, and pretending to be an employee to gain physical access into a company.{" "}
        </p>
        <br />
        <p>
          Therefore, there are numerous ways to breach the data security of a
          company. A good way of looking at it is that nothing is "unhackable"
          but you must do everything in your power to make it so. Although
          cybersecurity is its own discipline, there are a few things you can do
          or at least consider, to give your website at least a basic level of
          protection. But where do you start?
        </p>
        <br />
        <p>
          {" "}
          One helpful resource is the Open Worldwide Application Security
          Project (OWASP). It is an open source community that provides free
          resources in relation to cyber security. One of its main pages is the,{" "}
          <a
            href="https://owasp.org/www-project-top-10-client-side-security-risks/"
            target="_blank"
          >
            {" "}
            Top 10 Client-Side Security Risks{" "}
          </a>
          . It was published first in 2003 and is regularly updated, detailing
          the latest risks and how to protect against them.{" "}
        </p>
        <br />
        <p>
          {" "}
          A helpful level of protection is the Content Security Policy (CSP).
          This prevents data injection attacks and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
            target="_blank"
          >
            {" "}
            cross-site scripting (XSS){" "}
          </a>
          , by specifying which type of resources are allowed to be loaded on a
          web page. For example, with CSP you can prevent users from injecting
          their own script onto your webpage. Also, if you have given the appropriate endpoint, you can report a violation of the policy. Or in other words, when a user attempts to unleash a malicious script on your webpage, it blocks and reports it.
        </p>
        <br />
        <p>
          {" "}
          Cross-Origin Resource Sharing (CORS) is also a protective measure. This allows web browsers to make requests to a server on a different domain. The default behaviour of a web browser is the Same-Origin Policy, which prevents scripts from one domain accessing resources from another domain. Through this measure, it stops malicious scripts from stealing data or compromising user privacy. However, apps such as Single Page Applications (SPA) often have to send requests to a resource on a different domain, such as an external API. In this case the browser sends a CORS request which contains the origin of the request and web domain. If the server hosting this API is not setup to receive CORS request, access will be denied.
        </p>
        <br />
        <p>
          Another commonly known security measure is the Hyper Text Transfer
          Protocol Secure or HTTPS. Originally, data was sent between the client
          and the server on just the Hyper Text Transfer Protocol (HTTP). This
          data would be sent as just plain text and it was vulnerable to
          interception. In addition there is no authentication meaning that
          there is no verification of the website or server. If you were on such
          a website, for instance, and paid for a product, hackers could
          intercept the request when you made a payment and have access to your
          credit card details.
        </p>
        <br />
        <p>
          {" "}
          On the other hand, HTTPS provides a much more secure data transfer.
          In the same example if you paid for a product on a HTTPS website, that
          same data in the request would be encrypted via Secure Sockets
          Layer/Transport Layer Security. Furthermore, the website's identity is
          verified with a digital certificate, authenticating that it's trusted
          and not a malicious clone.
        </p>
        <br />
        <p>
          Another common practice to protect your data is by using environmental
          variables or env values. These would sit somewhere in your backend holding
          the keys to your database system. Without these values, you won't have access to add, edit, remove or read data from the database. Despite it being common practice to hide these values, there are cases whereby{" "}
          <a href="https://www.youtube.com/watch?v=lkbV8oP-F44" target="_blank">
            companies have accidentally exposed these env values{" "}
          </a>
          . As mentioned before, this can be catastrophic if published publicly
          on GitHub due to{" "}
          <a href="/blog/the-ethics-of-scraper-bots" target="_blank">
            the prevalence of malicious scraper bots{" "}
          </a>
          . When you have access to these keys, you can manipulate the database
          however you see fit.
        </p>
        <br />
        <p>
          There are of course many other forms of protections, but the list is
          indeed endless.
        </p>
        <br />
        <p>
          You can work to implement as much protective measures as you can, but
          at some point, you might find that it is impacting your productivity
          on developing the actual application. In some ways it makes sense to
          prioritise its security particularly if your app contains sensitive
          data. On the other hand if your application is more say 'playful' and
          has no sensitive data, you'd be forgiven for not making cybersecurity
          a priority. In addition you can always pay for a software or access to
          a secure API, if you are concerned with handling sensitive data. For
          instance, a lot of small companies that handle financial transactions
          use the{" "}
          <a href="https://docs.stripe.com/api" target="_blank">
            Stripe API{" "}
          </a>
          . Not only does this save time, it also places the burden of handling
          this type of data on another (trusted) party.
        </p>
        <br />
        <p>
          The pure vastness of cybersecurity is why some companies dedicate even
          whole departments to it, but everything is contextual and it doesn't
          mean you should do the same.{" "}
        </p>
        <br />
        <p>
          Just ensure you have implemented the absolute essentials - unless
          Cybersecurity interests you, in which case, dive in and make an
          impenetrable fortress.{" "}
        </p>
        <br />
      </div>
    ),
    question: false,
    date: "02/09/2024",
  },
];

entriesArray.reverse();

export default entriesArray;
