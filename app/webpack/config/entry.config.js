// Конфігурація entry

module.exports = {
    // Назва вихідного файлу, має бути аналогічна назві сторінки
    index: {
        // файли які будуть імпортуватись
        import: [
            './js/common',
            './js/pages/homepage',
            './scss/pages/homepage/bootstrap',
        ],
        // Для js файлів є можливість переписати шлях вихідного файлу по сторінково
        // filename: './js/homepage.js?hash=[contenthash]',
    },
    peculiarity: {
        // файли які будуть імпортуватись
        import: [
            './js/common',
            './js/pages/peculiarity',
            './scss/pages/peculiarity/bootstrap',
        ],
    },
}