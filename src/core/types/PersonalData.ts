export interface PersonalData {
    shortname: string;
    fullName: string;
    shortPresentation: string;
    titleLongPresentation: string;
    longPresentation: string[],
    works: Work[];
}
export interface Work {
    title: string
    status: 'active' | 'inactive' | 'Developing'
    publicCode: boolean
    url: string
    codeUrl: string
    image: string
    technologies: string[]
}