const buttonQueries = {
  directoryBtn: (domain) => "site:" + domain + " intitle:index.of",
  configBtn: (domain) => "site:" + domain + " ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini",
  dbBtn: (domain) => "site:" + domain + "ext:sql | ext:dbf | ext:mdb | ext:db | ext:sqlite | ext:sqlite3 | ext:db3",
  WPBtn: (domain) => "site:" + domain + "inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:downloads | inurl:wp-includes",
  logBtn: (domain) => "site:" + domain + " ext:log | ext:txt | ext:out | ext:err | ext:trace",
  backupBtn: (domain) => "site:" + domain + " ext:bak | ext:backup | ext:old | ext:zip | ext:tar | ext:gz | ext:rar",
  loginBtn: (domain) => "site:" + domain + " inurl:login | inurl:admin | inurl:signin | inurl:auth | inurl:account | intitle:Login | intitle: signin | intitle:auth | intitle:account",
  apacheBtn: (domain) => "site:" + domain + " filetype:config apache",
  robotsBtn: (domain) => "site:" + domain + "/robots.txt",
  exposedBtn: (domain) => "site:" + domain + " filetype:doc OR filetype:docx OR filetype:odt OR filetype:pdf OR filetype:rtf OR filetype:sxw OR filetype:psw OR filetype:ppt OR filetype:pptx OR filetype:pps OR filetype:csv OR filetype:tsv OR filetype:xlr OR filetype:xls OR filetype:xlsx OR filetype:xml OR filetype:json OR filetype:yaml OR filetype:yml",
  phpinfoBtn: (domain) => "site:" + domain + " intitle:phpinfo | inurl:phpinfo.php | inurl:info.php | inurl:phpinfo",
  backdoorBtn: (domain) => "site:" + domain + " inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor",
  installBtn: (domain) => "site:" + domain + " inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config | inurl:documentation | inurl:docs | inurl:manual | inurl:guide",
  openRedirectionBtn: (domain) => "site:" + domain + " inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http",
  apacheStructureBtn: (domain) => "site:" + domain + " ext:action | ext:struts | ext:do",
  thirdPartyBtn: (domain) => "site:http://ideone.com | site:http://codebeautify.org | site:http://codeshare.io | site:http://codepen.io | site:http://repl.it | site:http://justpaste.it | site:http://pastebin.com | site:http://jsfiddle.net | site:http://trello.com | site:*.atlassian.net | site:bitbucket.org " + domain,
  securityHeaderBtn: (domain) => "https://securityheaders.com/?q=" + encodeURIComponent(domain) + "&followRedirects=on",
  gitlabBtn: (domain) => "site:" + domain + " inurl:gitlab",
  pastebinBtn: (domain) => "site:" + domain + " inurl:pastebin",
  linkedinEmployeesBtn: (domain) => "site:linkedin.com employees " + domain,
  htaccessBtn: (domain) => "site:" + domain + " inurl:/phpinfo.php | inurl:.htaccess",
  "find subdomainsBtn": (domain) => "site:*." + domain,
  "find sub-domainbtn": (domain) => "site:*.*." + domain,
  "find wpbtn": (domain) => "site:" + domain + " inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:downloads | inurl:wp-includes",
  "search in bitbucket and atlassian": (domain) => "site:bitbucket.org OR site:*.atlassian.net " + domain,
  "search in stack overflow": (domain) => "site:stackoverflow.com " + domain,
  "Search in github": (domain) => "site:github.com " + domain,
  "search in Reddit": (domain) => "site:reddit.com " + domain,
  "test crossdomain": (domain) => "site:" + domain + " inurl:crossdomain.xml",
  ".git folder": (domain) =>"inurl:.git" + domain + " -site:github.com -site:gitlab.com -site:bitbucket.org",
  "youtubeBtn": (domain) => "site:youtube.com " + domain,
  "digital ocean space": (domain) => "site:digitalocean.com " + domain,
  "find .swf file (google)": (domain) => "inurl:" + domain + " ext:swf",
  "find .swf file (yandex)": (domain) => "https://yandex.com/search/?text=" + encodeURIComponent("site:" + domain + " mime:swf"),
  waybackFlashBtn: (domain) => {
    const url = new URL("https://web.archive.org/cdx/search");
    url.searchParams.set("url", domain + "/");
    url.searchParams.set("matchType", "domain");
    url.searchParams.set("collapse", "urlkey");
    url.searchParams.set("output", "text");
    url.searchParams.set("fl", "original");
    url.searchParams.set("filter", "mimetype:application/x-shockwave-flash");
    url.searchParams.set("limit", "100000");
    return url.toString();
  },
  "waybackBtn#3": (domain) => "https://web.archive.org/web/*/" + domain + "/*",
  "traefik": (domain) => "intitle:traefik inurl:8080/dashboard " + domain,
  "cloudstorage and bucket": (domain) => "https://cse.google.com/cse?cx=002972716746423218710:veac6ui3rio#gsc.tab=0&gsc.q=" + domain,
  "s3 bucket": (domain) => "site:s3.amazonaws.com " + domain,
  "sourcecode-public": (domain) => "https://publicwww.com/websites/" + encodeURIComponent('"' + domain + '"') + "/",
  "check in censys ipv4": (domain) => "https://censys.io/ipv4?q=" + domain,
  "check in censys domain": (domain) => "https://censys.io/domain?q=" + domain,
  "check in censys cert": (domain) => "https://censys.io/certificates?q=" + domain,
  "check in shodan": (domain) => "https://www.shodan.io/search?query=" + domain,
  "CVE-2020-0646 sharepoint RCE": (domain) => ".sharepoint.com/_vti_bin/webpartpages/asmx -docs -msdn -mdsec site:" + domain,
  "API Endpoint wdsl": (domain) => "site:" + domain + "  filetype:wsdl | filetype:WSDL | ext:svc | inurl:wsdl | Filetype: ?wsdl | inurl:asmx?wsdl | inurl:jws?wsdl | intitle:_vti_bin/sites.asmx?wsdl | inurl:_vti_bin/sites.asmx?wsdl",
  "Git GIST search": (domain) => "https://gist.github.com/search?q=*." + domain,
  "search in CT logs": (domain) => "https://crt.sh/?q=%25." + domain,
  "plaintext passwordslist": (domain) => "site:throwbin.io " + domain,
  "what is CMS": (domain) => "https://whatcms.org/?s=" + domain

};

