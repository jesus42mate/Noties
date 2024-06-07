
export const navigateToElement = (id: string) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      console.log(element)
      element.scrollIntoView({ behavior: "smooth"});
    } else {
      console.log(1)
    }
  }, 100);
}


