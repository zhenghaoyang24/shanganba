import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {
        text: '考前须知',
        link: '/prepare/why/',
        activeMatch: '^/prepare/',
    },
    {
        text: '行测 / 职测',
        link: '/choice/introduction/',
        activeMatch: '^/choice/',
    },
    {
        text: '申论',
        link: '/expound/introduction/',
        activeMatch: '^/expound/',
    },
    {
        text: '考前比记',
        items: [
            {text: '高频成语', link: '/remember/idiom/'},
            {text: '政治理论', link: '/remember/political/'}
        ],
        activeMatch: '^/remember/',
    },
])
