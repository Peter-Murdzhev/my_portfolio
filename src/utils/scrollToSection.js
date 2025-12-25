export const handleScroll = (id) => {
    const content = document.getElementById(id);
    if (!content) {
        return;
    }

    content.scrollIntoView({ behavior: "smooth" })
}