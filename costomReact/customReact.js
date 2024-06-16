const addInCon = (reactElement, container) => {
    const item = document.createElement(reactElement.type);

    // Check if children is a string before setting innerHTML
    if (typeof reactElement.children === 'string') {
        item.innerHTML = reactElement.children;
    }

    // Check if props exist and set attributes if they do
    if (reactElement.props) {
        if (reactElement.props.href) {
            item.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            item.setAttribute('target', reactElement.props.target);
        }
    }

    container.appendChild(item);
};

const reactElement =  {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to reach google'
};

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('#root');
    if (mainContainer) {
        addInCon(reactElement, mainContainer);
    } else {
        console.error('No element found with ID "root"');
    }
});
