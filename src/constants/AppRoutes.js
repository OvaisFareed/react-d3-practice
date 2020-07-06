function AppRoutes() {
    const routes = [
        {
            name: 'Scatter Chart',
            to: '/',
            selected: false
        },
        {
            name: 'Bar Chart',
            to: '/bar-chart',
            selected: false
        },
        {
            name: 'Vertical Bar Chart',
            to: '/vertical-bar-chart',
            selected: false
        },
        {
            name: 'Pie Chart',
            to: '/pie-chart',
            selected: false
        },
        {
            name: 'Olympic Rings',
            to: '/rings',
            selected: false
        },
    ];

    return { routes }
}

export default AppRoutes;