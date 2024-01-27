import { type PersonalData } from "../types/PersonalData"

const personalData: PersonalData = {
    shortname: 'Alex Coronell',
    fullName: 'Alexander Coronell',
    shortPresentation: "I'm a full-stack developer with 4 years of experience. I'm primarily focused on frontend development, but I also have experience with backend development.",
    titleLongPresentation: 'Pixels are my passion, servers my playground: Meet Alex Coronell!',
    longPresentation: [
        "I'm Alex Coronell, a full-stack developer with a front-end soul. Like a digital architect, I sculpt pixel-perfect interfaces using Angular, React, and the rising star, Astro, pushing the boundaries of web experiences with every line of code. But don't be fooled by the flashy front-end façade – I'm also a backend apprentice, deciphering the magic of NestJS and NodeJS to build robust server-side foundations.",
        "Sure, I may still be mastering some server-side spells, but my passion for crafting seamless, full-stack solutions burns bright. For me, code is a symphony of logic and creativity, where solving challenges is an art form. Whether it's building captivating UIs, untangling backend logic, or venturing into the realm of desktop apps with Electron, every project is a canvas waiting to be splashed with innovation.",
        "But I'm not just a solo developer; I'm a collaborator, a constant learner fueled by the power of \"we.\" My journey in tech is just beginning, but my boundless curiosity and relentless drive keep me pushing the boundaries. So, whether you need a front-end magician to paint your digital vision, a backend apprentice eager to learn, or simply a passionate teammate to code alongside, I'm your guy. Let's build something incredible together!"
    ],
    works: [
        {
            title: 'Pricing Program',
            status: 'Developing',
            publicCode: false,
            url: '',
            codeUrl: '',
            image: 'pricing-program.jpg',
            technologies: ['HTML5', 'CSS3', 'NestJS', 'Angular', 'Angular Material', 'PostgreSQL' ]
        },
        {
            title: 'Steel Building Stores',
            status: 'active',
            publicCode: false,
            url: 'https://steelbuildingstores.com/',
            codeUrl: '',
            image: 'steel-building-stores.jpg',
            technologies: ['HTML5', 'CSS3', 'Astro', 'TailwindCSS', 'AlpineJS', 'PreactJS' ]
        },
        {
            title: 'Direct Metal Buildings',
            status: 'active',
            publicCode: false,
            url: 'https://www.directmetalbuildings.com/',
            codeUrl: '',
            image: 'direct-metal-buildings.jpg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Angular Material' ]
        },
        {
            title: 'Catapult Steel Buildings',
            status: 'active',
            publicCode: false,
            url: 'https://catapultsteel.com/',
            codeUrl: '',
            image: 'catapult-steel.jpg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Angular Material' ]
        },
        {
            title: 'Masterisand',
            status: 'active',
            publicCode: false,
            url: 'https://www.masterisand.com.co/',
            codeUrl: '',
            image: 'masterisand.jpg',
            technologies: ['HTML5', 'CSS3', 'React', 'Bootstrap' ]
        },
        {
            title: 'El Maderero',
            status: 'inactive',
            publicCode: false,
            url: '',
            codeUrl: '',
            image: 'el-maderero.jpg',
            technologies: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap' ]
        },
        {
            title: 'Nettside',
            status: 'inactive',
            publicCode: false,
            url: '',
            codeUrl: '',
            image: 'nettside.jpg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Bootstrap' ]
        },
        {
            title: 'SmartHome',
            status: 'inactive',
            publicCode: false,
            url: 'http://smarthome.my-board.org/?i=1',
            codeUrl: '',
            image: 'smarthome.jpg',
            technologies: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap' ]
        },
        {
            title: 'CV Alex Coronell',
            status: 'active',
            publicCode: false,
            url: 'http://alexcoronell.byethost24.com',
            codeUrl: '',
            image: 'cv-alexcoronell.jpeg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Firebase', 'Bootstrap' ]
        },
        {
            title: 'Sicoain',
            status: 'inactive',
            publicCode: true,
            url: '',
            codeUrl: 'https://github.com/alexcoronell/SICOAIN_FullStackMean',
            image: 'sicoain-meanstack.jpg',
            technologies: ['HTML5', 'CSS3', 'NOdeJS', 'Angular', 'MongoDB', 'Boostrap' ]
        },
        {
            title: 'Sicoain (PHP Version)',
            status: 'inactive',
            publicCode: true,
            url: '',
            codeUrl: 'https://github.com/alexcoronell/SICOAIN_PHP_FINAL',
            image: 'sicoain.jpg',
            technologies: ['HTML5', 'CSS3', 'PHP', 'Javascript', 'JQuery', 'MySQL' ]
        },
    ]
}

export default personalData