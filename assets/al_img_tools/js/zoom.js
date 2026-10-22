document.addEventListener("DOMContentLoaded", () => {
  if (typeof mediumZoom !== "function") {
    return;
  }
  const zoom = mediumZoom("[data-zoomable]", {
    margin: 24,
    // Append alpha to theme background color to keep content visible under zoom.
    background: `${getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")}ee`,
  });

  zoom.on("open", () => {
    const height = document.documentElement.clientHeight;
    const navbar = document.querySelector("#navbar.fixed-top");
    const footer = document.querySelector("footer.fixed-bottom");

    zoom.update({
      container: {
        top: Math.max(0, navbar?.getBoundingClientRect().bottom ?? 0),
        bottom: footer ? Math.max(0, height - footer.getBoundingClientRect().top) : 0,
      },
    });
  });
});
