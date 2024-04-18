import React from 'react'
import './Section7.css'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Section7 = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div className="sec7">
      <div className="sec7header">Frequently Asked Questions</div>
      <div className="sec7Accordion">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: '#1a60f6', fontSize: 45 }} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: '100%',
                height: 50,
                flexShrink: 0,

                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
              }}
            >
              Q. What is Terazo? How does it work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We wish to make private market investing inclusive and
              frictionless for everyone through a regulated and transparent
              platform. Our dream is to create equal opportunities for
              investment and a faster, safer and simpler way to trade.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: '#1a60f6', fontSize: 45 }} />
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                width: '100%',
                height: 50,
                flexShrink: 0,

                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
              }}
            >
              {' '}
              Q. What is tokenization?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontWeight: 'bold' }}></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: '#1a60f6', fontSize: 45 }} />
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{
                width: '100%',
                height: 50,
                flexShrink: 0,

                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
              }}
            >
              Q. Is Terazo safe? How are my investments protected?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontWeight: 'bold' }}></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: '#1a60f6', fontSize: 45 }} />
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: '100%',
                height: 50,
                flexShrink: 0,

                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
              }}
            >
              Q. Where do I see my investments?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontWeight: 'bold' }}></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: '#1a60f6', fontSize: 45 }} />
            }
            aria-controls="panel5bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: '100%',
                height: 50,
                flexShrink: 0,

                display: 'flex',
                alignItems: 'center',
                fontSize: 20,
              }}
            >
              Q. Do I need to pay for the invite?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontWeight: 'bold' }}></Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
