function customRender(reactElement, container) {

    /* // Version 1.0
      const domElement = document.createElement(reactElement.type);
      domElement.innerHTML = reactElement.children;
      domElement.setAttribute('href', reactElement.props.href);
      domElement.setAttribute('target', reactElement.props.target);
  
      container.appendChild(domElement)
    */

      // Version 2.0
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://react.dev",
        target: "_blank",
    },
    children: "Click me to visit React",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
