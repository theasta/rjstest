({
    appDir: "../public-dev",
    baseUrl: "scripts",
    dir: "../public",
    mainConfigFile: "../public-dev/scripts/main.js",
    paths: {
        requireLib: 'vendors/requirejs/require'
    },
    preserveLicenseComments: false,
    modules: [
        {
            name: "main",
            include: ["requireLib"]
        },
        {
            name:"pages/index",
            exclude:["main"]
        },
        {
            name:"pages/page1",
            exclude:["main"]
        },
        {
            name:"pages/page2",
            exclude:["jquery","underscore"]
        }
    ]
})