const buttonIcons = {
  directoryBtn: "📁",
  configBtn: "⚙️",
  dbBtn: "🗄️",
  WPBtn: "📰",
  logBtn: "📜",
  backupBtn: "💾",
  loginBtn: "🔐",
  apacheBtn: "🖥️",
  robotsBtn: "🤖",
  exposedBtn: "📂",
  phpinfoBtn: "🐘",
  backdoorBtn: "🚪",
  installBtn: "🛠️",
  openRedirectionBtn: "↪️",
  apacheStructureBtn: "🏗️",
  thirdPartyBtn: "🔗",
  securityHeaderBtn: "🛡️",
  gitlabBtn: "🦊",
  pastebinBtn: "📝",
  linkedinEmployeesBtn: "👥",
  htaccessBtn: "🔒",
  "find subdomainsBtn": "🌐",
  "find sub-domainbtn": "🌍",
  "find wpbtn": "📰",
  "search in bitbucket and atlassian": "🪣",
  "search in stack overflow": "📚",
  "Search in github": "🐙",
  "search in Reddit": "💬",
  "test crossdomain": "🔀",
  ".git folder": "📁",
  youtubeBtn: "▶️",
  "digital ocean space": "☁️",
  "find .swf file (google)": "🔎",
  "find .swf file (yandex)": "🔎",
  waybackFlashBtn: "🕰️",
  "waybackBtn#3": "🕰️",
  traefik: "🚦",
  "cloudstorage and bucket": "☁️",
  "s3 bucket": "🪣",
  "sourcecode-public": "💻",
  "check in censys ipv4": "🌐",
  "check in censys domain": "🔎",
  "check in censys cert": "📜",
  "check in shodan": "🦈",
  "CVE-2020-0646 sharepoint RCE": "⚠️",
  "API Endpoint wdsl": "🔌",
  "Git GIST search": "📄",
  "search in CT logs": "📋",
  "plaintext passwordslist": "🔑",
  "what is CMS": "❔"
};

document.querySelectorAll(".button-container button").forEach((button) => {
  const icon = document.createElement("span");
  icon.className = "button-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = buttonIcons[button.id] || "🔎";
  button.prepend(icon);
});

document.querySelectorAll(".button-container button").forEach((button) => {
  const getQuery = buttonQueries[button.id];

  if (!getQuery) {
    console.error(`No search query configured for button "${button.id}".`);
    return;
  }

  button.addEventListener("click", function () {
    const domain = document.getElementById("domain").value.trim();

    if (!domain) {
      alert("Enter Target Domain first");
      return;
    }

    const query = getQuery(domain);

    if (query.startsWith("https://")) {
      window.open(query, "_blank");
      return;
    }
    

  const url = "https://www.google.com/search?q=" + encodeURIComponent(query);

    window.open(url, "_blank");
  });
});
