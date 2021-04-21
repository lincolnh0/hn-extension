window.onload = function () {  

    // Select the node that will be observed for mutations
  const targetNode = document.getElementById('__next');

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
      const links = document.querySelectorAll('a')
      links.forEach((link) => {
        if (link.href.indexOf("news.ycombinator.com") !== -1) {
          link.href = link.href.replace("https://news.ycombinator.com/item?", "https://hn.lincolnh0.com/story?")
          link.innerText = link.innerText.replace("https://news.ycombinator.com/item?", "https://hn.lincolnh0.com/story?")
        }
      })
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}