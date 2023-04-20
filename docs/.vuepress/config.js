import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
export default defineUserConfig({
    lang: 'en-US',
    title: 'Matt Winchester',
    description: 'VuePress Configuration Description',
    theme: defaultTheme({
        logo: '/la.png',
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Blog',
                link: '/blog/',
            },
            {
                text: 'Projects',
                link: '/projects/',
            },
            {
                text: 'About',
                link: '/about.html',
            },
        ]
    })
})

