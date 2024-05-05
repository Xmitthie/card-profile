function random() {
  const vans = ["Aisk", "🍭", "🍡", "Snokmode", "Vans", "H$"];
  document.getElementById("randy").innerHTML =
    vans[Math.floor(Math.random() * vans.length)];
}

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('welcomeMessage').addEventListener("click", () => {
    document.body.style.background =
      "url(./utils/images/crobg.gif) no-repeat center";
    document.body.style.backgroundSize = "cover";
    document.body.style.boxShadow = 'inset 0 0 0 1000px #23272A'
    document.getElementById("music").play();
    setTimeout(() => {
      document.getElementById('content').style.display = "flex";
      document.getElementById('welcomeMessage').style.display = "none";
    }, 500);

    async function changeTitle() {
      const vans = ["V", "a", "n", "s"];
      document.title = "";
      for (let i = 0; i < vans.length; i++) {
        document.title += vans[i];
        await new Promise(async (resolve) => setTimeout(resolve, 1500));
      }
    }
    changeTitle();
  });
});
