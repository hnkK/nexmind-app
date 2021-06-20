import Start from '../components/Start.vue'
import Project from '../components/Project.vue'
import Mobile from '../components/Mobile.vue'
import Features from '../components/Features.vue'
import MessageClient from '../components/MessageClient.vue'
import Email from '../components/Email.vue'
import Done from "../components/Done.vue"

export const routes = [
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
    {
        path: '/mobile',
        name: 'Mobile',
        component: Mobile

    },
    {
        path: '/features',
        name: 'Features',
        component: Features

    },
    {
        path: '/message',
        name: 'Message',
        component: MessageClient

    },
    {
        path: '/email',
        name: 'Email',
        component: Email

    },
    {
        path: '/done',
        name: 'Done',
        component: Done

    },
    { path: '/*', name: 'Start', component: Start },
]