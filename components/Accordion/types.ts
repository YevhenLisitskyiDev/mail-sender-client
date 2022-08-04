export interface BasicAccordionProps {
  accordionsData: AccordionData[];
  isSimple?: boolean;
}

interface AccordionData {
  title: string;
  content: JSX.Element;
}
