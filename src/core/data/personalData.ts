import { type PersonalData } from "../types/PersonalData"

const personalData: PersonalData = {
    shortname: 'Alex Coronell',
    fullName: 'Alexander Coronell',
    githubPage: 'https://alexcoronell.github.io/',
    site: 'https://alexcoronell.dev',
    email: 'alexcoronell@alexcoronell.dev',
    email2: 'alexcoronell@gmail.com',
    email3: 'contact@alexcoronell.dev',
    whatsapp: '+57 (318) 629-0285',
    whatsappClean: '+573186290285',
    whatsapp2: '+57 (319) 435-3194',
    whatsappClean2: '+573194353194',
    linkedin: 'http://linkedin.com/in/alex-coronell',
    github: 'https://github.com/alexcoronell',
    gitlab: 'https://gitlab.com/alexcoronell',
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
            technologies: ['HTML5', 'CSS3', 'NestJS', 'Angular', 'Angular Material', 'PostgreSQL']
        },
        {
            title: 'Steel Building Stores',
            status: 'active',
            publicCode: false,
            url: 'https://steelbuildingstores.com/',
            codeUrl: '',
            image: 'steel-building-stores.jpg',
            technologies: ['HTML5', 'CSS3', 'Astro', 'TailwindCSS', 'AlpineJS', 'PreactJS']
        },
        {
            title: 'Direct Metal Buildings',
            status: 'active',
            publicCode: false,
            url: 'https://www.directmetalbuildings.com/',
            codeUrl: '',
            image: 'direct-metal-buildings.jpg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Angular Material']
        },
        {
            title: 'Personal Portfolio v.1',
            status: 'active',
            publicCode: true,
            url: 'https://alexcoronell.github.io/',
            codeUrl: 'https://github.com/alexcoronell/alexcoronell.github.io.git',
            image: 'alexcoronell-v1.jpg',
            technologies: ['HTML5', 'CSS3', 'React', 'Material UI']
        },
        {
            title: 'Catapult Steel Buildings',
            status: 'active',
            publicCode: false,
            url: 'https://catapultsteel.com/',
            codeUrl: '',
            image: 'catapult-steel.jpg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Angular Material']
        },
        {
            title: 'Masterisand',
            status: 'active',
            publicCode: false,
            url: 'https://www.masterisand.com.co/',
            codeUrl: '',
            image: 'masterisand.jpg',
            technologies: ['HTML5', 'CSS3', 'React', 'Bootstrap']
        },
        {
            title: 'El Maderero',
            status: 'inactive',
            publicCode: false,
            url: '',
            codeUrl: '',
            image: 'el-maderero.jpg',
            technologies: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap']
        },
        {
            title: 'Nettside',
            status: 'inactive',
            publicCode: false,
            url: '',
            codeUrl: '',
            image: 'nettside.jpg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Bootstrap']
        },
        {
            title: 'SmartHome',
            status: 'inactive',
            publicCode: false,
            url: 'http://smarthome.my-board.org/?i=1',
            codeUrl: '',
            image: 'smarthome.jpg',
            technologies: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap']
        },
        {
            title: 'CV Alex Coronell',
            status: 'active',
            publicCode: false,
            url: 'http://alexcoronell.byethost24.com',
            codeUrl: '',
            image: 'cv-alexcoronell.jpeg',
            technologies: ['HTML5', 'CSS3', 'Angular', 'Firebase', 'Bootstrap']
        },
        {
            title: 'Sicoain',
            status: 'inactive',
            publicCode: true,
            url: '',
            codeUrl: 'https://github.com/alexcoronell/SICOAIN_FullStackMean',
            image: 'sicoain-meanstack.jpg',
            technologies: ['HTML5', 'CSS3', 'NOdeJS', 'Angular', 'MongoDB', 'Boostrap']
        },
        {
            title: 'Sicoain (PHP Version)',
            status: 'inactive',
            publicCode: true,
            url: '',
            codeUrl: 'https://github.com/alexcoronell/SICOAIN_PHP_FINAL',
            image: 'sicoain.jpg',
            technologies: ['HTML5', 'CSS3', 'PHP', 'Javascript', 'JQuery', 'MySQL']
        },
    ],
    experiences: [
        {
            title: 'Fullstack Developer, IT Manager',
            business: 'Catapult Steel Buildings',
            dateBegin: 'July 2021',
            dateEnd: 'Current',
            location: 'Medellín, CO',
            functions: [
                "Web developer of the company's official pages in technologies such as Astro, Angular, and React.",
                "Developer of an automated shopping bot using ElectronJS.",
                "Full-stack developer of a CMR solution for managing customers, leads, and generating quotes. Under development with NestJS, Angular, and Postgres.",
                "Domain and hosting administration.",
                "SuiteCRM CRM system administration.",
                "AWS service administration."
            ],
        },
        {
            title: 'On-site Support Analyst',
            business: 'Micropoint S. A. S.',
            dateBegin: 'September 2018',
            dateEnd: 'July 2021',
            location: 'Medellín, CO',
            functions: [
                "Regional IT Manager for the Totto company in Antioquia.",
                "Helpdesk and on-site support for Grupo Uribe.",
                "Support for the implementation of Sura's Digital Service Center.",
                "Technical service for laser printers, desktop and laptop computers.",
                "Customer service."
            ],
        },
        {
            title: 'Graphic Designer - Konica Minolta Technical Service',
            business: 'Alianza Gráfica, S. A. S.',
            dateBegin: 'February 2017',
            dateEnd: 'December 2017',
            location: 'Medellín, CO',
            functions: [
                "Prepare and assemble designs for the digital printing process.",
                "Use Adobe Illustrator, Adobe InDesign, Adobe Acrobat, Adobe Photoshop, Enfocus PitStop Pro, and Kodak Preps 5.3.",
                "Operate the Konica Job Center Controller and Fiery Command Workstation.",
                "Operate Konica Minolta Bizhub Press C6000 and Konica Minolta Bizhub Press C1085 printing equipment.",
                "Perform preventive and corrective maintenance on Konica Minolta Bizhub Press C6000 and Konica Minolta Bizhub Press C1085 printers.",
            ],
        },
        {
            title: 'Printer Technical Support',
            business: 'Gloditec S. A. S.',
            dateBegin: 'May 2016',
            dateEnd: 'December 2016',
            location: 'Envigado, CO',
        },
        {
            title: 'Technical Support Director',
            business: 'Inversiones Propc Computer 2011 C. A.',
            dateBegin: '2014',
            dateEnd: '2016',
            location: 'Caracas, VE',
        },
        {
            title: 'Systems Coordinator',
            business: 'ATB Constructores C. A.',
            dateBegin: '2011',
            dateEnd: '2014',
            location: 'Caracas, VE',
        },
        {
            title: 'Intern (Production Assistant)',
            business: 'Fundación AvilaTV',
            dateBegin: '2011',
            dateEnd: '2011',
            location: 'Caracas, VE',
        },
        {
            title: 'Systems Assistant',
            business: 'Retca C. A.',
            dateBegin: '2004',
            dateEnd: '2010',
            location: 'Caracas, VE',
        },
        {
            title: 'Computer Technician',
            business: 'Tecnocorsa C. A.',
            dateBegin: '1998',
            dateEnd: '2003',
            location: 'Caracas, VE',
        },
        {
            title: 'Data Transcriptionist',
            business: 'Hydroclima S. A.',
            dateBegin: '1997',
            dateEnd: '1997',
            location: 'Caracas, VE',
        },
    ]
}

export default personalData