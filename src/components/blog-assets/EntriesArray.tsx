import { getDate } from "./DateFormatter";

type EntryData = {
    id: number,
    title: string,
    links?: string[],
    images: string[],
    imageAlt: string[],
    imageCaption: string[],
    article: any,
    date: string
  }

  const date = getDate();

const entriesArray: EntryData[] = [
  {
    id: 1,
    title: "Should Web Developers learn WordPress?",
    links: ["https://www.youtube.com/watch?v=2Q0mWH6g8Fo"],
    images: ["/assets/blogimages/wordpressScreenshot.jpg"],
    imageAlt: ["screenshot_of_wordpress_website"],
    imageCaption: ["A screenshot from my WordPress starter website. I only changed the text, everything else was pre-coded"],
    article:
    ( 
    <div>
    <p>As someone who loves building websites from scratch, I originally turned my nose up at <a href="https://wordpress.com/" target="_blank">WordPress</a>. Unlike a huge chunk of developers, I absolutely love working with styles/CSS (warts and all) and figuring out how to turn a design into a webpage. Using a Content Management System (CMS) like WordPress or Squarespace never appealed to me, and further, I actually am not a fan of UI libraries, such as Bootstrap. I want the freedom to customise, morph and modify everything like some mad scientist in a derelict castle.</p>  
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
    date: date
  },
]

entriesArray.reverse();

export default entriesArray;