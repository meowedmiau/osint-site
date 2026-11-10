// Each tool: { id, category, name, desc, template, hint }
// {q} placeholder = user input, URL-encoded.
// Multi-field tools use {q1}, {q2} — drawer renders one input per field.

export const categories = [
  "username",
  "email",
  "domain",
  "search",
  "image",
  "network",
  "code",
];

export const tools = [
  // --- username ---
  {
    id: "whatsmyname",
    category: "username",
    name: "WhatsMyName",
    desc: "Enumerate a username across 600+ sites.",
    template: "https://whatsmyname.app/?q={q}",
  },
  {
    id: "namechk",
    category: "username",
    name: "Namechk",
    desc: "Username availability across social + domains.",
    template: "https://namechk.com/?q={q}",
  },
  {
    id: "github-user",
    category: "username",
    name: "GitHub User",
    desc: "Direct GitHub profile lookup.",
    template: "https://github.com/{q}",
  },
  {
    id: "reddit-user",
    category: "username",
    name: "Reddit User",
    desc: "Reddit profile + post history.",
    template: "https://www.reddit.com/user/{q}",
  },
  {
    id: "keybase",
    category: "username",
    name: "Keybase",
    desc: "Keybase identity + linked proofs.",
    template: "https://keybase.io/{q}",
  },

  // --- email ---
  {
    id: "hibp",
    category: "email",
    name: "Have I Been Pwned",
    desc: "Breach check by email.",
    template: "https://haveibeenpwned.com/account/{q}",
  },
  {
    id: "epieos",
    category: "email",
    name: "Epieos Email",
    desc: "Google account + Gravatar lookup.",
    template: "https://epieos.com/?q={q}&t=email",
  },
  {
    id: "hunter",
    category: "email",
    name: "Hunter.io",
    desc: "Domain → email pattern discovery.",
    template: "https://hunter.io/search/{q}",
  },

  // --- domain ---
  {
    id: "whois",
    category: "domain",
    name: "WHOIS",
    desc: "Domain registration record.",
    template: "https://who.is/whois/{q}",
  },
  {
    id: "crtsh",
    category: "domain",
    name: "crt.sh",
    desc: "Certificate transparency subdomain dump.",
    template: "https://crt.sh/?q=%25.{q}",
  },
  {
    id: "urlscan",
    category: "domain",
    name: "urlscan.io",
    desc: "Live scan history for a domain.",
    template: "https://urlscan.io/domain/{q}",
  },
  {
    id: "dnsdumpster",
    category: "domain",
    name: "DNSDumpster",
    desc: "DNS recon + subdomain map.",
    template: "https://dnsdumpster.com/static/map/{q}.png",
  },
  {
    id: "shodan-domain",
    category: "domain",
    name: "Shodan Domain",
    desc: "Exposed hosts on a domain.",
    template: "https://www.shodan.io/search?query=hostname%3A{q}",
  },

  // --- search ---
  {
    id: "google",
    category: "search",
    name: "Google",
    desc: "Plain Google query.",
    template: "https://www.google.com/search?q={q}",
  },
  {
    id: "google-exact",
    category: "search",
    name: "Google Exact",
    desc: "Exact-phrase search.",
    template: 'https://www.google.com/search?q=%22{q}%22',
  },
  {
    id: "google-paste",
    category: "search",
    name: "Pastebin Dork",
    desc: "Search pastebin indexes for a term.",
    template: "https://www.google.com/search?q=site%3Apastebin.com+{q}",
  },
  {
    id: "google-doc",
    category: "search",
    name: "Document Dork",
    desc: "PDF / doc / xls indexes for a term.",
    template: "https://www.google.com/search?q=filetype%3Apdf+OR+filetype%3Adoc+OR+filetype%3Axls+{q}",
  },
  {
    id: "google-github",
    category: "search",
    name: "GitHub Dork",
    desc: "Code search across GitHub.",
    template: "https://github.com/search?q={q}&type=code",
  },
  {
    id: "ddg",
    category: "search",
    name: "DuckDuckGo",
    desc: "Plain DDG query.",
    template: "https://duckduckgo.com/?q={q}",
  },

  // --- image ---
  {
    id: "yandex-img",
    category: "image",
    name: "Yandex Image",
    desc: "Reverse image via Yandex (upload).",
    template: "https://yandex.com/images/",
    hint: "Yandex requires upload — open, then drag or paste the image.",
  },
  {
    id: "tineye",
    category: "image",
    name: "TinEye",
    desc: "Reverse image search.",
    template: "https://tineye.com/",
    hint: "Upload-only — open and use the upload button.",
  },
  {
    id: "google-lens",
    category: "image",
    name: "Google Lens",
    desc: "Reverse image via Lens.",
    template: "https://lens.google.com/",
  },

  // --- network ---
  {
    id: "shodan",
    category: "network",
    name: "Shodan",
    desc: "Exposed hosts by IP or query.",
    template: "https://www.shodan.io/search?query={q}",
  },
  {
    id: "censys",
    category: "network",
    name: "Censys",
    desc: "Host + cert search.",
    template: "https://search.censys.io/search?resource=hosts&q={q}",
  },
  {
    id: "ipinfo",
    category: "network",
    name: "IPinfo",
    desc: "IP → ASN / geo / org.",
    template: "https://ipinfo.io/{q}",
  },
  {
    id: "bgpview",
    category: "network",
    name: "BGPView",
    desc: "IP → BGP route history.",
    template: "https://bgpview.io/ip/{q}",
  },

  // --- code ---
  {
    id: "grepapp",
    category: "code",
    name: "grep.app",
    desc: "Code search across public repos.",
    template: "https://grep.app/search?q={q}",
  },
  {
    id: "sourcegraph",
    category: "code",
    name: "Sourcegraph",
    desc: "Code search, many repos.",
    template: "https://sourcegraph.com/search?q={q}",
  },
];