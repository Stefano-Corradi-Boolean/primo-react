const faqs = [
  { id: 1, title: "What is React?", description: "React is a JavaScript library for building user interfaces." },
  { id: 2, title: "What is JSX?", description: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." },
  { id: 3, title: "What are components?", description: "Components are the building blocks of a React application's UI." },
  { id: 4, title: "What is state?", description: "State is an object that determines how a component renders and behaves." },
  { id: 5, title: "What are props?", description: "Props are inputs to a React component that allow data to be passed from one component to another." },
  { id: 6, title: "What is a hook?", description: "Hooks are functions that let you use state and other React features in functional components." },
  { id: 7, title: "What is useState?", description: "useState is a hook that lets you add state to functional components." },
  { id: 8, title: "What is useEffect?", description: "useEffect is a hook that lets you perform side effects in functional components." },
  { id: 9, title: "What is a virtual DOM?", description: "The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates." },
  { id: 10, title: "What is React Router?", description: "React Router is a library for routing in React applications." }
];

import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div className="container my-5">
      <div className="accordion-list">

        {faqs.map(faq => (
          <AccordionItem key={faq.id} data={faq} />
        ))}


      </div>
    </div>
  )
}

export default Accordion
