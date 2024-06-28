export default (() => {
  function YourComponent() {
    return <p class="gray-text">Example Component</p>
  }
 
  YourComponent.css = `
  p.red-text {
    color: red;
  }
  `
 
  return YourComponent
}) satisfies QuartzComponentConstructor