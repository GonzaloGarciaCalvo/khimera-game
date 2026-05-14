import { useState } from 'react';
import { ArrowUp } from '../assets/arrow-up';
import { ArrowDown } from '../assets/arrow-down';
export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    console.log("toggleAccordion")
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isOpen ? <ArrowDown style={{width: '24px', height: '24px'}}/> : <ArrowUp style={{width: '24px', height: '24px'}}/> }
        </span>
      </div>
      <div className={isOpen ? 'accordion-content open' : 'accordion-content close'}>
        {children}
      </div>
    </div>
  );
};