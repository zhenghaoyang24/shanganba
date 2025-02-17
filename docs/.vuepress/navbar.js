import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {
        text: '考前须知',
        link: '/notes/prepare/为什么'
    },
    {
        text: '行测 / 职测',
        items: [
            {text: '高频成语', link: '/notes/choice/高频成语/成语导航'}
        ]
    },
])
