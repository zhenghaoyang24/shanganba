import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {
        text: '考前须知',
        link: '/prepare/why/'
    },
    {
        text: '行测 / 职测',
        link: '/choice/introduce/'
    },
    {
        text: '考前比记',
        items: [
            {text: '高频成语', link: '/notes/remember/高频成语/成语导航'}
        ]
    },
])
