export interface Project {
    name: string,
    description: string,
    img: string,
    link: string,
    type: string,
    class?: string,
}

export interface MusicProject extends Project {
    metadata: {
        tracks: number,
        date: string,
        time: number
    }
}

export type Projects = (Project | MusicProject)[]
