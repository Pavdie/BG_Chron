export default (() => {
  function YourComponent() {
    return <p class="gray-text">Example Component</p>
  }
 
  YourComponent.css = `
  p.gray-text {
    color: gray;
  }
  `
 
  return YourComponent
}) satisfies QuartzComponentConstructor