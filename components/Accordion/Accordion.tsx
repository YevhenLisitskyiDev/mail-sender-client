import { FC, useState } from "react";
import { BasicAccordionProps } from "./types";
import {
  AccordionSummary,
  AccordionDetails,
  Accordion as MUIAccordion,
} from "@mui/material";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion: FC<BasicAccordionProps> = ({
  accordionsData,
  isSimple = false,
}) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const acccordionProps = isSimple
    ? () => {}
    : (index: number) => {
        return {
          expanded: expanded === index,
          onChange: handleChange(index),
        };
      };

  return (
    <>
      {accordionsData.map((accordion, index) => (
        <MUIAccordion
          key={accordion.title}
          {...acccordionProps(index)}
          TransitionProps={{ unmountOnExit: true }}
          sx={{
            bgcolor: "balck",
          }}>
          <AccordionSummary
            aria-controls={`${accordion.title}-content`}
            expandIcon={<ExpandMoreIcon color="primary" />}
            id={`${accordion.title}-header`}
            sx={{
              color: "#ECB365",
              bgcolor: "#000",
              borderBottom: "1px solid #fff",
            }}>
            <Typography color={expanded === index ? "primary" : "inherit"}>
              {accordion.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            >
            {accordion.content}
          </AccordionDetails>
        </MUIAccordion>
      ))}
    </>
  );
};

export default Accordion;
