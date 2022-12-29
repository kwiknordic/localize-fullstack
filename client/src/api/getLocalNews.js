async function getLocalNews(from, to) {
  /*   const disableCors = "https://cors-anywhere.herokuapp.com" */
    const rssURL = "https://www.mitti.se/rss-6.8.0.0.e70d15cb3c"
    const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssURL)}`
  
    const response = await fetch(proxy)
    const text = await response.text()
    const data = new window.DOMParser().parseFromString(text, "text/xml")
    const items = [...data.querySelectorAll("item")].slice(from, to)

    return items.map(item => {
      return [...item.children].reduce((children, child) => {
        const combined = { ...children, [child.tagName]: child.textContent }

        // change prop to Attributes for media-tagName
        if (child.tagName.includes("media")) {
          combined[child.tagName] = child.attributes.url.textContent
        }

        return combined
      }, {})
    })
  }

  export {
    getLocalNews
  }