import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {
        text: '考前须知',
        link: '/prepare/why/'
    },
    {
        text: '行测 / 职测',
        link: '/choice/introduction/'
    },
    {
        text: '申论',
        link: '/expound/introduction/'
    },
    {
        text: '考前比记',
        items: [
            {text: '高频成语', link: '/remember/cydaohang/'},
            {text: '政治理论', link: '/remember/political/'}
        ]
    },
])
