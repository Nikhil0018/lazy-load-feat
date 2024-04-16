import { NavigationRouteModel } from "../components/models/navigation-router.model";

export const navigationRoutes: NavigationRouteModel[] = [
    {
        id: 1,
        name: 'Home',
        icon: 'https://cdn-icons-png.flaticon.com/128/1946/1946436.png',
        routePath: '/'
    },
    {
        id: 2,
        name: 'Events',
        icon: 'https://cdn-icons-png.flaticon.com/128/795/795323.png',
        routePath: '/events'
    },
    {
        id: 3,
        name: 'Videos',
        icon: 'https://cdn-icons-png.flaticon.com/128/10278/10278992.png',
        routePath: '/videos'
    },
    {
        id: 4,
        name: 'Live',
        icon: 'https://cdn-icons-png.flaticon.com/128/9329/9329301.png',
        routePath: '/live'
    },
    {
        id: 5,
        name: 'Register',
        icon: 'https://cdn-icons-png.flaticon.com/128/9428/9428917.png',
        routePath: '/register'
    }
];