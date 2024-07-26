
import Base from "@/components/Base"
import Container from "@/components/Container"
import Profile from "@/components/Profile"
import Header from "@/components/Header"
import Text from "@/components/Text"
import Tray from "@/components/Tray"
import Icon from "@/components/Icon"
import Collapsable from "@/components/Collapsable"
import InputField from "@/components/InputField"
import DynamicLogos from "@/components/DynamicLogos"
import Button from '@/components/Button'

import React, { useState, useEffect} from 'react';

import { FaGithub,FaFacebook,FaLinkedin,FaQuoteLeft, FaQuoteRight, FaRegDotCircle, FaPhone, FaEnvelope, FaPaperPlane, FaArrowRight, FaInbox  } from "react-icons/fa";


export default function Page() {

    const iconContents = new Map<String,any>([
        ['angular' , <p key={'angular'}>I've used the <span className=" text-blue-600">Angular Framework</span> for the development of a web-based LMS Project and an E-commerce mobile app built with Ionic.</p>],
        ['flutter' , <p key={'flutter'}>For rapid mobile development, I have used the <span className=" text-blue-600">Flutter Framework</span>, integrating machine-learning models, relational and non-relational databases.</p>],
        ['laravel' , <p key={'laravel'}>Full stack developer for a Statistical Performance Reporting System for OWWA-R5 using the <span className=" text-blue-600"> Laravel Framework </span>.</p>],
        ['next' , <p  key={'next'}>This portfolio was built with <span className=" text-blue-600">NextJS</span>.</p>],
        ['nodejs' , <p  key={'nodejs'}>I have used <span className=" text-blue-600">NodeJS</span> to implement server-side file handling, as well as web sockets for real-time communication between the end users.</p>],
        ['firebase' , <p  key={'firebase'}>I have used <span className="text-blue-600">Firebase</span> as a non-relational database and ready to use websocket for mobile application projects.</p>],
        ['aws' , <p  key={'aws'}>Migrated projects from a local server to the cloud with <span className="text-blue-600">Amazon Web Services</span>.</p>],
        ['gcloud' , <p  key={'gcloud'}>Deployed and hosted a project in <span className="text-blue-600">Google Cloud Platform</span>.</p>],
        ['tailwind' , <p  key={'tailwind'}>Utilized <span className="text-blue-600">Tailwind CSS</span> to improve my workflow in structuring and designing web pages.</p>],
        ['tensorflow' , <p  key={'tensorflow'}>Built object detection and classification models using <span className="text-blue-600">TensorFlow</span>.</p>],

        ['sql' , <p  key={'sql'}>Worked with relational databases such as <span className="text-blue-600">PostgreSQL</span> and <span className="text-blue-600">MySQL</span>.</p>],
        ['php' , <p  key={'php'}>Built a secured server-side APIs with <span className="text-blue-600">PHP</span> to fetch and execute SQL queries.</p>],
        ['python' , <p  key={'python'}>Have used <span className="text-blue-600">Python</span> to develop machine learning models with TensorFlow, as well as creating parsers for large excel data.</p>],

        ['ts' , <p  key={'ts'}>Experienced with <span className="text-blue-600">TypeScript</span>, my main programming language for Angular and NextJS.</p>],
        ['html' , <p  key={'html'}>Knows the <span className="text-blue-600">HTML</span> basics very well.</p>],
        ['css' , <p  key={'css'}>Built web applications with <span className="text-blue-600">CSS</span> before Tailwind CSS.</p>],
        ['js' , <p  key={'js'}><span className="text-blue-600">JavaScript</span> is my little sandbox.</p>],
        ['c' , <p  key={'c'}>Familiar with <span className="text-blue-600">C/C++</span>, the programming language used for our programming fundamentals, data structures and algorithms class.</p>],
        ['java' , <p  key={'java'}>Familiar with <span className="text-blue-600">Java</span>, the programming language used for  our Object-Oriented Programming class.</p>],
    ])
    const [collapsed, setCollapse] = useState(true);
    const [content, setContent] = useState(null);
    const [hoveredExp, setHoveredExp] = useState(null);
    const [hovering, setHovering] = useState(false);

    const [animate, setAnimate] = useState(false);
    const [animateIcons, setAnimateIcons] = useState(false);
    
    const [tags, setTags] = useState<string[]>([]);
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
      setAnimate(true);
    }, []);


    const handleProjectHoverEnter = (project:any,_tags:any) => {
        retoggleAnimate();
        setProject(project);
        setTags(_tags)
    }
    const handleProjectHoverLeave = () => {
        setProject(null);
        setTags([])
    }

    const handleMouseEnter = (event:any) => {
        setContent(event.target.id);
        retoggleAnimate();
    };
    
    const handleMouseLeave = (event:any) => {
        setContent(null);
    };

    const handleStackHoverEnter = (event:any) => {
        setHovering(true);
    }
    const handleStackHoverLeave = (event:any) => {
        setHovering(false);
    }
    const handleExpHoverEnter = (event:any) => {
        // iteratively find parent
        var parent = event.target;
        while(!parent.classList.contains('exp')){
            parent = parent.parentElement
        }
        setHoveredExp(parent.id);
    }
    const handleExpHoverLeave = (event:any) => {
        setHoveredExp(null);
    }

    const toggleCollapse = (event:any) => {
        setCollapse(!collapsed);
        if(!collapsed){
            setContent(null);
        }
        setHovering(false);
        retoggleAnimate();
        retoggleAnimateIcons();
    }
    const retoggleAnimate = ()=>{
        setAnimate(false);
        setTimeout(()=>{
            setAnimate(true);
        },100)
    }

    const retoggleAnimateIcons = ()=>{
        setAnimateIcons(false);
        setTimeout(()=>{
            setAnimateIcons(true);
        },100)
    }

    const handleExternalLink = (link:string) => {
        window.open(link, '_blank');
    };



    return <Base id='home'>
        <Header/>
        {/* Section 1*/}
        <Container  className="h-[90%] w-full bg-white flex justify-around bg-[url('/images/background.avif')]" >
            <Container className='relative flex-[3_3_0%] flex justify-center items-center flex-col'>
                <Container className={`-mt-5 absolute bg-[url('/images/leaves.png')] w-full h-full bg-repeat-x z-10 pointer-events-none contrast-125 brightness-75`}></Container>
                <Profile className='ml-40 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 scale-150 transition-all'/>
            </Container>
            <Container className='flex-[5_5_0%] flex flex-col relative'>
                <Container className={`-mt-5 absolute bg-[url('/images/leaves.png')] w-full h-full bg-repeat-x z-10 pointer-events-none filter contrast-125 brightness-75`}></Container>
                <Container hide={content != null || !collapsed} className='flex flex-col flex-[4_4_0%] justify-center items-center relative'>
                    <Text className={`text-black font-thin xl:text-4xl 2xl:text-5xl 2xl:mb-4 xl:mb-1 select-none transition-all`}> <span className={`transition-all delay-500 ${animate ? 'text-blue-600' : 'text-blue-black'}`}>Hi!</span> <span className='text-blue-900'> I'm Kenneth James Belga </span></Text>
                    <Text onMouseEnter={handleStackHoverEnter} onMouseLeave={handleStackHoverLeave}  onClick={toggleCollapse} className={`text-black xl:text-4xl 2xl:text-5xl select-none cursor-pointer hover:text-white hover:bg-black from-blue-700 via-blue-500 to-indigo-500 pt-1 pb-2 hover:px-16 hover:shadow-xl shadow-blue-600 rounded-lg transition-all ${animate ? '': ''}`}> 
                        <span>FULL STACK DEVELOPER</span> 
                    </Text>
                    <Tray className='w-full justify-center space-x-4 2xl:mt-3 xl:mt-2'>
                            <FaGithub onClick={()=>handleExternalLink('https://github.com/ryukkn')} className={`text-black xl:text-4xl 2xl:text-5xl cursor-pointer hover:scale-125 hover:text-blue-900  transition-all ${animate ? '' : 'translate-y-10'}`} />
                            <FaFacebook  onClick={()=>handleExternalLink('https://www.facebook.com/kennethjames.belga')} className={`text-black xl:text-4xl 2xl:text-5xl cursor-pointer hover:scale-125 hover:text-blue-900  transition-all ${animate ? ' ' : 'translate-y-14'}`} />
                            <FaLinkedin  onClick={()=>handleExternalLink('https://www.linkedin.com/in/kenneth-james-belga-438004312/')}  className={`text-black xl:text-4xl 2xl:text-5xl cursor-pointer hover:scale-125 hover:text-blue-900  transition-all ${animate ? '' : 'translate-y-20'}`}   />
                    </Tray>
                    <Text hide={!hovering} className='text-blue-600 text-lg font-thin animate-pulse mt-60 absolute'>Click to open tech stack ...</Text>
                
                </Container>
                <Container hide={content != null || collapsed} className='flex flex-col flex-[3_3_0%] justify-around items-center'>
                    <Container className={`h-1/2 flex-shrink-0  flex items-center`}>
                        {/* <Text onClick={toggleCollapse} className={`mt-10 text-5xl select-none cursor-pointer text-white bg-black pt-1 pb-3 px-10 hover:shadow-xl shadow-blue-600 rounded-lg transition-all ${animateIcons ? '': ' translate-y-48 opacity-0'}`}> <span></span> TECH STACK</Text> */}
                    </Container>
                    <Text className={`text-black font-thin xl:text-2xl 2xl:text-4xl mb-10 select-none flex-[1_1_0%] flex text-center justify-end items-center flex-col transition-all ${animateIcons ? '': ' opacity-0'}`}>
                        <span className='mb-4 text-sm'> <FaQuoteLeft/> </span>
                        <span className='text-blue-900'> Here is a list of my current tech stack so far.... </span>
                        <span className="mt-5 text-sm"> <FaQuoteRight/> </span>
                    </Text>
                </Container>
                <Container className={`flex flex-col flex-[3_3_0%] justify-around items-center w-full text-wrap px-20 transition-all `} hide={content == null}>
                    <Container className={`h-1/2 flex-shrink-0  flex items-center`}>
                        {/* <Text onClick={toggleCollapse} className={`mt-10 text-5xl select-none cursor-pointer text-white bg-black pt-1 pb-3 px-10 hover:shadow-xl shadow-blue-600 rounded-lg transition-all ${animateIcons ? '': ' translate-y-48 opacity-0'}`}> <span></span> TECH STACK</Text> */}
                    </Container>
                    <Text  className={` text-black flex-[1_1_0%] font-thin 2xl:text-4xl xl:text-2xl italic mb-8 select-none text-center flex items-center justify-end flex-col transition-all ${animate ? '' : ' translate-y-10 opacity-0'} `}>
                        <span className='mb-4 text-sm'> <FaQuoteLeft/> </span>
                        <span>{iconContents.get(content!)} </span>
                        <span className="mt-5 text-sm"> <FaQuoteRight/> </span>
                    </Text>
                </Container>
                <Collapsable onClick={toggleCollapse} shown={!collapsed} onMouseLeave={handleMouseLeave} className='flex flex-[2_2_0%] flex-col justify-end items-center '>
                    <Container className='flex flex-[1_1_0%] items-center w-full'>
                        <Tray className='w-full justify-around 2xl:px-24 xl:px-20'>
                            <Icon onMouseEnter={handleMouseEnter} id='angular' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-20 opacity-0'}`} src="/images/angular.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='flutter' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-5 opacity-0'}`} src="/images/flutter.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='laravel' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-24 opacity-0'}`} src="/images/laravel.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='next' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-32 opacity-0'}`} src="/images/next.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='nodejs' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-10 opacity-0'}`} src="/images/nodejs.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='firebase' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-16 opacity-0'}`} src="/images/firebase.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='aws' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-5 opacity-0'}`} src="/images/aws.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='gcloud' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-20 opacity-0'}`} src="/images/googlecloud.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='tailwind' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-32 opacity-0'}`} src="/images/tailwind.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='tensorflow' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-24 opacity-0'}`} src="/images/tensorflow.png"/>
                        </Tray>
                    </Container>
                    <Container className='flex flex-[1_1_0%] items-start w-full'>
                        <Tray  className='w-full justify-around  2xl:px-40 xl:px-32'>
                            <Icon onMouseEnter={handleMouseEnter} id='html' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-32 opacity-0'}`} src="/images/html.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='css' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-16 opacity-0'}`} src="/images/css.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='js' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-24 opacity-0'}`} src="/images/js.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='ts' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-5 opacity-0'}`} src="/images/ts.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='python' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-10 opacity-0'}`} src="/images/python.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='sql' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-16 opacity-0'}`} src="/images/sql.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='php' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-2 opacity-0'}`} src="/images/php.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='c' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-16 opacity-0'}`} src="/images/c.png"/>
                            <Icon onMouseEnter={handleMouseEnter} id='java' className={`2xl:w-20 2xl:h-20 xl:w-14 xl:h-14 ${animateIcons ? '' : 'translate-y-2 opacity-0'}`} src="/images/java.webp"/>
                        </Tray>
                    </Container>   
                </Collapsable>            
            </Container>
        </Container>
        {/* Section 2 & 3 & 4*/}
        <Container id='about' className='h-[250vh] w-full  relative transition-all bg-blue'>
            {/* About Me */}
            <Container className={`flex items-center pl-10 bg-gradient-to-r from-black via-black to-indigo-950` }>
                <Container className={`flex-1 pt-32 w-full h-full  flex flex-items-center relative`}>
                    <Container className={`absolute bg-[url('/images/leaves3.png')] w-52 h-52 left-[38%] bg-contain top-[-30%]`}></Container>
                    <Container className={`absolute bg-[url('/images/leaves3.png')] w-52 h-52 bg-contain right-0 max-[1535px]:bottom-[-45%] bottom-[-30%]`}></Container>
                    <Container className={`absolute bg-[url('/images/leaves3.png')] w-52 h-52 bg-contain left-0 max-[1535px]:bottom-[-45%] bottom-[-30%]`}></Container>
                    <Text className={`hover:animate-none cursor-pointer hover:text-orange-300  h-full text-white font-thin xl:text-2xl 2xl:text-4xl mb-10 select-none flex-[1_1_0%] flex text-center justify-center items-center flex-col transition-all`}>
                        <span className='mb-4 text-sm'> <FaQuoteLeft/> </span>
                        <span className=''> Let my actions always reflect the true essence of who I am.</span>
                        <span className="mt-5 text-sm"> <FaQuoteRight/> </span>
                    </Text>
                </Container>
                <Container className={`flex-1 pt-32 px-12 h-full`}>
                    <Text className={`ml-5 text-4xl text-orange-300`}>About Me.</Text>
                    <Text className={`mt-5 ml-5 text-lg`}>
                        <span>Hello! I am a fresh graduate from <span className={`text-blue-400 font-normal`}>Bicol University</span> looking for an entry-level job as a <span className={`text-blue-400 font-normal`}>Full Stack Developer</span>. </span>
                        <span>I graduated with a <span className={`text-blue-400 font-normal`}>Computer Science Degree</span> and I am ready to use my knowledge to solve real-world problems in the stated field. </span>
                        <span>Throughout my academic journey, I pursued additional projects beyond my curriculum, which contributed to the refinement of my skills as a developer. </span>
                        <span>From software engineering projects, my On-the-Job Training, freelancing, to getting my provisional contract as a Junior Software Engineer, I have gained enough experience to fulfill my duties as a full-fledged developer. </span>
                        <span>Throughout this journey, I developed the sense of flexibility to engage both sides of Backend and Front-End Development. </span>
                    </Text>
                    <Text className={`mt-5 ml-5 text-lg`}>
                        <span>I am looking forward to offering my services as a <span className={`text-blue-400 font-normal`}>Full Stack Developer </span>to contribute to more projects, as well as to my future teams. </span>
                        <span>Aside from my goal to improve the ways of life through the continuous development of our technologies, I am also dedicated to <span className={`text-blue-400 font-normal`}>sharing my knowledge in order to guide and lead my colleagues</span>. </span>
                        <span>I consider these goals as a motivation for continuous growth, a never-ending learning process that will keep improving my soft and technical skills.</span>
                    </Text>
                </Container>
            </Container>
            {/* Experiences */}
            <Container id='experience' className={`flex bg-gradient-to-r mb-5 from-black via-black to-indigo-950 `}>
                <Container className={`flex-[1_1_0%] w-full pt-12 px-12 mt-5 `}>
                    <Text className={`ml-5 text-4xl text-orange-300`}>Experiences.</Text>
                    {/* Exp 0 */}
                    <Container id='projects' className={`exp flex mt-5 ml-5 cursor-pointer select-none transition-all`} onMouseEnter={handleExpHoverEnter} onMouseLeave={handleExpHoverLeave}>
                        <Container className={`flex-[1_1_0%] flex-shrink-0`}>
                            <Container className={`flex items-center`}>
                                <FaRegDotCircle className={`mr-5 transition-all ${hoveredExp == 'projects' ? 'text-blue-500' : ''}` }/>
                                <Text className={`text-xl font-bold ${hoveredExp == 'projects' ? 'text-orange-200' : ''} `}>
                                    <span> University Projects </span> <span className="font-thin"> | Bicol University </span>
                                </Text>
                            </Container>
                            <Container className={`flex items-center`}>
                                <Container className={`w-0.5 ml-1.5 opacity-50 transition-all   ${hoveredExp == 'projects' ? 'bg-blue-500 max-[1520px]:h-[30rem] h-96' : 'bg-white max-[1520px]:h-[28rem] h-72'}`}></Container>
                                <Container className={`w-full h-96  max-[1520px]:h-[30rem]`}>
                                    <Text hide={hoveredExp == 'projects' && project && project!='lichen'} className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${hoveredExp == 'projects' && project && project !='lichen' ? 'text-orange-300' : ''}`}>
                                        <span> Developed a machine learning model for detecting three types of lichen planus skin rash. </span>
                                    </Text>
                                    <Text hide={hoveredExp == 'projects' && project && project!='lichen'} className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Integrated the object detection model to a Flutter mobile application to identify three types of lichen planus. </span>
                                    </Text>
                                    <Text hide={hoveredExp == 'projects' && project && project!='lichen'} className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Created User Interfaces for the Lichen Planus Identifier. </span>
                                    </Text>
                                    <Text hide={hoveredExp == 'projects' && project && project!='datacol'} className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Developed a web app for data collection, implementing direct data transfer from mobile to a local server  (Undergraduate Thesis). </span>
                                    </Text>
                                    <Text hide={hoveredExp == 'projects' && project && project!='abaca'}   className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Developed a machine learning model for classifying 8 Abaca Fiber Grades (Undergraduate Thesis). </span>
                                    </Text>
                                    <Text hide={hoveredExp == 'projects' && project && project!='abaca'}  className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Contributed to develop flutter app to continously classify the Abaca Fiber Grades implementing classification model and video processing  (Undergraduate Thesis). </span>
                                    </Text>
                                    <Text hide={hoveredExp == 'projects' && project && project!='abaca'}  className={`${(animate || hoveredExp!='projects')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Also created interfaces for the Abaca Fiber Grade Classifier (Undergraduate Thesis). </span>
                                    </Text>
                                    <Container className={`mt-5 ml-7 flex flex-wrap flex-shrink-0 w-full pr-4 gap-5 px-5`} hide={hoveredExp != 'projects' || (hoveredExp == 'projects' && project == null)}>
                                        <DynamicLogos className={` max-[1310px]:w-20 max-[1310px]:h-20 w-24 h-24 mt-2 transition-all flex justify-center ${animate ? '' : ' -translate-x-5 opacity-0'}`} tags={tags}></DynamicLogos>
                                    </Container>
                                </Container>
                            </Container>
                      
                        </Container>
                        {/* Projects */}
                        <Container className={`flex-[1_1_0%] flex items-center justify-center space-x-10`}>
                            <Container onMouseEnter={()=>handleProjectHoverEnter('datacol',['angular','nodejs','tailwind','html','ts'])} onMouseLeave={handleProjectHoverLeave} className={`bg-[url('/images/projects/datacol1.jpg')] bg-contain bg-no-repeat bg-center w-36 h-[22rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                            <Container onMouseEnter={()=>handleProjectHoverEnter('abaca',['flutter','firebase','tensorflow','python'])} onMouseLeave={handleProjectHoverLeave}  className={`bg-[url('/images/projects/abaca1.jpg')] bg-contain bg-no-repeat bg-center w-40 h-[22rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                            <Container onMouseEnter={()=>handleProjectHoverEnter('lichen',['flutter','tensorflow','python'])} onMouseLeave={handleProjectHoverLeave}  className={`bg-[url('/images/projects/lichen1.jpg')] bg-contain bg-no-repeat bg-center w-36 h-[22rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                        </Container>
                    </Container>
                    {/* Exp 1 */}
                    <Container id='ojt' className={`exp flex mt-5 ml-5 cursor-pointer select-none transition-all`} onMouseEnter={handleExpHoverEnter} onMouseLeave={handleExpHoverLeave}>
                        <Container className={`flex-[1_1_0%] flex-shrink-0`}>
                            <Container className={`flex items-center pointer-events-none`}>
                                <FaRegDotCircle className={`mr-5 ${hoveredExp == 'ojt' ? 'text-blue-500' : ''}`}/>
                                <Text className={`text-xl font-bold ${hoveredExp == 'ojt' ? 'text-orange-200' : ''}`}>
                                    <span> On-the-Job Trainee </span> <span className="font-thin"> | OWWA-R5 </span>
                                </Text>
                            </Container>
                            <Container className={`flex items-center`}>
                                <Container className={`w-0.5 ml-1.5 opacity-50 transition-all   ${hoveredExp == 'ojt' ? 'bg-blue-500 max-[1520px]:h-[30rem] h-96' : 'bg-white max-[1520px]:h-[28rem] h-72'}`}></Container>
                                <Container className={`w-full h-96 max-[1520px]:h-[30rem] pr-2`}>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='ojt') ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Full Stack Developer </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='ojt')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Collaborated with a five-man team </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='ojt')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Parsed an excel sheet into usable data </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='ojt')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> PHP, Laravel Framework and Relational database </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='ojt')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Responsible for the integration of the components created by the developers </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='ojt')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Successfully developed an SPRS within a month </span>
                                    </Text>
                                    <Container className={`mt-5 ml-7 flex flex-wrap flex-shrink-0 w-full pr-4 gap-5 px-5`} hide={hoveredExp != 'ojt' || (hoveredExp == 'ojt' && project == null)}>
                                        <DynamicLogos className={` max-[1310px]:w-20 max-[1310px]:h-20 w-24 h-24 transition-all ${animate ? '' : ' -translate-x-5 opacity-0'}`} tags={tags}></DynamicLogos>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                        {/* Projects */}
                        <Container className={`flex-[1_1_0%] flex items-center justify-center space-x-10`}>
                            <Container  onMouseEnter={()=>handleProjectHoverEnter('owwa',['laravel','html','css','js','sql'])} onMouseLeave={handleProjectHoverLeave} className={`bg-[url('/images/projects/owwa1.png')] bg-contain bg-no-repeat bg-center w-[35rem] h-[22rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                        </Container>
                    </Container>

                    {/* Exp 2 */}
                    <Container  id='freelance' className={`exp flex mt-5 ml-5 cursor-pointer select-none transition-all`} onMouseEnter={handleExpHoverEnter} onMouseLeave={handleExpHoverLeave}>
                        <Container className={`flex-[1_1_0%] flex-shrink-0`}>
                            <Container className={`flex items-center`}>
                                <FaRegDotCircle className={`mr-5 ${hoveredExp == 'freelance' ? 'text-blue-500' : ''}`}/>
                                <Text className={`text-xl font-bold ${hoveredExp == 'freelance' ? 'text-orange-200' : ''}`}>
                                    <span> Freelance Developer </span> <span className="font-thin"> | Local</span>
                                </Text>
                            </Container>
                            <Container className={`flex items-center`}>
                                <Container className={`w-0.5 ml-1.5 opacity-50 transition-all   ${hoveredExp == 'freelance' ? 'bg-blue-500  max-[1520px]:h-[30rem]  max-[1310px]:h-[36rem] h-[30rem]' : 'bg-white max-[1310px]:h-[34rem] max-[1520px]:h-[28rem] h-[28rem]'}`}></Container>
                                <Container className={`w-full h-[30rem] max-[1520px]:h-[30rem]  max-[1310px]:h-[36rem] pr-2`}>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='comlab'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Built a laboratory monitoring system based on QR Scanning using the Flutter Framework and a Relational Database</span>
                                    </Text>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='clinic'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Assisted on the stylization of a Clinic Management System using CSS and resolved bugs found in the backend of the system.</span>
                                    </Text>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='finance'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Assisted with a Finance Assistant mobile application, creating charts for monitoring expenses and integrating AI to generate recommendations for the given insights. </span>
                                    </Text>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='lms'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Backend Developer for an LMS Project using Angular, PostgreSQL, and NodeJS. </span>
                                    </Text>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='lms'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Implemented websockets and API using NodeJS and PHP. </span>
                                    </Text>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='lms'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Integrated VideoSDK API for realtime video and audio communication. </span>
                                    </Text>
                                    <Text  hide={hoveredExp == 'freelance' && project && project!='lms'} className={`${(animate || hoveredExp!='freelance')  ? '' : ' -translate-x-5 opacity-0'} transition-all mt-2 ml-12 text-lg font-thin hover:text-orange-300`}>
                                        <span> Created an AWS Cloud Service for the LMS development team and Google Cloud Instance for deployment. </span>
                                    </Text>
                                    <Container className={`mt-2 ml-4 flex flex-wrap flex-shrink-0 w-full gap-5 px-5`} hide={hoveredExp != 'freelance' || (hoveredExp == 'freelance' && project == null)}>
                                        <DynamicLogos className={`mt-5  max-[1310px]:w-20 max-[1310px]:h-20   w-24 h-24 transition-all ${animate ? '' : ' -translate-x-5 opacity-0'}`} tags={tags}></DynamicLogos>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                       

                       {/* Projects */}
                       <Container className={`flex-[1_1_0%] flex  items-center flex-shrink-0 justify-center space-x-2`}>
                            <Container className={'flex space-x-2'}>
                                <Container onMouseEnter={()=>handleProjectHoverEnter('comlab',['flutter','sql','firebase'])} onMouseLeave={handleProjectHoverLeave}  className={`bg-[url('/images/projects/comlab1.jpg')] bg-contain bg-no-repeat bg-center w-40 h-[22rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all `} />
                                <Container onMouseEnter={()=>handleProjectHoverEnter('finance',['flutter'])} onMouseLeave={handleProjectHoverLeave}  className={`bg-[url('/images/projects/finance1.jpg')] bg-contain bg-no-repeat bg-center w-36 h-[22rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                            </Container>
                            <Container className={`flex flex-col space-y-2`}>
                                <Container onMouseEnter={()=>handleProjectHoverEnter('clinic',['css','php'])} onMouseLeave={handleProjectHoverLeave}  className={`bg-[url('/images/projects/clinic1.png')] bg-contain bg-no-repeat bg-center w-80 h-[10rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                                <Container onMouseEnter={()=>handleProjectHoverEnter('lms',['angular','nodejs', 'aws', 'sql','googlecloud','html','tailwind','ts'])} onMouseLeave={handleProjectHoverLeave}  className={`bg-[url('/images/projects/lms1.png')] bg-contain bg-no-repeat bg-center w-80 h-[10rem] opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                            </Container>
                        </Container>
                    </Container>


                    {/* Exp 3 */}
                    <Container  id='upward' className={`exp flex mt-5 ml-5 cursor-pointer select-none transition-all`} onMouseEnter={handleExpHoverEnter} onMouseLeave={handleExpHoverLeave}>
                        <Container className={`flex-[1_1_0%] flex-shrink-0`}>
                            <Container className={`flex items-center`}>
                                <FaRegDotCircle className={`mr-5 ${hoveredExp == 'upward' ? 'text-blue-500' : ''}`}/>
                                <Text className={`text-xl font-bold ${hoveredExp == 'upward' ? 'text-orange-200' : ''}`}>
                                    <span> Junior Software Engineer </span> <span className="font-thin"> | Upward Solutions </span>
                                </Text>
                            </Container>
                            <Container className={`flex items-center`}>
                            <Container className={`w-0.5 ml-1.5 opacity-50 transition-all   ${hoveredExp == 'upward' ? 'bg-blue-500 max-[1520px]:h-[30rem] h-96' : 'bg-white max-[1520px]:h-[28rem] h-72'}`}></Container>
                                <Container className={`w-full max-[1520px]:h-[30rem] h-96`}>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='upward')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Worked with an E-commerce system with Rider, Client and BOP side </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='upward')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Angular, Ionic, and Firebase  </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='upward')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Resolved 50+ issues for the E-commerce mobile application </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='upward')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Used Google Maps API and implemented visual navigation for the Rider app </span>
                                    </Text>
                                    <Text className={`mt-2 ml-12 text-lg font-thin hover:text-orange-300 ${(animate || hoveredExp!='upward')  ? '' : ' -translate-x-5 opacity-0'} transition-all`}>
                                        <span> Parsed an excel sheet containing 1700+ product entries, including their variants into uploadable data</span>
                                    </Text>
                                    <Container className={`mt-5 ml-4 flex flex-wrap flex-shrink-0 w-full pr-4 gap-5 px-5`} hide={hoveredExp != 'upward' || (hoveredExp == 'upward' && project == null)}>
                                        <DynamicLogos className={`w-24 h-24 transition-all ${animate ? '' : ' -translate-x-5 opacity-0'}`} tags={tags}></DynamicLogos>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                        <Container className={`flex-[1_1_0%] flex items-center justify-center space-x-10`}>
                            <Container onMouseEnter={()=>handleProjectHoverEnter('ecom',['angular','firebase'])} onMouseLeave={handleProjectHoverLeave} className={`bg-[url('/images/projects/ecom1.jpg')] bg-contain bg-no-repeat bg-center w-40 h-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                            <Container onMouseEnter={()=>handleProjectHoverEnter('ecom',['angular','firebase'])} onMouseLeave={handleProjectHoverLeave} className={`bg-[url('/images/projects/ecom2.jpg')] bg-contain bg-no-repeat bg-center w-36 h-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                            <Container onMouseEnter={()=>handleProjectHoverEnter('ecom',['angular','firebase'])} onMouseLeave={handleProjectHoverLeave} className={`bg-[url('/images/projects/ecom3.jpg')] bg-contain bg-no-repeat bg-center w-32 h-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all`} />
                        </Container>
                    </Container>

                </Container>

            </Container>
            {/* Contacts */}

            <Container  id='contact' className={` pt-20 px-12 bg-white from-blue-700 via-blue-500 to-indigo-500 select-none`}>
                <Container className={`flex justify-center w-full`}>
                    <Container className={`flex flex-col flex-[1_1_0%]`}>
                        <Text className={`ml-5 text-4xl font-medium text-gray-800`}>CONTACTS</Text>
                        <Container className={`flex text-gray-800 items-center mt-5 ml-8 hover:text-blue-400 select-none cursor-pointer`}>
                            <FaPhone className={`scale-x-[-1]`}/>
                            <Text className={`text-lg ml-5 font-medium`}>
                                <span>09957140344</span>
                            </Text>
                        </Container>
                        <Container className={`flex text-gray-800 items-center mt-5 hover:text-blue-400 ml-8 select-none cursor-pointer`}>
                            <FaEnvelope className={`scale-x-[-1]`}/>
                            <Text className={`text-lg ml-5 font-medium`}>
                                <span>kennethjbelga566@gmail.com</span>
                            </Text>
                        </Container>
                        <Container className={`flex text-gray-800 items-center mt-5 ml-8 hover:text-blue-400 select-none cursor-pointer`}>
                            <FaFacebook/>
                            <Text className={`text-lg ml-5 font-medium`}>
                                <span>kennethjames.belga</span>
                            </Text>
                        </Container>
                    </Container>
                    <Container className={`w-0.5 h-32 bg-gray-400 rounded ml-5 mr-10 mt-10`}/>
                    <Container className={`flex-[3_3_0%]  h-80 `}>
                        <Text className={`text-4xl text-gray-800 font-medium flex gap-5 items-center`}>
                            <span>DROP ME A MESSAGE</span>    
                            <FaInbox className={'mt-1'}/>
                        </Text>
                        <Container className={`flex w-full mt-4 gap-3`}>
                            <Container className={`flex-[1_1_0%]`}>
                                <Container className={`w-full`}>
                                    <Text className={`text-lg font-medium text-gray-800`}> Name </Text>
                                    <InputField placeholder='Enter your name' className={`w-full `}></InputField>
                                </Container>
                                <Container className={`w-full`}>
                                    <Text className={`text-lg font-medium text-gray-800 mt-1`}> Email </Text>
                                    <InputField placeholder='Enter your email address' className={`w-full `}></InputField>
                                </Container>
                            
                            </Container>
                            <Container className={`flex-[2_2_0%] items-end flex flex-col `}>
                                <Container className={`w-full`}>
                                    <Text className={`text-lg w-full text-gray-800 font-medium`}> Message </Text>
                                    <InputField textarea={true} className={` h-[7.3rem] w-full `} placeholder='Enter your message'></InputField>
                                </Container>
                                <Button className={`mt-2`}>
                                    <FaPaperPlane></FaPaperPlane>
                                    <span className={`font-medium`}> Send </span>
                                </Button>
                            </Container>
                  
                        </Container>
                    </Container>
                </Container>
            </Container>
            {/* <Container className={` pb-24 pt-10 px-12 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500`}>
                <Text className={`ml-5 text-8xl w-full flex justify-center text-white select-none cursor-pointer hover:animate-bounce hover:text-red-300 transition-all`}>I LOVE YOU KHRISTINE HEART AZUL</Text>
            </Container> */}
            <Container className={`bg-blue-500 text-white/70 h-5 w-full flex justify-end px-2 text-sm`}>
                @ 2024 Kenneth James Belga. All riights reserved.
            </Container>
        </Container>
    </Base>
}