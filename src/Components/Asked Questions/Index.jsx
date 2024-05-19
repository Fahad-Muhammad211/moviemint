import React from 'react';
import './AskedQuestion.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function AskedQuestions() {
  const accordionStyle = {
    backgroundColor: 'rgb(176, 211, 87)',
  };

  return (
    <section className='bg-clr'>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h1 className='my-4 proHouse-h1 text-white'>
              Production <span className='proHouse-text'>House</span>
            </h1>
            <img src="./Images/Qa.png" alt="QA" />
          </div>
          <div className="col-sm-6">
            <div className='accordian-mrg'>
              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={accordionStyle}
                >
                  <Typography>Will movies be preLaunched in the market</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={accordionStyle}
                >
                  <Typography>Will movies be preLaunched in the market</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskedQuestions;
