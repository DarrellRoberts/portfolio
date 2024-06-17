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
    imageCaption: ["gov.uk has an impressive performance score for a website that receives millions of users per month"],
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
      As you can see above, its homepage achieves an all-round 100 Lighthouse score. If you are unaware of what Lighthouse is, it is a <a href="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk" target="_blank">google chrome extension </a> that measures the performance of websites, based on: performance, accessibility, best practices and SEO. I've only seen this score on one other website, one that is quite "cough" familiar.
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
      What surprised me most of all, is that it has its own User Interface framework, named simply: <a href="https://design-system.service.gov.uk/" target="_blank">gov.uk Frontend</a>. I'm not sure why to be honest this is in the public domain, and you can even access it through a GitHub repository, which includes instructions on how to get started. You can even contribute towards it as if it's an open-source project. Are they trying to encourage users to create their own imitation UK government website? But I digress. Within this framework it points to a JavaScript templating language:<a href="https://mozilla.github.io/nunjucks/" target="_blank"> Nunjucks</a>.
      </p>
      <br/>
      <p>
      The benefit of using a templating language is that, due to its effectiveness in reducing code duplication and boilerplate, it can lead to strong website performance and faster response times. Another benefit is that it allows for greater reusability, particularly in the case of internationlisation and localisation (i18n), which mostly concerns translating a website into another language. It'll come as no surprise then that sections of the gov.uk website are available in more than 60 languages, along with English and Welsh. 
      </p>
      <br/>
      <p>
      Moreover, in its own style guide it makes a point of <a href="https://design-system.service.gov.uk/accessibility/accessibility-strategy/" target="_blank">accessibility </a>. Within this, it cites the four pillars of Web accessibility: Perceivable, Operable, Understandable and Robust; the principles of universal design; and how it measures and tests its own accessibility. To cite its own statistic, 1 in 5 people in the UK have a disability, therefore this is an important thing to consider when designing a website. From my own experience, too many times have I come across a website that breaks the Web Content Accessibility Guidelines (WCAG), by using, for example, the wrong font colour on a conflicting background. The fact that it not only recognises this, but makes a point of routinely testing its own accessibility, is admirable.   
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
  },
  {    
    id: 5,
    title: "Six Best Youtubers for self-taught or Junior Developers",
    path: "six-best-youtubers-for-self-taught-or-junior-developers",
    links: [],
    images: ["/assets/blogimages/youtubers.jpg"],
    imageAlt: ["youtubers_screenshot"],
    imageCaption: ["The six youtube channels from left to right: freecodecamp, Fireship, Theo, The Prime Time, Kevin Powell and Dev Mentor Dave"],
    article:
    ( 
      <div>
      <p>I won't lie. I've caught myself watching some of these youtubers late at night. Curiosity always got the better of me, and if I see a video on say a new CSS feature or updates on the latest coding drama, I can't help but watch it. </p>
      <br/>
      <p>It was not long after I entered the coding world that I became addicted to the following youtubers. They've aided me well so far in this journey and the thought had just occured to me that I should spread their recognition. If you are a self-taught developer, Youtube becomes your library. And if you are a Junior Developer unable to find a job, Youtube becomes your mentor.</p>
      <br/>
      <p> There is so much free information on the internet and it is a reminder that there really should be no paywalls on education.</p>
      <br/>
      <p> So in the spirit of learning, see below for some of the best coding youtubers I've come across, particularly for: tutorials, coding news, frontend, backend, CSS and just general advice.</p>
      <br/>

      <h2>Tutorials: freecodecamp</h2>
      <p> Freecodecamp isn't really much of a secret amongst developers. It is a pretty famous channel for coding tutorials, ranging from frontend and backend roadmaps, AI courses, data science and even mathematics. If you want to choose a more specific path, they also have tutorials for specifics languages, including (but not exclusive to ) C#, C++, Python and JavaScript.</p>
      <br/>
      <p>One important thing to note however, is that you get the most out of a tutorial by being active yourself. Otherwise you fall into the common trap of tutorial hell. This is where you just blindly follow the tutorial and when you finish, you start another one. Then when you are forced to apply your knowledge, you find that you can't recall anything.</p>
      <br/>
      <p>To avoid this, be sure to not only code along with the tutorial but to add your own flair to it and be sure to test your own ideas. For example, rather than waiting for  the next step of the tutorial, pause the video and guess yourself what you need to do. Furthermore, experiment with other options to make your own project unique. You'll find that you'll encounter your own errors, but with each error you solve yourself, you learn much more effectively, rather than being told how to solve it.</p>
      <br/>
      <p> Anyway one of my favourite roadmaps of freecodecamp is <a href="https://www.youtube.com/watch?v=6nz8GXjxiHg&t=2998s" target="_blank"> how to get a developer job </a>. Granted, after watching the video, you won't be guaranteed a job but its main message I found to be inspiring. That being: make sure that you are always learning, and by doing so, you are already on the right path. </p>
      <br/>

      <h2>Coding News and Quick Overviews: Fireship </h2>
      <p>Fireship is a great channel for keeping up with the latest coding news and gossip. Every few weeks or so, the channel releases what it calls 'Code Reports'. Together with the youtuber's very deadpan humour it makes for not only an informative watch but also an entertaining one.</p>
      <br/>
      <p>In addition Fireship seems to understand that everyone is in a rush and has a unique style to his videos. You may notice that he cuts out all the pointless chitchat and gets straight to the point. This is no more demonstrated by his 100 second videos, whereby he explains either a coding language, platform or tool in less than 100 seconds. It's done very skillfully and you can tell that he puts in a lot of effort into editing his videos to make this possible.</p>
      <br/>
      <p>It is for these reasons why I have found his channel invaluable for quick overviews of different approaches, such as <a href="https://www.youtube.com/watch?v=FQPlEnKav48&t=524s" target="_blank"> building the same web app in ten different languages </a>.</p>
      <br/>
      <h2> Frontend: Theo</h2>
      <p>Theo is a San Francisco-based former Twitch frontend Engineer. That alone should tell you he knows his stuff.</p>
      <br/>
      <p> If however you need more convincing, you'll find that from his video library he constantly engages with the current frontend discourse, and also speaks openly about his feelings towards Rust - a much beloved backend language. He is a strong advocate for TypeScript and using NextJS properly, to the point that he'll draw diagrams in his videos explaining how it works under the hood.</p>
      <br/>
      <p>Therefore, he'll spend time explaining the why and the how on top of giving his opinion.</p>
      <br/>
      <p>My favourite video of his is where he goes through a<a href="https://www.youtube.com/watch?v=uqII0AOW1NM" target="_blank"> Frontend interview with Dan Abramov </a>. Abramov is one of the engineers from the React core team. Hence it's really interesting and humbling to see how a true expert navigates these types of interviews.</p>
      <br/>

      <h2> Backend: The Prime Time</h2>
      <p>The Prime Time or Primeagen is quite an interesting character. If you are really struggling to get a job in tech and ever need motivation to keep going, his story will truly inspire you.</p>
      <br/>
      <p>In one video he is completely open about his past: he had a tough upbringing, failed at school and became consumed by his addictions. After multiple failed attempts at college, he decided once and for all to give it his absolute best, pushing himself to his limit where he would study every evening. It was only then that he found he succeeded and never looked back.</p>
      <br/>
      <p>He realised at that moment, although talent will get you far, hard work will win everytime. And therein lies his philosophy.</p>
      <br/>
      <p>Soon thereafter he graduated from college and got a career at Netflix as a Backend Engineer, probably one of the most sought after jobs in the tech industry. </p>
      <br/>
      <p> With such an insane backstory, Primeagen is a very devoted developer and preaches to others that you will only improve at coding if you put in the hours of hard work. In other words, there are no shortcuts. </p>
      <br/>
      <p>Although not his original channel, I found The Prime Time channel very helpful in terms of sharpening my coding knowledge. Within it are snippets from his live streams, where he engaged with other coding challenges and is very open when he makes mistakes.</p>
      <br/>
      <p> For instance, in this <a href="https://www.youtube.com/watch?v=flzlEmyxMs8&t=528s" target="_blank"> you don't know JavaScript </a> video, you follow his thought process which has improved my own perception of how JavaScript works under the hood.</p>
      <br/>

      <h2> CSS: Kevin Powell</h2>
      <p>Kevin Powell is everything CSS.</p>
      <br/>
      <p> Although he does dabble with other subject areas like HTML and JavaScript, CSS is his expertise. I often find myself watching his videos to either optimise my own CSS code, or find out any useful features I wasn't aware of.</p>
      <br/>
      <p>In particular he helped me in some cases reduce the need for long media queries, with properties such as clamp(). With it, it seems almost like magic the way your font size can grow or shrink depending on the viewport, without the need to specify either a maximum or minimum width media query.</p>
      <br/>
      <p> Kevin not only has his finger on the pulse for new CSS updates, but he also points out features which developers aren't even aware of.</p>
      <br/>
      <p> For example, he has a video on the <a href="https://www.youtube.com/watch?v=opHu7HvFM60&t=21s" target="_blank"> most common unused CSS features </a> which in itself seems endless and I still need to study it in detail.</p>
      <br/>

      <h2> General advice: Dev Mentor Dave</h2>
      <p>With the tech world in a whirlwind at the moment, whereby it is hell on earth being a Junior Developer in need of a job, Dave is on a mission.</p>
      <br/>
      <p>He wants to help Junior Developers around the world land their first job, one video at a time. Hence his name: Dev Mentor Dave.</p>
      <br/>
      <p>However, as this is a monumental responsibility for anyone, he is also very much grounded and realistic. He gives general advice for: job searching, what companies are looking for, how to increase your chances ect. At the same time, he admits that it is a hellish landscape and it just might not be possible for some people. For example, his main advice is that if you are thinking of changing careers, you should learn whilst you are still working because most companies at the moment just aren't interested in hiring Junior Developers.</p>
      <br/>
      <p>Despite this realistic yet daunting outcome, it doesn't mean that Dave is not trying his utmost best to help others. Along with his down-to-earth insights such as <a href="https://www.youtube.com/watch?v=qL-nEolj4ZM" target="_blank"> the struggle of finding a mentor </a>, he is also producing weekly livestreams for a group project he is leading. In this project he hopes  to give as many Junior Developers as possible the opportunity to learn about code reviews and open source contributions. He is always looking to spread the word for contributors so if you are interested, visit his channel for more details.</p>
      <br/>
      <hr></hr>
      <br/>
      <p>So those are the six youtubers I have found helpful in my own coding journey. I hope at the very least you can learn something from them as well.</p>
      </div>
      ),
      question: false,
      date: "10/06/2024"
  },
  {    
    id: 6,
    title: "When not to use AI",
    path: "when-not-to-use-ai",
    links: [],
    images: ["/assets/blogimages/chatgpt.jpg"],
    imageAlt: ["chatgpt_screenshot"],
    imageCaption: ["A screenshot from Virej's youtube video of gaslighting AI into 2 + 2 = 5"],
    article:
    ( 
      <div>
      <p>I'm sure I had a similar reaction to many when I first used ChatGPT. Amazement.</p>
      <br/>
      <p>All the possibilities flashed before my eyes. I thought you could use it to code anything, learn anything you wanted and it even gave me an idea of using it to create a virtual tandem parter <a href="https://www.tandem-gpt.com/" target="_blank">(before discovering someone beat me to it) </a>.</p>
      <br/>
      <p> It also gave me the feeling of redundancy. I thought, if this ChatGPT could code anything then surely the rumours are true: AI will take our jobs.</p>
      <br/>
      <p> Subsequently, I began using it for my own coding problems and soon developed horrible habits. For instance, if I wanted to create a function, rather than figuring out how to do it, I would just prompt the AI. For clarity, I did this more to see how they would approach the problem, rather than for it to code for me. Nevertheless, it wasn't a good thing to practice. The more I used it, however, the more I noticed its foibles.</p>
      <br/>
      <p> When I would use its suggestion, it often introduce new bugs into my codebase. This then became a new problem to solve. Solving this bug was not entirely straight forward either, as the AI may use a coding pattern or inbuilt function I was unaware of, meaning I had to spend time studying this when I could have exerted energy on just the initial task itself. </p>
      <br/>
      <p>I guess you could make the argument that I need to learn how to prompt properly, but even so, I would say why not just spend that same effort on solving the original problem? When you solve this problem yourself, you are thinking with you own working knowledge and by doing so, you can explain every step you took and why you did it. With an AI solution, your explanation usually consists of only, 'it works' but not understanding why it works. As a result, when it breaks you struggle to know how to fix it before feeding it again into the AI language model, digging yourself deeper. In addition, if you need to optimise the code, you most likely hit a brick wall, as how can you simplify something you never truly understood?</p>
      <br/>
      <p>Also I think the problem lies in not how you prompt the AI, but also when you use it. If you use AI for a subject or topic you are not too familiar with, it can be a dangerous thing, as you are unaware of when it makes a mistake. And it makes plenty. Furthermore, if you are somewhat disagreeable, you can gaslight it to say whatever you want. For example, when one user convinced it to <a href="https://www.youtube.com/watch?v=3wlvNfTNgB8" target="_blank"> believe 2 + 2 = 5 </a>. Or in other words, when a user became Big Brother from Nineteen Eighty-Four.</p>
      <br/>
      <p> If you are aware of the topic at hand, then you will probably notice whenever it makes a mistake or if something sounds implausible. For instance, I noticed myself when I would ask it for JavaScript solutions, it would sometimes for whatever reason omit essential keywords, such as "await" from asynchronous API calls. You correct it, receive an apology and then a part of you thinks: people say that AI will takeover coding jobs? Which I have said before, is a <a href="https://www.youtube.com/watch?v=XKkoVpupYdw" target="_target">long debunked myth used to generate clicks and buzz </a>, mostly by CEOs who don't have a clue and jump on the bandwagon.</p>
      <br/>
      <p>Despite this, AI can be good to give overviews. Much like Wikipedia, if prompted, it can give you a quick snapshot of any topic which is good if you're not sure whether to learn a new technology. Personally, I use <a href="https://gemini.google.com/app?hl=de" target="_blank">Google Gemini </a> because it often gives you its sources, similar to a university essay, so you can investigate it further, as well as fact check what it states. So, similar to how you would use Wikipedia, use it with a pinch of salt and don't treat it as gospel.</p>
      <br/>
      <p>AI language models are undoubtedly a powerful tool that can improve your workflow and save you time. But using it as a substitute for learning should set off alarm bells. To master a subject, you need to struggle, get stuck, become frustrated, only then to connect the dots and find the solution, progressing forward.</p>
      <br/>
      <p>To paraphrase the late president John F. Kennedy, all problems are made by humans, therefore can only be solved by humans.   
      </p>
      </div>
      ),
      question: false,
      date: "17/06/2024"
  }
]

entriesArray.reverse();

export default entriesArray;