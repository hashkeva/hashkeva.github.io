// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'fb' | 'wa' | 'gm' | 'yt' | 'gh' | 'r' | 'l' | 'tw' | 'vs' | 'todo' |
                           'c' | '$' | 'cal' | 'n' | 'pv' | 'gd' | 'wsj' | 'cnn' | 'g' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[CommandNames] : CommandType} = {
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    wa: {
        name: "WhatsApp Desktop App",
        url: "whatsapp://",
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    tw: {
        name: "Twitter",
        url: "https://twitter.com/",
        searchurl: "https://twitter.com/search?q="
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    wsj: {
        name: "Wall Street Journal",
        url: "https://www.wsj.com/"
    },
    cnn: {
        name: "CNN",
        url: "https://www.cnn.com/"
    },
    n: {
        name: "Netflix",
        url: "https://netflix.com/",
        searchurl: "https://www.netflix.com/search?q="
    },
    pv: {
        name: "Amazon Prime Video",
        url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
        searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="
    },
    vs: {
        name: "VS Code",
        url: "vscode://",
    },
    $: {
        name: "Robinhood",
        url: "https://robinhood.com/", 
        searchurl: "https://robinhood.com/stocks/"
    },
    c: {
        name: "Robinhood Crypto",
        url: "https://robinhood.com/", 
        searchurl: "https://robinhood.com/crypto/"
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    todo: {
        name: "Microsoft To Do",
        url: "https://to-do.live.com"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
