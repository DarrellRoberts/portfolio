import Image from "next/image";
import styles from "../../app/blog/[path]/post.module.css";

type EntryData = {
    id: number,
    title: string,
    path: string,
    links?: string[],
    images: string[],
    imageAlt: string[],
    imageCaption: string[],
    article: any,
    question: boolean,
    date: string
  }

const entriesArray: EntryData[] = [
  {
    id: 1,
    title: "Should Web Developers Learn Wordpress?",
    path: "should-web-developers-learn-wordpress",
    links: [],
    images: ["/assets/blogimages/wordpressScreenshot.jpg"],
    imageAlt: ["screenshot_of_wordpress_website"],
    imageCaption: ["A screenshot from my WordPress starter website. I only changed the text, everything else was pre-coded"],
    article:
    ( 
    <div>
    <p>As someone who loves building websites from scratch, I originally turned my nose up at <a href="https://wordpress.com/" target="_blank">WordPress</a>. Unlike a huge chunk of developers, I absolutely love working with styles/CSS (warts and all) and figuring out how to turn a design into a webpage. Using a Content Management System (CMS) like WordPress or Squarespace never appealed to me, and further, I actually am not a fan of UI libraries, such as Bootstrap. I want the freedom to customise, morph and modify everything like some mad scientist in a derelict castle. Styling within a CMS or UI library however, is more restrictive, meaning you have to somewhat pace your creativity.</p>  
    <br/>
    <p>However, there was one thing I completely (and foolishly) overlooked. If I create websites from scratch for clients, how will they maintain it? Furthermore, if they want to quickly, say, move a button or change the background-colour, how can they do that if there's no user-friendly interface?</p>
    <br/>    
    <p>It was only then that the penny dropped as to why so many freelance Web Developers use WordPress. So if you can't beat them, join them. And if you can't join them, pretend you're one of them until they forget that you aren't one of them (I say as a career-changer).</p>
    <br/>    
    <p>So, either conventionally or unconventionally, I downloaded <a href="https://localwp.com/" target="_blank">Local WP</a> - a WordPress developement tool. By doing this rather than using WordPress itself, I've actually automated even more tasks, such as layouts, plugin management and writing code. Besides, I wanted to explore the more expedient option in order to see its benefits in all its glory. And In summary, I can't deny it is a huge time-saver.</p>
    <br/>    
    <p>The layout is already done with in-built responsiveness, so the website retains its style on desktop, tablet and mobile devices. The backend boilerplate is already done via PHP and includes a MySQL database. Not only that, but it runs on an nginx web server, meaning that it can be easily scaled - without the Amazon-Web-Service wolf knocking on your door. To achieve all of this from scratch, it would take a lot of time, effort and probably a lot of swearing (language-dependent). And like anything in business, when you save time, you save money.</p>
    <br/>    
    <p>It all makes sense now. Why when you go on freelance websites such as, <a href="https://www.fiverr.com/" target="_blank">Fiverr</a> or <a href="https://www.upwork.com/" target="_blank">Upwork</a>, you will see a wealth of WordPress website developers; and lack of anything different.</p>
    <br/>    
    <p>Nevertheless, I can't help but feel like the WordPress experience so far is quite uninspiring. Moving elements on a page through its UI feels very restrictive, compared to just coding it with CSS. When you perform the latter, it is like a playground and you can do whatever you like (such as CSS animations, probably my favorite CSS feature). When you code from scratch, you are faced with numerous challenges. And with every challenge, there is that sweet dopamine reward of solving it - something that I'm sure you are robbed of with WordPress.</p>
    <br/>    
    <p>Moreover, you start to develop a sixth sense for when a website is created through WordPress or any CMS for that matter. If the recognisable icon in the tab hasn't been replaced and isn't a dead giveaway, there's a general vibe to it and cookie-cutter structure. You open the landing page and say, 'ah, here we go again'.</p>
    <br/>
    <p>I always like to say, my favourite websites are those that feel like they are breathing. Classic examples of this are 3D websites - something I'll discuss in next week's post. With CMS websites, it feels to me quite clinical and unimaginative.</p>
    <br/>
    <p>There is nothing wrong with this of course. Most startups or entrepreneur aren't interested in investing in a unique website; they just want something live asap so that they can start making sales.</p>
    <br/>
    <p>But does this mean I'll abandon this short-lived WordPress journey? No. It seems to be where the demand is quite frankly. Also it presents the opportunity to learn PHP. That passion though for crafting websites from scratch will always be with me. And who knows, maybe further down the line I'll have a Damascus conversion and preach that no sane Web Developer should avoid the divine power of WordPress. At this point though, it doesn't seem likely.</p>
    <br/>
    <p>So for now, I'll remain a heretic.</p>
    </div>
    ),
    question: true,
    date: "13/05/2024"
  },
  {    
    id: 2,
    title: "3D Websites, Three.js and Blender",
    path: "3d-websites-threejs-and-blender",
    links: [],
    images: ["/assets/sharkexplorer.jpg"],
    imageAlt: ["screenshot_of_my_threejs_project"],
    imageCaption: ["A screenshot from my own Three.js project: Shark Explorer"],
    article:
    ( 
      <div>
      <p>Don't ask me how it happened, but one day I suddenly became interested in 3D websites. I've seen a lot of them and my jaw has been dislocated ever since from how many times it keeps dropping.</p>  
      <br/>
      <p>If you are unaware of what I mean by a 3D website, I strongly recommend you check out <a href="https://threejs.org/" target="_blank">Three.js</a>. If you browse the library, you'll find various use cases for such websites. For instance, you have immersive experiences for music festivals, vibrant storytelling for children and even choosing your seat for a piano concerto inside a virtual concert hall. Probably one of the most famous examples of Three.js is the portfolio website of developer <a href="https://bruno-simon.com/" target="_blank">Bruno Simon </a>. I've spent too long playing with it myself.</p>
      <br/>    
      <p>So you may be wondering, what exactly is Three.js?</p>
      <br/>    
      <p>Three.js is a JavaScript library that allows developers to create 3D experiences within the browser. It is in itself a skill to be learned as there are important concepts to master such as the Web Graphic Library (WebGL) API. This makes the initial 3D rendering possible. In fact you can create a 3D website with WebGL alone, but Three.js makes the process a tad bit easier. In addition you can have a moveable 'camera' per se, which can move on either the x-, y- or z-axis, and assumes the role of the user perspective. This creates the illusion that you're immersed in the virtual space. Texture mapping also comes into play and is also a skill in itself - just to add even more complexity - along with lighting and animation (if you want any movement from your primitives/shapes). </p>
      <br/>    
      <p>Bring all of this together and you've got yourself a 3D web app. Like everything though, it's not without its caveats.</p>
      <br/>    
      <p>Rendering a 3D model with a moveable camera on a freaking webpage is gonna be costly in terms of memory. When you create such a project, you're are doing it under the presumption that every user will have an operating system that will be able to run it. If you, however, view any of those Three.js projects on an old, poor performing laptop, you may have inadvertently created a furnace hotter than the surface of the sun.</p>
      <br/>    
      <p>Still, they are undeniably cool.</p>
      <br/>    
      <p>When I discovered Three.js and <a href="https://shark-explorer.netlify.app/" target="_blank">made my own 3D web experience</a>, I kept toying with the idea of exploring it further. I knew as soon as I would, I would fall down a rabbit hole so deep, that the only way out was to go forwards. Well, I fell down said rabbit hole and upon such research, a tool kept being mentioned: Blender.</p>
      <br/>
      <p>Blender is a desktop tool used primarily for 3D modelling. It's often mentioned by Three.js developers, because you can import 3D models you created from Blender into your JavaScript project. Because of this, I read multiple times that if you take the time to learn Blender, Three.js becomes easier to use and thus aids the developer through the 3D website journey. I was hesistant for a while as I didn't want to learn yet another tool, but my curiosity got the better of me and I decided to give it a try. Reading other people's experiences, I decided to start with a tutorial, as the Blender tool is incredibly overwhelming on first view.</p>
      <br/>
      <p>It was only then that I found the Blender Guru. He has more than two decades of experience with the tool and posted in particular <a href="https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=1" target="_blank">a series of videos on how to 3D model donuts for complete beginners </a>. As a complete beginner, I can say with confidence that this tutorial is probably the best I've ever experienced. It's well-paced, descriptive and the instructor has a great sense of humour. Moreover, the guy has his own discord for users to troubleshoot their problems for other users to answer, so there are options if you get stuck.</p>
      <br/>
      <p>I can't deny though that creating even just the desired donut with icing is undeniably challenging. Using the tool can be frustrating and you find yourself consistently asking: "what the hell am I doing with my life?" Despite all of this, and although I'm not quite finished with it myself, I can say that the process so far has been really rewarding.</p>
      <br/>
      <div className={styles.imageCon2}>
        <Image 
        src="/assets/blogimages/donut2.png" 
        alt="donut_blender_screenshot" 
        style={{ filter: "grayscale(0)" }}
        width="850" 
        height="850" />
      </div>
      <p>Above is my own creation, thanks to this Blender tutorial. It's two donuts in a marble bowl on some woodchips. I call it, "Two donuts in a Marble Bowl on some Woodchips". One thing I noticed is that you need a powerful operating system to consistently render Blender models. My laptop was just about good enough, but to be able to render more complex designs, I'd need both a more powerful graphics card and a more powerful CPU. </p> 
      <br/>
      <p>Also worth noting, the Blender instructor consistently reminds you: the tutorial itself isn't just to teach you how to make a bunch of donuts in Blender; it's a way to introduce beginners to key Blender concepts, which you can takeaway and build stuff yourself. Looking back, there is a lot to take in and I doubt I'll be a master anytime soon. Nevertheless, I feel like I have what I need to start experimenting myself with the tool.</p>
      <br/>
      <p>So where would this path take you if you were to pursue it? In my case it would improve my ability to develope more complicated 3D websites, and, as a pure coincidence, would also teach me 3D modelling skills.</p>
      <br/>
      <p>However, it is no surprise that 3D Web Developers aren't really in high demand. It's quite a niche area, and it would be costly for a company to invest in such a design. Still, they are not unicorn positions and I've seen one or two positions here or there. The main problem is that said positions favour seniors who have more than 5 years' experience crafting 3D websites. And in all fairness it's not really a position where you want a Junior having complete control, as a lot can go wrong (even more so than with a regular website).</p>
      <br />
      <p>Nevertheless, considering the aforementioned rarity of such experience, any applicant who fits this profile is, in fact, truly a unicorn. In other words, they would be paid handsomely.</p>
      <br />
      <p>So give me five years and then we'll see if I make it happen.</p>
      <br />
      <p>But for now, it's purely a hobby project.</p>
      </div>
      ),
      question: false,
      date: "20/05/2024"
  },
  {    
    id: 3,
    title: "Learn a New Skill or Strengthen my Current One?",
    path: "learn-a-new-skill-or-strengthen-my-current-one",
    links: [],
    images: ["/assets/blogimages/jobRequirements.jpg"],
    imageAlt: ["screenshot_fullstack_dev_job"],
    imageCaption: ["A genuine job ad I saw for a Fullstack Developer position. Note how many frameworks and backend languages it expects the candidate to know"],
    article:
    ( 
      <div>
      <p>
        We hear it all the time. The biggest mistake Junior Developers make, is to try to learn everything at once. Specifically, don't learn a new coding language, before becoming an expert in your own. But these days companies are becoming more demanding of skills, so is this really realistic?
      </p>
      <br/>
      <p>
        I couldn't have been more guilty of this myself. And to be honest, I may still be guilty. After I finished my Fullstack bootcamp, I was like the hyperactive, disobedient labrador at the crufts competition. I saw so many distractions, so many avenues, so many paths; I wanted to try it all. For instance, I said to myself I should learn PHP, considering that it makes up 70% of the web ( <a href="./should-web-developers-learn-wordpress" target="_blank">though I later realised this is partly because of WordPress </a>); but then I said, I should also learn a low-level language like C so that I can get a firm grasp on all languages; and if I'm learning C, why not also C++ or C# considering they're used in video games. And so on, and so on and so forth.
      </p>
      <br/>
      <p>
        Unfortunately, and luckily, I came to my senses and never started with either of them. However, I am learning Java but taking it slow. Also you'll see from my last article that <a href="./3d-websites-threejs-and-blender" target="_blank">I want to get more invested in Three.js and 3D modelling </a>. I have also dabbled a bit with mobile apps using React Native, just because I wanted to see how easy it was as a React Developer to transition to (conclusion: not super easy but not super hard). In addition, I have also become acquainted with other JavaScript frameworks that weren't React, such as Vue and then Nuxt (and of course Next - which is what this website is running on). But I think that's it...but can't say for sure.
      </p>
      <br/>
      <p>
        Nevertheless, you look at what is required for some developer roles and it tells a different story.
      </p>
      <br/>
      <p>
        Look, for example, <a href="#">at the screenshot at the top of the article </a>. This is a genuine job ad for a Fullstack Developer. It's unclear if this is for a junior, mid or senior role. However, even for a senior role, it seems very unrealistic.
      </p>
      <br/>
      <p>
        The majority of senior developers would have chosen a path in which they can narrow their expertise and become true experts of their field, whether it's a Frontend React/JavaScript Developer or Backend .NET/C# Developer. However, for this role, the applicant needs to have knowledge of three frontend frameworks: React, jQuery and Angular. They also need to know four backend languages: C#, Java, Python and Node.js. Be familiar with two different databases: MongoDB and MySQL, along with the Apache web server and have UI/UX expertise with the Figma design tool. To top it all off, they need to have experience in medical devices, whatever that means - maybe they want you to design a defibrillator software with a super colourful user interface, complete with animations.
      </p>
      <br/>
      <p>
        Admittedly, you are also told that the majority of job ads are really wishlists. In other words, they don't expect the candidate to possess all of the requirements. However, given the hellish environment of finding a job in the tech world at the moment (something I may write about in a future post, as a lot can be said, and I feel a lot of applicants are in much need of validation - which is severely lacking), companies can become extremely fussy.
      </p>
      <br/>
      <p>
        There is also the unspoken belief amongst some companies that AI will takeover developers' jobs. In reality <a href="https://medium.com/the-business-of-ai/ai-wont-replace-programmers-eddf52c1839b" target="_blank">this won't happen </a> and if a company replaced its developers with an AI tool, be sure to watch their immediate downfall with some popcorn.
      </p>
      <br/>
      <p>
        So what should you do? Put simply: a little from column A, a little from column B.
      </p>
      <br/>
      <p>
        One thing I noticed from learning another skill is that it can teach you some things about the other. Learning Java actually taught me a lot about JavaScript - a language I am more than familiar with - and exposed me more to the concept of compiling and Object Oriented Programming (OOP). I learnt that with JavaScript I took a lot for granted, such as in-built array methods, which you have to import if using Java; and one reason why JavaScript itself is used for websites, is because it doesn't need to compile, unlike Java. Finally, as an OOP language, Java has a lot of similarities with C# as well as some similarities with PHP and C++. So it's kinda like learning four for the price of one.
      </p>
      <br/>
      <p>
        This gave me, therefore, a more general understanding of coding languages in general. And at the same time, I know Java itself is a whole universe of learning, and it's far better to take time to understand its fundamentals than to speed-run it and move on to the next language.
      </p>
      <br/>
      <p>
        So like with everything, learning is effort and time-consuming. There are no shortcuts, despite what the snake-oil salespeople say.
      </p>
      <br/>
      <p>
        And if you see such a job ad, which requires a whole volume of skills, pay it no notice. It's a sign of unrealistic expectations which may extend when you join their company. Later you'd find yourself trapped in a hellish nightmare amongst colleagues who have no idea what they are doing.
      </p>
      <br/>
      <p>
        Besides, it's more than likely that if you did have all the skills they demanded, they would probably reject your application, for being overqualified.
      </p>
      <br/>
      <p>
        Something that genuinely happened to me.
      </p>
      <br/>
      <p>
        Hence, keep learning but at your own pace. Not for the unrealistic expectations of companies, but for your own personal development.
      </p>
      <br/>
      </div>
      ),
      question: false,
      date: "27/05/2024"
  },
  {    
    id: 4,
    title: "gov.uk - How to Build a Government Website",
    path: "gov-uk-how-to-build-a-government-website",
    links: [],
    images: ["/assets/blogimages/govuk.jpg"],
    imageAlt: ["screenshot_govuk"],
    imageCaption: ["The gov.uk website has an impressive performance score for a website that receives millions of users per month"],
    article:
    ( 
      <div>
      <p>
      First off, let it be said, as a British person, I am no great patriot of the United Kingdom. If I was, I wouldn't be living in Berlin, Germany. 
      </p>
      <br/>
      <p>
      Even so, credit where credit is due, and <a href="https://www.gov.uk/" target="_blank">gov.uk </a> - the UK government's website - is a masterclass of how to digitalise government services. And living in Germany, a country constantly grappling with digitalisation, the contrast is stark.
      </p>
      <br/>
      <p>
      As you can see above, its homepage scores an all-round 100 Lighthouse performance. If you are unaware of what Lighthouse is, it is a <a href="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk" target="_blank">google chrome extension </a> that measures the performance of websites, based on: performance, accessibility, best practices and SEO.  I've only seen such a score on one other website, one that is quite "cough" familiar.
      </p>
      <br/>
      <div className={styles.imageCon2}>
        <Image 
        src="/assets/blogimages/darrellperformance.jpg" 
        alt="screenshot_darrellroberts" 
        style={{ filter: "grayscale(0)" }}
        width="850" 
        height="850" />
      </div>
      <p>
      Just for clarity, a lower Lighthouse score is not the be all or end all, and is unrealistic for websites that require a lot of JavaScript. You can imagine as well, for websites that are scaled to withstand millions of visitors and need to fulfill multiple functions, it becomes harder to maintain a high performance score, as other issues such as bugs take higher priority.
      </p>
      <br/>
      <p>
      All the more impressive then that gov.uk can achieve this score, considering that it is the A-Z for millions of Brits needing to, for instance: renew their passport, do their tax return or, currently, register to vote in the general election.
      </p>
      <br/>
      <p>
      What surprised me most of all, is that it has its own User Interface framework, named simply: <a href="https://design-system.service.gov.uk/" target="_blank">gov.uk Frontend</a>. I wasn't sure why at first, as is it encouraging others to make imitation UK government websites? But then I snapped out of my own stupidity and realised it's to lay the foundation for subsidiaries of the government, such as local services. Within this framework it points to a JavaScript templating language:<a href="https://mozilla.github.io/nunjucks/" target="_blank">Nunjucks</a>.
      </p>
      <br/>
      <p>
      The benefit of using a templating language is that, due to its effectiveness in reducing code duplication and boilerplate, it can lead to strong website performance and faster response times. It also allows for greater reusability, particularly in the case of internationlisation and localisation (i18n), which mostly concerns translating a website into another language. Sections of the gov.uk website are then (unsurprisingly) available is more than 60 languages, along with English and Welsh. 
      </p>
      <br/>
      <p>
      Moreover, in its own style guide it makes a point of <a href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/" target="_blank">accessibility </a>. Within this, it cites the four pillars of Web accessibility: Perceivable, Operable, Understandable and Robust; the principles of universal design; and how it measures and tests its own accessibility. To cite its own statistic, 1 in 5 people in the UK have a disability, therefore this is an important thing to consider when designing a website. From my own experience, too many times have I come across a website that breaks the Web Content Accessibility Guidelines (WCAG), by using, for example, the wrong font colour on a conflicting background. The fact that it not only recognises this, but makes a point of routinely testing its own accessibility is admirable.   
      </p>
      <br/>
      <p>
      For me, gov.uk is the perfect example of how to digitalise essential government services. And it does this with a very no nonsense approach which is accessible to anyone.
      </p>
      <br/>
      <p>
      So, like I said, I'm no fan of the UK but it's this love of digitalisation that sometimes makes me homesick.
      </p>
      <br/>
      </div>
      ),
      question: false,
      date: "03/06/2024"
  }
]

entriesArray.reverse();

export default entriesArray;