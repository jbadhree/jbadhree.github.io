const lightTheme = "noborder_light"
const darkTheme = "noborder_dark"

// function sendMessage<T>(message: T) {
//   const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
//   if (!iframe) return;
//   if (iframe.contentWindow === null) return;
//   iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
// }

// const onThemeToggle = ()=>{
//   const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
//   changeTheme(toggleSwitch.checked)
// }

// function changeTerm(url: any) {
//   sendMessage({ setConfig: { term: url } })
// }

// function changeTheme(dark: boolean) {
//   sendMessage({ setConfig: { theme: dark? darkTheme : lightTheme } })
// }

// function notMainPage(detail: { url: string; }) {
//   return detail.url !== "index"
// }

export default function loadComments() {
  const darkMode = (document.querySelector("#darkmode-toggle") as HTMLInputElement).checked
  const script = document.createElement("script");

  script.type = "text/javascript"
  script.src = "https://giscus.app/client.js"
  script.async = true
  script.setAttribute("data-repo", "jbadhree/jbadhree.github.io")
  script.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkyMjgyMzkyNTc=")
  script.setAttribute("data-category", "Announcements")
  script.setAttribute("data-category-id", "DIC_kwDODZqnmc4CjJWt")
  script.setAttribute("data-mapping", "pathname")
  script.setAttribute("data-strict", "0")
  script.setAttribute("data-reactions-enabled", "1")
  script.setAttribute("data-emit-metadata", "0")
  script.setAttribute("data-input-position", "top")
  script.setAttribute("data-theme", darkMode ? darkTheme : lightTheme)
  script.setAttribute("data-lang", "en")
  script.setAttribute("crossorigin", "anonymous")
  script.setAttribute("data-loading", "lazy")

  document.body.appendChild(script);
}