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
    imageAlt: ["screenshot_of_my_threejs_website"],
    imageCaption: ["A screenshot from my Three.js Shark Explorer project."],
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
  }
]

entriesArray.reverse();

export default entriesArray;